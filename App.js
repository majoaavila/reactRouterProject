import React, { Component } from "react";
import loginView from "./src/loginView";
import HomeView from "./src/homeView";
import { Actions, Scene, Router } from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={loginView} hideNavBar />
    <Scene key="home" component={HomeView}  />
  </Scene>
);

export default class App extends Component {
  true;
  render() {
    return <Router scenes={scenes} />;
  }
}
