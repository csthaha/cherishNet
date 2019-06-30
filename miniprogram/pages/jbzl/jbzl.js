// miniprogram/pages/jbzl/jbzl.js
import mz from '../../lib/mz.js';
import tz from '../../lib/tz.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    show: 'true',
    marry: '请选择',
    nationality: '请选择',
    xz: '请选择',
    drink: '请选择',
    cigerate: '请选择',
    tx: '请选择',
    weight: '请选择',
    tz: '请选择',
    columns: '',
    columns1: ['请选择', '认同闪婚', '一年内', '两年内', '三年内', '时机成熟就结婚'],
    columns2: '',
    columns3: ['请选择', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)', '牧羊座(03.21-04.20)'],
    columns4: ['请选择', '不喝酒', '稍微喝一点酒', '酒喝的很多', '社交场合会和'],
    columns5: ['请选择', '不吸烟', '稍微抽一点', '烟抽的很多', '社交场合会抽烟'],
    columns6: ['请选择', '保密', '一般', '瘦长', '苗条', '高大美丽', '丰满', '富线条美'],
    columns7: '请选择'
  },


  onCancel() {
    this.setData({
      show: 'true',
      showMz: 'false'
    })
  },
  choose(e) {

    console.log(e.currentTarget.dataset.id)
    this.setData({
      show: '',
      id: e.currentTarget.dataset.id
    })
    if (this.data.id == 1) {
      this.setData({
        columns: this.data.columns1
      })
    }
    if (this.data.id == 2) {
      this.setData({
        columns: this.data.columns2
      })
    }
    if (this.data.id == 3) {
      this.setData({
        columns: this.data.columns3
      })
    }
    if (this.data.id == 4) {
      this.setData({
        columns: this.data.columns4
      })
    }
    if (this.data.id == 5) {
      this.setData({
        columns: this.data.columns5
      })
    }
    if (this.data.id == 6) {
      this.setData({
        columns: this.data.columns6
      })
    }
    if (this.data.id == 7) {
      this.setData({
        columns: this.data.columns7
      })
    }
    console.log(e)
  },
  onConfirm(event) {
    const self = this

    console.log(event.detail.value)
    if (self.data.id == 1) {
      self.setData({
        marry: event.detail.value,
        show: 'true'
      })
    }
    if (self.data.id == 2) {
      self.setData({
        nationality: event.detail.value,
        show: 'true'
      })
    }
    if (self.data.id == 3) {
      self.setData({
        xz: event.detail.value,
        show: 'true'
      })
    }
    if (self.data.id == 4) {
      self.setData({
        drink: event.detail.value,
        show: 'true'
      })
    }
    if (self.data.id == 5) {
      self.setData({
        cigerate: event.detail.value,
        show: 'true'
      })
    }
    if (self.data.id == 6) {
      self.setData({
        tx: event.detail.value,
        show: 'true'
      })
    }
    if (self.data.id == 7) {
      self.setData({
        tz: event.detail.value,
        show: 'true'
      })
    }


  },
  save() {
    // console.log('已保存')
    wx.showToast({
      title: '已保存',
      icon: 'success'
    })
    setTimeout(() => {
      wx.switchTab({
        url: '../me/me',
      })
    },2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(mz)
    this.setData({
      columns2: mz,
      columns7: tz
    })
    console.log(this.data.columns2)
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