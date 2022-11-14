import React, { useState } from "react";

const Navbar = (props) => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("userName")
  );

  const doUserLogOut = function () {
    sessionStorage.removeItem("userName");

    const currentUser = sessionStorage.getItem("userName");
    if (currentUser === null) {
      alert("Вы вышли из аккаунта!");
    }

    getCurrentUser();
    props.onChange(currentUser);
    return true;
  };

  const getCurrentUser = function () {
    const currentUser = sessionStorage.getItem("userName");
    setCurrentUser(currentUser);
    return currentUser;
  };

  return (
    <div className="navbar">
      <div className="empty-div"></div>
      <p className="chat-name">USSCchat</p>
      {currentUser === null ? (
        <p className="login-please">Войдите в аккаунт</p>
      ) : (
        <button className="logout-button" onClick={doUserLogOut}>
          Выйти
        </button>
      )}
    </div>
  );
};

export default Navbar;
