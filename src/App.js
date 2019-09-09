import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <Container>
      <Router>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </Router>
    </Container>
  );
}

export default App;
