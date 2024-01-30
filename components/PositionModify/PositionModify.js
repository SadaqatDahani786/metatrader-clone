import { StyleSheet, View } from "react-native";

//Components
import AppModal from "../AppModal/";
import Button from "../Button";
import Price from "../Price";
import TextFieldCounter from "../TextFieldCounter";

/*
 ** ** =============================================================
 ** ** ** Component [PositionModify]
 ** ** =============================================================
 */
const PositionModify = ({ open, onClose, position }) => {
  return (
    <AppModal
      visible={open}
      onClose={onClose}
      title={`Modify Position #${position?.id}`}
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
        <View style={styles.row}>
          <TextFieldCounter color="ERROR" placeholder="SL" />
          <TextFieldCounter color="SUCCESS" placeholder="TP" />
        </View>
        <Button
          corners
          onPress={onClose}
          variant="contained"
          color="black"
          fullWidth
        >
          Modify
        </Button>
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
    gap: 12,
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

export default PositionModify;
