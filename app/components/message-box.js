import React, { Component } from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../setup/style';
import styles from "./style";

class MessageBox extends Component {
	render() {
		return (
		    <View style={[GlobalStyles.center, styles.messageBox]}>
               <Text>{this.props.message}</Text>
            </View>
		);
	}
}

export default MessageBox;