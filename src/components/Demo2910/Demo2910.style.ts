import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    imgBg: {
        flex: 1,
    },
    imgBgContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: '40%',
        aspectRatio: 2 / 0.5,
        backgroundColor: '#00ff00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'

    },
    text: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
        fontWeight: '600'
    },
    label: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 10,
        fontWeight: '700'


    },
    textInput: {
        width: 300,
        padding: 5,
        backgroundColor: '#fff'
    },
    wrapper: {
        marginBottom: 20,
    }
});