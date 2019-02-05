import React, { Component } from "react";
import { View, Text,  } from "react-native";
import GlobalStyles from "../../setup/style";

class SignUp extends Component {
  render() {
    return (
      <View style={[GlobalStyles.container, GlobalStyles.center]}>
        <Text>SignUp</Text>
      </View>
    );
  }
}

export default SignUp;