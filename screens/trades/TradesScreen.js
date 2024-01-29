import { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { FlatList as FL } from "react-native-gesture-handler";

//Components
import Menu from "../../components/Menu";
import IconButton from "../../components/IconButton/IconButton";
import Divider from "../../components/Divider/Divider";
import RowItem from "../../components/RowItem";
import SwipeUpOptionsMenu from "../../components/SwipeUpOptionsMenu";
import OrderNew from "../../components/OrderNew";
import PositionModify from "../../components/PositionModify";
import PositionClose from "../../components/PositionClose";

//Utils
import scale from "../../utils/scale";

/*
 ** ** =============================================================
 ** ** ** Component [TradesScreen]
 ** ** =============================================================
 */
const TradesScreen = ({ navigation }) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  //Sort menu
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedSortIndex, setSelectedSortIndex] = useState(0);

  //Options menu
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  //Add ~ Modify ~ Close positions modals
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showModifyPosModal, setShowModifyPosModal] = useState(false);
  const [showClosePosModal, setShowClosePosModal] = useState(false);

  //Heights of UI elements
  const statsHeight = 112;
  const accordionHeight = 56;

  //Date
  const [equity] = useState(100000000);
  const [balance] = useState(8000);
  const [margin] = useState(2000);
  const [positions] = useState([
    {
      id: 124555,
      symbol: "EUR/USD",
      quantity: 10,
      entryPrice: 1.2,
      currentPrice: 1.205,
      type: "Buy",
      timestamp: "2022-01-01 10:00:00",
      pnl: 50,
      lotSize: 100,
    },
    {
      id: 124556,
      symbol: "GBP/USD",
      quantity: 5,
      entryPrice: 1.4,
      currentPrice: 1.405,
      type: "Sell",
      timestamp: "2022-01-02 14:30:00",
      pnl: -25,
      lotSize: 50,
    },
    {
      id: 123558,
      symbol: "USD/JPY",
      quantity: 8,
      entryPrice: 110.5,
      currentPrice: 110.55,
      type: "Buy",
      timestamp: "2022-01-03 09:15:00",
      pnl: 40,
      lotSize: 80,
    },
    {
      id: 124557,
      symbol: "AUD/USD",
      quantity: 3,
      entryPrice: 0.75,
      currentPrice: 0.7495,
      type: "Sell",
      timestamp: "2022-01-04 16:45:00",
      pnl: -15,
      lotSize: 30,
    },
    {
      id: 124558,
      symbol: "NZD/USD",
      quantity: 6,
      entryPrice: 0.71,
      currentPrice: 0.715,
      type: "Buy",
      timestamp: "2022-01-05 11:30:00",
      pnl: 30,
      lotSize: 60,
    },
    {
      id: 124559,
      symbol: "USD/CHF",
      quantity: 4,
      entryPrice: 0.9,
      currentPrice: 0.8995,
      type: "Sell",
      timestamp: "2022-01-06 13:20:00",
      pnl: -20,
      lotSize: 40,
    },
    {
      id: 124560,
      symbol: "EUR/GBP",
      quantity: 2,
      entryPrice: 0.85,
      currentPrice: 0.8505,
      type: "Buy",
      timestamp: "2022-01-07 15:10:00",
      pnl: 10,
      lotSize: 20,
    },
    {
      id: 124561,
      symbol: "USD/CAD",
      quantity: 7,
      entryPrice: 1.25,
      currentPrice: 1.2505,
      type: "Sell",
      timestamp: "2022-01-08 12:45:00",
      pnl: -35,
      lotSize: 70,
    },
    {
      id: 124562,
      symbol: "EUR/JPY",
      quantity: 9,
      entryPrice: 130.0,
      currentPrice: 130.5,
      type: "Buy",
      timestamp: "2022-01-09 09:30:00",
      pnl: 45,
      lotSize: 90,
    },
    {
      id: 124563,
      symbol: "GBP/JPY",
      quantity: 2,
      entryPrice: 150.0,
      currentPrice: 150.5,
      type: "Sell",
      timestamp: "2022-01-10 14:00:00",
      pnl: -10,
      lotSize: 20,
    },
  ]);
  const [orders] = useState([
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
   ** ** ** Effects
   ** **
   */
  //Set route options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            paddingRight: 16,
            alignItems: "center",
          }}
        >
          <View>
            <IconButton
              onPress={() => {
                setShowSortMenu(true);
              }}
              color="BLACK"
              iconSet="MATERIAL"
              icon="compare-arrows"
              size="SM"
            />
            <Menu
              visible={showSortMenu}
              items={[
                {
                  label: "Order",
                  icon: selectedSortIndex === 0 ? "arrow-up" : "",
                },
                {
                  label: "Time",
                  icon: selectedSortIndex === 1 ? "arrow-up" : "",
                },
                {
                  label: "Symbol",
                  icon: selectedSortIndex === 2 ? "arrow-up" : "",
                },
                {
                  label: "Profit",
                  icon: selectedSortIndex === 3 ? "arrow-up" : "",
                },
              ]}
              onItemPressed={(item, ind) => setSelectedSortIndex(ind)}
              onDismiss={() => setShowSortMenu(false)}
            />
          </View>
          <IconButton
            onPress={() => {
              setSelectedOption(null);
              setShowOrderModal(true);
            }}
            color="BLACK"
            iconSet="FEATHER"
            icon="file-plus"
            size="SM"
          />
        </View>
      ),
    });
  }, [selectedSortIndex, showSortMenu]);

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
      <View style={[styles.statsContainer, { height: statsHeight }]}>
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

  return (
    <View style={styles.container}>
      <FlatList
        data={[0]}
        renderItem={() => (
          <>
            {renderStats()}
            <View style={styles.positions}>
              <View style={[styles.header, { height: accordionHeight }]}>
                <Text style={[styles.headerText, { flex: 180 }]}>
                  Positions
                </Text>
              </View>
              <FL
                data={positions}
                style={styles.list}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={<Divider color="hsl(0, 0%, 90%)" />}
                renderItem={({ item }) => (
                  <RowItem
                    id={item.id}
                    symbol={item.symbol}
                    lot={item.lotSize}
                    type={item.type}
                    timestamp={item.timestamp}
                    entryPrice={item.entryPrice}
                    currentPrice={item.currentPrice}
                    pnl={item.pnl}
                    onLongPress={(id) => {
                      setSelectedOption(item);
                      setShowOptionsModal(true);
                    }}
                  />
                )}
              />
            </View>
            <View style={styles.orders}>
              <View style={[styles.header, { height: accordionHeight }]}>
                <Text style={[styles.headerText, { flex: 180 }]}>Orders</Text>
              </View>
              <FL
                data={orders}
                style={styles.list}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={<Divider color="hsl(0, 0%, 90%)" />}
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
          </>
        )}
      />

      <OrderNew
        defaultSymbol={selectedOption?.symbol}
        open={showOrderModal}
        onClose={() => {
          setShowOrderModal(false);
        }}
      />
      <PositionModify
        open={showModifyPosModal}
        onClose={() => setShowModifyPosModal(false)}
        position={selectedOption}
      />
      <PositionClose
        open={showClosePosModal}
        onClose={() => setShowClosePosModal(false)}
        position={selectedOption}
      />
      <SwipeUpOptionsMenu
        open={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        headerComponent={
          <RowItem disabled {...selectedOption} lot={selectedOption?.lotSize} />
        }
        options={[
          {
            label: "Close Position",
            icon: "x",
            onPress: () => setShowClosePosModal(true),
          },
          {
            label: "Modifiy Position",
            icon: "edit-3",
            onPress: () => setShowModifyPosModal(true),
          },
          {
            label: "New Order",
            icon: "plus",
            onPress: () => setShowOrderModal(true),
          },
          {
            label: "Chart",
            icon: "bar-chart-2",
            onPress: () => navigation.navigate("Chart"),
          },
        ]}
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
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statsContainer: {
    padding: 16,
    backgroundColor: "white",
    justifyContent: "center",
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
  statsString: {
    fontFamily: "Bebas Neue",
    fontSize: 14,
    color: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "hsl(0, 0%, 95%)",
  },
  headerText: {
    fontSize: scale(14),
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  positions: { flex: 1 },
  orders: { flex: 1 },
  list: {
    paddingHorizontal: 16,
    flex: 1,
    height: 400,
  },
});

export default TradesScreen;
