import React,{Component} from 'react';
import {View,Image} from 'react-native';
import styles from './style';
import GlobalStyles from '../../setup/style';

class Splash extends Component{
  render() {
    return (
      <View style={[GlobalStyles.container, GlobalStyles.center]}>
        <Image style={styles.image} source={{ uri: "https://previews.123rf.com/images/fokaspokas/fokaspokas1806/fokaspokas180600445/103144809-share-icon-arrow-and-square-white-icon-with-shadow-on-transparent-background.jpg"}}></Image>
      </View>
    );
  }
}

export default Splash;

