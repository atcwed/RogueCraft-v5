// Minimal WebSocket server scaffold
const http=require('http');
const WebSocket=require('ws');
const server=http.createServer();
const wss=new WebSocket.Server({server});
wss.on('connection',ws=>{ws.send(JSON.stringify({type:'welcome'})); ws.on('message',msg=>{ wss.clients.forEach(c=>{ if(c!==ws && c.readyState===WebSocket.OPEN) c.send(msg); }); });});
server.listen(3000);
