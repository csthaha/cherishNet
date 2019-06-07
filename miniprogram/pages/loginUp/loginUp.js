// miniprogram/pages/loginUp/loginUp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    code: '',
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
  getPhone(e) {
    console.log(e.detail.value)
    this.setData({
      phone: e.detail.value
    })
  },
  getCode(e) {
    console.log(e.detail.value)
    this.setData({
      code: e.detail.value
    })
  },
  loginUp() {
    const self = this
    wx.cloud.callFunction({
      name: 'message',
      data: {
        gender: self.data.gender,
        province: self.data.province,
        city: self.data.city,
        area: self.data.area,
        year: self.data.year,
        month: self.data.month,
        day: self.data.day,
        stature: self.data.status,
        education: self.data.edu,
        marry: self.data.marry,
        money: self.data.money,
        phone: self.data.phone,
        code: self.data.code
      },
      success(res) {
        console.log(res)

      },
      fail(err) {
        console.log(err)
      }
    })

    var myPhone = /^1[3-9][0-9]{9}$/;
    if (this.data.phone === '') {
      wx.showToast({
        title: '手机号不能为空！',
        icon: 'none',
        duration: 1000
      })
      return false
    } else if (!myPhone.test(this.data.phone)) {
      wx.showModal({
        title: '手机号非法',
        content: '请输入正确的手机号码！',
        showCancel: false
      })
    } else {
      wx.showToast({
        title: '注册成功！！！',
        icon: 'none',
        duration: 1000
      })
      setTimeout(() => {

        wx.navigateTo({
          url: '/pages/login/login',
        })
      }, 2000)
    }
    // wx.showLoading({
    //   title: '注册成功！！！',
    // })

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
      marry: options.marry,
      money: options.money
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