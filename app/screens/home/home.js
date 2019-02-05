import React, { Component } from "react";
import { View, Text, ActivityIndicator, FlatList, ScrollView, RefreshControl, ImageBackground, Image, TouchableOpacity, Linking } from "react-native";
import GlobalStyles from "../../setup/style";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getVideoContent } from "../../models/home/action";
import MessageBox from "../../components/message-box";
import styles from "./style";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      message: null,
      visibleMessageBox: false,
      dataSource: [],
      refreshing: false 
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
      isLoading: false,
      refreshing: false,
      dataSource: this.props.videos
    });
  }

  getVideoContentFailed = (error_message) => {
    this.setState({
      isLoading: false,
      refreshing: false,
      visibleMessageBox: true,
      message: error_message
    });
    setTimeout(() => {
      this.setState({
       visibleMessageBox: false
      })
    }, 3000);
  }

  _onRefresh = () => {
    this.setState({ refreshing: true, visibleMessageBox: false });
    this.props.dispatch(getVideoContent(this.getVideoContentSuccess, (error_message) => this.getVideoContentFailed(error_message)));
  };

  _renderItem = (video) => {
    return (
      <View style={[GlobalStyles.container, GlobalStyles.alignItemCenter]}>
        <View style={styles.videoContainer}>
          <View style={[styles.thumbnailContainer, GlobalStyles.center]}>
            <ImageBackground
                style={[styles.videoThumbnail, GlobalStyles.center]}
                source={{
                  uri: video.thumbnail_url
                }}>
                <TouchableOpacity onPress={() => {
                  Linking.openURL(video.video_url);
                }}>
                  <Image style={styles.playIcon} source={{ uri: "https://elstreeweb.weebly.com/uploads/1/4/9/9/14997472/546484_orig.png?1"}} />
                </TouchableOpacity>  
            </ImageBackground>
            <View style={[GlobalStyles.flexDirectionRow, GlobalStyles.alignItemCenter]}>  
              <Text style={styles.videoTitle}>{video.title}</Text>
              <Image style={styles.shareIcon} source={{ uri: "https://www.clipartmax.com/png/small/61-610361_index-of-pound-sets-social-media-social-media-icons-png-waterdrop-share.png"}} />
            </View>
          </View>
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
          <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
              colors={[GLOBAL_CONFIG.COLOR.RED]}
            />
          }
           onMomentumScrollEnd={() => {
             this.setState({
              dataSource: this.state.dataSource.concat(this.props.videos)
            })
          }}>
						<FlatList
							data={this.state.dataSource}
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