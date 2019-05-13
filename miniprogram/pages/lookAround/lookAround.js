// miniprogram/pages/lookAround/lookAround.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person: []
  },
  show() {
    console.log('跳转到complete页面');
    wx.showToast({
      title: '您还未登录',
      icon: 'loading',
      duration: 1000,
      mask: false
    })
    setTimeout(() => {
      wx.navigateTo({
        url: '../complete/complete',
      })
    },1000)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let self = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ca457efc4e9a575b66b625c/example/cherishNet',
      success(res) {
        console.log(res.data.data.person[0].url);
        self.setData({
          person: res.data.data.person
        })
      }
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