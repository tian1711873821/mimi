let user = require("./User");

console.log(`userName:${user.userName}`)
console.log(`userName:${user.sayHello()}`)

let http = require('http');
let url = require('url')
let util = require('util')
let server = http.createServer((req,res)=>{
  res.statusCode==200

  res.setHeader("Content-Type","text/plain; charset=uft-8")

  // res.end(util.inspect(url.parse(req,url)))
  // console.log("url:"+req.url)
  // console.log("parse:"+url.parse(req.url))
  // console.log("inspect:"+util.inspect(url.parse(req.url)))
  res.end(util.inspect(url.parse(req.url)))
})
server.listen(3000,"192.168.1.100",()=> {
  console.log("服务器已经运行，请打开浏览器输入：http://192.168.1.100:3000/来进行访问")
})
