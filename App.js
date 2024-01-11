import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { NativeBaseProvider, NativeBaseConfigProvider } from 'native-base';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import RootStack from './navigation/root_stack';

export default function App() {
  const theme = useTheme();
  const [fontsLoaded] = useFonts({
    "Bebas Neue": BebasNeue_400Regular,
  });

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// "projectId": "49ebee58-acd2-4618-8eac-4d65a5c6a054"