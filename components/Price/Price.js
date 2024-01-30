import { View, StyleSheet, Text } from "react-native";

//Utils
import scale from "../../utils/scale";

/**
 ** **
 ** ** ** Options
 ** **
 */
//Colors
const colors = {
  INFO: "deepskyblue",
  ERROR: "red",
  SUCCESS: "green",
  WARN: "yellow",
  BLACK: "black",
  WHITE: "white",
};

//Sizes
const sizes = {
  SM: 16,
  MD: 24,
  LG: 32,
};

/**
 ** ** ===================================================================================
 ** ** ** Component [Price]
 ** ** ===================================================================================
 */
const Price = ({ size = "MD", color = "BLACK", price, priceBig, exponent }) => {
  /**
   ** **
   ** ** ** Selected options
   ** **
   */
  const sizeSelected = scale(sizes[size]);
  const colorSelected = colors[color];

  return (
    <View style={styles.container}>
      <Text
        style={[styles.price, { color: colorSelected, fontSize: sizeSelected }]}
      >
        {price}
      </Text>
      <Text
        style={[
          styles.priceBig,
          { color: colorSelected, fontSize: sizeSelected + 8 },
        ]}
      >
        {priceBig}
      </Text>
      <Text
        style={[
          styles.exponent,
          { color: colorSelected, fontSize: sizeSelected - 4 },
        ]}
      >
        {exponent}
      </Text>
    </View>
  );
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "baseline", gap: 2 },
  price: {
    fontFamily: "Bebas Neue",
  },
  priceBig: {
    fontFamily: "Bebas Neue",
  },
  exponent: {
    fontFamily: "Bebas Neue",
    alignSelf: "flex-start",
  },
});

export default Price;
