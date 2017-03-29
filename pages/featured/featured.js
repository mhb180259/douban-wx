//获取应用实例
var app = getApp()
const API_URL = 'https://api.douban.com/v2/movie/top250';

Page({
  data: {
    loadingHide:false,
    title:"加载中...",
    movies:[]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: API_URL, 
      data: {},
      header: {
          'Content-Type': 'json'
      },
      success: function(res) {
        console.log('成功了');
        var data = res.data;
        that.setData({
          title:data.title,
          loadingHide: true,
          movies:data.subjects
        });
      }
    })
  }
})
