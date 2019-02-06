import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import GlobalStyles from '../setup/style';

class Header extends Component {
	render() {
		return (
			<View style={[ styles.header, GlobalStyles.flexDirectionRow ]}>
				<View style={GlobalStyles.alignLeft}>
					<View style={[ GlobalStyles.flexDirectionRow, styles.alignItemCenter ]}>
						<View style={styles.titlePaddingLeft}>
							<Text style={[GlobalStyles.whiteText, styles.titleText]}>{this.props.title}</Text>
						</View>
					</View>
				</View>
				{this.props.isProfileButtonVisible ? (
					<View style={GlobalStyles.alignRight}>
						<View>
							<TouchableOpacity
								onPress={() => {
									this.props.navigation.push('Profile');
								}}
							>
							<View style={styles.titlePaddingLeft}>
							    <Text style={[GlobalStyles.whiteText, styles.titleText]}>{GLOBAL_LANG.PROFILE}</Text>
					     	 </View>
							</TouchableOpacity>
						</View>
					</View>
				) : null}
			</View>
		);
	}
}

export default Header;