import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState();
  useEffect(() => {
    const getUserInfos = async () => {
      try {
        const res = await fetch("api/getuserinfos");
        // console.log('respond =', res)
        const json = await res.json();
        if (json.username) {
          setUsername(json.username);
        }
      } catch (error) {
        setUsername("not connected");
        console.error(error);
      }
    };
    getUserInfos();
  },[]);

  return (
    <div>
      <h1>this is a react page</h1>
      <h2>{username}</h2>
      {username && username !=="not connected" && <a href="/logout">logout</a> /* this work only in production */} 
    </div>
  );
}

export default App;
