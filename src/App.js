import React from "react";
import "./App.css";
import Login from "./Components/Login.js";
import Story from "./Components/Story.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    userid: "",
  };

  myCallback = async (dataFromChild) => {
    await this.setState({ userid: dataFromChild });
  };
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/story" userid={this.state.userid}>
              <Story />
            </Route>
            <Route exact path="/" callbackFromparent={this.mycallback}>
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
