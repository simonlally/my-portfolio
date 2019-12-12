import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize(process.env.REACT_APP_API_KEY_GA);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
