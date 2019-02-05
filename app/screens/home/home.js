import React, { Component } from "react";
import { View, Text, ActivityIndicator, FlatList, ScrollView } from "react-native";
import GlobalStyles from "../../setup/style";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVideoContent } from "../../models/home/action";
import MessageBox from "../../components/message-box";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      message: null,
      visibleMessageBox: false 
    }
  }

  static propTypes = {
    dispatch: PropTypes.func,
    videos: PropTypes.array
  };

  componentWillMount () {
    this.setState({
      isLoading: true
    });
    this.props.dispatch(getVideoContent(this.getVideoContentSuccess, (error_message) => this.getVideoContentFailed(error_message)));
  }

  getVideoContentSuccess = () => {
    this.setState({
      isLoading: false
    });
  }

  getVideoContentFailed = (error_message) => {
    this.setState({
      isLoading: false,
      visibleMessageBox: true,
      message: error_message
    });
    setTimeout(() => {
      this.setState({
       visibleMessageBox: false
      })
    }, 3000);
  }

  _renderItem = (video) => {
    return (
      <View style={[GlobalStyles.container, GlobalStyles.alignItemCenter]}>
        <View>
          <Text>{video.title}</Text>
        </View>
      </View>
    )
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[GlobalStyles.container, GlobalStyles.center, GlobalStyles.flexDirectionColumn]}>
          <ActivityIndicator size="large" color={GLOBAL_CONFIG.COLOR.WHITE} />
          <Text style={GlobalStyles.whiteText}>{GLOBAL_LANG.LOADING}</Text>
        </View>
      )
    }else{
      return (
        <View style={[GlobalStyles.container]}>
          <ScrollView>
						<FlatList
							data={this.props.videos}
							renderItem={(video) => this._renderItem(video.item)}
							keyExtractor={(video, index) => index.toString()}
						/>
					</ScrollView>
          {
            (this.state.visibleMessageBox) ?
            <MessageBox message={this.state.message} /> : null
          }
        </View>
      );
    }
  } 
}

const mapStateToProsp = state => {
  return {
    videos: state.Home.videos
  };
};

export default connect(mapStateToProsp)(Home);