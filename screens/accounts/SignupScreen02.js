import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Checkbox from "react-native-bouncy-checkbox";
import { useImageDimensions } from "@react-native-community/hooks";
import { Formik } from "formik";

//Components
import TextField from "../../components/TextField";
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import Button from "../../components/Button";

//Validators
import {
  isAlpha,
  isAlphaNumeric,
  isEmpty,
  isZipCode,
} from "../../utils/validators";
import { ScrollView } from "react-native-gesture-handler";

//Redux
import { useDispatch } from "react-redux";
import { addAccount } from "../../store/accountsReducer";

/*
 ** ** =============================================================
 ** ** ** Component [SignupScreen02]
 ** ** =============================================================
 */
const SignupScreen02 = ({ navigation, route }) => {
  /*
   ** **
   ** ** ** State & Hooks
   ** **
   */
  const { broker, account } = route.params;
  const dispatch = useDispatch();
  const logoCompany = useImageDimensions({
    uri: broker.logo,
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
            <Text style={styles.pageHeaderSubtitle}>Addresses</Text>
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
  //Handles form fields validiation
  const handleInputValidation = (values) => {
    //1) Store errors
    const errors = {};

    //2) Validate country
    if (isEmpty(values.country)) errors.country = "which country do you live?";
    else if (isAlpha(values.country, { ignoreSpaces: true, ignoreCase: true }))
      errors.country = "Country should contain letters only";

    //3) Validate State
    if (
      !isEmpty(values.state) &&
      isAlpha(values.state, { ignoreSpaces: true, ignoreCase: true })
    )
      errors.state = "State should contain letters only";

    //4) Validate city
    if (isEmpty(values.city))
      errors.city = "What's the name of your city in which you live?";
    else if (isAlpha(values.city, { ignoreSpaces: true, ignoreCase: true }))
      errors.country = "City should contain letters only";

    //5) Validate zipcode
    if (!isEmpty(values.zipcode) && isZipCode(values.zipcode))
      errors.zipcode =
        "Please enter a valid zip code in format xxxxx or xxxxx-xxxx.";

    //6) Validate address
    if (isEmpty(values.address))
      errors.address = "Where do you live? Please enter the full address.";
    else if (
      isAlphaNumeric(values.address, {
        ignoreSpaces: true,
        ignoreCase: true,
        ignorePunctuations: true,
        ignoreDashes: true,
        ignoreHyphens: true,
      })
    )
      errors.address =
        "Address should not contain special characters ($ % * #).";

    //7) Return Errorrs
    return errors;
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          country: "",
          state: "",
          city: "",
          zipcode: "",
          address: "",
          agreement: "false",
        }}
        validate={handleInputValidation}
        onSubmit={(values) => {
          //1) Prepare form data
          const userAccountDetails = {
            ...account,
            address: {
              country: values.country,
              state: values.state,
              city: values.city,
              zipcode: values.zipcode,
              address: values.address,
            },
            deposit: {
              amount: "00.00",
              currency: "USD",
            },
            recentStatus: "USD",
            id: Math.round(Math.random() * 8000),
            broker,
            isDemoAccount: false,
            isActiveAccount: true,
          };

          //2) Dispatch action to store new user in redux store
          dispatch(addAccount(userAccountDetails));

          //3) Navigate to accounts screen
          navigation.navigate("Accounts");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <>
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
                  <Text style={styles.heading}>Address</Text>
                  <TextField
                    label="Country"
                    icon=""
                    placeholder="USA"
                    value={values.country}
                    onBlur={handleBlur("country")}
                    onChangeText={handleChange("country")}
                    error={errors.country && touched.country && errors.country}
                  />
                  <TextField
                    label="State"
                    icon=""
                    placeholder="optional"
                    value={values.state}
                    onBlur={handleBlur("state")}
                    onChangeText={handleChange("state")}
                    error={errors.state && touched.state && errors.state}
                  />
                  <TextField
                    label="City"
                    icon=""
                    placeholder="New York"
                    value={values.city}
                    onBlur={handleBlur("city")}
                    onChangeText={handleChange("city")}
                    error={errors.city && touched.city && errors.city}
                  />
                  <TextField
                    label="Zip Code"
                    icon=""
                    placeholder="optional"
                    value={values.zipcode}
                    onBlur={handleBlur("zipcode")}
                    onChangeText={handleChange("zipcode")}
                    error={errors.zipcode && touched.zipcode && errors.zipcode}
                  />
                  <TextField
                    label="Address"
                    icon="map-pin"
                    placeholder="21st street, avenue park"
                    value={values.address}
                    onBlur={handleBlur("address")}
                    onChangeText={handleChange("address")}
                    error={errors.address && touched.address && errors.address}
                  />
                </View>
                <View style={styles.section}>
                  <Text style={styles.heading}>AGGREMENT</Text>
                  <FormGroup>
                    <FormLabel>Accept</FormLabel>
                    <Checkbox
                      size={18}
                      fillColor="black"
                      iconStyle={{ borderRadius: 4 }}
                      innerIconStyle={{ borderRadius: 4 }}
                      disableBuiltInState
                      isChecked={values.agreement === "true"}
                      onPress={() => {
                        const checked =
                          values.agreement === "true" ? "false" : "true";
                        handleChange("agreement")(checked);
                      }}
                    />
                  </FormGroup>
                  <FormGroup delegatedStyles={{ borderBottomWidth: 0 }}>
                    <Text style={styles.agreementText}>
                      By enabling accept you agree with the terms and conditions
                      for opening an account and data protection policy.
                    </Text>
                  </FormGroup>
                </View>
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <Button
                onPress={handleSubmit}
                variant="contained"
                fullWidth={true}
                color="black"
                disabled={values.agreement !== "true"}
              >
                Register
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

/*
 ** **
 ** ** ** Styles
 ** **
 */
const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  scroller: { flex: 1 },
  pageHeaderTitle: { fontSize: 18, fontFamily: "Bebas Neue" },
  pageHeaderSubtitle: { fontSize: 14, fontFamily: "Bebas Neue", color: "gray" },
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
    gap: 24,
  },
  agreementText: {
    fontSize: 16,
    color: "gray",
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

export default SignupScreen02;
