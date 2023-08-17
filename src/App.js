import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlertCalled = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleModeClick = () => {
    console.log("toggle mode was clicked");
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlertCalled("Light mode enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#333333";
      showAlertCalled("Dark mode enabled", "success");
    }
    console.log(mode);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title={'TextCraftify'}
          home={"Home"}
          about={"About"}
          contact={"Contact"}
          mode={mode}
          toggleMode={toggleModeClick}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading={"Try TextCraftify - Word Counter, Charecter Counter, Remove Extra Spaces"}
                  mode={mode}
                  showAlert={showAlertCalled}
                />
            }
            />
            <Route
              exact path="/about"
              element={
                <About mode={mode} toggleMode={toggleModeClick} />
              }
            />
          </Routes> 
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
