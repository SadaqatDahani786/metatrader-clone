import { createDrawerNavigator } from "@react-navigation/drawer";

//Screens
import BottomTabs from "./bottom_tabs";

//Components
import DrawerContent from "../components/DrawerContent";

//Drawer Navigation
const Drawer = createDrawerNavigator();

/*
 ** ** =============================================================
 ** ** ** Component [DrawerNavigator]
 ** ** =============================================================
 */
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          title: "Tabs",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
