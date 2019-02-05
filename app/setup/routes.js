import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignUp from "../screens/auth/sign-up";

const StackNavigator = defaultRoute =>
  createStackNavigator(
    {
      SignUp: {
        screen: SignUp
      }
    },
    {
      initialRouteName: defaultRoute
    }
  );

const AppContainer = defaultRoute =>
  createAppContainer(StackNavigator(defaultRoute));

export default AppContainer;
