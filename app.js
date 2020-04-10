const express = require('express');
const app = express();

//socket instantiation
const socket = require('socket.io')(server);

//listen on every connection
io.on('connection', (socket) => {
  console.log('new connection done!');
});

//set the template engine ejs
app.set('view engine', 'ejs');

//middlewares
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
  res.send('hello world');
});

//listen on port
server = app.listen(3000);
