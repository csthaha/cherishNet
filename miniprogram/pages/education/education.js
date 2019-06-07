// miniprogram/pages/education/education.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
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
  choose: function(e) {
    const self = this
    console.log(e.currentTarget.dataset.edu)
    const id = e.currentTarget.dataset.id
    const edu = e.currentTarget.dataset.edu
    this.setData({
      id,
      edu
    })
    // wx.cloud.callFunction({
    //   name: 'education',
    //   data: {
    //     edu: self.data.edu
    //   },
    //   success(res) {
    //     console.log(res)

    //   },
    //   fail(err) {
    //     console.log(err)
    //   }
    // })
    wx.navigateTo({
      url: '/pages/marry/marry?userId=' + self.data.userId + "&gender=" + self.data.gender + "&province=" + self.data.province + "&city=" + self.data.city + "&area=" + self.data.area + "&year=" + self.data.year + "&month=" + self.data.month + "&day=" + self.data.day + "&status=" + self.data.status + "&edu=" + self.data.edu,
    })
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
      area: options.area,
      year: options.year,
      month: options.month,
      day: options.day,
      status: options.status
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