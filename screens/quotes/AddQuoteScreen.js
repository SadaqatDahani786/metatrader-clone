import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

//Components
import Accordian from "../../components/Accordion/Accordian";
import Divider from "../../components/Divider/Divider";

//Redux Reducers
import { addQuote } from "../../store/quotesReducer";

/*
 ** **
 ** ** ** Dummy data
 ** **
 */
const data = [
  {
    title: "Data Feeds/Crypto",
    items: [
      {
        pair: "BTC/ETH",
        pair_full: "Bitcoin vs Etherium",
        bid: 1.1802,
        ask: 1.1804,
        change: -0.0012,
      },
      {
        pair: "BTC/DOGE",
        pair_full: "Bitcoin vs Doge Coin",
        bid: 1.1802,
        ask: 1.1804,
        change: -0.0012,
      },
      {
        pair: "BTC/Moon",
        pair_full: "Bitcoin vs Moon Coin",
        bid: 1.1802,
        ask: 1.1804,
        change: -0.0012,
      },
    ],
  },
  {
    title: "Data Feeds/Energy",
    items: [
      {
        pair: "USOil",
        pair_full: "Us Oil",
        bid: 1.1802,
        ask: 1.1804,
        change: -0.0012,
      },
    ],
  },
  {
    title: "Data Feeds/Forex/Forex Cross",
    items: [
      {
        pair: "USD/CAD",
        pair_full: "United States Dollar vs Canadian Dollar",
        bid: 1.1802,
        ask: 1.1804,
        change: -0.0012,
      },
      {
        pair: "EUR/USD",
        pair_full: "Euro vs United States Dollar",
        bid: 1.1802,
        ask: 1.1804,
        change: -0.0012,
      },
    ],
  },
];

/*
 ** ** =============================================================
 ** ** ** Component [AddQuoteScreen]
 ** ** =============================================================
 */
const AddQuoteScreen = () => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const [symbols, setSymbols] = useState(data);
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  /*
   ** **
   ** ** ** Search input text change handler
   ** **
   */
  const onChangeSearchHandler = (e) => {
    setSearchQuery(e);
  };

  /*
   ** **
   ** ** ** UseEffect for searching symbols
   ** **
   */
  useEffect(() => {
    //1) Remove pairs that already exist in quotes
    const symbolsNew = removeExistingItems(data, quotes);

    //2) If search input empty, reset and return
    if (searchQuery.length < 1) {
      setSymbols(symbolsNew);
      setExpanded(false);
      return;
    }

    //3) Find the items with search query regex
    const regex = new RegExp(searchQuery, "ig");
    let updatedSymbols = symbolsNew.map((symbol) => ({
      title: symbol.title,
      items: symbol.items.filter(
        (item) => regex.test(item.pair) || regex.test(item.pair_full)
      ),
    }));

    //4) Remove symbols with no items
    updatedSymbols = updatedSymbols.filter((item) => item.items.length > 0);

    //5) Update state
    setSymbols(updatedSymbols);
    setExpanded(true);
  }, [searchQuery, quotes]);

  /*
   ** **
   ** ** ** Remove existing quotes from the symbols
   ** **
   */
  const removeExistingItems = (symbols, quotes) => {
    return symbols.map((item) => ({
      title: item.title,
      items: item.items.filter((it) =>
        quotes.every((quote) => quote.pair !== it.pair)
      ),
    }));
  };
  /*
   ** **
   ** ** ** Item Press Handler
   ** **
   */
  const itemPressedHandler = (item) => {
    //1) Find the item in data from recieved arg
    const itemFind = data.reduce((acc, currItem) => {
      const itemF = currItem.items.find((itm) => itm.pair === item.title);
      if (itemF) return itemF;

      return acc;
    }, null);

    //2) Add to quotes reducer
    dispatch(addQuote(itemFind));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeSearchHandler}
          value={searchQuery}
          placeholder="Search symbols..."
        />
      </View>
      <Divider />
      <FlatList
        style={{
          flexGrow: 1,
        }}
        ItemSeparatorComponent={() => <Divider color="gray" />}
        data={symbols}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Accordian
            onPress={itemPressedHandler}
            expanded={expanded}
            title={item.title}
            items={item.items.map((it) => ({
              title: it.pair,
              subtitle: it.pair_full,
            }))}
          />
        )}
      />
      <Divider />
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
    paddingLeft: 16,
    paddingRight: !6,
    paddingBottom: 64,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
    minHeight: 50,
    alignItems: "center",
    paddingBottom: 1,
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
  },
});

export default AddQuoteScreen;
