// miniprogram/pages/complete/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 1,
    gender: '',
    userId: ''
  },
  show(e) {
    console.log(e.currentTarget.dataset.id);
    this.setData({
      id: e.currentTarget.dataset.id,
      gender: e.currentTarget.dataset.gender
    })
    console.log(this.data.gender)
  },
  next(e) {
    let self = this

    console.log(e)

    setTimeout(function() {
      wx.navigateTo({
        url: '/pages/where/where?userId=' + self.data.userId + "&gender=" + self.data.gender,
      })
      wx.hideLoading()
    }, 1000)
    console.log(self.data.gender)
    wx.showLoading({
      title: '加载中',
    })
  },
  login() {
    wx.navigateTo({
      url: '/pages/login/login',
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