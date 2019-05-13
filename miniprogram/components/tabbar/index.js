// components/tabbar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    status: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goTuijian(e) {
      var status = e.currentTarget.dataset.status;
      if (status === this.data.status) {
        return;
      }
      this.setData({
        status
      })
      wx.navigateTo({
        url: '../lookAround/lookAround',

      })
      console.log(status)
    },
    goMessage(e) {
      console.log(e.currentTarget.dataset.status)
      var status = e.currentTarget.dataset.status;
      if (status === this.data.status) {
        return;
      }
      this.setData({
        status
      })
      wx.navigateTo({
        url: '../message/message',
      })
      console.log(status)
    },
    goMine(e) {
      var status = e.currentTarget.dataset.status;
      if (status === this.data.status) {
        return;
      }
      this.setData({
        status
      })
      wx.navigateTo({
        url: '../mine/mine',
      })
      console.log(status)
    }

  }
})