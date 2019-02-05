import { takeEvery, call, put, select, fork, push } from "redux-saga/effects";
GLOBAL_CONFIG = require("./global");
GLOBAL_LANG = require("./lang");
import { NetInfo, Alert} from "react-native";

import {
    GET_VIDEO_CONTENT,
    SET_VIDEO_CONTENT
} from "../models/home/action";


// Check Internet Connectivity
function* checkConnectivity() {
  let isConnected = yield call(NetInfo.isConnected.fetch);
	if (!isConnected) {
		Alert.alert(
			'No Internet',
			'Please check your Intenet Connection!',
			[
				{
					text: 'OK'
				}
			],
			{ cancelable: false }
		);
	}
	return isConnected;
}

/**
 * ==========================================================================================================================
 * Functions to get server response
 * ==========================================================================================================================
 */

function getVideos() {
	return fetch(GLOBAL_CONFIG.API_URL, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json' // specifying the Content-Type
		})
	});
}


  /**
 * ==========================================================================================================================
 * Functions to handle reducers actions and iniitiate api calls
 * ==========================================================================================================================
 */

const getVideoContent = function*(action) {
    try {
      let connection = yield call(checkConnectivity);
      if (connection) {
        const response = yield call(getVideos);
        const result = yield response.json();
  
        if (result.videos.length >= 1) {
            yield put({
                type: SET_VIDEO_CONTENT,
                result
            });
            yield call(action.success_callback);
        } else {
          return yield call(action.error_callback, GLOBAL_LANG.COMMON_ERROR);
        }
      }else {
        return yield call(action.error_callback, GLOBAL_LANG.NETWORK_ERROR);
      }
    } catch (e) {
       return yield call(action.error_callback, GLOBAL_LANG.COMMON_ERROR);
    }
  };



/**
 * ==========================================================================================================================
 * Listener for redux actions
 * ==========================================================================================================================
 */

const rootSaga = function*() {
    yield takeEvery(GET_VIDEO_CONTENT, getVideoContent);
};

export default rootSaga;
