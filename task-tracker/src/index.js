import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//tasks data
// {
//   "id": 1,
//   "text": "Doctors Appointment",
//   "day": "Feb 5th at 2:30 pm",
//   "reminder": true
// },
// {
//   "id": 2,
//   "text": "Meeting at School",
//   "day": "Feb 6th at 1:30 pm",
//   "reminder": true
// },
// {
//   "id": 3,
//   "text": "Food Shopping",
//   "day": "Feb 5th at 2:30 pm",
//   "reminder": false
// }
