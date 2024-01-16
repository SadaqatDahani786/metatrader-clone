import { useEffect, useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

//Components
import Divider from "../Divider/Divider";

/*
 ** ** =============================================================
 ** ** ** Component [Accordian]
 ** ** =============================================================
 */
const Accordian = ({
  title = "",
  items = [],
  expanded = false,
  onPress = () => "",
}) => {
  /*
   ** **
   ** ** ** State
   ** **
   */
  const [show, setShow] = useState(expanded);

  /*
   ** **
   ** ** ** Sync the expanded state
   ** **
   */
  useEffect(() => {
    setShow(expanded);
  }, [expanded]);

  /*
   ** **
   ** ** ** Toggle the state
   ** **
   */
  const toggleShow = () => {
    setShow((state) => !state);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "rgba(0, 0, 0, 0.1)" : "transparent" },
          styles.pressable,
        ]}
        onPress={toggleShow}
        android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
      >
        <View style={styles.header}>
          <Feather name="folder" size={20} color="gray" />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
      {show && (
        <View style={{ width: "100%", height: "auto" }}>
          <FlatList
            ItemSeparatorComponent={() => <Divider color="gray" />}
            data={items}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Pressable
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? "rgba(0, 0, 0, 0.1)"
                        : "transparent",
                    },
                    styles.pressableListItem,
                  ]}
                  android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
                  onPress={() => onPress(item)}
                >
                  <Text style={styles.listItemTitle}>{item.title}</Text>
                  <Text style={styles.listItemSubtitle}>{item.subtitle}</Text>
                </Pressable>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  pressable: {
    height: 60,
    justifyContent: "center",
    padding: 8,
  },
  pressableListItem: {
    width: "100%",
    padding: 16,
  },
  header: { flexDirection: "row", alignItems: "center", gap: 8 },
  title: {
    fontFamily: "Bebas Neue",
    fontWeight: "bold",
    fontSize: 18,
  },
  listItem: {
    width: "100%",
    overflow: "hidden",
  },
  listItemTitle: {
    fontFamily: "Bebas Neue",
    fontSize: 16,
    fontWeight: "bold",
  },
  listItemSubtitle: {
    fontFamily: "Bebas Neue",
    fontSize: 14,
    color: "gray",
  },
});

export default Accordian;
