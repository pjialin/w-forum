import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '微论坛',
        navigationBarTextStyle: 'black',
    },
      "tabBar": {
        color:"#5a5a5a",
          selectedColor:"#4e90d9",
          backgroundColor: "#fff",
          borderStyle: "white",
          "list": [{
              "pagePath": "pages/index/main",
              "iconPath": "static/images/home.png",
              "selectedIconPath": "static/images/home-select.png",
              "text": "首页"
          }, {
              "pagePath": "pages/index/main",
              "iconPath": "static/images/post.png",
              "selectedIconPath": "static/images/post-select.png",
              "text": "发帖"
          }, {
              "pagePath": "pages/index/main",
              "iconPath": "static/images/user.png",
              "selectedIconPath": "static/images/user-select.png",
              "text": "我的"
          }]
      },
  }
}
