import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
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
      profile_image: null
    }
  }

  static propTypes = {
    dispatch: PropTypes.func
  };

  registerUser = () => {
    this.props.dispatch(registerNewUser(this.state.full_name, this.state.email, this.state.password, this.state.profile_image));
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
                <Image
                  style={styles.signUpStyles.previewImage}
                  resizeMode='cover'
                  source={{
                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                  }}
                />
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
              <TouchableOpacity style={[GlobalStyles.center, styles.signUpStyles.registerButton]} onPress={() => {
                this.registerUser();
              }}>
                <View style={styles.signUpStyles.registerButtonView}>
                   <Text>{GLOBAL_LANG.REGISTER}</Text>
                </View>
              </TouchableOpacity>
           </View>
          </View>
        </View>
        </ScrollView>
        <View style={[GlobalStyles.center, styles.signUpStyles.cancelButton]}>
          <TouchableOpacity onPress={() => {}}>
            <Text>{GLOBAL_LANG.CANCEL}</Text>
         </TouchableOpacity>
        </View>
      </View>
    );
  } 
}

export default connect()(SignUp);