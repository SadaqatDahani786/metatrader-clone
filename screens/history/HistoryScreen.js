import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import PositionsScreen from "./PositionsScreen";
import OrdersScreen from "./OrdersScreen";

//Tab Navigation
const Tab = createMaterialTopTabNavigator();

/*
 ** ** =============================================================
 ** ** ** Component [HistoryScreen]
 ** ** =============================================================
 */
const HistoryScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Positions" component={PositionsScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default HistoryScreen;
