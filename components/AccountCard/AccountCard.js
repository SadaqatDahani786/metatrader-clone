import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import { useImageDimensions } from "@react-native-community/hooks";

//Components
import IconButton from "../IconButton/IconButton";

/**
 ** ** ===================================================================================
 ** ** ** Component [AccountCard]
 ** ** ===================================================================================
 */
const AccountCard = ({
  account,
  broker,
  isLoggedInAccount = false,
  isDemoAccount = false,
  showIconButton = false,
  onIconButtonPress = () => "",
  onPress = () => "",
}) => {
  /**
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const companyLogo = useImageDimensions({ uri: broker?.logo });

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          {
            backgroundColor: pressed ? "hsl(0, 0%, 90%)" : "transparent",
            flexDirection: isLoggedInAccount ? "column" : "row",
          },
        ]}
        android_ripple={{ color: "rgba(0,0,0,0.1)" }}
        onPress={onPress}
      >
        {isDemoAccount && (
          <View style={styles.tag}>
            <Text
              style={[
                styles.title,
                { fontFamily: "Bebas Neue", fontWeight: "normal" },
              ]}
            >
              DEMO
            </Text>
          </View>
        )}
        <View
          style={[
            styles.leftView,
            { alignItems: isLoggedInAccount ? "center" : "flex-start" },
          ]}
        >
          <View style={styles.companyLogo}>
            <Image
              style={styles.image}
              source={{
                uri: broker?.logo,
                width: companyLogo?.dimensions?.width || 400,
                height: companyLogo?.dimensions?.height || 400,
              }}
            />
          </View>
        </View>
        <View
          style={[
            styles.rightView,
            { alignItems: isLoggedInAccount ? "center" : "flex-start" },
          ]}
        >
          <View
            style={{
              alignItems: isLoggedInAccount ? "center" : "flex-start",
            }}
          >
            <Text style={styles.title}>{account?.username}</Text>
            <Text style={styles.company}>{broker?.company}</Text>
          </View>
          <View
            style={{
              alignItems: isLoggedInAccount ? "center" : "flex-start",
            }}
          >
            <Text style={styles.subtitle}>
              {account?.id} — {broker?.name}
            </Text>
            <Text style={styles.subtitle}>{broker?.server}</Text>
          </View>
          <View
            style={{
              alignItems: isLoggedInAccount ? "center" : "flex-start",
            }}
          >
            <Text style={styles.amount}>
              {account?.deposit?.amount} {account?.deposit?.currency}
            </Text>
            {!isLoggedInAccount && (
              <Text style={styles.recentStatus}>
                {account?.recentStatus}, Last Known
              </Text>
            )}
          </View>
        </View>
        {showIconButton && (
          <View style={styles.infoButton}>
            <IconButton
              onPress={onIconButtonPress}
              size="SM"
              icon={isLoggedInAccount ? "bell" : "info"}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

/**
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    elevation: 0.5,
    borderRadius: 4,
    overflow: "hidden",
  },
  pressable: {
    gap: 16,
    paddingVertical: 24,
    paddingHorizontal: 32,
  },
  tag: {
    position: "absolute",
    top: 10,
    right: -45,
    backgroundColor: "yellow",
    width: 160,
    paddingVertical: 8,
    transform: [{ rotateZ: "45deg" }],
    justifyContent: "center",
    alignItems: "center",
  },
  leftView: {},
  companyLogo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  rightView: {
    flexGrow: 1,
    gap: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  company: {
    fontSize: 16,
    color: "deepskyblue",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  recentStatus: {
    fontSize: 14,
    color: "gray",
  },
  infoButton: {
    position: "absolute",
    right: 8,
    bottom: 8,
  },
});

export default AccountCard;
