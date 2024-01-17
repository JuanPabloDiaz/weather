import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";

// Disable scroll
document.body.style.overflow = "hidden";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
