import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {sequelize} from './db/connection';
import cors from 'cors';
import rootRoutes from './routes/rootRoutes';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const port = process.env.PORT || 3000;


app.use('/api/v1/', rootRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

const server = require('http').createServer(app);
const io = require('socket.io')(server);

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