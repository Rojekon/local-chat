import React, { useState } from "react";

export const UserLogin = ({ onChangeLogin }) => {
  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [roomId, setRoomId] = useState("Frontend");
  const [currentRoom, setCurrentRoom] = useState(null);

  const doUserLogIn = function () {
    const usernameValue = username;
    const roomValue = roomId;

    const loggedInUser = sessionStorage.setItem("userName", usernameValue);
    const chekedRoom = sessionStorage.setItem("room", roomValue);

    const currentUser = sessionStorage.getItem("userName");
    const currentRoom = sessionStorage.getItem("room");
    console.log(loggedInUser === currentUser);
    console.log(chekedRoom === currentRoom);

    getCurrentUser();
    getCurrentRoom();
    onChangeLogin(currentUser);

    window.location.reload(false);

    return true;
  };

  const getCurrentUser = function () {
    const currentUser = sessionStorage.getItem("userName");
    setCurrentUser(currentUser);
    return currentUser;
  };

  const getCurrentRoom = function () {
    const currentRoom = sessionStorage.getItem("room");
    setCurrentRoom(currentRoom);
    return currentRoom;
  };

  return (
    <div className="login">
      {currentUser === null && (
        <div>
          <div className="login-name">
            Введите ваше имя:
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Ваше имя"
            />
          </div>
          <div className="select-room">
            Выберите комнату чата:
            <select
              value={roomId}
              onChange={(event) => setRoomId(event.target.value)}
            >
              <option value="Frontend">Отдел Frontend</option>
              <option value="Backend">Отдел Backend</option>
              <option value="Курилка">Курилка</option>
              <option value="Повестка дня">Повестка дня</option>
            </select>
          </div>
          <button onClick={() => doUserLogIn()}>Войти</button>
        </div>
      )}
    </div>
  );
};
