import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "../components/mealsList/MealItem";
import MealsList from "../components/mealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (Category) => Category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayMeals} />;
}
export default MealsOverviewScreen;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
