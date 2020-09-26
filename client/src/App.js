import React from "react";
import "./App.css";
import Main from "./pages/Main";
import Product from "./pages/Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
