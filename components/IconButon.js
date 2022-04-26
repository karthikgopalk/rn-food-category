import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ name, onPress, color }) {
  return (
    <Pressable>
      <Ionicons
        name={name}
        size={24}
        color={color}
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      />
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.25,
  },
});
