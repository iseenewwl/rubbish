Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: "",
    name: "",
    bm: true,
    classifyList: [{
      id: 1,
      name: '湿垃圾',
      img: '../../images/shi.png',
      imgUrl: '../../images/shi1.png',
      bg: "hui",
      text: "Wet garbage",
      middleText: "湿垃圾又称为厨余垃圾、有机垃圾，即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐的生物质生活废弃物",
      middleText1: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
      middleText2: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
      middleText3: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
    }, {
      id: 2,
      name: '干垃圾',
      img: '../../images/gan.png',
      imgUrl: '../../images/gan1.png',
      bg: "black",
      text: "Dry garbage",
      middleText: "干垃圾即其它垃圾，指除可回收物、有害垃圾、厨余垃圾（湿垃圾）以外的其它生活废弃物",
      middleText1: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
      middleText2: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
      middleText3: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
    }, {
      id: 3,
      name: '可回收物',
      img: '../../images/ke.png',
      imgUrl: '../../images/ke1.png',
      text: "Recyclable",
      bg: "blue",
      middleText: "可回收物(再生资源)是指，回收后经过再加工可以成为生产原料或者经过整理可以再利用的物品，主要包括废纸类、塑料类、玻璃类、金属类、电子废弃物类、织物类等",
      middleText1: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
      middleText2: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
      middleText3: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
    }, {
      id: 4,
      name: '有害垃圾',
      img: '../../images/hai.png',
      imgUrl: '../../images/hai1.png',
      text: "Harmful waste",
      bg: "red",
      middleText: "有害垃圾指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物",
      middleText2: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
      middleText3: " *流留质的食物垃圾，如牛奶等，应直接倒下水口",
    }]
  },
  getName: function(id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        this.setData({
          curType: arr[i]
        })
        return arr[i].name
      }
    }
  },
  setName: function(name, tag) {
    for (let i = 0; i < tag.length; i++) {
      if (tag[i].name == name) {
        this.setData({
          curType: tag[i]
        })
        return tag[i].name
      }
    }
  },
  cb: function(e) {
    this.setData({
      bm: !this.data.bm,
      name: e.currentTarget.dataset.id
    })

    // console.log(111111, this.name)

    // 传递的参数


  },
  cc: function() {
    this.setData({
      bm: !this.data.bm
    })
  },
  suspend: function() {
    wx.navigateTo({
      url: '../recycle/recycle'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    let that = this;
    console.log("1111111111111", this.getName(that.options['id'], that.data.classifyList))
    const db = wx.cloud.database()
    db.collection('rubbish').where({
        tag: this.getName(that.options['id'], that.data.classifyList)
      })
      .get({
        success: res => {
          // console.log("1111", res)
          this.setData({
            list: res.data
          })
        }

      })
    if (options.name && options.tag) {
      this.setData({
        bm: !this.data.bm,
        tag: options.tag,
        name: options.name
      })
    }

    // console.log(11111, this.data.tag),
    //   console.log(22222, this.data.name),
    this.setName(that.data.tag, that.data.classifyList)
    console.log(88888, that.data.classifyList)
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