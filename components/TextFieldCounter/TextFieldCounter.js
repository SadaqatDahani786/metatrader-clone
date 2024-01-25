import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

//Components
import IconButton from "../IconButton/IconButton";
import Divider from "../Divider/Divider";

//Utils
import scale from "../../utils/scale";

//Colors
const colors = {
  INFO: "deepskyblue",
  ERROR: "red",
  SUCCESS: "green",
  WARN: "yellow",
};

/**
 ** ** ===================================================================================
 ** ** ** Component [TextFieldCounter]
 ** ** ===================================================================================
 */
const TextFieldCounter = ({
  value,
  step = 1,
  min = 0,
  max = 10,
  color = "INFO",
  placeholder = "placehold text...",
  onChangeValue = () => {},
}) => {
  /**
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const selectedColor = colors[color];
  const [val, setVal] = useState();

  /**
   ** **
   ** ** ** Methods
   ** **
   */
  //On Increment Handler
  const onIncrementHandler = () => {
    //1) Declar new val
    let newVal = parseFloat(val);

    //2) Set value if undefined
    if (!newVal) newVal = 0;

    //3) Increment by step
    newVal += step;

    //4) Don't increment beyond max value
    newVal = Math.min(newVal, max);

    //5) Update the state
    setVal(newVal);
  };

  //On Decrement Handler
  const onDecrementHandler = () => {
    //1) Declar new val
    let newVal = parseFloat(val);

    //2) Set value if undefined
    if (!newVal) newVal = 0;

    //3) Decrement value by step
    newVal -= step;

    //4) Don't decrement below min value
    newVal = Math.max(newVal, min);

    //5) Update the state
    setVal(newVal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <IconButton
          color={color}
          size="XS"
          icon="minus"
          onPress={onDecrementHandler}
        />
        <TextInput
          inputMode="decimal"
          defaultValue={value}
          value={val?.toString()}
          placeholder={placeholder}
          style={[styles.textInput, { color: selectedColor }]}
          placeholderTextColor={selectedColor}
          textAlign="center"
          onChangeText={(text) => {
            setVal(text);
            onChangeValue(text);
          }}
        />
        <IconButton
          color={color}
          size="XS"
          icon="plus"
          onPress={onIncrementHandler}
        />
      </View>
      <Divider color={selectedColor} height={6} />
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
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  textInput: {
    flex: 1,
    fontSize: scale(16),
  },
});

export default TextFieldCounter;
