import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GLOBAL_CONFIG.COLOR.RED
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    alignItemCenter: {
        alignItems: 'center'
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    flexDirectionRow: {
        flexDirection: "row"
    },
    flexDirectionColumn: {
        flexDirection: "column"
    },
    alignLeft: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    alignRight: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    underlineText: {
        textDecorationLine: "underline"
    },
    whiteText: {
        color: GLOBAL_CONFIG.COLOR.WHITE
    },
    errorMessageFonts: {
        fontSize: 9
    }
});

export default GlobalStyles;
