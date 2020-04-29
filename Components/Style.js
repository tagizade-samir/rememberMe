import { StyleSheet, Dimensions } from 'react-native'

const windowH = Dimensions.get('window').height

export const todoItem = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20
    },
    titleContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1,
        width: 200
    },
    textContainer: {
        marginBottom: 10,
        textAlign: 'justify',
        fontStyle: 'italic'
    },
    text: {
        fontSize: 18
    },
    date: {
        textAlign: 'right',
        fontWeight: '100',
    },
    deleteBtnContainer: {
        backgroundColor: 'steelblue',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 10
    },
    deleteBtnText: {
        textTransform: 'uppercase',
    },
    btnContainer: {
        flexDirection: 'row',
    }
})

export const headerStyles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'steelblue',
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headTitle: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontFamily: 'monospace',
        letterSpacing: 1,
        textAlign: 'center'
    },
    btnContainer: {
        backgroundColor: 'lightgray',
        padding: 10
    },
    btn: {
        fontSize: 20,
    }
})

export const todoListStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    scrollContainer: {
        flex: 1,
        padding: 10
    },
    btnContainer: {
        position: 'absolute',
        paddingHorizontal: 20,
        backgroundColor: 'steelblue',
        bottom: 20,
        right: 20,
        borderRadius: 50
    },
    btnText: {
        fontSize: 50
    },
    defaultText: {
        fontSize: 30,
        color: 'gray',
        textAlign: 'center',
        marginTop: windowH / 4
    },
    clearBtnContainer: {
        backgroundColor: 'steelblue',
        marginBottom: 10,
        padding: 10
    },
    clearBtnText: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export const addStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    form: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    titleInput: {
        backgroundColor: 'white',
        fontSize: 16,
        padding: 10
    },
    formContainer: {
        paddingVertical: 10
    },
    checksContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleLabel: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    textLabel: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    textInput: {
        backgroundColor: 'white',
        height: 200,
        fontSize: 16,
        textAlignVertical: 'top',
        padding: 10,
        lineHeight: 30
    },
    btnContainer: {
        backgroundColor: 'steelblue',
        marginTop: 20,
        padding: 10,
        alignSelf: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export const checkboxStyles = StyleSheet.create({
    box: {
        width: 40,
        height: 40,
        borderWidth: 1,
        marginBottom: 5,
        alignSelf: 'center'
    },
    container: {
        width: 50,
    },
    text: {
        textAlign: 'center'
    }
})

export const filterStyles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        width: 100,
        position: 'absolute',
        top: 80,
        zIndex: 10,
        right: 0,
        borderWidth: 2,
    },
    rowContainer: {
        padding: 10,
        width: 80,
        alignSelf: 'center'
    },
    row: {
        textAlign: 'center',
        textTransform: 'uppercase'
    }
})