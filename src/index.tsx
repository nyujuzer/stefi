import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/elements/navbar";
import AboutUs from "./components/screens/about";
import Services from "./components/screens/services";
import Contact from "./components/screens/contact";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/">
        <Route index element={<App/>}></Route>
        <Route path="about" element={<AboutUs/>}></Route>
        <Route path="services" element={<Services/>}></Route>
        <Route path="contacts" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
