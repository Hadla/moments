import React from "react";
import "./App.css";
import "./pages/SignInPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route path={["/", "/home"]} component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
