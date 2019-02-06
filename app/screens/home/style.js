import { StyleSheet, Dimensions } from "react-native";
const videoThumbnailWidth = Dimensions.get("window").width - 70;

const styles = StyleSheet.create({
    videoThumbnail: {
        height: 200,
        width: videoThumbnailWidth,
        marginTop: -30
    },
    videoContainer: {
        padding: "5%"
    },
    thumbnailContainer: {
        backgroundColor: GLOBAL_CONFIG.COLOR.WHITE,
        padding: "5%",
        borderRadius: 50
    },
    playIcon: {
        height: 50,
        width: 50
    },
    shareIcon: {
        height: 20,
        width: 20
    },
    videoTitle: {
        padding: '2%',
        fontWeight: "500"
    },
    imageStyle: {
        borderRadius: 50
    }
});

export default styles;
