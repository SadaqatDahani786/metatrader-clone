import { Pressable, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

/**
 ** ** ===================================================================================
 ** ** ** Component [IconButton]
 ** ** ===================================================================================
 */
const IconButton = ({
  color = "BLACK",
  size = "MD",
  icon = "plus",
  onPress = () => "",
}) => {
  /*
   ** **
   ** ** ** Options
   ** **
   */
  //Sizes
  const sizes = {
    SM: 32,
    MD: 40,
    LG: 58,
  };

  //Colors
  const colors = {
    BLACK: "black",
    WHITE: "white",
    GRAY: "gray",
  };

  /*
   ** **
   ** ** ** Styles
   ** **
   */
  const styles = StyleSheet.create({
    container: {
      width: sizes[size],
      height: sizes[size],
      borderRadius: 1000,
      overflow: "hidden",
    },
    pressable: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        onPress={onPress}
      >
        <Feather color={colors[color]} size={sizes[size] - 8} name={icon} />
      </Pressable>
    </View>
  );
};

export default IconButton;
