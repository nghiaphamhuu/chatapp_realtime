const express = require('express');
const router = require('./routes/room');

const db = require('./configs/db.config');

var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var ArrayUser = [];

// Connect to db
db.connect();


io.on("connection", function(socket){
    console.log("Have some one connect to server :"+ socket.id);

    socket.on("client-send-Username", function(data){
        if(ArrayUser.indexOf(data) >= 0){
            //fail
            socket.emit("server-send-registerFail");
        } else {
            //success
            socket.Username = data;
            ArrayUser.push(data);
            socket.emit("server-send-registerSuccess",data);
            io.sockets.emit("server-send-listOnline",ArrayUser);
        }
    })

    socket.on("client-send-Logout", function(){
        ArrayUser.splice(ArrayUser.indexOf(socket.Username),1);
        socket.broadcast.emit("server-send-logoutSuccess-onBoard",ArrayUser);
        socket.emit("server-send-logoutSuccess-private")
    })

    socket.on("client-send-message", function(data){
        io.sockets.emit("server-send-Message", {un:socket.Username, nd:data});

    })
})

// app.get("/", function(req, res){
//     res.render("trangchu");
// });
const route = require('./routes');

route(app);