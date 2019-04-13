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
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let strArr = [];
    let objArr = [];

    for (let i = 0; i < 12; i++) {
      strArr[i] = {
        name: '之潮',
        url: '../../static/images/weather.png'
      }
    }
    for (let i = 0; i < 12; i++) {
      objArr[i] = {
        id: i,
        acitve: false,
        name: '月华',
        url: `../../static/images/bg-${(i + 1) % 8 !== 0 ? (i + 1) % 8 : (i + 1) % 8 + 5}.jpg`,
        content: '月华内部蓝绿色，外部红棕色。月华是一种衍射现象，当光通过与其波长相近的小水滴时，就会出现光的强弱相间分布的情况，这就是衍射。'
      }
    }
    this.setData({
      array: strArr,
      arrayContent: objArr
    })
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

  },
  imgClick() {
    // 点击风景图片，设置底部数值
    let num = this.data.num
    num = num > 9 ? 0 : ++num
    this.setData({
      num: num
    })
  },
  textClick(e) {
    // 点击文字，设置段落打开/折叠
    let arrayContent = this.data.arrayContent
    if (Array.isArray(arrayContent)) {
      // console.log(e.target)
      const index = parseInt(e.target.id)
      arrayContent[index].acitve = !arrayContent[index].acitve
      this.setData({
        arrayContent: arrayContent
      })
    }
  }
})