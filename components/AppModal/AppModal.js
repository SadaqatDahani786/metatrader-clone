import {
  View,
  ScrollView,
  Text,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";

//Components
import IconButton from "../IconButton/IconButton";

//Utils
import { scale } from "../../utils/scale";
import { scaleVertical } from "../../utils/scaleVertical";

/*
 ** ** =============================================================
 ** ** ** Component [AppModal]
 ** ** =============================================================
 */
const AppModal = ({
  visible,
  onClose,
  title,
  subtitle,
  headerRight,
  children,
}) => {
  return (
    <Modal
      visible={visible}
      onDismiss={onClose}
      onRequestClose={onClose}
      statusBarTranslucent={true}
      transparent={true}
      animationType="slide"
    >
      <Pressable onPress={onClose} style={styles.bgOverlay} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <IconButton color="WHITE" onPress={onClose} size="SM" icon="x" />
            <View style={styles.titleWrap}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                {subtitle}
              </Text>
            </View>
          </View>
          {headerRight !== undefined && (
            <View style={styles.headerRight}>{headerRight}</View>
          )}
        </View>
        <ScrollView>
          <View style={styles.main}>{children}</View>
        </ScrollView>
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
    marginBottom: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    width: "95%",
    maxWidth: 680,
    maxHeight: "95%",
    borderRadius: 8,
    overflow: "hidden",
  },
  bgOverlay: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "hsl(0, 0%, 10%)",
    paddingHorizontal: 8,
    paddingVertical: 16,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  headerRight: { minWidth: 80, alignItems: "flex-end" },
  titleWrap: {
    gap: scaleVertical(2),
    flex: 1,
  },
  title: {
    fontSize: scale(16),
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: scale(14),
    color: "hsl(0, 0%, 90%)",
    flex: 1,
  },
  main: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    marginTop: 80,
  },
});

export default AppModal;
