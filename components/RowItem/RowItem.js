import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

//Utils
import scale from "../../utils/scale";

/**
 ** ** ===================================================================================
 ** ** ** Component [RowItem]
 ** ** ===================================================================================
 */
const RowItem = ({
  id,
  symbol,
  type,
  lot,
  entryPrice,
  currentPrice,
  timestamp,
  pnl,
  disabled = false,
  lightMode = false,
  onPress = () => "",
  onLongPress = () => "",
}) => {
  /**
   ** **
   ** ** ** Color
   ** **
   */
  const color = type === "Sell" ? "red" : "deepskyblue";

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onPress(id)}
        onLongPress={() => onLongPress(id)}
        disabled={disabled}
        style={styles.pressable}
        android_ripple={{ color: "rgba(0,0,0,0.1)" }}
      >
        <View style={styles.row}>
          <View style={styles.group}>
            <Text
              style={[
                styles.textSymbol,
                {
                  color: lightMode ? "hsl(0, 0%, 90%)" : "hsl(200, 100%, 15%)",
                },
              ]}
            >
              {symbol}{" "}
              <Text style={[styles.textLot, { color: color }]}>
                {type}
                {"  "}
                {lot.toFixed(2)}
              </Text>
            </Text>
          </View>
          <Text style={styles.textTimestamp}>{timestamp}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.group}>
            <Text style={styles.textPrice}>{entryPrice}</Text>
            <Feather color="gray" name="arrow-right" />
            <Text style={styles.textPrice}>{currentPrice}</Text>
          </View>
          <Text style={[styles.textPnl, { color: color }]}>{pnl}</Text>
        </View>
      </Pressable>
    </View>
  );
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: { overflow: "hidden", borderRadius: 2 },
  pressable: { paddingVertical: 4 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textSymbol: {
    fontSize: scale(18),
    fontFamily: "Bebas Neue",
  },
  textLot: {
    fontSize: scale(16),
    fontFamily: "Bebas Neue",
  },
  textTimestamp: {
    fontSize: scale(14),
    fontFamily: "Bebas Neue",
    color: "gray",
  },
  textPrice: {
    fontSize: scale(14),
    fontFamily: "Bebas Neue",
    color: "gray",
  },
  textPnl: {
    fontFamily: "Bebas Neue",
    fontSize: scale(16),
  },
});

export default RowItem;
