// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  toExam() {
    wx.navigateTo({
      url: '../exam/exam',
    })
  },
  data: { 
    showDetails: false,
    content: null,
    title: null,
    wasteCatList: [
      {
        cat:"C",
        subcats: [
          {
            subcat_name: "Major",
            detail_items: ["C", "E", "G"]
          },
          {
            subcat_name: "Minor",
            detail_items: ["C", "Eb", "G"]
          },
          {
            subcat_name: "Major7",
            detail_items: ["C", "E", "G", "B"]
          },
          {
            subcat_name: "Minor7",
            detail_items: ["C", "Eb", "G", "Bb"]
          },
          {
            subcat_name: "7",
            detail_items: ["C", "E", "G", "Bb"]
          },
          {
            subcat_name: "m7b5",
            detail_items: ["C", "Eb", "Gb", "Bb"]
          }
        ]
      },
      {
        cat:"D",
        subcats: [
          {
            subcat_name: "Maj",
            detail_items: []
          }
        ]
      },
      {
        cat:"E",
        subcats: [
          {
            subcat_name: "Maj",
            detail_items: []
          }
        ]
      },
      {
        cat:"F",
        subcats: [
          {
            subcat_name: "Maj",
            detail_items: []
          }
        ]
      }
    ]
  },
  // detail_click: function(e) {
    // var curStatus = e.currentTarget.dataset.curstatus;
    // var catId = e.currentTarget.dataset.id;
    // if(curStatus == "close") {
    //   this.setData({
    //     showDetails: true,
    //     content: this.data.wasteCatList[catId].subcats,
    //     title: this.data.wasteCatList[catId].cat,
    //     wasteCatList: this.data.wasteCatList
    //   });
    // }

  //   if(curStatus == "open") {
  //     this.setData({
  //       showDetails: false,
  //       content: null,
  //       title: null,
  //       wasteCatList: this.data.wasteCatList
  //     });
  //   }
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})