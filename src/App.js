import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Container>
      <Router>
        <MenuBar />
        <Route extact path="/" component={Home} />
      </Router>
    </Container>
  );
}

export default App;
