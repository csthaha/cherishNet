// miniprogram/pages/where/where.js
// const date = new Date()
const provinces = ['北京', '上海', '广东', '天津', '重庆', '安徽', '福建', '甘肃', '广西', '贵州', '海南', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁', '内蒙古', '宁夏', '青海', '山东', '山西', '陕西', '四川', '西藏', '新疆', '云南', '浙江']



console.log(provinces[0])
var citys = ['朝阳区', '海定区', '丰台区','昌平区','通州区','大兴区','西城区','房山区','顺义区','东城区','石景山区','怀柔区','门头沟区','密云区','延庆区','平台区']
// const citys = ['朝阳区']
const countys = ['灰埠镇']
const where = [

]

// for (let i = 1990; i <= date.getFullYear(); i++) {
//   years.push(i)
// }

// for (let i = 1; i <= 12; i++) {
//   months.push(i)
// }

// for (let i = 1; i <= 31; i++) {
//   days.push(i)
// }
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // years,
    // year: date.getFullYear(),
    // months,
    // month: 2,
    // days,
    // day: 2,
    // value: [9999, 1, 1],
    provinces,
    province: '北京',
    citys,
    city: '朝阳区',
    countys,
    county: '灰埠镇'

  },

  bindChange(e) {
    let self = this
    const val = e.detail.value
    console.log(val[0])
    if (this.data.province == '北京'){
      this.setData({citys})
    }
    else if (this.data.province == '上海') {
      this.setData({
        citys:['中国', '很好']
      })
      
    }
    else if (this.data.province == '天津'){
      citys = ['hh', 'dm']
    }
    this.setData({
      // year: this.data.years[val[0]],
      // month: this.data.months[val[1]],
      // day: this.data.days[val[2]]
      province: this.data.provinces[val[0]],
      citys:citys,
      city: this.data.citys[val[1]],
      county: this.data.countys[val[2]]

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})