import { StyleSheet, Dimensions } from "react-native";
const videoThumbnailWidth = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
    videoThumbnail: {
        height: 200,
        width: videoThumbnailWidth
    },
    videoContainer: {
        padding: "3%"
    },
    thumbnailContainer: {
        backgroundColor: GLOBAL_CONFIG.COLOR.WHITE,
        padding: "2%",
        borderRadius: 10
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
    }
});

export default styles;
