import { StyleSheet, View } from "react-native";

/**
 ** ** ===================================================================================
 ** ** ** Component [Divider]
 ** ** ===================================================================================
 */
const Divider = ({ color = "gray", height = 1, vertical = false }) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: vertical ? "100%" : height,
          width: vertical ? 1 : "100%",
          borderColor: color,
        },
      ]}
    />
  );
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderTopWidth: 0,
  },
});

export default Divider;
