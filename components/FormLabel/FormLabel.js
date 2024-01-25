import { StyleSheet, Text } from "react-native";

/**
 ** ** ===================================================================================
 ** ** ** Component [FormLabel]
 ** ** ===================================================================================
 */
const FormLabel = ({ text, children }) => {
  return (
    <Text style={styles.label}>{text !== undefined ? text : children}</Text>
  );
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "hsl(0, 0%, 40%)",
  },
});

export default FormLabel;
