import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'

function IconButton({ onPress, icon, color }) {
    return <Pressable onPress={onPress} style={({ onPressable }) => onPressable && onPressable}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
}

export default IconButton

const styles = StyleSheet.create({
    onPressable: {
        opacity: 0.7
    }
})