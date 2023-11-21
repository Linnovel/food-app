import { Pressable, View, Text, StyleSheet, Platform, } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{ color: "#ccc" }}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.titleStyle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

// Optimizar los estilos para que sea vean bien en todos los dispositivos

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        textShadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    titleStyle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonPressed: {
        opacity: 0.5,
    },
});
