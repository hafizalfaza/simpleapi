import express from 'express';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import path from 'path';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const port = process.env.PORT || 3000;


app.use('/api/v1/auth', auth);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

var server = require('http').createServer(app);
var io = require('socket.io')(server);

const connectedSockets = [];

io.on('connection', (socket) => {

    connectedSockets.push(socket);
    console.log('new socket connected, connected sockets: '+connectedSockets.length);

    socket.on('join room', (roomName) => {
        socket.join(roomName);
    })


    socket.on('send message', (data) => {
        io.in(data.roomName).emit('new message', data.message);      
    });

    socket.on('disconnect', (socket) => {
        connectedSockets.splice(connectedSockets.indexOf(socket), 1);
    });
});

server.listen(port, () => {
    console.log('Server running with socket.io...')
});