import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import BottomTabs from "./bottom_tabs";
import AddQuoteScreen from "../screens/quotes/AddQuoteScreen";
import EditQuoteScreen from "../screens/quotes/EditQuoteScreen";
import LoginScreen from "../screens/accounts/LoginScreen";

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
    </Stack.Navigator>
  );
};

export default RootStack;
