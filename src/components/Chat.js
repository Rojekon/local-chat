import React, { useState, useEffect } from "react";

const Chat = () => {
  const userName = sessionStorage.getItem("userName");
  const roomId = sessionStorage.getItem("room");
  const [userMes, setUserMes] = useState("");
  const [chatMesArr, setChatMesArr] = useState(
    JSON.parse(localStorage.getItem(roomId))
  );

  useEffect(() => {
    if (chatMesArr === null) {
      setChatMesArr([]);
    } else {
      localStorage.setItem(roomId, JSON.stringify(chatMesArr));
      window.onstorage = () => {
        setChatMesArr(JSON.parse(window.localStorage.getItem(roomId)));
      };
    }
  }, [chatMesArr]);

  function sendMes() {
    if (userMes === "") {
      alert("Введите сообщение, что бы что-то отправить!");
    } else {
      const message = { room: roomId, user: userName, text: userMes };

      setChatMesArr([...chatMesArr, message]);

      setUserMes("");
    }
  }
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMes();
    }
  };

  return (
    <div>
      <h1>{roomId}</h1>
      <div className="chat-window">
        {chatMesArr !== null ? (
          chatMesArr.map((mes) =>
            mes.user === userName ? (
              <div className="log-user">
                <p className="send" key={mes.text}>
                  {mes.text}
                  <div className="log-avatar">{mes.user[0].toUpperCase()}</div>
                </p>
              </div>
            ) : (
              <div className="unlog-user">
                <p className="received" key={mes.text}>
                  <div className="unlog-avatar">
                    {mes.user[0].toUpperCase()}
                  </div>
                  {mes.text}
                </p>
              </div>
            )
          )
        ) : (
          <div>начните диалог</div>
        )}
      </div>
      <div className="input-mess">
        <input
          value={userMes}
          onChange={(event) => setUserMes(event.target.value)}
          placeholder="Введите сообщение"
          onKeyDown={onKeyDown}
        />
        <button onClick={sendMes}>Отправить</button>
      </div>
    </div>
  );
};

export default Chat;
