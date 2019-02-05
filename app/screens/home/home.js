import React, { Component } from "react";
import { View, Text } from "react-native";
import GlobalStyles from "../../setup/style";

class Home extends Component {
  render() {
    return (
      <View style={[GlobalStyles.container]}>
        <Text>{"Home"}</Text>
      </View>
    );
  } 
}

export default Home;