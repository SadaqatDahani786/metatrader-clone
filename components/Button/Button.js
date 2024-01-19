import { View, Text, Pressable, StyleSheet } from "react-native";

/*
 ** **
 ** ** ** Options
 ** **
 */
//Colors
const colors = {
  primary: "#448AFF",
  secondary: "orange",
  info: "deepskyblue",
  error: "red",
  warn: "yellow",
  success: "green",
  black: "hsl(0,0%, 10%)",
  white: "white",
  gray: "hsl(0,0%, 50%)",
};

//Sizes
const sizes = {
  SM: { wd: 140, text: 14 },
  MD: { wd: 180, text: 16 },
  LG: { wd: 240, text: 18 },
};

/**
 ** ** ===================================================================================
 ** ** ** Component [Button]
 ** ** ===================================================================================
 */
const Button = ({
  children,
  variant = "contained",
  color = "primary",
  size = "MD",
  fullWidth = false,
  corners = false,
  onPress = () => "",
}) => {
  /*
   ** **
   ** ** ** Selected options
   ** **
   */
  const sizeSelected = sizes[size];
  const colorSelected = colors[color];

  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: corners ? 8 : 0,
          borderColor: colorSelected,
          borderWidth: variant === "outlined" ? 1 : 0,
          width: fullWidth ? "100%" : sizeSelected.wd,
          backgroundColor:
            variant === "contained" ? colorSelected : "transparent",
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.pressable,
          {
            backgroundColor:
              !pressed || variant === "text"
                ? "transparent"
                : color === "black"
                ? "rgba(225,225,225,0.5)"
                : color === "white"
                ? "rgba(10,10,10,0.5)"
                : colorSelected,
            paddingHorizontal: variant === "text" ? 0 : 24,
          },
        ]}
        android_ripple={{
          color:
            variant === "text"
              ? "transparent"
              : color === "black"
              ? "rgba(225,225,225,0.6)"
              : color === "white"
              ? "rgba(10,10,10,0.6)"
              : colorSelected,
        }}
        children={({ pressed }) => (
          <Text
            style={[
              styles.text,
              {
                color:
                  pressed && variant === "text"
                    ? "hsla(0, 0%, 10%, 0.2)"
                    : variant === "contained"
                    ? "white"
                    : colorSelected,
                fontSize: sizeSelected.text,
                fontWeight: variant === "text" ? "normal" : "bold",
                alignSelf: variant === "text" ? "flex-start" : "center",
              },
            ]}
          >
            {children}
          </Text>
        )}
      />
    </View>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  pressable: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
