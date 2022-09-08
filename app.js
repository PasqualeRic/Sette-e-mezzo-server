const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const ip = require("ip");
const ioGames = require('./games')


const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app)
const io = socketio(server)

io.on('connection',() =>{
        console.log(socket.id);
        ioGames(socket)
})



server.listen(process.env.PORT || port, () => console.log('Server listening -- on http://'+ip.address()+':'+port))