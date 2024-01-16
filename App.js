import { useEffect } from "react";

//Expo
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";

//Nav
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import RootStack from "./navigation/root_stack";

//Redux
import { Provider } from "react-redux";
import store from "./store/store";

/*
 ** ** =============================================================
 ** ** ** Component [App]
 ** ** =============================================================
 */
export default function App() {
  const [fontsLoaded] = useFonts({
    "Bebas Neue": BebasNeue_400Regular,
  });

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //Don't render until fonts are loaded
  useEffect(() => {
    if (!fontsLoaded) preventAutoHideAsync();
    else hideAsync();
  }, [fontsLoaded]);

  //Font Loading
  if (!fontsLoaded) return;

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

// "projectId": "49ebee58-acd2-4618-8eac-4d65a5c6a054"
