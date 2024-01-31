import { View, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

//Navigation
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

//Redux
import { useSelector } from "react-redux";

//Components
import AccountCard from "../AccountCard";
import Divider from "../Divider";

/**
 ** ** ===================================================================================
 ** ** ** Component [DrawerContent]
 ** ** ===================================================================================
 */
const DrawerContent = (props) => {
  /**
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const navigation = useNavigation();
  const navState = useSelector((store) => store.navigation);
  const accountActive = useSelector((store) =>
    store.accounts.find((account) => account.isActiveAccount)
  );

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <AccountCard
          account={{
            id: accountActive.id,
            username: `${accountActive.personal_details.firstname} ${accountActive.personal_details.middlename} ${accountActive.personal_details.lastname}`,
          }}
          broker={{
            logo: accountActive?.broker?.logo,
            server: accountActive?.broker?.server,
          }}
          isVerticalView={false}
          showIconButton={false}
          disabled
          isDemoAccount
          showNavigationLink
          onNavButtonPress={() => navigation.navigate("Accounts")}
        />
      </View>
      <Divider color="hsl(0, 0%, 90%)" />
      <DrawerItem
        focused={navState == 2}
        onPress={() => navigation.navigate("Trades")}
        label="Trades"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="trending-up" />
        )}
      />
      <DrawerItem
        focused={navState == 5}
        onPress={() => navigation.navigate("News")}
        label="News"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="globe" />
        )}
      />
      <DrawerItem
        focused={navState == 6}
        onPress={() => navigation.navigate("Mailbox")}
        label="Mailbox"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="mail" />
        )}
      />
      <DrawerItem
        focused={navState == 7}
        onPress={() => navigation.navigate("Journal")}
        label="Journal"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="book" />
        )}
      />
      <DrawerItem
        focused={navState == 8}
        onPress={() => navigation.navigate("Settings")}
        label="Settings"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="settings" />
        )}
      />
      <DrawerItem
        focused={navState == 9}
        onPress={() => navigation.navigate("Economic Calendar")}
        label="Economic Calendar"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="calendar" />
        )}
      />
      <DrawerItem
        focused={navState == 10}
        onPress={() => navigation.navigate("Trades Community")}
        label="Trades Community"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="users" />
        )}
      />
      <DrawerItem
        focused={navState == 11}
        onPress={() => navigation.navigate("User Guide")}
        label="User Guide"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="help-circle" />
        )}
      />
      <DrawerItem
        focused={navState == 12}
        onPress={() => navigation.navigate("About")}
        label="About"
        icon={({ color, size }) => (
          <Feather color={color} size={size} name="info" />
        )}
      />
    </DrawerContentScrollView>
  );
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({ header: { paddingLeft: 16 } });

export default DrawerContent;
