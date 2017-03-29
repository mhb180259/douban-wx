//获取应用实例
var app = getApp()
/*
	接口说明：https://api.douban.com/v2/movie/subject/1292063
	接口+id
*/
const API_URL = 'https://api.douban.com/v2/movie/subject/';

Page({
  data: {
    loadingHide: false,
    movie: {}
  },
  onLoad:function (params){
  	console.log(API_URL+params.id);
  	var that = this;
  	wx.request({
      url: API_URL + params.id, 
      data: {},
      header: {
          'Content-Type': 'json'
      },
      success: function(res) {
      	
        that.setData({
        	loadingHide:true,
        	movie: res.data
        });
      }
    })
  }
})
