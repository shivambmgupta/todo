import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        justifyContent: "space-between",
        flex: 1
    },
    backgroundColorLight: {
        backgroundColor: "#DDD"
    },
    backgroundColorDark: {
        backgroundColor: "#222"
    },
    titleText: { fontSize: 24, fontWeight: "bold" },
    descriptionText: { fontSize: 18, fontStyle: "italic" },
    timeText: { fontSize: 14 },
    textCut: {
        textDecorationLine: 'line-through',
        color: '#AAAAAA'
    },
    rightContainer: {
        justifyContent: "center",
        alignItems: "flex-end"
    },
    row: { flexDirection: "row", justifyContent: "space-between" }
})