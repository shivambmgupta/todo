import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Colors } from '../../constants';
const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
    outerWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        backgroundColor: Colors.TwitterBlue,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFF"
    },
    top: {
        // backgroundColor: "blue",
        alignItems: "center",
        width,
        paddingVertical: 40,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    row: {
        marginVertical: 10
    },
    button: {
        minHeight: 40,
        minWidth: 100,
        borderRadius: 30
    },
    buttonText: {
        fontWeight: "bold",
        color: "#FFF"
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    scrollview: {
       width,
       padding: 20
    },
    roundButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        elevation: 10
    },
    deleteButton: { backgroundColor: "red" },
    editButton: { backgroundColor: Colors.TwitterBlue },
    datePickerContainer: { justifyContent: "space-between", alignItems: "center", flexDirection: "row"}
})