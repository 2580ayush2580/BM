import React from "react";
import { Counter } from "./components/bill";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
