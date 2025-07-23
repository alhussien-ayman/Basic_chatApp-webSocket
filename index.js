const express = require ('express')
const { join } = require('path')
const app = express ()
const http = require('http')
const { createServer } = require('node:http');
const {Server} =require('socket.io')

const server =http.createServer (app)
const io = new Server (server)
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
    socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('send_messages_to_all_users',msg );
  });
  socket.on('typing', ()=>{
    socket.broadcast.emit('show_typing_status')
  })
  socket.on('stop_typing', ()=>{
    socket.broadcast.emit('clear_typing_status')
  })
  socket.on('disconnect',()=>{
    console.log('left the chat with socket id' + socket.id)
  })
});

server.listen(3000, ()=>{
    console.log('== listening to port 3000 ==')
})