import { View, Text, StyleSheet, Pressable } from "react-native";

import { Feather } from "@expo/vector-icons";
import OutsidePressHandler from "react-native-outside-press";

/*
 ** ** =============================================================
 ** ** ** Component [Menu]
 ** ** =============================================================
 */
const Menu = ({
  items = [],
  visible = false,
  onDismiss = () => "",
  onItemPressed = () => "",
  fullWidth = false,
  centerAlign = false,
}) => {
  return (
    <OutsidePressHandler
      style={{ display: visible ? "flex" : "none" }}
      onOutsidePress={() => onDismiss()}
    >
      <View style={[styles.container, { width: fullWidth ? "100%" : 200 }]}>
        {items.map((item, ind) => (
          <Pressable
            onPress={() => {
              onItemPressed(items[ind], ind);
              onDismiss();
            }}
            android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
            style={({ pressed }) => [
              styles.item,
              {
                backgroundColor: pressed ? "rgba(0, 0, 0, 0.1)" : "transparent",
                justifyContent: centerAlign ? "center" : "flex-start",
              },
            ]}
            key={ind}
          >
            {item?.icon && <Feather name={item.icon} color="black" size={16} />}
            <Text style={styles.label}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </OutsidePressHandler>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "hsl(0, 0%, 100%)",
    top: 0,
    right: 0,
    borderRadius: 8,
    elevation: 1,
    overflow: "hidden",
    elevation: 4,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
    borderColor: "hsl(0, 0%, 80%)",
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: "Bebas Neue",
  },
});

export default Menu;
