//定义一个接口
const express = require('express');
const router = express.Router();
const app = express();

router.get('/say', (req, res) => {
  let data = {
    name: 'lin',
    password: '111'
  };
  let {wd , callback} = req.query;
  console.log(wd);
  console.log(callback);
  // 调用回调函数 , 并响应
  res.end(`${callback}(${JSON.stringify(data)})`);
})

app.use(router);
app.listen(3000, () => {
  console.log('app已经上线')
});