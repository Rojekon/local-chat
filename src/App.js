import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import { UserLogin } from "./components/UserLogin";

function App() {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("userName")
  );

  function doUserLogOut(currentUser) {
    setCurrentUser(currentUser);
  }

  return (
    <div className="App">
      <Navbar onChange={doUserLogOut} />
      {currentUser === null && (
        <UserLogin
          onChangeLogin={(currentUser) => {
            setCurrentUser(currentUser);
          }}
        />
      )}
      {currentUser !== null && <Chat />}
    </div>
  );
}

export default App;
