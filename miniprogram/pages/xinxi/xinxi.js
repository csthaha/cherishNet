
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nickName: '',
    avatarUrl: '',
    user: [],
    value: '',
    msg: []
  },
  bindChange(e) {
    // console.log(e.detail.value)
    this.setData({
      value: e.detail.value
    })

  },
  send() {
    const self = this
    const db = wx.cloud.database()
    db.collection('news').add({
      data: {
        message: self.data.value,
        time: new Date()
      }
    })
    db.collection('news').get({
      success(res) {
        console.log(res)
        self.setData({
          msg: res.data
        })
        console.log(self.data.msg[0])
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              self.setData({
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl

              })
              self.data.user.push(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo.avatarUrl)
    console.log(this.data.nickName)
    console.log(this.data.user)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
