// miniprogram/pages/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    money: '',
    marry: '',
    userId: '',
    edu: '',
    status: '',
    gender: '',
    province: '',
    city: '',
    area: '',
    year: '',
    month: '',
    day: ''
  },
  choose(e) {
    // console.log(this.data.gender)
    const self = this
    this.setData({
      id: e.currentTarget.dataset.id,
      money: e.currentTarget.dataset.money
    })
    console.log(self.data.money)
    wx.navigateTo({
      url: '/pages/loginUp/loginUp?userId=' + self.data.userId + "&gender=" + self.data.gender + "&province=" + self.data.province + "&city=" + self.data.city + "&area=" + self.data.area + "&year=" + self.data.year + "&month=" + self.data.month + "&day=" + self.data.day + "&status=" + self.data.status + "&edu=" + self.data.edu + "&marry=" + self.data.marry +"&money=" + self.data.money,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      gender: options.gender,
      province: options.province,
      city: options.city,
      area: options.area,
      year: options.year,
      month: options.month,
      day: options.day,
      status: options.status,
      edu: options.edu,
      marry: options.marry
    })
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