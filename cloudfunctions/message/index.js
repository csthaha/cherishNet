// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'csthaha-666'
cloud.init()
const db = cloud.database({
  env
})
// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('message').add({
    data: {
      sex: event.gender,
      createTime: new Date()
    }
  })
}