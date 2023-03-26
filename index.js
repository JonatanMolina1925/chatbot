const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res)=>{
	//res.send('<h1> Hello World </h1>');
	res.sendFile(__dirname + '/index.html');
});

//Avisar en consola cuando usuarios se conectan y desconectan
io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);
	});
});


//Puerto en el que se está escuchando
server.listen('3050', ()=>{
	console.log('listening on port 3050');
});

