// pages/search/search.js
var API_URL = "https://api.douban.com/v2/movie/search?q=";
Page({
  data: {
    movies: []
  },
  search: function (e) {
    //搜索没有结果，直接返回
    if (!e.detail.value) {
      return;
    }
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      durationg: 10000
    });
    var that = this;
    wx.request({
      url: API_URL+e.detail.value,
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        // console.log(res.data)
        wx.hideToast();
        that.setData({
            movies:res.data.subjects
        });
      }
    })
  }
})
