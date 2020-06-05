const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { QRCodeModel, UserModel } = require('./models');
const QRCodeNode = require('qrcode');
const moment = require('moment');
const app = express();
const cors = require('cors')
const port = 8888;

// 跨域中间件
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
//  验证传过来的token值
function decryptToken(token, secret) {
  try {
    let res = jwt.verify(token, secret);
    return res;
  } catch(e) {
    return e
  }
}
//登入验证中间件
const authenticated = async (req, res, next) => {
  console.log('判断登陆');
  //传入之前生成的token (postmon传入)
  const authorationToken = req.headers['authorization'];
  // 验证token
  const decoded = decryptToken(authorationToken, 'duowu333');
  console.log(decoded)
  // 如果不是之前登入的用户token
  if(!decoded) {
    res.send({
      code: 403,
      message: '请先登入'
    })
    return
  }
  // 通过验证后
  console.log(decoded)
  req.logged = true;
  req.user = {
    userId: decoded.data.userId,
    username: decoded.data.username,
    avatar: decoded.data.avatar,
    token: authorationToken
  }
  await next();
}

//生成token   secret加密串
function generateToken(data, secret) {
  let iat = Math.floor(Date.now() / 1000);  //生成时间
  let exp = Math.floor(Date.now() / 1000) + 60*60*24*15;  //有效期
  // jwt原理：服务器认证后，生成一个JSON对象，发给用户,
  // 以后用户和服务端通信时，都会带着JSON对象来
  let token = jwt.sign(
    {
      data,
      iat,
      exp
    },
    secret
  )
  return token
}

// 二维码生成接口
app.get('/qrcode/gene', async (req, res) => {
  // qrcode_id
  const qrcode = new QRCodeModel({
    createdAt: Date.now(),
    expireAt: moment(Date.now()).add(120, 's').toDate()
  })
  console.log(qrcode);
  await qrcode.save();

  let qrcodeData = {
    qrcodeId: qrcode._id,
    createdAt: qrcode.createdAt,
    expireAt: qrcode.expireAt
  }
  // base64
  const qrcodeUrl = await QRCodeNode.toDataURL(JSON.stringify(qrcodeData))
  res.send({
    code: 200,
    message: '生成二维码成功',
    data: {
      qrcodeUrl, 
      qrcodeId: qrcode._id
    }
  })

})
// authenticated ? 是什么？
app.post('/qrcode/scanned', authenticated, async(req, res) => {
    console.log('扫码后该做的....');
    let { qrcodeId } = req.body;
    console.log(qrcodeId)
    const qrcode = await QRCodeModel.findOne({ _id: qrcodeId });
    if(!qrcode) {
      res.send({
        code: 2241,
        message: '二维码不存在',
        data: null
      })
      return;
    }

    await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, {
      scanned: true,
      userInfo: {
        username: req.user.username,
        avatar: req.user.avatar
      }
    })
    res.send({
      code: 200,
      message: '扫描成功'
    })
});
//  扫描成功后，确认授权
app.get('/qrcode/confirm', authenticated, async (req, res) => {
  const  { qrcodeId } = req.body
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId });
  if(!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
  }
  await QRCodeModel.findOneAndUpdate({ _id: qrcodeId }, {
    status: 1,
    userInfo: req.user
  })
  res.send({
    code: 200,
    message: '登录成功'
  })
})
//  扫描成功后，取消授权
app.get('/qrcode/cancel', async (req, res) => {

})

// 轮询检查
app.get('/qrcode/check', async (req, res) => {
  const { qrcodeId } = req.query;
  const qrcode = await QRCodeModel.findOne({ _id: qrcodeId });

  if (!qrcode) {
    res.send({
      code: 2241,
      message: '二维码不存在',
      data: null
    })
    return
  }

  res.send({
    code: 200,
    message: '查询二维码状态成功',
    data: {
      qrcodeId,
      scanned: qrcode.scanned,
      expired: moment() > moment(qrcode.expireAt),
      success: qrcode.status === 1,
      canceled: qrcode.status === -1,
      status: qrcode.status,
      userInfo: qrcode.userInfo
    }
  })
})

// 用户注册
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  //  判断用户是否在数据库中
  if((await UserModel.findOne({username, password}))) {
    res.send({
      code: 500,
      message: '用户已注册'
    })
    return
  }
  // 插入数据库
  const user = new UserModel({
    username,
    password,
    avatar: '￼https://usercontents.authing.cn/authing-avatar.png'
  })
  //  等待插入成功
  await user.save()
  res.send({
    code: 200,
    message: '注册成功'
  })
})
//  用户登入
//  cookie考的很多  ,cookie在多端登入是有缺点
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    username,
    password
  })
  //  查找是否有这个用户
  if(!user) {
    res.send({
      code: 403,
      message: '用户名或者密码不正确'
    })
    return;
  }
    // 登入后分配一个token 给用户的存放在localstorage
    // 以后用户登录就不需要在次输入密码了，只要带着token来，就可以判断
  const token = generateToken({userId: user.id, username, avatar: user.avatar}, "duowu333");
  //  登入成功
  res.send({
    code: 200,
    message: '登录成功',
    data: {
      _id: user._id,
      username,
      token
    }
  })
})

connect();
function listen() {
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen)
  return mongoose.connect('mongodb://localhost:27017/scan-qrcode', {
    keepAlive: 1, 
    useNewUrlParser: true
  })
}