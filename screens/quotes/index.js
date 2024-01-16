import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import IconButton from "../../components/IconButton/IconButton";

//Screens
import QuotesMainScreen from "./QuoteMainScreen";
import AddQuoteScreen from "./AddQuoteScreen";
import EditQuoteScreen from "./EditQuoteScreen";

//Navigation
const StackNavigator = createStackNavigator();

/*
 ** ** =============================================================
 ** ** ** Component [QuoteScreen]
 ** ** =============================================================
 */
const QuotesScreen = ({ navigation }) => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="QuotesMainScreen"
        component={QuotesMainScreen}
        options={{
          title: "QUOTE",
          headerShown: true,
          headerTitleStyle: { fontFamily: "Bebas Neue", fontSize: 20 },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                paddingRight: 8,
                alignItems: "center",
              }}
            >
              <IconButton
                onPress={() => navigation.navigate("AddQuoteScreen")}
                color="GRAY"
                icon="plus"
                size="SM"
              />
              <IconButton
                onPress={() => navigation.navigate("EditQuoteScreen")}
                color="GRAY"
                icon="edit-3"
                size="SM"
              />
            </View>
          ),
        }}
      />
      <StackNavigator.Screen
        name="AddQuoteScreen"
        component={AddQuoteScreen}
        options={{
          title: "Add Symbols",
          headerTitleStyle: {
            fontFamily: "Bebas Neue",
          },
        }}
      />
      <StackNavigator.Screen
        name="EditQuoteScreen"
        component={EditQuoteScreen}
        options={{
          title: "Selected Symbols",
          headerTitleStyle: {
            fontFamily: "Bebas Neue",
          },
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default QuotesScreen;
