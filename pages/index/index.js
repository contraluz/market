// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    arrayContent: [],
    num: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      array: new Array(10).fill({ name: '之潮', url: '../../static/images/weather.png' }),
      arrayContent: new Array(10).fill({ name: '月华', url: '../../static/images/backlit-dawn-dusk-327466.jpg', content: '月华内部蓝绿色，外部红棕色。月华是一种衍射现象，当光通过与其波长相近的小水滴时，就会出现光的强弱相间分布的情况，这就是衍射。' })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  imgClick() {
    let num = this.data.num
    num = num > 9 ? 0 : ++num
    console.log(num)
    this.setData({
      num: num
    })
  }
})