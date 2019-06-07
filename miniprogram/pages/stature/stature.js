// miniprogram/pages/stature/stature.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    grids_150: ['149以下', 150, 151, 152, 153, 154, 155, 156, 157, 158, 159],
    grids_160: [160, 161, 162, 163, 164, 165, 166, 167, 168, 169],
    grids_170: [170, 171, 172, 173, 174, 175, 176, 177, 178, 179],
    grids_180: [180, 181, 182, 183, 184, 185, 186, 187, 188, 189],
    grids_190: [190, 191, 192, 193, 194, 195, 196, 197, 198, 199],
    grids_200: [200, 201, 202, 203, 204, 206, 206, 207, 208, 209, '210以上'],
    userId: '',
    status: '',
    gender: '',
    province: '',
    city: '',
    area: '',
    year: '',
    month: '',
    day: ''
  },
  select(e) {
    // console.log('选择升高')
    // console.log(e.target.dataset.status)
    let self = this
    self.setData({
      status: e.target.dataset.status
    })
    console.log(self.data.status)
    // wx.cloud.callFunction({
    //   name: 'status',
    //   data: {
    //     status: self.data.status
    //   },
    //   success(res) {
    //     console.log(res)

    //   },
    //   fail(err) {
    //     console.log(err)
    //   }
    // })
    wx.navigateTo({
      url: '/pages/education/education?userId=' + self.data.userId + "&gender=" + self.data.gender + "&province=" + self.data.province + "&city=" + self.data.city + "&area=" + self.data.area + "&year=" + self.data.year + "&month=" + self.data.month + "&day=" + self.data.day +"&status=" + self.data.status,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      userId: options.userId,
      gender: options.gender,
      province: options.province,
      city: options.city,
      area: options.area,
      year: options.year,
      month: options.month,
      day: options.day
    })
    console.log('数据都传到了stature页面', this.data.userId, this.data.day)
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