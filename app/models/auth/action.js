export const HANDLE_ERROR = "HANDLE_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const SIGN_IN = "SIGN_IN";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const LOGOUT_USER = "LOGOUT_USER";

export const registerNewUser = (name, email, password, profile_img) => ({
    type: REGISTER_USER,
    name: name,
    email: email,
    password: password,
    profile_img: profile_img
});

export const signInUser = (email, password) => ({
    type: SIGN_IN,
    email: email,
    password: password
});

export const updateProfile = (name, email, password, profile_img) => ({
    type: UPDATE_PROFILE,
    name: name,
    email: email,
    password: password,
    profile_img: profile_img
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});