export const HANDLE_ERROR = "HANDLE_ERROR";
export const REGISTER_USER = "REGISTER_USER";

export const registerNewUser = (name, email, password, profile_img) => ({
    type: REGISTER_USER,
    name: name,
    email: email,
    password: password,
    profile_img: profile_img
});
