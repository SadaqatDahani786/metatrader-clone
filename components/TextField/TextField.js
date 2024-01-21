import { TextInput, Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

//Components
import FormGroup from "../FormGroup";
import FormLabel from "../FormLabel/";
import FormHelperText from "../FormHelperText";

/*
 ** ** =============================================================
 ** ** ** Component [TextField]
 ** ** =============================================================
 */
const TextField = ({
  label,
  value,
  defaultValue,
  placeholder,
  type,
  icon,
  color = "BLACK",
  border = true,
  alignLeft = false,
  error = false,
  onChangeText,
  onBlur,
}) => {
  return (
    <View>
      <FormGroup delegatedStyles={{ borderBottomWidth: border ? 1 : 0 }}>
        {icon && alignLeft && (
          <Feather
            name={icon}
            size={20}
            color={error ? "red" : "hsl(0, 0%, 40%)"}
          />
        )}
        {label && !alignLeft && <FormLabel text={label} />}
        <TextInput
          style={[
            styles.textField,
            {
              color: error ? "red" : color === "BLACK" ? "black" : "white",
              textAlign: alignLeft ? "left" : "right",
            },
          ]}
          placeholderTextColor={
            error
              ? "red"
              : color === "BLACK"
              ? "hsl(0, 0%, 40%)"
              : "hsl(0, 0%, 80%)"
          }
          defaultValue={defaultValue}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
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
          <Feather
            name={icon}
            size={20}
            color={error ? "red" : "hsl(0, 0%, 40%)"}
          />
        )}
        {label && alignLeft && <FormLabel text={label} />}
      </FormGroup>
      {error && <FormHelperText>{error}</FormHelperText>}
    </View>
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
