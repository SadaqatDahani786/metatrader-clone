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
}) => {
  return (
    <FormGroup delegatedStyles={{ borderBottomWidth: border ? 1 : 0 }}>
      {label && <FormLabel text={label} />}
      <TextInput
        style={styles.textField}
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={type === "password"}
        keyboardType={
          type === "email"
            ? "email-address"
            : type === "number"
            ? "number-pad"
            : ""
        }
      />
      {icon && <Feather name={icon} size={20} color="hsl(0, 0%, 40%)" />}
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
    textAlign: "right",
  },
});

export default TextField;
