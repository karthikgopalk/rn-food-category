import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function MealItem({ item }) {
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
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() =>
          navigation.navigate("mealsDetails", {
            item: item,
          })
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.sectionContainerRow}>
            <Text style={styles.paragraph}>{duration} M </Text>
            <Text style={styles.paragraph}>{complexity}</Text>
            <Text style={styles.paragraph}> {affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginVertical: 16,
    elevation: 4,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 6,
    top: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
  },
  paragraphBold: {
    fontSize: 18,
    fontWeight: "bold",
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
