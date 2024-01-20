import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import BottomTabs from "./bottom_tabs";
import AddQuoteScreen from "../screens/quotes/AddQuoteScreen";
import EditQuoteScreen from "../screens/quotes/EditQuoteScreen";
import LoginScreen from "../screens/accounts/LoginScreen";
import SignupScreen01 from "../screens/accounts/SignupScreen01";
import SignupScreen02 from "../screens/accounts/SignupScreen02";

//Stack Navigation
const Stack = createStackNavigator();

/*
 ** ** =============================================================
 ** ** ** Component [RootStack]
 ** ** =============================================================
 */
const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
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
      <Stack.Screen
        options={{ headerShown: true }}
        name="EditQuoteScreen"
        component={EditQuoteScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{ headerShown: true, title: "Login" }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignupScreen01"
        options={{ title: "Open a real account", headerShown: true }}
        component={SignupScreen01}
      />
      <Stack.Screen
        name="SignupScreen02"
        options={{ title: "Open a real account", headerShown: true }}
        component={SignupScreen02}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
