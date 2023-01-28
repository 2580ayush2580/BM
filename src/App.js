import React from "react";
import { Bill } from "./components/bill";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Bill />
      <Footer />
    </div>
  );
}

export default App;
