// 二维码schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QRcodeSchema = new Schema({
  _allreadyUsed: {
    type: Boolean,
    default: false
  },
  //  用户id
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  //  登录状态
  scanned: {
    type: Boolean,
    default: false
  },
  status: {
    type: Number,
    default: 0  /*0 未确定 1 确定授权 -1 取消授权 */
  },
  // 跳转的url
  url: String,
  // 用户信息
  useinfo: {
    type: Object,
    default: {
      
    }
  },
  // 创建时间
  createdAt: {
    type: Date,
    default: Date.now
  },
  // 销毁时间
  expireAt: {
    type: Date
  }
})

module.exports = mongoose.model('QRcode', QRcodeSchema);