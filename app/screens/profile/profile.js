import React, { Component } from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView } from "react-native";
import GlobalStyles from "../../setup/style";
import PhotoUpload from 'react-native-photo-upload'
import styles from "./style";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../../components/header";
import { updateProfile, logoutUser } from "../../models/auth/action";

class Profile extends Component {
    static navigationOptions = ({ navigation }) => ({
		header: <Header title={GLOBAL_LANG.PROFILE}  navigation={navigation} />
    });

  constructor(props) {
    super(props);
    this.state = {
      full_name: this.props.profile.name,
      email: this.props.profile.email,
      profile_image: this.props.profile.profile_img,
      password: this.props.profile.password,
      updateProfile: false
    }
  }

  static propTypes = {
    dispatch: PropTypes.func,
    profile: PropTypes.object
  };

  updateUserProfile = () => {
    if (this.state.full_name && this.state.email && this.state.password) {
      this.props.dispatch(updateProfile(this.state.full_name, this.state.email, this.state.password, this.state.profile_image));
    }
  }

  logout = () => {
      this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <View style={[GlobalStyles.container]}>
      <ScrollView>
       <View style={[GlobalStyles.alignItemCenter]}>
          <View style={styles.profileFormContainer}>
            <PhotoUpload
              onPhotoSelect={avatar => {
                if (avatar) {
                  this.setState({ profile_image: avatar})
                }
              }}
            >
                <ImageBackground
                  style={[styles.previewImage, GlobalStyles.center]}
                  imageStyle={styles.imageStyle}
                  resizeMode='cover'
                  source={{
                    uri: this.state.profile_image
                  }}
                />
            </PhotoUpload>
            <View style={[GlobalStyles.flexDirectionColumn, styles.form]}>
              <TextInput
                style={styles.input}
                onChangeText={full_name =>
                  this.setState({ full_name })
                }
                placeholder={GLOBAL_LANG.FULL_NAME}
                placeholderTextColor={GLOBAL_CONFIG.COLOR.WHITE}
                underlineColorAndroid={GLOBAL_CONFIG.COLOR.WHITE}
                value={this.state.full_name}
                editable={this.state.updateProfile}
              />
              <TextInput
                style={styles.input}
                onChangeText={email =>
                  this.setState({ email })
                }
                placeholder={GLOBAL_LANG.EMAIL_ADDRESS}
                placeholderTextColor={GLOBAL_CONFIG.COLOR.WHITE}
                underlineColorAndroid={GLOBAL_CONFIG.COLOR.WHITE}
                value={this.state.email}
                editable={this.state.updateProfile}
              />
              <TextInput
                style={styles.input}
                onChangeText={password =>
                  this.setState({ password })
                }
                placeholder={GLOBAL_LANG.PASSWORD}
                placeholderTextColor={GLOBAL_CONFIG.COLOR.WHITE}
                value={this.state.password}
                secureTextEntry={true}
                editable={this.state.updateProfile}
              />
           </View>
           <View style={[GlobalStyles.flexDirectionRow, styles.actionView]}>
                <View style={GlobalStyles.alignLeft}>
                    <TouchableOpacity onPress={() => {
                        this.logout();
                    }}>
                    <Text style={[GlobalStyles.underlineText, GlobalStyles.whiteText]}>{GLOBAL_LANG.LOGOUT}</Text>
                    </TouchableOpacity>  
                </View>
                <View style={[GlobalStyles.alignRight , styles.horizontalLine]}>
                <TouchableOpacity onPress={() => {
                 if (this.state.updateProfile) {
                     this.setState({
                         updateProfile: false
                     });
                     this.updateUserProfile();
                 }else {
                     this.setState({
                         updateProfile: true
                     });
                 }
                }}>
                    <Text style={[GlobalStyles.underlineText, GlobalStyles.whiteText]}>{this.state.updateProfile ? GLOBAL_LANG.SAVE :GLOBAL_LANG.UPDATE_PROFILE }</Text>
                </TouchableOpacity>
                </View>
          </View>
        </View>
        </View>
        </ScrollView>
        <View style={[GlobalStyles.center, styles.cancelButton]}>
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




const mapStateToProsp = state => {
    return {
      profile: state.Auth.active_member_profile
    };
};
  
export default connect(mapStateToProsp)(Profile);