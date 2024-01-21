import { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Redux
import { useSelector } from "react-redux";

//Components
import Menu from "../../components/Menu";
import IconButton from "../../components/IconButton/IconButton";
import AccountCard from "../../components/AccountCard";

/*
 ** ** =============================================================
 ** ** ** Component [AccountsScreen]
 ** ** =============================================================
 */
const AccountsScreen = ({ navigation }) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const [showOptions, setShowOptions] = useState(false);
  const accounts = useSelector((store) => store.accounts);

  //Layout effect
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{ paddingRight: 16, flexDirection: "row", gap: 8 }}>
            <IconButton
              iconSet="FEATHER"
              icon="plus"
              size="SM"
              color="BLACK"
              onPress={() => navigation.navigate("BrokersScreen")}
            />
            <View>
              <IconButton
                iconSet="FEATHER"
                icon="more-vertical"
                size="SM"
                color="BLACK"
                onPress={() => setShowOptions((state) => !state)}
              />
              <Menu
                onDismiss={() => setShowOptions(false)}
                visible={showOptions}
                items={[
                  { label: "Change Password", icon: "lock" },
                  { label: "Clear Password", icon: "x" },
                  { label: "Remove Account", icon: "user-x" },
                ]}
              />
            </View>
          </View>
        );
      },
    });
  }, [showOptions]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {accounts
          .filter((account) => account.isActiveAccount)
          .map((user) => (
            <AccountCard
              key={user.id}
              account={{
                id: user.id,
                username: user.fullname,
                deposit: user.deposit,
                recentStatus: user.recentStatus,
              }}
              broker={user.broker}
              isDemoAccount={user.isDemoAccount}
              isLoggedInAccount={true}
              showIconButton={true}
            />
          ))}
        <Text style={styles.text}>Connect to:</Text>
        <View style={styles.accountsList}>
          {accounts
            .filter((account) => !account.isActiveAccount)
            .map((user) => (
              <AccountCard
                key={user.id}
                account={{
                  id: user.id,
                  username: user.fullname,
                  deposit: user.deposit,
                  recentStatus: user.recentStatus,
                }}
                broker={user.broker}
                isDemoAccount={user.isDemoAccount}
                isLoggedInAccount={false}
                showIconButton={true}
                onPress={() =>
                  navigation.navigate("LoginScreen", {
                    broker: user.broker,
                  })
                }
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  scrollView: {
    gap: 16,
    padding: 16,
  },
  text: { fontFamily: "Bebas Neue", fontSize: 16, alignSelf: "flex-start" },
  accountsList: {
    width: "100%",
    gap: 8,
  },
});

export default AccountsScreen;
