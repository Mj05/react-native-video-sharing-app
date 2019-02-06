import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import GlobalStyles from "../../setup/style";
import PhotoUpload from 'react-native-photo-upload'
import styles from "./style";
import { signInUser } from "../../models/auth/action";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      signInErrorVisible: false,
      error_message: null
    }
  }

  static propTypes = {
    dispatch: PropTypes.func
  };

  signIn = () => {
    if (this.state.email == "admin@gmail.com" && this.state.password == "123456") {
      this.props.dispatch(signInUser(this.state.email, this.state.password));
    }else {
      this.setState({
        signInErrorVisible: true,
        error_message: GLOBAL_LANG.SIGNIN_ERROR
      });
    }
  }

  render() {
    return (
      <View style={[GlobalStyles.container]}>
      <ScrollView>
       <View style={[GlobalStyles.alignItemCenter]}>
          <View style={styles.signUpStyles.signUpFormContainer}>
            <View style={GlobalStyles.alignItemCenter}>
             <Image
              style={styles.signUpStyles.previewImage}
              resizeMode='cover'
              source={{uri: "https://previews.123rf.com/images/fokaspokas/fokaspokas1806/fokaspokas180600445/103144809-share-icon-arrow-and-square-white-icon-with-shadow-on-transparent-background.jpg"}}
              />
            </View>  
            <View style={[GlobalStyles.alignItemCenter, styles.loginStyles.loginTitleView]}>
              <Text style={styles.loginStyles.loginTitleText}>{GLOBAL_LANG.INSTAN}</Text>
            </View>
            <View style={[GlobalStyles.flexDirectionColumn, styles.signUpStyles.form]}>
              <TextInput
                style={styles.signUpStyles.input}
                onChangeText={email =>
                  this.setState({ email })
                }
                placeholder={GLOBAL_LANG.EMAIL_ADDRESS}
                placeholderTextColor={GLOBAL_CONFIG.COLOR.WHITE}
                underlineColorAndroid={GLOBAL_CONFIG.COLOR.WHITE}
                value={this.state.email}
              />
              <TextInput
                style={styles.signUpStyles.input}
                onChangeText={password =>
                  this.setState({ password })
                }
                placeholder={GLOBAL_LANG.PASSWORD}
                placeholderTextColor={GLOBAL_CONFIG.COLOR.WHITE}
                value={this.state.password}
                secureTextEntry={true}
              />

              {
                (this.state.signInErrorVisible) ?
                <View style={[GlobalStyles.center, styles.loginStyles.errorMessageView]}>
                  <Text style={[GlobalStyles.whiteText, GlobalStyles.errorMessageFonts]}>{this.state.error_message}</Text>
                </View> : null
              }

              <TouchableOpacity style={[GlobalStyles.center, styles.signUpStyles.registerButton]} onPress={() => {
                this.signIn();
              }}>
                <View style={styles.signUpStyles.registerButtonView}>
                   <Text style={GlobalStyles.whiteText}>{GLOBAL_LANG.SIGNIN}</Text>
                </View>
              </TouchableOpacity>
           </View>
          </View>
        </View>
        </ScrollView>
        <View style={[GlobalStyles.center, styles.loginStyles.footer, GlobalStyles.flexDirectionRow]}>
          <View style={GlobalStyles.alignLeft}>
            <TouchableOpacity>
              <Text style={GlobalStyles.whiteText}>{GLOBAL_LANG.FORGOT_PASSWORD}</Text>
            </TouchableOpacity>  
         </View>
         <View style={[GlobalStyles.alignRight , styles.loginStyles.horizontalLine]}>
           <TouchableOpacity onPress={() => {
             this.props.navigation.push("SignUp");
            }}>
             <Text style={[GlobalStyles.underlineText, GlobalStyles.whiteText]}>{GLOBAL_LANG.CREATE_ACCOUNT}</Text>
           </TouchableOpacity>
         </View>
        </View>
      </View>
    );
  } 
}

export default connect()(Login);