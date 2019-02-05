import React, { Component } from "react";
import { Provider } from "react-redux";
import reduxStore from "./setup/store";
import { PersistGate } from "redux-persist/integration/react";
import Splash from "../app/screens/splash/splash";
import Navigator from "../app/setup/routes";

const SignUp = Navigator("SignUp");

export default class RNStart extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ rehydrated: true });
    }, 2000);
  }

  render() {
    if (!this.state.rehydrated) {
      return <Splash />;
    } else {
      return (
        <Provider store={reduxStore.store}>
          <PersistGate persistor={reduxStore.persistor}>
            <SignUp />
          </PersistGate>
        </Provider>
      );
    }
  }
}
