var socket = io("http://localhost:3000");

socket.on("server-send-registerFail", function () {
    alert("co nguoi da dang ky roi");
});

socket.on("server-send-registerSuccess", function (data) {
    $("#currentUser").html(data);
    $("#loginForm").hide(1000);
    $("#chatForm").show(2000);
});

socket.on("server-send-listOnline", function (data) {
    $("#boxContent").html("");
    data.forEach(function (i) {
        $("#boxContent").append("<div class='user'>" + i + "</div>");
    });
});

socket.on("server-send-logoutSuccess-onBoard", function (data) {
    $("#boxContent").html("");
    data.forEach(function (i) {
        $("#boxContent").append("<div class='user'>" + i + "</div>");
    });
});

socket.on("server-send-logoutSuccess-private", function (data) {
    $("#loginForm").show(1000);
    $("#chatForm").hide(2000);
})

socket.on("server-send-Message", function (data) {
    $("#listMessage").append("<div class='message'>" + data.un + ":" + data.nd + "</div>");
})



$(document).ready(function () {

    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function () {
        socket.emit("client-send-Username", $("#txtUsername").val());
    })

    $("#btnLogout").click(function () {
        socket.emit("client-send-Logout");
    })

    $("#btnSendMessage").click(function () {
        socket.emit("client-send-message", $("#txtMessage").val());
    })


});