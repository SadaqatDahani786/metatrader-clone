import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

//Components
import RowItem from "../../components/RowItem";

//Utils
import scale from "../../utils/scale";

/*
 ** ** =============================================================
 ** ** ** Component [PositionsScreen]
 ** ** =============================================================
 */
const PositionsScreen = () => {
  /*
   ** **
   ** ** ** State
   ** **
   */
  const [positions] = useState([
    {
      id: 1,
      symbol: "EURUSD",
      quantity: 10,
      entryPrice: 1.2,
      currentPrice: 1.205,
      type: "Buy",
      timestamp: "2022-01-01 10:00:00",
      pnl: 50,
      lotSize: 100,
    },
    {
      id: 2,
      symbol: "GBPUSD",
      quantity: 5,
      entryPrice: 1.4,
      currentPrice: 1.405,
      type: "Sell",
      timestamp: "2022-01-02 14:30:00",
      pnl: -25,
      lotSize: 50,
    },
    {
      id: 3,
      symbol: "USDJPY",
      quantity: 8,
      entryPrice: 110.5,
      currentPrice: 110.55,
      type: "Buy",
      timestamp: "2022-01-03 09:15:00",
      pnl: 40,
      lotSize: 80,
    },
    {
      id: 4,
      symbol: "AUDUSD",
      quantity: 3,
      entryPrice: 0.75,
      currentPrice: 0.7495,
      type: "Sell",
      timestamp: "2022-01-04 16:45:00",
      pnl: -15,
      lotSize: 30,
    },
    {
      id: 5,
      symbol: "NZDUSD",
      quantity: 6,
      entryPrice: 0.71,
      currentPrice: 0.715,
      type: "Buy",
      timestamp: "2022-01-05 11:30:00",
      pnl: 30,
      lotSize: 60,
    },
    {
      id: 6,
      symbol: "USDCHF",
      quantity: 4,
      entryPrice: 0.9,
      currentPrice: 0.8995,
      type: "Sell",
      timestamp: "2022-01-06 13:20:00",
      pnl: -20,
      lotSize: 40,
    },
    {
      id: 7,
      symbol: "EURGBP",
      quaquantity: 2,
      entryPrice: 150.0,
      currentPrice: 150.5,
      type: "Sell",
      timestamp: "2022-01-10 14:00:00",
      pnl: -10,
      lotSize: 20,
    },
  ]);

  return (
    <View style={styles.container}>
      {positions.length <= 0 && (
        <Text style={styles.emptyText}>Uh oh! No open positions found.</Text>
      )}
      <FlatList
        data={positions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RowItem
            symbol={item.symbol}
            lot={item.lotSize}
            type={item.type}
            timestamp={item.timestamp}
            entryPrice={item.entryPrice}
            currentPrice={item.currentPrice}
            pnl={item.pnl}
          />
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
  container: { flex: 1, backgroundColor: "white", padding: 16 },
  emptyText: { fontSize: scale(16) },
});

export default PositionsScreen;
