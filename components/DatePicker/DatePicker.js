import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import DP, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

//Components
import FormGroup from "../FormGroup";
import FormLabel from "../FormLabel";
import FormHelperText from "../FormHelperText";
import IconButton from "../IconButton/IconButton";

//Utils
import getFormatedDate from "../../utils/getFormatedDate";
import scale from "../../utils/scale";

/*
 ** ** =============================================================
 ** ** ** Component [DatePicker]
 ** ** =============================================================
 */
const DatePicker = ({ label, value, error, helperText, onChange }) => {
  /*
   ** **
   ** ** ** State
   ** **
   */
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View style={styles.container}>
      <FormGroup>
        {error && <FormHelperText>{helperText}</FormHelperText>}
        {label && <FormLabel>{label}</FormLabel>}
        <View style={styles.row}>
          <Text
            style={{
              fontSize: scale(16),
              color: error ? "red" : "black",
            }}
          >
            {getFormatedDate(new Date(value))}
          </Text>
          <IconButton
            color={error ? "ERROR" : "GRAY"}
            size="SM"
            icon="calendar"
            onPress={() => {
              DateTimePickerAndroid.open({
                value: new Date(value),
                onChange: (e, selectedDate) => {
                  setShowDatePicker(false);
                  onChange(selectedDate);
                },
                mode: "date",
                display: "calendar",
              });
            }}
          />
        </View>
      </FormGroup>

      {showDatePicker && Platform.OS !== "android" && (
        <DP
          mode="date"
          onChange={(e, selectedDate) => {
            setShowDatePicker(false);
            onChange(selectedDate);
          }}
          display="calendar"
          value={new Date(value)}
        />
      )}
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
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DatePicker;
