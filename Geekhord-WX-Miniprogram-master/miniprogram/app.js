//app.js
App({
  onLaunch: function() { 
  var that=this;
    // 获取屏幕高度
    wx.getSystemInfo({
      success: function(res) {
        that.globalData.windowHeight = res.windowHeight
        that.globalData.windowWidth = res.windowWidth
      }
    })
},
    globalData: {
        windowHeight: null,
        windowWidth: null,
        
    }
})