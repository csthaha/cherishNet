const app = getApp();

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    value: [9999, 1, 1],
    userId: '',
    gender: '',
    province: '',
    city: '',
    area: ''
  },
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    })
  },
  next() {
    let self = this
    wx.showLoading({
      title: '加载中',
    })
    // wx.cloud.callFunction({
    //   name: 'birth',
    //   data: {
    //     year: self.data.year,
    //     month: self.data.month,
    //     day: self.data.day
    //   },
    //   success(res) {
    //     console.log(res)

    //   },
    //   fail(err) {
    //     console.log(err)
    //   }
    // })
    setTimeout(function() {
      wx.navigateTo({
        url: '/pages/stature/stature?userId=' + self.data.userId + "&gender=" + self.data.gender + "&province=" + self.data.province + "&city=" + self.data.city + "&area=" + self.data.area + "&year=" + self.data.year + "&month=" + self.data.month + "&day=" + self.data.day,
      })
      wx.hideLoading();
    }, 1500)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      userId: options.userId,
      gender: options.gender,
      province: options.province,
      city: options.city,
      area: options.area
    })
    console.log('数据都传到了birth页面', this.data.userId, this.data.province)
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