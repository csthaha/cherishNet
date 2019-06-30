  // miniprogram/pages/login/login.js
  Page({

    /** 
     * 页面的初始数据
     */
    data: {
      text: '获取验证码',
      currentTime: 61, //倒计时
      phoneList: [],
      phone: '',
      identify: '',
      disabled: false, //按钮是否禁用
      code: '请输入验证码'
    },
    getPhoneValue(e) {
      console.log(e.detail.value)
      this.setData({
        phone: e.detail.value
      })
    },

    getIdentifyCode() {
      const self = this
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
          title: '验证码已生成！',
          icon: 'none',
          duration: 1000
        })
        setTimeout(() => {
          self.setData({
            code: self.randCode(1000, 9999),
            disabled: true
          })
        }, 1500)

      }
    },
    randCode(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    isPhone(arr, val) {
      var test = ',' + arr.join(',') + ","
      return test.indexOf(',' + val + ',') != -1;
    },
    loginIn() {
      const self = this
      if (self.isPhone(self.data.phoneList, self.data.phone)) {
        wx.showToast({
          title: '登录成功',
        })
        wx.switchTab({
          url: '../tuijian/tuijian',
        })
      } else {
        wx.showModal({
          title: '登录失败',
          content: '该账号未注册，请注册账号',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '/pages/loginUp/loginUp',
              })
            }
          }
        })
      }
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
      const self = this
      const db = wx.cloud.database()
      db.collection('message').get({
        success(res) {
          console.log(res)
          for (let i = 0; i < res.data.length; i++) {
            self.data.phoneList.push(res.data[i].phone)
          }
          console.log(self.data.phoneList)
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