import { useLayoutEffect, useState } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import DatePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useImageDimensions } from "@react-native-community/hooks";

//Components
import FormGroup from "../../components/FormGroup";
import TextField from "../../components/TextField";
import FormLabel from "../../components/FormLabel";
import Button from "../../components/Button";
import DropdownMenu from "../../components/DropdownMenu";
import IconButton from "../../components/IconButton/IconButton";

/*
 ** ** =============================================================
 ** ** ** Component [SignupScreen01]
 ** ** =============================================================
 */
const SignupScreen01 = ({ navigation, route }) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const { broker } = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const logoCompany = useImageDimensions({
    uri: "data:image/jpeg;base64,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",
  });

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Set route options
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Open a account",
      headerTitle: () => {
        return (
          <View style={{ gap: 4 }}>
            <Text style={styles.pageHeaderTitle}>Open a real account</Text>
            <Text style={styles.pageHeaderSubtitle}>Personal Information</Text>
          </View>
        );
      },
      headerTitleStyle: {
        fontFamily: "Bebas Neue",
      },
    });
  }, []);

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //On change datepicker hander
  const onChangeDatePickerHandler = (e, selectedDate) => {
    //1) Set date
    setSelectedDate(selectedDate);

    //2) Hide datepicker
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroller}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={styles.header}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={{
                uri: broker.logo,
                width: logoCompany?.dimensions?.width,
                height: logoCompany?.dimensions?.height,
              }}
            />
          </View>
          <View style="logoWrapper">
            <Text style={styles.headerTitle}>{broker.name}</Text>
            <Text style={styles.headerSubtitle}>{broker.company}</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.section}>
            <Text style={styles.heading}>Personal Information</Text>
            <TextField label="First Name" icon="user" placeholder="john" />
            <TextField label="Last Name" icon="user" placeholder="smith" />
            <TextField label="Middle Name" icon="user" placeholder="optional" />
            <TextField
              label="Email"
              type="email"
              icon="mail"
              placeholder="john@abc"
            />
            <TextField
              label="Phone Number"
              type="number"
              icon="phone"
              placeholder="+13251034312"
            />
            <FormGroup>
              <FormLabel text="Date of birth" />
              <View style={styles.row}>
                <Text style={{ fontSize: 16 }}>
                  {selectedDate
                    .toISOString()
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </Text>
                <IconButton
                  color="gray"
                  size="SM"
                  icon="calendar"
                  onPress={() => {
                    DateTimePickerAndroid.open({
                      value: selectedDate,
                      onChange: onChangeDatePickerHandler,
                      mode: "date",
                      display: "calendar",
                    });
                  }}
                />
              </View>
              {showDatePicker && Platform.OS !== "android" && (
                <DatePicker
                  mode="date"
                  onChange={onChangeDatePickerHandler}
                  display="calendar"
                  value={selectedDate}
                />
              )}
            </FormGroup>
            <View
              style={{
                position: "absolute",
                zIndex: 10,
                left: 0,
                right: 0,
                top: 380,
              }}
            >
              <FormGroup>
                <FormLabel text="Gender" />
                <DropdownMenu
                  placeholder="Select"
                  options={[{ label: "Male" }, { label: "Female" }]}
                />
              </FormGroup>
            </View>
            <View style={{ marginTop: 56 }}>
              <TextField
                border={false}
                label="Language"
                placeholder="English"
              />
              <Text>
                Personal details are used for opening a trade account and are
                not passed to any third parties. This information is handler
                securely and confidentially.
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Account Information</Text>
            <FormGroup
              delegatedStyles={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 24,
                zIndex: 10,
              }}
            >
              <FormLabel text="Account Type" />
              <DropdownMenu
                placeholder="Select"
                options={[{ label: "Preliminary Account" }]}
              />
            </FormGroup>
            <View style={{ marginTop: 56 }}>
              <TextField
                label="Password"
                icon="lock"
                placeholder="Your password"
              />
              <TextField
                label="Confirm Password"
                icon="lock"
                placeholder="Confirm your password"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          onPress={() => navigation.navigate("SignupScreen02", { broker })}
          variant="contained"
          fullWidth={true}
          color="black"
        >
          Next
        </Button>
      </View>
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
    height: "100%",
    backgroundColor: "white",
  },
  pageHeaderTitle: { fontSize: 18, fontFamily: "Bebas Neue" },
  pageHeaderSubtitle: { fontSize: 14, fontFamily: "Bebas Neue", color: "gray" },
  scroller: { flex: 1 },
  header: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "black",
    flexDirection: "row",
    gap: 8,
  },
  logoWrapper: {
    width: 48,
    height: 48,
    overflow: "hidden",
    borderRadius: 4,
  },
  logo: { width: "100%", height: "100%", objectFit: "cover" },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "white",
  },
  wrapper: {
    padding: 24,
    gap: 32,
  },
  heading: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "white",
  },
});

export default SignupScreen01;
