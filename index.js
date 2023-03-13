const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res)=>{
	res.send('<h1> Hello World </h1>');
});

server.listen('3050', ()=>{
	console.log('listening on port 3050');
});

