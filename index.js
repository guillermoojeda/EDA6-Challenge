const WebSocket = require('ws');
const token = require('./settings').authToken;
const acceptChallenge = require('./wsClient/acceptChallenge');
const displayUserList = require('./wsClient/displayUserList');
const sendMyMove = require('./wsClient/sendMyMove');
const getBoardArray = require('./helpers/board/getBoardArray');
const printBoard = require('./helpers/board/printBoard');

const URL = `wss://4yyity02md.execute-api.us-east-1.amazonaws.com/ws?token=${token}`;

console.log(token);
const ws = new WebSocket(URL);

// To send as JSON object use ws.send(JSON.stringify(object));

ws.on('open', function open() {
  ws.send('Hola! Estoy tratando de entrar al servidor...');
  console.log('Enviado:');
  console.log('Hola! Estoy tratando de entrar al servidor...');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
  const obj = JSON.parse(data);

  if (obj.event === 'challenge') {
    console.log("Received a challenge");
    const resp = acceptChallenge(obj);
    ws.send(JSON.stringify(resp));
    console.log(JSON.stringify(resp));
  }

  if (obj.event === 'your_turn') {
    console.log("Received turn info");
    printBoard(obj.data.board);
    const resp = sendMyMove(obj);
    ws.send(JSON.stringify(resp));
    console.log(JSON.stringify(resp));
  }

});

/*
ws.on('open', function open() {
  ws.send('another something');
  console.log('another something sent');
});*/