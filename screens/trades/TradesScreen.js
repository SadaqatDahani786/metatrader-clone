import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

//Colors
const redColor = "#FF5252";
const blueColor = "#448AFF";

/*
 ** ** =============================================================
 ** ** ** Component [TradesScreen]
 ** ** =============================================================
 */
const TradesScreen = () => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const [equity, setEquity] = useState(100000000);
  const [balance, setBalance] = useState(8000);
  const [margin, setMargin] = useState(2000);
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
      quantity: 2,
      entryPrice: 0.85,
      currentPrice: 0.8505,
      type: "Buy",
      timestamp: "2022-01-07 15:10:00",
      pnl: 10,
      lotSize: 20,
    },
    {
      id: 8,
      symbol: "USDCAD",
      quantity: 7,
      entryPrice: 1.25,
      currentPrice: 1.2505,
      type: "Sell",
      timestamp: "2022-01-08 12:45:00",
      pnl: -35,
      lotSize: 70,
    },
    {
      id: 9,
      symbol: "EURJPY",
      quantity: 9,
      entryPrice: 130.0,
      currentPrice: 130.5,
      type: "Buy",
      timestamp: "2022-01-09 09:30:00",
      pnl: 45,
      lotSize: 90,
    },
    {
      id: 10,
      symbol: "GBPJPY",
      quantity: 2,
      entryPrice: 150.0,
      currentPrice: 150.5,
      type: "Sell",
      timestamp: "2022-01-10 14:00:00",
      pnl: -10,
      lotSize: 20,
    },
  ]);
  const [orders, setOrders] = useState([
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
      quantity: 2,
      entryPrice: 0.85,
      currentPrice: 0.8505,
      type: "Buy",
      timestamp: "2022-01-07 15:10:00",
      pnl: 10,
      lotSize: 20,
    },
    {
      id: 8,
      symbol: "USDCAD",
      quantity: 7,
      entryPrice: 1.25,
      currentPrice: 1.2505,
      type: "Sell",
      timestamp: "2022-01-08 12:45:00",
      pnl: -35,
      lotSize: 70,
    },
    {
      id: 9,
      symbol: "EURJPY",
      quantity: 9,
      entryPrice: 130.0,
      currentPrice: 130.5,
      type: "Buy",
      timestamp: "2022-01-09 09:30:00",
      pnl: 45,
      lotSize: 90,
    },
    {
      id: 10,
      symbol: "GBPJPY",
      quantity: 2,
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
  //Render stats
  const renderStats = () => {
    const screenWidth = Dimensions.get("window").width;
    const dots = ".";

    const renderDots = (t1, t2) => {
      const textWidth = t1.length + t2.length;
      const dotsWidth = dots.length * 5;

      const remainingWidth = screenWidth - textWidth - dotsWidth;
      const numDots = Math.floor(remainingWidth / (textWidth / 0.4));

      return ".       ".repeat(Dimensions.get("window").width / 35);
    };

    return (
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <Text style={[styles.statsTitle, styles.statsString]}>Equity:</Text>
          <Text style={[styles.dotsContainer, styles.statsString]}>
            {renderDots("Equity:", equity.toString())}
          </Text>
          <Text style={[styles.statsValue, styles.statsString]}>
            {equity.toString()}
          </Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={[styles.statsTitle, styles.statsString]}>Balance:</Text>
          <Text style={[styles.dotsContainer, styles.statsString]}>
            {renderDots("Balance:", balance.toString())}
          </Text>
          <Text style={[styles.statsValue, styles.statsString]}>
            {balance.toString()}
          </Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={[styles.statsTitle, styles.statsString]}>Margin:</Text>
          <Text style={[styles.dotsContainer, styles.statsString]}>
            {renderDots("Margin:", margin.toString())}
          </Text>
          <Text style={[styles.statsValue, styles.statsString]}>
            {margin.toString()}
          </Text>
        </View>
      </View>
    );
  };

  //Render positions table
  const renderPositionsTable = () => {
    if (positions.length === 0) {
      return null;
    }

    return (
      <View>
        <View style={styles.header}>
          <Text style={[styles.headerText, { flex: 180 }]}>Positions</Text>
        </View>
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
      </View>
    );
  };

  //Render orders table
  const renderOrdersTable = () => {
    if (orders.length === 0) {
      return null;
    }

    return (
      <View>
        <View style={styles.header}>
          <Text style={[styles.headerText, { flex: 180 }]}>Orders</Text>
        </View>
        <FlatList
          data={orders}
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
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderStats()}
      {renderPositionsTable()}
      {renderOrdersTable()}
    </ScrollView>
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

export default TradesScreen;
