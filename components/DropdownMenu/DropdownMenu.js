import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

//Expo
import { Feather } from "@expo/vector-icons";

//Components
import Menu from "../Menu";

/*
 ** ** =============================================================
 ** ** ** Component [DropdownMenu]
 ** ** =============================================================
 */
const DropdownMenu = ({
  placeholder,
  defaultOptionIndex = -1,
  options = [],
  onItemChanged = () => "",
}) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const [showMenu, setShowMenu] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] =
    useState(defaultOptionIndex);

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //Menu items press handler
  const onItemsPressedHander = (item, ind) => {
    setSelectedItemIndex(ind);
    onItemChanged(item, ind);
  };

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "rgba(0,0,0,0.1)" }}
        style={({ pressed }) => [
          styles.pressable,
          { backgroundColor: pressed ? "hsl(0, 0%, 90%)" : "transparent" },
        ]}
        onPress={() => setShowMenu((state) => !state)}
      >
        <View style={styles.row}>
          {options[selectedItemIndex]?.icon && (
            <Feather name={options[selectedItemIndex].icon} size={16} />
          )}
          <Text style={styles.selectedOptionText}>
            {selectedItemIndex === -1
              ? placeholder
              : options[selectedItemIndex].label}
          </Text>
        </View>
        <Feather name="chevron-down" size={16} />
      </Pressable>
      <Menu
        items={options}
        visible={showMenu}
        onDismiss={() => setShowMenu(false)}
        onItemPressed={onItemsPressedHander}
        fullWidth={true}
      />
    </View>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: { minWidth: 180 },
  pressable: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  selectedOptionText: {
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default DropdownMenu;
