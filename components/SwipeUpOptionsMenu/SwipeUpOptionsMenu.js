import { View, Pressable, Modal, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

//Utils
import scale from "../../utils/scale";

/*
 ** ** =============================================================
 ** ** ** Component [SwipeUpOptionsMenu]
 ** ** =============================================================
 */
const SwipeUpOptionsMenu = ({
  open = false,
  options = [],
  headerComponent,
  onClose = () => "",
}) => {
  return (
    <Modal
      onRequestClose={onClose}
      onDismiss={onClose}
      visible={open}
      transparent
      statusBarTranslucent
      animationType="slide"
    >
      <Pressable onPress={onClose} style={styles.modalBgOverlay} />
      <View style={styles.container}>
        {headerComponent}
        <View style={styles.options}>
          {options.map((option, ind) => (
            <View style={styles.optionWrapper}>
              <Pressable
                key={option.label}
                style={styles.optionPressable}
                android_ripple={{ color: "rgba(0,0,0, 0.1)" }}
                onPress={() => {
                  onClose();
                  option.onPress(option, ind);
                }}
              >
                <Feather size={16} color="black" name={option.icon} />
                <Text style={styles.optionText}>{option.label}</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    width: "100%",
    maxHeight: "95%",
    padding: 16,
    overflow: "hidden",
  },
  modalBgOverlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  options: {
    borderTopWidth: 1,
    borderColor: "hsl(0, 0%, 90%)",
    marginTop: 16,
    paddingVertical: 16,
    gap: 4,
  },
  optionWrapper: { overflow: "hidden", borderRadius: 4 },
  optionPressable: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  optionText: { fontSize: scale(14), color: "black" },
});

export default SwipeUpOptionsMenu;
