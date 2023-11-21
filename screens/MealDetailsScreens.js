import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import { useLayoutEffect } from 'react'
import IconButton from "../components/IconButton";


function MealDetailsScreens({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='heart' color="white" onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler])
    return (
        <ScrollView style={styles.root}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailsText}
            />
            <View style={styles.listOut}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreens;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailsText: {
        color: "white",
    },
    listContainer: {
        width: "80%",
    },
    listOut: {
        alignItems: 'center'
    },
    root: {
        marginBottom: 32
    }
});
