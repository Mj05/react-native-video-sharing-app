export const HANDLE_ERROR = "HANDLE_ERROR";
export const GET_VIDEO_CONTENT = "GET_VIDEO_CONTENT";
export const SET_VIDEO_CONTENT = "SET_VIDEO_CONTENT";

export const getVideoContent = (success_callback, error_callback) => ({
    type: GET_VIDEO_CONTENT,
    success_callback: success_callback,
    error_callback: error_callback
});