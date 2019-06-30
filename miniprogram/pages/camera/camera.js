// miniprogram/pages/camera/camera.js
Page({

  /** 
   * 页面的初始数据
   */
  data: {
    files: [],
  },

  chooseImage() {

    var self = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'], //所选图片的尺寸大小
      sourceType: ['album', 'camera'], //所选图片的来源
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        //将图片地址放到我们的数据files数组中
        self.setData({
          files: self.data.files.concat(tempFilePaths)
        })
        console.log(self.data.files)


        //将图片上传到云数据库 我们上传图片不能一样，所以已图片名称来命名
        for (let i = 0; i < res.tempFilePaths.length; i++) {
          const filePath = res.tempFilePaths[i];
          // 去图片的名称
          // let a = filePath.lastIndexOf('.') //获取到最后一个点的坐标
          // let b = filePath.lastIndexOf('.', filePath.length - 6);
          // let c = filePath.substring(b + 1, a)
          let d = Math.floor(Math.random() * 1000000).toString();
          console.log(d)
          const cloudPath = d + filePath.match(/\.[^.]+?$/);
          console.log(cloudPath)
          wx.cloud.uploadFile({
            cloudPath, //文件的名称
            filePath, // 文件路径(文件的地址 res.temFilePaths)
            success: res => {
              // get resource ID
              console.log('上传成功')
              console.log(res.fileID)
              const db = wx.cloud.database();
              db.collection('img').add({
                data: {
                  img: res.fileID,
                  imgURL: filePath
                },
                success() {
                  wx.showToast({
                    title: '存储成功',
                  })
                },
                fail() {
                  wx.showToast({
                    title: '存储失败',
                  })
                }
              })
            },
            fail: err => {
              // handle error
            }
          })
        }
        setTimeout(() => {
          wx.showToast({
            title: '上传成功',
            icon: 'success'
          })
          wx.showModal({
            title: '是否查看图片',
            content: '点击查看',
            success(res) {
              if (res.confirm) {
                console.log('用户点击了确定')
              } else if (res.cancel) {
                setTimeout(() => {
                  wx.navigateBack({
                    delta: 1
                  })
                }, 2000)
              }
            }
          })
          
        }, 3000)


      }

    })
  },
  previewImage(e) {
    var self = this
    console.log(e)
    wx.previewImage({
      current: e.currentTarget.dataset.id, // 当前显示图片的http链接
      urls: self.data.files // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  open() {
    wx.navigateTo({
      url: '/pages/buyVip/buyVip',
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