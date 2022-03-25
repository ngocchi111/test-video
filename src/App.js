import React , {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  
  return (

    <Router>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
      <Home/>
      <Footer />
    </Router>

  );
};

export default App;
