import { HANDLE_ERROR, SET_VIDEO_CONTENT } from "./action";

const initialState = {
    videos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEO_CONTENT:
      return {
        ...state,
        videos: action.result.videos
      }  
    case HANDLE_ERROR:
      return state;
      
    default:
      return state;
  }
};
