import { Text, StyleSheet } from "react-native";

/**
 ** ** ===================================================================================
 ** ** ** Component [FormHelperText]
 ** ** ===================================================================================
 */
const FormHelperText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 12,
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default FormHelperText;
