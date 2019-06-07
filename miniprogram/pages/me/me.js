// miniprogram/pages/me/me.js
Page({

  /**
   * 页面的初始数据 
   */
  data: {
    userInfo: {
      avatarUrl: '/images/1.png',
      nickName: 'hh',
      ID: '1107',
    },
    img:'/images/VIP.png',
    jbzl: '21岁 大学本科',
    n: 0
  },
  buy() {
    wx.navigateTo({
      url: '/pages/buyVip/buyVip',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    
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
    const self = this
    const db = wx.cloud.database();
    const cont = db.collection('img')
    cont.get({
      success(res) {
        console.log(res.data)
        console.log(res.data[res.data.length - 1].img)
        self.setData({
          n:res.data.length,
          img: res.data[res.data.length - 1].imgURL
        })
        console.log(self.data.img)
      }
    })
    db.collection('message').get({
      success(res){
        console.log(res)
      }
    })
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