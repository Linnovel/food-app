import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable style={({ pressed }) =>
            (pressed ? styles.buttonPressed : null
            )}
                android_ripple={{ color: "#ccc" }}
                onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.titleContainer}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        textShadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        overflow: 'hidden',
        borderRadius: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    titleContainer: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
    buttonPressed: {
        opacity: 0.5,
    },
})