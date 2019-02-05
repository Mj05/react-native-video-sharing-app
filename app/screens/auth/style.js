import { StyleSheet } from "react-native";

const signUpStyles = StyleSheet.create({
    signUpFormContainer: {
        marginTop: "10%",
        height: 300,
        width: 250
    },
    previewImage: {
        paddingVertical: 5,
        width: 80,
        height: 80,
        borderRadius: 75
    },
    input: {
        width: 250, 
        textAlign: "center"
    },
    registerButton: {
        width: 250, 
        borderRadius: 20, 
        backgroundColor: "#B4B4CD"
    },
    cancelButton: {
        backgroundColor: "#B4B4CD",
         height: 40
    },
    registerButtonView: {
        padding: "3%"
    },
    form: {
        marginBottom: "10%"
    }
});

const styles = {
    signUpStyles
}

export default styles;
