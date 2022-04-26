import {
  View,
  StyleSheet,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function renderCategoriesItem(itemData) {
    function pressHandler() {
      navigation.navigate("Meals Overview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.rootContainer, { marginTop: width < 380 ? 30 : 50 }]}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoriesItem}
        numColumns={2}
      />
    </View>
  );
}
export default CategoriesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
