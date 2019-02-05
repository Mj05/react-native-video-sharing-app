import { HANDLE_ERROR, REGISTER_USER } from "./action";

const initialState = {
  is_logged_in: false,
  is_registered: false,
  active_member_profile: {}
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
        is_registered: true,
        active_member_profile: setActiveMemberProfile(state, action.name, action.email, action.password, action.profile_img)
      }
    case HANDLE_ERROR:
      return state;
      
    default:
      return state;
  }
};
