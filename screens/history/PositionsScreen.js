import { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

//Colors
const redColor = "#FF5252";
const blueColor = "#448AFF";

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
  const [positions, setPositions] = useState([
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

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //Render positions
  const renderPositions = () => {
    if (positions.length === 0) {
      return <Text style={styles.emptyText}>No positions found.</Text>;
    }

    return (
      <FlatList
        data={positions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.columnContainer}>
                <Text style={[styles.leftText, styles.rowSymbol]}>
                  {item?.symbol}
                </Text>
                <Text
                  style={[
                    styles.leftText,
                    styles.rowType,
                    { color: item?.type === "Buy" ? blueColor : redColor },
                  ]}
                >
                  {item?.type}
                </Text>
                <Text
                  style={[
                    styles.leftText,
                    styles.rowType,
                    { color: item?.type === "Buy" ? blueColor : redColor },
                  ]}
                >
                  {item?.lotSize.toFixed(2)}
                </Text>
              </View>
              <View style={styles.columnContainer}>
                <Text style={[styles.rightText, styles.timestamp]}>
                  {item.timestamp}
                </Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.columnContainer}>
                <Text style={[styles.rightText, styles.entryPrice]}>
                  {item.entryPrice}
                </Text>
                <Text style={[styles.rightText, styles.rowArrow]}>➔</Text>
                <Text style={[styles.rightText, styles.currentPrice]}>
                  {item.currentPrice}
                </Text>
              </View>
              <View style={styles.columnContainer}>
                <Text
                  style={[
                    styles.rightText,
                    styles.rowPnl,
                    { color: item?.pnl >= 0 ? blueColor : redColor },
                  ]}
                >
                  {item.pnl}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    );
  };

  return <View style={styles.container}>{renderPositions()}</View>;
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  tableRowPadding: {
    paddingHorizontal: 4,
  },
  tableCell: {
    flex: 1,
    marginRight: 8,
  },
  statsContainer: {
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  statsTitle: {
    flex: 1,
    marginRight: 8,
  },
  dotsContainer: {
    textAlign: "left",
    lineHeight: 5,
  },
  statsValue: {
    flex: 1,
    textAlign: "right",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCCCCC",
    backgroundColor: "#F5F5F5",
  },
  headerText: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "Bebas Neue",
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCCCCC",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnContainer: {
    flexDirection: "row",
  },
  leftText: {
    textAlign: "left",
  },
  rightText: {
    textAlign: "right",
  },
  rowSymbol: {
    fontFamily: "Bebas Neue",
    fontSize: 18,
    color: "#2b0055",
  },
  rowType: {
    fontFamily: "Bebas Neue",
    fontSize: 16,
    paddingTop: 2,
    paddingHorizontal: 2,
  },
  entryPrice: {
    fontFamily: "Bebas Neue",
    fontSize: 14,
    color: "#c0c0c0",
  },
  rowArrow: {
    fontFamily: "Bebas Neue",
    fontSize: 12,
    paddingHorizontal: 8,
    color: "#c0c0c0",
  },
  currentPrice: {
    fontFamily: "Bebas Neue",
    fontSize: 14,
    color: "#c0c0c0",
  },
  timestamp: {
    fontFamily: "Bebas Neue",
    fontSize: 12,
    color: "#c0c0c0",
    marginTop: 6,
  },
  rowPnl: {
    fontFamily: "Bebas Neue",
    fontSize: 18,
  },
  statsString: {
    fontFamily: "Bebas Neue",
    fontSize: 14,
    color: "#3e3e3e",
  },
});

export default PositionsScreen;
