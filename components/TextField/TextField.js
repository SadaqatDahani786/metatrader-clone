import { TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

//Components
import FormGroup from "../FormGroup";
import FormLabel from "../FormLabel/";

/*
 ** ** =============================================================
 ** ** ** Component [TextField]
 ** ** =============================================================
 */
const TextField = ({
  icon,
  defaultValue,
  value,
  onChangeText,
  label,
  placeholder,
  type,
  border = true,
  alignLeft = false,
  color = "BLACK",
}) => {
  return (
    <FormGroup delegatedStyles={{ borderBottomWidth: border ? 1 : 0 }}>
      {icon && alignLeft && (
        <Feather name={icon} size={20} color="hsl(0, 0%, 40%)" />
      )}
      {label && !alignLeft && <FormLabel text={label} />}
      <TextInput
        style={[
          styles.textField,
          {
            color: color === "BLACK" ? "black" : "white",
            textAlign: alignLeft ? "left" : "right",
          },
        ]}
        placeholderTextColor={
          color === "BLACK" ? "hsl(0, 0%, 40%)" : "hsl(0, 0%, 80%)"
        }
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === "password"}
        returnKeyType={type === "search" ? "search" : "default"}
        keyboardType={
          type === "email"
            ? "email-address"
            : type === "number"
            ? "number-pad"
            : "default"
        }
      />
      {icon && !alignLeft && (
        <Feather name={icon} size={20} color="hsl(0, 0%, 40%)" />
      )}
      {label && alignLeft && <FormLabel text={label} />}
    </FormGroup>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  textField: {
    fontSize: 16,
    padding: 8,
    flexGrow: 1,
  },
});

export default TextField;
