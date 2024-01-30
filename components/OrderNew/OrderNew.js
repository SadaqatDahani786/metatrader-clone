import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//Redux
import { useSelector } from "react-redux";

//Components
import AppModal from "../AppModal/AppModal";
import Menu from "../Menu";
import DropdownMenu from "../DropdownMenu";
import Button from "../Button";
import IconButton from "../IconButton/IconButton";
import FormGroup from "../FormGroup";
import FormLabel from "../FormLabel";
import Divider from "../Divider/Divider";
import TextFieldCounter from "../TextFieldCounter";
import TextFieldStepCounter from "../TextFieldStepCounter";
import Price from "../Price";

//Sizing
import { scale } from "../../utils/scale";

/*
 ** ** =============================================================
 ** ** ** Component [OrderNew]
 ** ** =============================================================
 */
const OrderNew = ({ defaultSymbol, open, onClose }) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const quotes = useSelector((store) => store.quotes);
  const [selectedOrderTypeIndex, setSelectedOrderTypeIndex] = useState(0);
  const [showSymbols, setShowSymbols] = useState(false);
  const [selectedQuoteIndex, setSelectedQuoteIndex] = useState(0);

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Set default selected symbol
  useEffect(() => {
    //1) Find ind
    const ind = quotes.findIndex((quote) => quote.pair === defaultSymbol);

    //2) Set index if found
    if (ind !== -1) return setSelectedQuoteIndex(ind);

    //3) Else reset to the first item
    setSelectedQuoteIndex(0);
  }, [quotes, defaultSymbol]);

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //Close handler
  const onCloseHandler = () => {
    //1) Reset
    setSelectedOrderTypeIndex(0);
    setSelectedQuoteIndex(0);

    //2) Close modal
    onClose();
  };

  /*
   ** **
   ** ** ** Modal Header Right Component
   ** **
   */
  const HeaderRightComponent = (
    <>
      <IconButton
        iconSet="MATERIAL"
        color="WHITE"
        size="SM"
        icon="currency-exchange"
        onPress={() => setShowSymbols(true)}
      />
      <Menu
        visible={showSymbols}
        fullWidth={true}
        items={quotes.map((quote) => ({ label: quote.pair }))}
        centerAlign={true}
        onDismiss={() => setShowSymbols(false)}
        onItemPressed={(item, ind) => setSelectedQuoteIndex(ind)}
      />
    </>
  );

  return (
    <AppModal
      visible={open}
      onClose={onCloseHandler}
      headerRight={HeaderRightComponent}
      title={quotes[selectedQuoteIndex].pair}
      subtitle={quotes[selectedQuoteIndex].pair_full}
    >
      <View>
        <FormGroup
          delegatedStyles={{
            position: "absolute",
            top: 0,
            left: 8,
            right: 8,
            zIndex: 11,
          }}
        >
          <DropdownMenu
            placeholder="Select"
            defaultOptionIndex={0}
            centerAlign={true}
            fullWidth={true}
            options={[
              { label: "Market Execution" },
              { label: "Buy Limit" },
              { label: "Sell Limit" },
              { label: "Buy Stop" },
              { label: "Sell Stop" },
              { label: "Buy Stop Limit" },
              { label: "Sell Stop Limit" },
            ]}
            onItemChanged={(item, ind) => setSelectedOrderTypeIndex(ind)}
          />
        </FormGroup>
        <FormGroup
          delegatedStyles={{
            marginTop: 56,
            paddingHorizontal: 4,
            justifyContent: "space-evenly",
          }}
        >
          <TextFieldStepCounter />
        </FormGroup>
        <FormGroup
          delegatedStyles={{
            justifyContent: "center",
            gap: 24,
            borderBottomWidth: 0,
            marginTop: 8,
          }}
        >
          <Price
            size="MD"
            color="ERROR"
            price={1.08}
            priceBig={96}
            exponent={3}
          />
          <Price
            size="MD"
            color="ERROR"
            price={1.08}
            priceBig={97}
            exponent={3}
          />
        </FormGroup>
        {selectedOrderTypeIndex > 0 && (
          <FormGroup delegatedStyles={{ borderBottomWidth: 0 }}>
            <TextFieldCounter color="BLACK" placeholder="Price: 00.00" />
          </FormGroup>
        )}
        {selectedOrderTypeIndex > 4 && (
          <FormGroup delegatedStyles={{ borderBottomWidth: 0 }}>
            <TextFieldCounter
              color="BLACK"
              placeholder="Stop Limit Price: 00.00"
            />
          </FormGroup>
        )}
        <FormGroup delegatedStyles={{ borderBottomWidth: 0, gap: 24 }}>
          <TextFieldCounter color="ERROR" placeholder="SL" />
          <TextFieldCounter color="SUCCESS" placeholder="TP" />
        </FormGroup>
        <FormGroup
          delegatedStyles={{
            position: "absolute",
            top:
              selectedOrderTypeIndex === 0
                ? 256
                : selectedOrderTypeIndex > 4
                ? 356
                : 298,
            left: 8,
            right: 8,
            zIndex: 10,
          }}
        >
          <FormLabel>Fill Policy</FormLabel>
          <DropdownMenu
            defaultOptionIndex={0}
            options={[{ label: "Fill or Kill" }]}
          />
        </FormGroup>
        <Text
          style={{
            marginTop: selectedOrderTypeIndex > 4 ? 52 : 64,
            paddingVertical: selectedOrderTypeIndex > 4 ? 24 : 40,
            textAlign: "center",
            fontSize: scale(14),
            color: "gray",
          }}
        >
          Attention! The trade will be executed at market conditions, different
          with requested price may be significant!
        </Text>
        <View style={styles.row}>
          {selectedOrderTypeIndex === 0 ? (
            <>
              <View style={styles.button}>
                <Pressable
                  style={styles.buttonPresser}
                  android_ripple={{ color: "hsla(220, 100%, 50%, 0.1)" }}
                >
                  <Text style={[styles.buttonTitle, styles.buttonBuy]}>
                    BUY
                  </Text>
                  <Text style={[styles.buttonSubtitle, styles.buttonBuy]}>
                    BY MARKET
                  </Text>
                </Pressable>
              </View>
              <Divider color="hsl(0, 0%, 90%)" vertical={true} />
              <View style={styles.button}>
                <Pressable
                  style={styles.buttonPresser}
                  android_ripple={{ color: "hsla(360, 100%, 50%, 0.1)" }}
                >
                  <Text style={[styles.buttonTitle, styles.buttonSell]}>
                    SELL
                  </Text>
                  <Text style={[styles.buttonSubtitle, styles.buttonSell]}>
                    BY MARKET
                  </Text>
                </Pressable>
              </View>
            </>
          ) : (
            <Button
              size="SM"
              fullWidth={true}
              color="black"
              variant="contained"
            >
              Place
            </Button>
          )}
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
  textInputWrapper: {
    flex: 1,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  button: { flex: 1, height: 48, borderRadius: 4, overflow: "hidden" },
  buttonPresser: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "deepskyblue",
    fontWeight: "bold",
    fontSize: scale(16),
  },
  buttonSubtitle: {
    color: "deepskyblue",
    fontSize: scale(14),
  },
  buttonBuy: {
    color: "deepskyblue",
  },
  buttonSell: { color: "red" },
});

export default OrderNew;
