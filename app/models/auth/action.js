export const HANDLE_ERROR = "HANDLE_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const SIGN_IN = "SIGN_IN";

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