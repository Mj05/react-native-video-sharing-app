import React, { Component } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, BackHandler } from "react-native";
import GlobalStyles from "../../setup/style";
import PhotoUpload from 'react-native-photo-upload'
import styles from "./style";
import { registerNewUser } from "../../models/auth/action";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SignUp extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
      full_name: null,
      email: null,
      password: null,
      profile_image: null,
      signUpErrorVisible: null,
      error_message: null
    }
  }

  static propTypes = {
    dispatch: PropTypes.func
  };

  registerUser = () => {
    if (this.state.full_name && this.state.email && this.state.password) {
      this.props.dispatch(registerNewUser(this.state.full_name, this.state.email, this.state.password, this.state.profile_image));
    }else {
      this.setState({
        signUpErrorVisible: true,
        error_message: GLOBAL_LANG.SIGNUP_ERROR
      });
    }
  }

  componentWillMount() {
    // Handle device back press to exit app
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick = () => {
    BackHandler.exitApp()
  };


  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );

  }

  render() {
    return (
      <View style={[GlobalStyles.container]}>
      <ScrollView>
       <View style={[GlobalStyles.alignItemCenter]}>
          <View style={styles.signUpStyles.signUpFormContainer}>
            <PhotoUpload
              onPhotoSelect={avatar => {
                if (avatar) {
                  this.setState({ profile_image: avatar})
                }
              }}
            >
                <ImageBackground
                  style={[styles.signUpStyles.previewImage, GlobalStyles.center]}
                  imageStyle={styles.signUpStyles.imageStyle}
                  resizeMode='cover'
                  source={{
                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                  }}
                ><Text>{GLOBAL_LANG.UPLOAD}</Text></ImageBackground>
            </PhotoUpload>
            <View style={[GlobalStyles.flexDirectionColumn, styles.signUpStyles.form]}>
              <TextInput
                style={styles.signUpStyles.input}
                onChangeText={full_name =>
                  this.setState({ full_name })
                }
                placeholder={GLOBAL_LANG.FULL_NAME}
                placeholderTextColor={GLOBAL_CONFIG.COLOR.WHITE}
                underlineColorAndroid={GLOBAL_CONFIG.COLOR.WHITE}
                value={this.state.full_name}
              />
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
                (this.state.signUpErrorVisible) ?
                <View style={[GlobalStyles.center, styles.loginStyles.errorMessageView]}>
                  <Text style={[GlobalStyles.whiteText, GlobalStyles.errorMessageFonts]}>{this.state.error_message}</Text>
                </View> : null
              }

              <TouchableOpacity style={[GlobalStyles.center, styles.signUpStyles.registerButton]} onPress={() => {
                this.registerUser();
              }}>
                <View style={styles.signUpStyles.registerButtonView}>
                   <Text style={GlobalStyles.whiteText}>{GLOBAL_LANG.REGISTER}</Text>
                </View>
              </TouchableOpacity>
           </View>
          </View>
        </View>
        </ScrollView>
        <View style={[GlobalStyles.center, styles.signUpStyles.cancelButton]}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.goBack();
          }}>
            <Text style={GlobalStyles.whiteText}>{GLOBAL_LANG.CANCEL}</Text>
         </TouchableOpacity>
        </View>
      </View>
    );
  } 
}

export default connect()(SignUp);