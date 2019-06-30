// input.js
Page({
  data: {
    focus: true,
    value: '',
    number: 0,
    length: 1500,
    dubai: [],
    img:'dianzan.png',
    ID:'',
    disabled: false
  },
  
  inputValue(e) {
    const self = this
    console.log(e.detail.value.length)
    this.setData({
      value: e.detail.value,
      number: e.detail.value.length
    })

    if (e.detail.value.length > 1500) {
      wx.showModal({
        title: '字数',
        content: '字数不能超过1500字哦',
      })
      self.setData({
        disabled: true
      })
    }

  },
  save() {
    const self = this
    const db = wx.cloud.database();
    db.collection('dubai').add({
      data: {
        dubai: this.data.value,
        time: new Date()
      },
      success() {
        wx.showToast({
          title: '保存成功',
        })
      },
      faile() {
        wx.showToast({
          title: '保存失败',
        })
      }
    })
    this.setData({
      disabled: false
    })
    
  },
  
  onShow:function(){ 
    const self = this
    const db = wx.cloud.database()
    db.collection('dubai').get({
      success(res){
        console.log(res.data)
        self.setData({
          dubai:res.data.reverse()
        })
      }
    })
    
  },
  good(e){
    const self = this
    // console.log(e)
    // console.log(e.currentTarget.dataset.id)
    this.setData({
      ID: e.currentTarget.dataset.id
    })
    // console.log(this.data.ID)
    console.log(e.target.dataset.id)
    if (this.data.ID == e.currentTarget.dataset.id){
      console.log('---')
      self.setData({
        img:'dianzan1.png'
      })
    }
  },
  
})