import { View, Text, StyleSheet } from "react-native";

/*
 ** ** =============================================================
 ** ** ** Component [AccountsScreen]
 ** ** =============================================================
 */
const AccountsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Accounts Screen</Text>
  </View>
);

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontFamily: "Bebas Neue", fontSize: 24 },
});

export default AccountsScreen;
