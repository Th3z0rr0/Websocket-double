const WebSocket = require('ws');

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor WebSocket en funcionamiento\n');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Nueva conexión WebSocket establecida');


    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`);


        ws.send(`Servidor dice: ${message}`);
    });


    ws.on('close', () => {
        console.log('Cliente WebSocket desconectado');
    });
});

server.listen(8080, () => {
    console.log('Servidor HTTP escuchando en el puerto 8080');
});
