import { Pressable, StyleSheet, View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

/**
 ** ** ===================================================================================
 ** ** ** Component [IconButton]
 ** ** ===================================================================================
 */
const IconButton = ({
  color = "BLACK",
  size = "MD",
  icon = "plus",
  iconSet = "FEATHER",
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

  //Select IconSet
  const IconSet =
    iconSet === "FEATHER" ? (
      <Feather color={colors[color]} size={sizes[size] - 8} name={icon} />
    ) : (
      <AntDesign color={colors[color]} size={sizes[size] - 8} name={icon} />
    );

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        onPress={onPress}
      >
        {IconSet}
      </Pressable>
    </View>
  );
};

export default IconButton;
