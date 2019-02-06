import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    messageBox: {
        height: 40,
        backgroundColor: GLOBAL_CONFIG.COLOR.WHITE
    },
    header: {
        height: 50,
        backgroundColor: "#9D1930"
	},
	titlePaddingLeft: {
		paddingLeft: '10%'
	},
	alignItemCenter: {
		alignItems: 'center'
    },
    titleText: {
        fontSize: 21,
        fontWeight: "500"
    }
});

export default styles;