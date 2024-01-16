import { StyleSheet, View } from "react-native";

const Divider = ({ color = "gray" }) => {
  return <View style={[styles.container, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
  },
});

export default Divider;
