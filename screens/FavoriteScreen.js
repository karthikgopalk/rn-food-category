import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import MealsList from "../components/mealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorites-context";
function FavoriteScreen() {
  const favoriteCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>You have no favorite meal yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}
export default FavoriteScreen;
const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
