import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/kepheader/header";
import Footer from  "./components/kepfooter/footer"
import Home from "./pages/home/home";
import "../node_modules/flag-icon-css/css/flag-icons.min.css";
import { Route,Router,Routes } from "react-router-dom";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

export default App;
