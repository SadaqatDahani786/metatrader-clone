import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import BottomTabs from './bottom_tabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const ProfileScreen = () => {
        // Define ProfileScreen component here
        return <View>Profile Screen</View>;
    };

    const SettingsScreen = () => {
        // Define SettingsScreen component here
        return <View>Settings Screen</View>;
    };

    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="Ho" component={BottomTabs} /> */}
            <Drawer.Screen name="Pr" component={ProfileScreen} />
            <Drawer.Screen name="Se" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
