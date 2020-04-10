$(function(){
  /*
  On the client side: the goal is the opposite:
  - each time the button change_username is clicked - the client will
  send an event with the new value
  */
  //make connection
  var socket = io.connect('http://localhost:3000');

  //buttons and inputs
  var message = $("#message");
  var username = $("#username");
  var send_message = $("#send_message");
  var send_username = $("#send_username");
  var chatroom = $("#chatroom");

  //emit an username
  send_username.click(function() {
    console.log(username.val());
    socket.emit('change_username', {username: username.val()});
  });
});
