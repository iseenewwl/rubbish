var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",
    list: "",
    centent_Show: true,
  },
  bindInputName: function(e) {
    this.searchValue = e.detail.value;
    // console.log("sousuo", this.searchValue);
    // this.setData({
    //   searchValue: value
    // })
    // console.log(2222, this.searchValue)

  },
  seo: function(e) {
    let that = this
    if (!that.searchValue) {
      that.setData({
        centent_Show: false
      })
      return
    }
    const db = wx.cloud.database()
    console.log("4334", that.searchValue)
    db.collection('rubbish').where({

      name: db.RegExp({
        regexp: that.searchValue,

        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get({
      success: res => {
        if (res.data.length == 0) {
          that.setData({
            centent_Show: false,
          });
        } else {
          that.setData({
            centent_Show: true
          })
        }
        // let wasteList = res
        // let wasteList = res.data.map(item => {
        //   return item.name
        // })
        // wasteList.filter(name => name.toLowerCase.indexOf(querystring.toLowerCase()) >= 0)
        // const len = wasteList.length;
        // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
        console.log("222esfc", res)

        that.setData({
          list: res.data
        })
      }
    })
    // return {
    //   result: res
    // }
  },
  alllist: function(e) {
    wx.navigateTo({
      url: '../classify/classify?tag=' + e.currentTarget.dataset.tag + '&name=' + e.currentTarget.dataset.name
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let myComponent = this.selectComponent('#myComponent');
    // myComponent.bindInputName()
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