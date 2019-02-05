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

const loginStyles = StyleSheet.create({
    horizontalLine: {
        borderLeftColor: GLOBAL_CONFIG.COLOR.WHITE,
        borderLeftWidth: 2
    },
    loginTitleText: {
        fontSize: 25, 
        fontWeight: "500", 
        color: GLOBAL_CONFIG.COLOR.WHITE
    },
    loginTitleView: {
        padding: "3%"
    },
    footer: {
        height: 40, 
        marginLeft: "5%", 
        marginRight: "5%"
    },
    errorMessageView: {
        marginBottom: '3%'
    }  
});

const styles = {
    signUpStyles,
    loginStyles
}

export default styles;
