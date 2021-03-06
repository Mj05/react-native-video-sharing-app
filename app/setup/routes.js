import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignUp from "../screens/auth/sign-up";
import Home from "../screens/home/home";
import Login from "../screens/auth/login";
import Profile from "../screens/profile/profile";

const StackNavigator = defaultRoute =>
  createStackNavigator(
    {
      SignUp: {
        screen: SignUp
      },
      Home: {
        screen: Home
      },
      Login: {
        screen: Login
      },
      Profile: {
        screen: Profile
      }
    },
    {
      initialRouteName: defaultRoute
    }
  );

const AppContainer = defaultRoute =>
  createAppContainer(StackNavigator(defaultRoute));

export default AppContainer;
