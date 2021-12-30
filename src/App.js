import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import { PageView, initGA } from "./tracking/index";

function App() {
  initGA(process.env.REACT_APP_API_KEY_GA);

  useEffect(() => {
    PageView();
  });

  return (
    <Router>
      {/* <MenuBar /> */}
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
