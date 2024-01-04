import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'native-base';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuotesScreen from '../screens/quotes';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TradesScreen from '../screens/trades';
import HistoryScreen from '../screens/history';

const Tab = createBottomTabNavigator();

const headerTitleStyle = {
  fontFamily: 'Bebas Neue',
  fontSize: 20,
};

const selectedIconColor = '#448AFF';
const unselectedIconColor = '#757575';

const boldSelectedIconStyle = {
  fontWeight: 'bold',
};

const ChartScreen = () => {
  const removeElements = ["overlap-manager-root"];
  const stylesToInject = `
    .layout__area--topleft {display:none !important;}
    #overlap-manager-root {display:none !important;}
  `;
  //

  const injectedJavaScript = `
  // Your JavaScript code here
  var classNamesToDelete = ['layout__area--topleft', 'layout__area--top', 'layout__area--left', 'layout__area--right'];

  classNamesToDelete.forEach(function(className) {
      var elementsToDelete = document.getElementsByClassName(className);

      while (elementsToDelete.length > 0) {
          elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
      }
  });

  var styleElement = document.createElement('style');
  styleElement.innerHTML = '.chart-page { background-color: #ffffff; }';
  document.head.appendChild(styleElement);
`;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://www.tradingview.com/chart/?symbol=BITSTAMP%3ABTCUSD' }}
        style={{ flex: 1 }}
        injectedJavaScript={injectedJavaScript}
        containerStyle={{ backgroundColor: 'white' }}
        contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      />
    </SafeAreaView>
  );
};

// const TradesScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24 }}>Trades Screen</Text>
//   </View>
// );

// const HistoryScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24 }}>History Screen</Text>
//   </View>
// );

const AccountsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontFamily: 'Bebas Neue', fontSize: 24 }}>Accounts Screen</Text>
  </View>
);

const iconTextMarginBottom = -6;

const BottomTabs = () => (
  <Tab.Navigator initialRouteName="Quotes">
    <Tab.Screen
      name="Quotes"
      component={QuotesScreen}
      options={{
        headerShown: true,
        headerTitleStyle,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="md-list" size={size - 8} color={color} style={{ marginBottom: iconTextMarginBottom }} />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? 'bold' : 'normal',
          color: focused ? selectedIconColor : unselectedIconColor,
        }),
      }}
    />
    <Tab.Screen
      name="Chart"
      component={ChartScreen}
      options={{
        headerShown: true,
        headerTitleStyle,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="line-chart" size={size - 8} color={color} style={{ marginBottom: iconTextMarginBottom }} />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? 'bold' : 'normal',
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
          <Ionicons name="md-trending-up" size={size - 8} color={color} style={{ marginBottom: iconTextMarginBottom }} />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? 'bold' : 'normal',
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
          <Ionicons name="md-time" size={size - 8} color={color} style={{ marginBottom: iconTextMarginBottom }} />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? 'bold' : 'normal',
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
          <Ionicons name="md-wallet" size={size - 8} color={color} style={{ marginBottom: iconTextMarginBottom }} />
        ),
        tabBarLabelStyle: ({ focused }) => ({
          fontWeight: focused ? 'bold' : 'normal',
          color: focused ? selectedIconColor : unselectedIconColor,
        }),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
