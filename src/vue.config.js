module.exports = {
    configureWebpack: {
      devServer:{
          proxy:{
              "/api":{
                  target:"http://api.qingyunke.com",//需要代理的网站
                  pathRewrite:{"/api":""},//路径重写把api替换成空
                  changeOrigin:true
              }
          }
      }
    }
  }