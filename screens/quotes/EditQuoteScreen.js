import { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useHeaderHeight } from "@react-navigation/elements";
import Checkbox from "react-native-bouncy-checkbox";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Components
import IconButton from "../../components/IconButton/IconButton";
import { removeQuotes } from "../../store/quotesReducer";

/*
 ** ** =============================================================
 ** ** ** Component [EditQuoteScreen]
 ** ** =============================================================
 */
const EditQuoteScreen = ({ navigation }) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const [editMode, setEditMode] = useState(false);
  const [quotesData, setQuotesData] = useState([]);

  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();
  const dimenstions = useWindowDimensions();
  const navHeaderHeight = useHeaderHeight();

  const statusBarHeight = Constants.statusBarHeight;

  /*
   ** **
   ** ** ** Side Effects
   ** **
   */
  //Set route options
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Selected Symbols",
      headerBackVisible: true,
      headerStyle: { backgroundColor: editMode ? "hsl(0, 0%, 90%)" : "white" },
      headerRight: () => {
        return (
          <View style={{ paddingRight: 16 }}>
            {editMode && (
              <View
                style={[
                  styles.editModeHeader,
                  {
                    width: dimenstions.width,
                    height: navHeaderHeight - statusBarHeight,
                    bottom: -12,
                  },
                ]}
              >
                <View style={styles.row}>
                  <IconButton
                    color="BLACK"
                    size="SM"
                    icon="check"
                    onPress={toggleEditMode}
                  />
                  <Text style={styles.subtitle}>
                    ({countSelectedItems(quotesData)}) items selected
                  </Text>
                </View>
                <View style={styles.row}>
                  <View style={{ gap: -8 }}>
                    <Checkbox
                      onPress={toggleAllCheckboxes}
                      size={18}
                      fillColor="black"
                      iconStyle={{ borderRadius: 4 }}
                      innerIconStyle={{ borderRadius: 4 }}
                      disableBuiltInState
                      disabled={quotesData.length <= 1}
                      isChecked={
                        countSelectedItems(quotesData) ===
                          quotesData.length - 1 && quotesData.length > 1
                      }
                    />
                  </View>
                  <IconButton
                    color="BLACK"
                    size="SM"
                    icon="trash"
                    onPress={removeSelectedQuotesHandler}
                  />
                </View>
              </View>
            )}
            <IconButton onPress={toggleEditMode} size="SM" icon="trash" />
          </View>
        );
      },
    });
  }, [editMode, quotesData]);

  //Sync quotes with quotesData
  useEffect(() => {
    //1) Modify quotes arr and add selected property
    const data = quotes.map((item) => ({ ...item, selected: false }));

    //2) Set quotes data
    setQuotesData(data);
  }, [quotes]);

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //Toggle edit mode on or off
  const toggleEditMode = () => {
    setEditMode((state) => !state);
    toggleAllCheckboxes(true);
  };

  //Count the currently selected items
  const countSelectedItems = (arr) => {
    return arr.reduce(
      (acc, currItem) => (currItem.selected ? (acc += 1) : acc),
      0
    );
  };

  //Check wether the all checkbox are checked or no
  const isAllCheckboxSelected = () => {
    return countSelectedItems(quotesData) === quotesData.length - 1;
  };

  //Toggle the selected checkbox on or off
  const toggleCheckbox = (identifier) => {
    //1) Find and update the selected checkbox
    const updatedQuotes = quotesData.map((quote, ind) =>
      quote.pair === identifier && ind !== 0
        ? { ...quote, selected: !quote.selected }
        : quote
    );

    //2) Update quotes
    setQuotesData(updatedQuotes);
  };

  //Toggle all checkbox on or off
  const toggleAllCheckboxes = (reset = false) => {
    //1) Determine the selection to be happen
    const isAllSelected = reset ? true : isAllCheckboxSelected();

    //2) Update quote with new selection
    setQuotesData(
      quotesData.map((quote, ind) => ({
        ...quote,
        selected: ind === 0 ? false : !isAllSelected,
      }))
    );
  };

  //Remove quotes
  const removeSelectedQuotesHandler = () => {
    //1) Create array of identifiers of items that needs to be removed
    const identifiers = quotesData
      .filter((quote) => quote.selected)
      .map((quote) => quote.pair);

    //2) Dispatch action to remove items from redux store
    dispatch(removeQuotes(identifiers));

    //3) Toggle Edit Mode
    toggleEditMode();
  };

  return (
    <View>
      <StatusBar backgroundColor="transparent" />
      <FlatList
        data={quotesData}
        keyExtractor={(item) => item.pair}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "hsl(0, 0%, 90%)" : "transparent",
                },
                styles.pressable,
              ]}
              android_ripple={{ color: "hsl(0, 0%, 60%)" }}
              onPress={() => toggleCheckbox(item.pair)}
              onLongPress={() => {
                if (editMode || index === 0) return;

                toggleEditMode();
                toggleCheckbox(item.pair);
              }}
            >
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{item.pair}</Text>
                <Text style={styles.subtitle}>{item.pair_full}</Text>
              </View>
              <View>
                {editMode && index > 0 && (
                  <Checkbox
                    onPress={() => toggleCheckbox(item.pair)}
                    disableBuiltInState
                    isChecked={item.selected}
                    size={16}
                    fillColor="blue"
                    iconStyle={{ borderRadius: 4 }}
                    innerIconStyle={{ borderRadius: 4 }}
                  />
                )}
              </View>
            </Pressable>
          </View>
        )}
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
  editModeHeader: {
    position: "absolute",
    zIndex: 10,
    right: 0,
    backgroundColor: "hsl(0, 0%, 90%)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  listItem: {
    width: "100%",
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  textWrapper: {
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "Bebas Neue",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Bebas Neue",
    color: "gray",
  },
  row: {
    height: "100%",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});

export default EditQuoteScreen;
