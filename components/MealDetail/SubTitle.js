import { View, Text, StyleSheet } from "react-native"

function SubTitle({ children }) {
    return <View style={styles.subtituleContainer}>
        <Text style={styles.subtitle}> {children} </Text>
    </View>
}
export default SubTitle

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    subtituleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
    }
})