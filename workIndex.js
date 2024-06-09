//todo video-1

// const arr = [1, 2, 2, 22, 6,4,-1,0,23];

// var arr2=arr.forEach((val)=>{
//     console.log(val);
//     return val
// })
// console.log(arr2);


// var arr3=arr.map((val)=>{
//     console.log(val);
//     return val;
// })
// console.log(arr3);


// var arr4=arr.filter((val)=>{
//     return val>2?val:false;
// })
// console.log(arr4);


// var arr5=arr.find((val)=>{
//     return val==23?val:false;
// })
// console.log(arr5);


// console.log(arr.indexOf(23));


// //object

// var names='vijay'

// var obj={
//     name:names,
//     age:25,
//     place:'India',
//     key:'value'
// } 
// Object.freeze(obj);
// obj.place='Karnataka'

// console.log(obj.place);

// function abcdFunction(a,b,c){
//     console.log(12);
// }
// console.log(abcdFunction.length);


// function tempFunc(){
//     return 'hello'
// }

// var result=tempFunc()
// console.log(result);


// // api fetch
// api='https://randomuser.me/api';
// async function abcd() {
//   var blob=await fetch(api)
//   var answer=await blob.json();
//   return answer;
// }
//   abcd();

//todo video-2

// const fs = require("fs");

// fs.writeFile("sample.txt", "Hello World", function (err){
//     if (err) console.log(err.message);
//     else console.log("File Created");
// })

// fs.appendFile("sample.txt", " file appended", function (err){
//     if (err) console.log(err.message);
//     else console.log(" File Appended");
// })

// fs.rename("sample.txt", "first.txt", function (err){
//     if (err) console.log(err.message);
//     else console.log(" File renamed");
// })

// fs.copyFile('first.txt','./copy/copied.txt',function(err){
//     if (err) console.log(err.message);
//         else console.log(" File copied");
// })

// fs.unlink('first.txt', function(err) {
//         if (err) console.log(err.message);
//         else console.log(" File deleted");
// })

// fs.rm('copy',{recursive:true}, function(err) {
//             if (err) console.log(err.message);
//             else console.log(" Folder deleted");
//     })


// const http=require("http");

// const server = http.createServer(function(req, res){
// res.end("hello world");
// })
// server.listen(3000);

//todo video 3

//todo video 4
// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Home page");
// });
// app.get("/profile", function (req, res) {
//   res.send("Profile page");
// });

// app.listen(3000);


// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Home page");
// });

// app.get("/profile", function (req, res,next) {
//   return next(new Error("something wrong"))
// });

// app.use((req, res, next,err) => {
//     console.error(err.stack);
//     res.status(500).send("something went wrong");
// })

// app.listen(3000);

//todo video 5
// const express = require("express");
// const app=express();

// app.use(express.json());
// app.use(express.urlencoded({ extended:true}))

// app.get("/", function(req, res,){
//     res.send("running");
// })
// app.listen(3000, function(){
//     console.log("working");
// })


//todo video 6
// const express = require("express");
// const app = express();
// const path = require("path");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");


// app.get("/", function (req, res) {
//   res.render("index");
// });

// app.get("/profile/:username", function (req,res){
//   res.send(`welcome ${req.params.username}`)
// })

// app.get("/author/:username/:age", function (req,res){
//   res.send(`hello ${req.params.username} age ${req.params.age}`)
// })

// app.listen(3000);

//todo video-7