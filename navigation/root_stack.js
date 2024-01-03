import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottom_tabs';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    );
};

export default RootStack;
