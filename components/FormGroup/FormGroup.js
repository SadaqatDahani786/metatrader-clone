import { View, StyleSheet } from "react-native";

/**
 ** ** ===================================================================================
 ** ** ** Component [FormGroup]
 ** ** ===================================================================================
 */
const FormGroup = ({ children, delegatedStyles }) => {
  return (
    <View style={[styles.FormGroup, { ...delegatedStyles }]}>{children}</View>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  FormGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    borderBottomWidth: 1,
    borderColor: "hsl(0, 0%, 80%)",
    paddingVertical: 8,
    minHeight: 56,
  },
});

export default FormGroup;
