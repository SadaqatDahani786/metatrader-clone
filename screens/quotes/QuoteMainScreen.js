import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

//Navigation
import { useIsFocused } from "@react-navigation/native";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { changeNavActive } from "../../store/navigationReducer";

/*
 ** ** =============================================================
 ** ** ** Component [QuotesMainScreen]
 ** ** =============================================================
 */
const QuotesMainScreen = () => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const quotesData = useSelector((state) => state.quotes);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  //Colors
  const redColor = "#FF5252";
  const blueColor = "#448AFF";
  const grayColor = "#757575";

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Make current screen as active in redux store
  useEffect(() => {
    //1) If screen not active, return
    if (!isFocused) return;

    //2) Current screen is active, make it active in redux also
    dispatch(changeNavActive(0));
  }, [isFocused]);

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //Handle press event
  const handleRowPress = (item) => {
    console.log("Row pressed:", item.pair);
  };

  /*
   ** **
   ** ** ** Component [QuoteItem]
   ** **
   */
  const renderQuoteItem = ({ item }) => {
    let color;
    if (item.change > 0) {
      color = redColor;
    } else if (item.change < 0) {
      color = blueColor;
    } else {
      color = grayColor;
    }

    const bid = item.bid?.toString(); // Convert bid price to string
    const ask = item.ask?.toString(); // Convert ask price to string

    return (
      <TouchableOpacity
        style={styles.quoteItem}
        onPress={() => handleRowPress(item)}
      >
        <Text style={styles.pair}>{item.pair}</Text>
        <View style={styles.ratesContainer}>
          <View style={styles.rateItem}>
            <Text style={[styles.rateValue, { color }]}>
              {bid?.slice(0, -3)}
            </Text>
          </View>
          <View style={styles.rateItem}>
            <Text style={[styles.rateValue, styles.biggerPrice, { color }]}>
              {bid?.slice(-3, -1)}
            </Text>
          </View>
          <View style={styles.rateItem}>
            <Text
              style={[styles.rateValue, styles.exponentialPrice, { color }]}
            >
              {bid?.slice(-1)}
            </Text>
          </View>
        </View>
        <View style={styles.ratesContainer}>
          <View style={styles.rateItem}>
            <Text style={[styles.rateValue, { color }]}>
              {ask?.slice(0, -3)}
            </Text>
          </View>
          <View style={styles.rateItem}>
            <Text style={[styles.rateValue, styles.biggerPrice, { color }]}>
              {ask?.slice(-3, -1)}
            </Text>
          </View>
          <View style={styles.rateItem}>
            <Text
              style={[styles.rateValue, styles.exponentialPrice, { color }]}
            >
              {ask?.slice(-1)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { flex: 180 }]}>Symbol</Text>
        <Text style={[styles.headerText, { flex: 60 }]}>Bid</Text>
        <Text style={[styles.headerText, { flex: 40 }]}>Ask</Text>
      </View>
      <FlatList
        data={quotesData}
        renderItem={renderQuoteItem}
        keyExtractor={(item) => item.pair}
        showsVerticalScrollIndicator={true}
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
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCCCCC",
    backgroundColor: "#F5F5F5",
  },
  headerText: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "Bebas Neue",
    fontWeight: "bold",
  },
  quoteItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#CCCCCC",
  },
  pair: {
    flex: 1,
    fontSize: 22,
    color: "#000000",
    fontFamily: "Bebas Neue",
  },
  ratesContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  rateItem: {
    marginLeft: 0,
  },
  rateLabel: {
    fontSize: 26,
    color: "#000000",
  },
  rateValue: {
    fontSize: 24,
    flexDirection: "row",
    alignItems: "flex-start",
    fontFamily: "Bebas Neue",
  },
  biggerPrice: {
    fontSize: 30,
    marginTop: -5,
  },
  exponentialPrice: {
    fontSize: 16,
    marginTop: -8,
  },
});

export default QuotesMainScreen;
