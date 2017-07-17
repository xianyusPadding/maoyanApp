//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    moveSubjects:[],
    bool_true:true
  },
  onLoad: function () {
    console.log('onLoad')
    this.loadMovie();
  },
  loadMovie:function(){
    var page = this;
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
      header:{
        'Content-Type':'application/json'
      },
      // method:'POST',
      success:function(res){
        console.log("success");
        var movies = res.data.data.movies;
        console.log(res.data);
        page.setData({ moveSubjects: movies}); 
      }
    })
  }
})
