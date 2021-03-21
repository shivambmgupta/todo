import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Colors } from '../../constants';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    outerWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        width,
        height: 100,
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row"
    },
    top: {
        alignItems: "flex-end",
        width,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    profilePictureContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    body: {
        flex: 1,
        width,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    scrollview: {
        width: width * 0.9,
        padding: 20,
    },
    scrollContentContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    rightFloatingButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 20
    },
    leftFloatingButtonContainer: {
        position: "absolute",
        bottom: 20,
        left: 20
    },
    floatingButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.TwitterBlue
    },
    buttonText: {
        color: Colors.WHITE,
        fontSize: 40,
        fontWeight: "bold"
    },
    empty: {
        justifyContent: "center",
        alignItems: "center",
        height: height * 0.6
    },
    emptyText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})