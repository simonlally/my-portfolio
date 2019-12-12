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
    <Container style={{ width: "70%" }}>
      <Router>
        <MenuBar />
        <Route exact path="/" component={Home} />
      </Router>
    </Container>
  );
}

export default App;
