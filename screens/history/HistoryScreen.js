import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

//Screens
import PositionsScreen from "./PositionsScreen";
import OrdersScreen from "./OrdersScreen";

//Componnets
import AppModal from "../../components/AppModal";
import Menu from "../../components/Menu";
import DatePicker from "../../components/DatePicker";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton/IconButton";

//Tab Navigation
const Tab = createMaterialTopTabNavigator();

/*
 ** ** =============================================================
 ** ** ** Component [HistoryScreen]
 ** ** =============================================================
 */
const HistoryScreen = ({ navigation }) => {
  //Symbols
  const quotes = useSelector((store) => store.quotes);
  const [symbols, setSymbols] = useState(["All Symbols"]);
  const [selectedSymbolIndex, setSelectedSymbolIndex] = useState(0);
  const [isSymbolMenuOpen, setIsSymbolMenuOpen] = useState(false);

  //Sort
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [selectedSortIndex, setSelectedSortIndex] = useState(0);

  //Date Range
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateFrom, setDateFrom] = useState("2024-01-01T00:00:00");
  const [dateTo, setDateTo] = useState("2025-01-01T00:00:00");

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Set route options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <View style={{ gap: 4 }}>
            <Text style={styles.pageHeaderTitle}>HISTORY</Text>
            <Text style={styles.pageHeaderSubtitle}>
              {symbols[selectedSymbolIndex].label}
            </Text>
          </View>
        );
      },
      headerRight: () => (
        <View style={{ paddingRight: 16, flexDirection: "row", gap: 8 }}>
          <View style={styles.symbols}>
            <IconButton
              onPress={() => setIsSymbolMenuOpen(true)}
              size="SM"
              iconSet="MATERIAL"
              icon="currency-exchange"
            />
            <Menu
              items={symbols}
              visible={isSymbolMenuOpen}
              onDismiss={() => setIsSymbolMenuOpen(false)}
              onItemPressed={(_, ind) => setSelectedSymbolIndex(ind)}
            />
          </View>
          <View style={styles.sort}>
            <IconButton
              onPress={() => setIsSortMenuOpen(true)}
              size="SM"
              iconSet="MATERIAL"
              icon="compare-arrows"
            />
            <Menu
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
              visible={isSortMenuOpen}
              onDismiss={() => setIsSortMenuOpen(false)}
              onItemPressed={(_, ind) => setSelectedSortIndex(ind)}
            />
          </View>
          <View style={styles.date}>
            <IconButton
              onPress={() => setShowDatePicker(true)}
              size="SM"
              iconSet="FEATHER"
              icon="calendar"
            />
            <AppModal
              visible={showDatePicker}
              onClose={() => setShowDatePicker(false)}
              title="Pick Range"
              subtitle="Select a range to show results in-between."
            >
              <DatePicker
                label="From"
                value={dateFrom}
                onChange={(date) => setDateFrom(date.toISOString())}
              />
              <DatePicker
                label="To"
                value={dateTo}
                onChange={(date) => setDateTo(date.toISOString())}
              />
              <FormGroup delegatedStyles={{ borderWidth: 0, paddingBottom: 0 }}>
                <Button
                  onPress={() => setShowDatePicker(false)}
                  size="SM"
                  color="black"
                  corners
                  fullWidth
                >
                  Show Results
                </Button>
              </FormGroup>
            </AppModal>
          </View>
        </View>
      ),
    });
  }, [
    isSymbolMenuOpen,
    selectedSymbolIndex,
    isSortMenuOpen,
    selectedSortIndex,
    showDatePicker,
    dateFrom,
    dateTo,
  ]);

  //Set symbols when quotes fetched
  useEffect(() => {
    setSymbols([
      {
        label: "All Symbols",
        icon: selectedSymbolIndex === 0 ? "check-circle" : "",
      },
      ...quotes.map((quote, i) => ({
        label: quote.pair,
        icon: selectedSymbolIndex === i + 1 ? "check-circle" : "",
      })),
    ]);
  }, [quotes, selectedSymbolIndex]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Positions" component={PositionsScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  pageHeaderTitle: { fontSize: 18, fontFamily: "Bebas Neue" },
  pageHeaderSubtitle: { fontSize: 14, fontFamily: "Bebas Neue", color: "gray" },
});

export default HistoryScreen;
