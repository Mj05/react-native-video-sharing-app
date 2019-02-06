import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profileFormContainer: {
        marginTop: "10%",
        height: 300,
        width: 250
    },
    previewImage: {
        paddingVertical: 5,
        width: 80,
        height: 80,
        borderRadius: 75,
        borderWidth: 1,
        borderColor: GLOBAL_CONFIG.COLOR.WHITE
    },
    input: {
        width: 250, 
        textAlign: "center"
    },
    registerButton: {
        width: 250, 
        borderRadius: 20, 
        backgroundColor: "#9D1930"
    },
    cancelButton: {
        backgroundColor: "#9D1930",
         height: 40
    },
    registerButtonView: {
        padding: "3%"
    },
    form: {
        marginBottom: "10%"
    },
    imageStyle: {
        borderRadius: 75,
    },
    actionView: {
      marginBottom: "5%"
    }
});

export default styles;