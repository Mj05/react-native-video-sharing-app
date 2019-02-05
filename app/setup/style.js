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
    }
});

export default GlobalStyles;
