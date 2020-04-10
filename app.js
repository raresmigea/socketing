const express = require('express');
const app = express();

//listen on port
server = app.listen(3000);

//socket instantiation
const io = require('socket.io')(server);

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
  res.render('index');
});
