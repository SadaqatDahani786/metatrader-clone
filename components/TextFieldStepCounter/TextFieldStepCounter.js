import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

//Components
import Button from "../Button";

//Utils
import scale from "../../utils/scale";

/**
 ** ** ===================================================================================
 ** ** ** Component [TextFieldStepCounter]
 ** ** ===================================================================================
 */
const TextFieldStepCounter = () => {
  /**
   ** **
   ** ** ** State
   ** **
   */
  const [count, setCount] = useState("");

  /**
   ** **
   ** ** ** Methds
   ** **
   */
  //On change count
  const onChageCount = (amount) => {
    setCount((count) =>
      !count ? amount.toString() : (parseFloat(count) + amount).toString()
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Button
          onPress={() => onChageCount(-0.5)}
          variant="text"
          color="gray"
          fullWidth={true}
        >
          -0.5
        </Button>
      </View>
      <View>
        <Button
          onPress={() => onChageCount(-0.1)}
          variant="text"
          color="gray"
          fullWidth={true}
        >
          -0.1
        </Button>
      </View>
      <View>
        <Button
          onPress={() => onChageCount(-0.01)}
          variant="text"
          color="gray"
          fullWidth={true}
        >
          -0.01
        </Button>
      </View>
      <TextInput
        placeholder="0.00"
        style={styles.amountText}
        value={count}
        inputMode="decimal"
        textAlign="center"
        onChangeText={(text) => setCount(text)}
      />
      <View>
        <Button
          onPress={() => onChageCount(0.01)}
          variant="text"
          color="gray"
          fullWidth={true}
        >
          +0.01
        </Button>
      </View>
      <View>
        <Button
          onPress={() => onChageCount(0.1)}
          variant="text"
          color="gray"
          fullWidth={true}
        >
          +0.1
        </Button>
      </View>
      <View>
        <Button
          onPress={() => onChageCount(0.5)}
          variant="text"
          color="gray"
          fullWidth={true}
        >
          +0.5
        </Button>
      </View>
    </View>
  );
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  amountText: {
    width: 48,
    height: 24,
    fontSize: scale(16),
    fontWeight: "bold",
    color: "hsl(0, 0%, 40%)",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});

export default TextFieldStepCounter;
