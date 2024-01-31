import { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Navigation
import { useIsFocused } from "@react-navigation/native";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { changeNavActive } from "../../store/navigationReducer";

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
  const isFocused = useIsFocused();
  const accounts = useSelector((store) => store.accounts);
  const dispatch = useDispatch();

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Set route options
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

  //Make current screen as active in redux store
  useEffect(() => {
    //1) If screen not active, return
    if (!isFocused) return;

    //2) Current screen is active, make it active in redux also
    dispatch(changeNavActive(4));
  }, [isFocused]);

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
                username: `${user.personal_details.firstname} ${user.personal_details.middlename} ${user.personal_details.lastname}`,
                deposit: user.deposit,
                recentStatus: user.recentStatus,
              }}
              broker={user.broker}
              isDemoAccount={user.isDemoAccount}
              isVerticalView={true}
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
                  username: `${user.personal_details.firstname} ${user.personal_details.middlename} ${user.personal_details.lastname}`,
                  deposit: user.deposit,
                  recentStatus: user.recentStatus,
                }}
                broker={user.broker}
                isDemoAccount={user.isDemoAccount}
                isVerticalView={false}
                showIconButton={true}
                onPress={() =>
                  navigation.navigate("LoginScreen", {
                    broker: user.broker,
                  })
                }
              />
            ))}
          {accounts.filter((account) => !account.isActiveAccount).length <=
            0 && <Text>Your connected accounts will show up here.</Text>}
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
