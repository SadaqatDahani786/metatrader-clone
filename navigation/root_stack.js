import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import Drawer from "./drawer";
import AddQuoteScreen from "../screens/quotes/AddQuoteScreen";
import EditQuoteScreen from "../screens/quotes/EditQuoteScreen";
import LoginScreen from "../screens/accounts/LoginScreen";
import SignupScreen01 from "../screens/accounts/SignupScreen01";
import SignupScreen02 from "../screens/accounts/SignupScreen02";
import BrokersScreen from "../screens/accounts/BrokersScreen";

//Stack Navigation
const Stack = createStackNavigator();

/*
 ** ** =============================================================
 ** ** ** Component [RootStack]
 ** ** =============================================================
 */
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        options={{ headerShown: false }}
        component={Drawer}
      />
      <Stack.Screen
        name="AddQuoteScreen"
        component={AddQuoteScreen}
        options={{
          headerShown: true,
          title: "Add Symbols",
          headerTitleStyle: {
            fontFamily: "Bebas Neue",
          },
        }}
      />
      <Stack.Screen name="EditQuoteScreen" component={EditQuoteScreen} />
      <Stack.Screen
        name="LoginScreen"
        options={{ title: "Login" }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignupScreen01"
        options={{ title: "Open a real account" }}
        component={SignupScreen01}
      />
      <Stack.Screen
        name="SignupScreen02"
        options={{ title: "Open a real account" }}
        component={SignupScreen02}
      />
      <Stack.Screen
        name="BrokersScreen"
        options={{ title: "Brokers" }}
        component={BrokersScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
