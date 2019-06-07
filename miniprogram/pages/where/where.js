const app = getApp();

var address = require('../../lib/city.js');

Page({
  /**
   * 页面的初始数据
   * provinces:所有省份 
   * citys选择省对应的所有市,
   * areas选择市对应的所有区
   * provinces：当前被选中的省
   * city当前被选中的市
   * areas当前被选中的区
   */
  data: {
    animationAddressMenu: {},
    addressMenuIsShow: false,
    value: [0, 0, 0],
    provinces: [],
    citys: [],
    areas: [],
    province: '',
    city: '',
    area: '',
    userId: '',
    gender:'',
    ms:[]
  },

  next(e) {
    // console.log(e)
    let self = this
    wx.showLoading({
      title: '加载中',
    })
    

    const db = wx.cloud.database()
    


    // wx.cloud.callFunction({
    //   name: 'where',

    //   data: {
    //     province: self.data.province,
    //     city: self.data.city,
    //     area: self.data.area
    //   },
    //   success(res) {
    //     console.log(res)

    //   },
    //   fail(err) {
    //     console.log(err)
    //   }
    // })

    setTimeout(function () {
      wx.navigateTo({
        url: '/pages/birth/birth?userId=' + self.data.userId + "&gender=" + self.data.gender + "&province=" + self.data.province + "&city=" + self.data.city + "&area=" + self.data.area,
      })
      wx.hideLoading();
    }, 1500)
    console.log(self.data.province)
    console.log(self.data.userId,'+++++++')
  },

  onLoad: function (options) {
    console.log(options)
    this.setData({
      userId: options.userId,
      gender: options.gender
    })
    console.log(this.data.userId,'--------')
    console.log(this.data.gender,'~~~~~~~~')
    // 初始化动画变量
    var animation = wx.createAnimation({
      duration: 500,
      transformOrigin: "50% 50%",
      timingFunction: 'ease',
    })
    this.animation = animation;
    // 默认联动显示浙江省
    var id = address.provinces[10].id
    this.setData({
      provinces: address.provinces,
      citys: address.citys[id],
      areas: address.areas[address.citys[id][0].id],
    })
    // 巨坑 10表示选中浙江省
    this.setData({
      value: [10, 0, 0]
    })
  },

  // 点击所在地区弹出选择框
  selectDistrict: function (e) {
    var that = this
    if (that.data.addressMenuIsShow) {
      return
    }
    that.startAddressAnimation(true)
  },

  // 执行动画
  startAddressAnimation: function (isShow) {
    var that = this
    if (isShow) {
      that.animation.translateY(0 + 'vh').step()
    } else {
      that.animation.translateY(40 + 'vh').step()
    }
    console.log(that.animation.export())
    that.setData({
      animationAddressMenu: that.animation.export(),
      addressMenuIsShow: isShow,
    })
  },

  // 点击地区选择取消按钮
  cityCancel: function (e) {
    this.startAddressAnimation(false)
  },

  // 点击地区选择确定按钮
  citySure: function (e) {
    var that = this
    var city = that.data.city
    var value = that.data.value
    that.startAddressAnimation(false)
    // 将选择的城市信息显示到输入框
    var areaInfo = that.data.provinces[value[0]].name + ',' + that.data.citys[value[1]].name + ',' + that.data.areas[value[2]].name
    var province = that.data.provinces[value[0]].name;
    var city = that.data.citys[value[1]].name;
    var area = that.data.areas[value[2]].name;
    that.setData({
      areaInfo: areaInfo,
      province: province,
      city: city,
      area: area
    })
  },

  // 处理省市县联动逻辑
  cityChange: function (e) {
    console.log(e)
    var value = e.detail.value
    var provinces = this.data.provinces
    var citys = this.data.citys
    var areas = this.data.areas
    var provinceNum = value[0]
    var cityNum = value[1]
    var countyNum = value[2]
    if (this.data.value[0] != provinceNum) {
      var id = provinces[provinceNum].id
      this.setData({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id],
      })
    } else if (this.data.value[1] != cityNum) {
      var id = citys[cityNum].id
      this.setData({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id],
      })
    } else {
      this.setData({
        value: [provinceNum, cityNum, countyNum]
      })
    }
    console.log(this.data)
  },

})