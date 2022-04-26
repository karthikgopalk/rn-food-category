import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import IconButton from "../components/IconButon";
import { FavoriteContext } from "../store/context/favorites-context";
function MealsDetailsScreen({ route, navigation }) {
  const favoriteCtx = useContext(FavoriteContext);
  const { item } = route.params;
  const {
    id,
    title,
    imageUrl,
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = item;

  const mealsFavorite = favoriteCtx.ids.includes(id);

  function changeFavouriteHandler() {
    if (mealsFavorite) {
      favoriteCtx.removeFavorite(id);
    } else {
      favoriteCtx.addFavorite(id);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavouriteHandler}
            name={mealsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavouriteHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.sectionContainer}>
          <Text style={styles.paragraphBold}>Ingredients</Text>
          {ingredients.map((ingredient) => (
            <Text style={styles.paragraph} key={ingredient}>
              {ingredient}
            </Text>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.paragraphBold}>Steps</Text>
          {steps.map((step) => (
            <Text style={styles.paragraph} key={step}>
              {step}
            </Text>
          ))}
        </View>
        <View style={styles.sectionContainerRow}>
          <Text style={styles.paragraphBold}>Duration: </Text>
          <Text style={styles.paragraph}>{duration} Minutes</Text>
        </View>
        <View style={styles.sectionContainerRow}>
          <Text style={styles.paragraphBold}>Complexity: </Text>
          <Text style={styles.paragraph}>{complexity}</Text>
        </View>
        <View style={styles.sectionContainerRow}>
          <Text style={styles.paragraphBold}>Affordability: </Text>
          <Text style={styles.paragraph}>{affordability}</Text>
        </View>
        <View style={styles.sectionContainerRow}>
          <Text style={styles.paragraphBold}>Is Gluten Free: </Text>
          <Text style={styles.paragraph}>
            {isGlutenFree === true ? "yes" : "no"}
          </Text>
        </View>
        <View style={styles.sectionContainerRow}>
          <Text style={styles.paragraphBold}>Is Vegan: </Text>
          <Text style={styles.paragraph}>
            {isVegan === true ? "yes" : "no"}
          </Text>
        </View>
        <View style={styles.sectionContainerRow}>
          <Text style={styles.paragraphBold}>Is Vegetarian: </Text>
          <Text style={styles.paragraph}>
            {isVegetarian === true ? "yes" : "no"}
          </Text>
        </View>
        <View style={styles.sectionContainerRow}>
          <Text style={styles.paragraphBold}>Is Lactose Free: </Text>
          <Text style={styles.paragraph}>
            {isLactoseFree === true ? "yes" : "no"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default MealsDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  image: {
    marginVertical: 8,
    width: "100%",
    height: 200,
  },
  paragraph: {
    fontSize: 16,
    paddingHorizontal: 5,
    color: "white",
  },
  paragraphBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  sectionContainer: {
    marginVertical: 8,
  },
  sectionContainerRow: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
