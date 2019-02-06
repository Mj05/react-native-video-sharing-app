import { HANDLE_ERROR, REGISTER_USER, SIGN_IN, UPDATE_PROFILE, LOGOUT_USER } from "./action";

const initialState = {
  is_logged_in: false,
  active_member_profile: {
    "name": "Admin",
    "email": "admin@gmail.com",
    "password": "123456",
    "profile_img": "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg"
  }
};

setActiveMemberProfile = (state, name, email, password, profile_img) => {
  state.active_member_profile = {
    "name": name,
    "email": email,
    "password": password,
    "profile_img": profile_img
  }
  return state.active_member_profile;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        is_logged_in: true,
        active_member_profile: setActiveMemberProfile(state, action.name, action.email, action.password, action.profile_img)
      }
    case SIGN_IN:
      return {
        ...state,
        is_logged_in: true
      }
    case UPDATE_PROFILE:
      return {
        ...state,
        active_member_profile: setActiveMemberProfile(state, action.name, action.email, action.password, action.profile_img)
      }
    case LOGOUT_USER:
      return {
        ...state,
        is_logged_in: false
      }   
    case HANDLE_ERROR:
      return state;
      
    default:
      return state;
  }
};
