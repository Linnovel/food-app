import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreens from "./screens/CategoriesScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailsScreens from "./screens/MealDetailsScreens";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreens}
            options={{
              title: "Food Categorries",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
          />

          <Stack.Screen name="MealDetails" component={MealDetailsScreens}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
