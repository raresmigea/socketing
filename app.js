const express = require('express');
const app = express();

//listen on port
server = app.listen(3000);

//socket instantiation
const io = require('socket.io')(server);

//listen on every connection
io.on('connection', (socket) => {
  console.log('new user connected!');

/*
when a new user is connecting to the app - default username: anonymous
to do that: add a key to the socket
the socker - represents each client connected to the socket
*/
  //default username
  socket.username = "anonymous";

  //list on change_username
  socket.on('change_username', (data) => {
    socket.username = data.username;
  });
});

//set the template engine ejs
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.render('index');
});
