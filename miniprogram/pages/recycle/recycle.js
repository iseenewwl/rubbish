Page({

  /**
   * 页面的初始数
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    select_index: 0,
    scroll_height: 0,
    bm: true,
    cm: true,
    am: true,
    img: "",
    name: "",
    price: "",
    centent_Show: true,
    recycleList: "",
    searchValue: "",
    list: "",
    left: [{
        id: 1,
        title: '湿垃圾',
        img: '../../images/湿垃圾.png',
      },
      {
        id: 2,
        title: '干垃圾',
        img: '../../images/干垃圾.png',
      },
      {
        id: 3,
        title: '可回收物',
        img: '../../images/可回收物.png',
      },
      {
        id: 4,
        title: '有害垃圾',
        img: '../../images/有害垃圾.png',
      },
    ],
    right: [{
        id: 1,
        title: '湿垃圾',
        content: [{
            name: "产品一",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品二",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品三",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品四",
            img: '../../images/ping.png',
            price: 0.1,
          },
        ]
      },
      {
        id: 2,
        title: '干垃圾',
        content: [{
            name: "产品一",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品二",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品三",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品四",
            img: '../../images/ping.png',
            price: 0.1,
          },
        ]
      },
      {
        id: 3,
        title: '可回收物',
        content: [{
            name: "产品一",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品二",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品三",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品四",
            img: '../../images/ping.png',
            price: 0.1,
          },
        ]
      },
      {
        id: 4,
        title: '有害垃圾',
        content: [{
            name: "产品一",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品二",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品三",
            img: '../../images/ping.png',
            price: 0.1,
          },
          {
            name: "产品四",
            img: '../../images/ping.png',
            price: 0.1,
          },
        ]
      },

    ]
  },
  scroll: function(e) {
    var h = e.detail.scrollTop;
    var scroll_height = 0;
    var select_index;
    for (var i = 0; i < this.data.right.length; i++) {
      if (scroll_height >= h) {
        select_index = i;
        break;
      }
      scroll_height += this.data.right[i].content.length * 64 + 48;
    }

    this.setData({
      select_index: i,
    });

  },
  left_tap: function(e) {
    var scroll_height = 0;
    for (var i = 0; i < e.currentTarget.dataset.index; i++) {
      scroll_height += this.data.right[i].content.length * 64 + 48;
    }
    this.setData({
      scroll_height: scroll_height,
      select_index: e.target.dataset.index,
    });
  },
  pur: function(e) {
    this.setData({
      img: e.currentTarget.dataset.item.img,
      name: e.currentTarget.dataset.item.name,
      price: e.currentTarget.dataset.item.price,
      bm: !this.data.bm,

    })
    // console.log(88, this.data.img)
  },
  cc: function() {
    this.setData({
      bm: !this.data.bm
    })
  },
  buy: function() {
    this.setData({
      am: !this.data.am
    })

  },
  sousuo: function(e) {

    wx.navigateTo({
      url: '../reylist/reylist'
    })
  },
  user: function() {
    this.setData({
      i: this.data.img,
      t: this.data.name,
      p: this.data.price,
    })

    // console.log(777, this.data.i)
    var _this = this
    wx.navigateTo({
      url: '../pay/pay?img=' + _this.data.i + '&title=' + _this.data.t + '&price=' + _this.data.p
    })
    // wx.login({
    //   success: function(res) {
    //     console.log(res)
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    //         data: {
    //           appid: 'wxa432dd2be3a62581',
    //           secret: '083b5c183b9cae06f02978b29b216522',
    //           js_code: res.code,
    //           grant_type: 'authorization_code'
    //         },
    //         success(v) {

    //           if (v.data.openid) {
    //             wx.navigateTo({
    //               url: '../pay/pay?img=' + _this.data.i + '&title=' + _this.data.t + '&price=' + _this.data.p
    //             })
    //           }

    //           console.log(v.data.openid)
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // });
  },
  cancel: function() {
    this.setData({
      am: !this.data.am
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const db = wx.cloud.database()
    db.collection('newRubbish').get({
      success: res => {
        console.log(555, res)
        this.setData({
          right: res.data
        })

        // this.setData({
        //   recycleList: res.data
        // })
        // this.setData({
        //   right: {
        //     id: this.right.id,
        //     title: this.right.content.title,
        //     content: res.data.map(item => {
        //       return {
        //         title: item.name
        //       }
        //     })
        //   }
        // })
        // res.data.forEach(item => {
        //   item.push
        // })


      }
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