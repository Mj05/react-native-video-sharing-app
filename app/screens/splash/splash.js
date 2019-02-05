import React,{Component} from 'react';
import {View,Image} from 'react-native';
import styles from './style';
import GlobalStyles from '../../setup/style';

class Splash extends Component{
  render() {
    return (
      <View style={[GlobalStyles.container, GlobalStyles.center]}>
        <Image style={styles.image} source={{uri : "https://facebook.github.io/react-native/docs/assets/favicon.png"}}></Image>
      </View>
    );
  }
}

export default Splash;

