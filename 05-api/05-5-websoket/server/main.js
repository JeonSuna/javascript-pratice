const { WebSocketServer } = require("ws"); //ws라이브러리 쓰겠다고 선언함

const sockserver = new WebSocketServer({ port: 3000 });
//웹 소켓 서버 주소 확인, 3000번 포트로 들어오는 연결 요청을 받아 쓰겠다
                                  //즉 포트3000에서 웹소켓 서버를 시작하겠다
console.log("socket server 구동 : 3000");

let msgId = 0

sockserver.on("connection", (ws) => { // 연결 이벤트
  console.log("New client connected!");
  ws.send( //클라이언트에게 메세지 보내기 
    JSON.stringify({
      gubun: "connect",
      msg: "서버와 접속에 성공했습니다.!",
      state: 'ok'
    })
  );
  ws.on("close", () => console.log("Client has disconnected!")); //클로즈 이벤트 발생했을 때 로그 찍음
  ws.on("message", (data) => { //클라이언트 메세지를 받아서 
    let receiveObj = JSON.parse(data)
    if(receiveObj.gubun == 'msg'){
      receiveObj.msgId = ++msgId
    }
    let sendStr = JSON.stringify(receiveObj)
    sockserver.clients.forEach((client) => { //현재 연결되어 있는 모든 유저에게 받은 메세지 send함 
      console.log(`send message: ${sendStr}`);
      client.send(`${sendStr}`);
    });
  });
  ws.onerror = function () {
    console.log("websocket error");
  };
});
