import {StyleSheet} from 'react-native'

export const todoItem = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 20
    },
    titleContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1
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
    }
})

export const headerStyles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        padding: 10
    },
    headTitle: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontFamily: 'monospace',
        letterSpacing: 2,
        textAlign: 'center'
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