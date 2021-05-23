import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //App.js
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //html파일의 id가 root인 div 찾음
); // <App /> 이게 컴포넌트 Component

reportWebVitals();
