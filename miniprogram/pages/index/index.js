Page({
  onShareAppMessage: function() {
    debugger
    return {
      title: '皮卡丘',
      path: '/pages/index/index?id=123',
    }
  },

  /**
   * 页面的初始数据
   */
  data: {

  },
  sousuo: function(e) {
    wx.navigateTo({
      url: '../history/history'
    })
  },
  skip: function() {
    wx.navigateTo({
      url: '../classify/classify?id=1'
    })
  },
  skiph: function() {
    wx.navigateTo({
      url: '../classify/classify?id=2'
    })
  },
  skipe: function() {
    wx.navigateTo({
      url: '../classify/classify?id=3'
    })
  },
  skipi: function() {
    wx.navigateTo({
      url: '../classify/classify?id=4'
    })
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