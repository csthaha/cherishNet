// 云函数入口文件
const cloud = require('wx-server-sdk')

const env = 'csthaha-666'
cloud.init()
const db = cloud.database({
  env
})

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    return await db.collection('message').where({
        _id: event.userId
      })
      .update({
        data: {
          province: event.province,
          city: event.city,
          county: event.area,
          money: event.money
        },
      })
  } catch (e) {
    console.log(e)
  }

}