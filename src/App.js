import { Route } from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Freedom from "./components/Freedom";
import Missing from "./components/Missing";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );
  const [bgColor, setBgColor] = useState(
    JSON.parse(localStorage.getItem("backgroundColor"))
  );

  const handleSubmitColor = () => {
    if (!bgColor)
      return localStorage.setItem("backgroundColor", JSON.stringify("#0ca678"));
    setBgColor(bgColor);
    localStorage.setItem("backgroundColor", JSON.stringify(bgColor));
    setBgColor("");
  };

  const handleSubmitUser = () => {
    if (!username)
      return localStorage.setItem("userProfile", JSON.stringify("Username"));
    setUsername(username);
    localStorage.setItem("userProfile", JSON.stringify(username));
    setUsername("");
  };

  return (
    <div className="App">
      <Route exact path="/">
        <Home username={username} bgColor={bgColor}></Home>
      </Route>
      <Route path="/settings">
        <Settings
          username={username}
          setUsername={setUsername}
          bgColor={bgColor}
          setBgColor={setBgColor}
          handleSubmitColor={handleSubmitColor}
          handleSubmitUser={handleSubmitUser}
        ></Settings>
      </Route>
      <Route exatch path="/todo">
        <Freedom bgColor={bgColor}></Freedom>
      </Route>
      <Route path="/*" component={Missing}></Route>
      <Footer bgColor={bgColor} setBgColor={setBgColor}></Footer>
    </div>
  );
}

export default App;
