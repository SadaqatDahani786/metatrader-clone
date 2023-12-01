import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { NativeBaseProvider, NativeBaseConfigProvider } from 'native-base'; // Import NativeBaseProvider
import RootStack from './navigation/root_stack';

export default function App() {
  const theme = useTheme();

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
