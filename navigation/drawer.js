import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Drawer Navigation
const Drawer = createDrawerNavigator();

/*
 ** ** =============================================================
 ** ** ** Component [DrawerNavigator]
 ** ** =============================================================
 */
const DrawerNavigator = () => {
  //Profile Screen
  const ProfileScreen = () => {
    return <View>Profile Screen</View>;
  };

  //Settings Screen
  const SettingsScreen = () => {
    return <View>Settings Screen</View>;
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pr" component={ProfileScreen} />
      <Drawer.Screen name="Se" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
