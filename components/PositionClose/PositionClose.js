import { StyleSheet, View } from "react-native";

//Components
import AppModal from "../AppModal/";
import Button from "../Button";
import Price from "../Price";
import TextFieldCounter from "../TextFieldCounter";
import TextFieldStepCounter from "../TextFieldStepCounter";
import FormGroup from "../FormGroup";
import FormLabel from "../FormLabel";
import DropdownMenu from "../DropdownMenu";

/*
 ** ** =============================================================
 ** ** ** Component [PositionClose]
 ** ** =============================================================
 */
const PositionClose = ({ open, onClose, position }) => {
  return (
    <AppModal
      visible={open}
      onClose={onClose}
      title={`Close Position #${position?.id}`}
      subtitle={`Buy ${position?.lotSize} ${position?.symbol} at ${position?.entryPrice}`}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <Price
            color={position?.type === "Buy" ? "INFO" : "ERROR"}
            price="1.55"
            priceBig="45"
            exponent="2"
          />
          <Price
            color={position?.type === "Buy" ? "INFO" : "ERROR"}
            price="1.55"
            priceBig="45"
            exponent="2"
          />
        </View>
        <View>
          <TextFieldStepCounter />
        </View>
        <View style={styles.row}>
          <TextFieldCounter color="ERROR" placeholder="SL" />
          <TextFieldCounter color="SUCCESS" placeholder="TP" />
        </View>
        <FormGroup
          delegatedStyles={{
            position: "absolute",
            top: 156,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <FormLabel text="Fill Policy" />
          <DropdownMenu
            placeholder="Select"
            defaultOptionIndex={0}
            options={[{ label: "Fill or kill" }]}
          />
        </FormGroup>
        <View style={{ marginTop: 84 }}>
          <Button
            corners
            size="SM"
            onPress={onClose}
            variant="contained"
            color="black"
            fullWidth
          >
            Close with loss -22.90
          </Button>
        </View>
      </View>
    </AppModal>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 4,
    gap: 4,
    justifyContent: "space-between",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});

export default PositionClose;
