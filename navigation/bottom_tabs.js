import React from "react";
import { View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Components
import IconButton from "../components/IconButton/IconButton";

//Screens
import QuotesScreen from "../screens/quotes";
import ChartScreen from "../screens/chart";
import TradesScreen from "../screens/trades";
import HistoryScreen from "../screens/history";
import AccountsScreen from "../screens/accounts";

//Bottom Tab Navigation
const Tab = createBottomTabNavigator();

/*
 ** **
 ** ** ** Styles
 ** **
 */
const headerTitleStyle = {
  fontFamily: "Bebas Neue",
  fontSize: 20,
};
const selectedIconColor = "#448AFF";
const unselectedIconColor = "#757575";
const iconTextMarginBottom = -6;

/*
 ** ** =============================================================
 ** ** ** Component [BottomTabs]
 ** ** =============================================================
 */
const BottomTabs = ({ navigation }) => (
  <Tab.Navigator initialRouteName="Quotes">
    <Tab.Screen
      name="Quotes"
      component={QuotesScreen}
      options={{
        title: "QUOTES",
        headerShown: true,
        headerTitleStyle,
        tabBarIcon: ({ color, size }) => (
          <Feather
            name="zap"
            size={size - 8}
            color={color}
            style={{ marginBottom: iconTextMarginBottom }}
          />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? "bold" : "normal",
          color: focused ? selectedIconColor : unselectedIconColor,
        }),
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              gap: 8,
              paddingRight: 16,
              alignItems: "center",
            }}
          >
            <IconButton
              onPress={() => navigation.navigate("AddQuoteScreen")}
              color="BLACK"
              iconSet="FEATHER"
              icon="plus"
              size="SM"
            />
            <IconButton
              onPress={() => navigation.navigate("EditQuoteScreen")}
              color="BLACK"
              iconSet="FEATHER"
              icon="edit-3"
              size="SM"
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chart"
      component={ChartScreen}
      options={{
        headerShown: true,
        headerTitleStyle,
        tabBarIcon: ({ color, size }) => (
          <Feather
            name="bar-chart-2"
            size={size - 8}
            color={color}
            style={{ marginBottom: iconTextMarginBottom }}
          />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? "bold" : "normal",
          color: focused ? selectedIconColor : unselectedIconColor,
        }),
      }}
    />
    <Tab.Screen
      name="Trades"
      component={TradesScreen}
      options={{
        headerShown: true,
        headerTitleStyle,
        tabBarIcon: ({ color, size }) => (
          <Feather
            name="trending-up"
            size={size - 8}
            color={color}
            style={{ marginBottom: iconTextMarginBottom }}
          />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? "bold" : "normal",
          color: focused ? selectedIconColor : unselectedIconColor,
        }),
      }}
    />
    <Tab.Screen
      name="History"
      component={HistoryScreen}
      options={{
        headerShown: true,
        headerTitleStyle,
        tabBarIcon: ({ color, size }) => (
          <Feather
            name="git-merge"
            size={size - 8}
            color={color}
            style={{ marginBottom: iconTextMarginBottom }}
          />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? "bold" : "normal",
          color: focused ? selectedIconColor : unselectedIconColor,
        }),
      }}
    />
    <Tab.Screen
      name="Accounts"
      component={AccountsScreen}
      options={{
        headerShown: true,
        headerTitleStyle,
        tabBarIcon: ({ color, size }) => (
          <Feather
            name="users"
            size={size - 8}
            color={color}
            style={{ marginBottom: iconTextMarginBottom }}
          />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? "bold" : "normal",
          color: focused ? selectedIconColor : unselectedIconColor,
        }),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
