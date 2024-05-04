
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center"
    },
    boxStyle: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    selectedVariantView: {
        marginRight: 10,
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10
    }
});

export default styles;