import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { useImageDimensions } from "@react-native-community/hooks";
import { Formik } from "formik";
import { isValidPhoneNumber } from "libphonenumber-js";

//Components
import FormGroup from "../../components/FormGroup";
import TextField from "../../components/TextField";
import FormLabel from "../../components/FormLabel";
import Button from "../../components/Button";
import DropdownMenu from "../../components/DropdownMenu";
import FormHelperText from "../../components/FormHelperText";
import DatePicker from "../../components/DatePicker";

//Validators & Func
import {
  isAlpha,
  isEmail,
  isEmpty,
  isOverEighteen,
  isPassMissmatched,
} from "../../utils/validators";

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
  //Validate input fields
  const validateInputFields = (values) => {
    //1) Store errors
    const errors = {};

    //2) Validate First Name
    if (isEmpty(values.firstName))
      errors.firstName = "Please enter your first name";
    else if (
      isAlpha(values.firstName, { ignoreSpaces: false, ignoreCase: true })
    )
      errors.firstName = "First name may only contain letters";

    //3) Validate Last Name
    if (isEmpty(values.lastName))
      errors.lastName = "Please enter your last name";
    else if (
      isAlpha(values.lastName, { ignoreSpaces: false, ignoreCase: true })
    )
      errors.lastName = "Last name may only contain letters";

    //4) Validate Middle Name
    if (
      !isEmpty(values.middleName) &&
      isAlpha(values.middleName, {
        ignoreSpaces: false,
        ignoreCase: true,
      })
    )
      errors.middleName = "Middle name may only contain letters";

    //5) Validate Email
    if (isEmpty(values.email)) errors.email = "Please enter your email adress";
    else if (isEmail(values.email))
      errors.email = "Please provide a correct email adress";

    //6) Validate phone number
    if (isEmpty(values.phoneNumber))
      errors.phoneNumber = "Please enter your phone number";
    else if (!isValidPhoneNumber(values.phoneNumber))
      errors.phoneNumber = "Please enter a valid phone number";

    //7) Validate date of birth
    if (!isOverEighteen(new Date(values.dateOfBirth)))
      errors.dateOfBirth = "Must be 18 years old to create an account";

    //8) Validate gender
    if (isEmpty(values.gender)) errors.gender = "Please select your gender";

    //9) Validate language
    if (isEmpty(values.language))
      errors.language = "Please enter your language";

    //10) Validate account type
    if (isEmpty(values.accountType)) {
      errors.accountType = "Please select account type";
    }

    //11) Validate password
    if (isEmpty(values.password)) errors.password = "Please enter the password";

    //12) Validate password confirm
    if (isEmpty(values.confirmPassword))
      errors.confirmPassword = "Please enter password again to confirm";
    else if (isPassMissmatched(values.password, values.confirmPassword))
      errors.confirmPassword = "Password and password confirm missmatched";

    //13) Return Errors
    return errors;
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          phoneNumber: "",
          dateOfBirth: "2000-01-01T00:00:00",
          gender: "",
          language: "",
          accountType: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          //1) Create object with account details
          const account = {
            personal_details: {
              firstname: values.firstName,
              lastname: values.lastName,
              middlename: values.middleName,
              email: values.email,
              phonenumber: values.phoneNumber,
              dateofbirth: values.dateOfBirth,
              gender: values.gender,
              language: values.language,
            },
            account_details: {
              accounttype: values.accountType,
              password: values.password,
            },
          };

          //2) Naviage to screen 2 with passing date
          navigation.navigate("SignupScreen02", { broker, account });
        }}
        validate={validateInputFields}
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
                  <Text style={styles.heading}>Personal Information</Text>
                  <TextField
                    label="First Name"
                    placeholder="john"
                    icon="user"
                    value={values.firstName}
                    onBlur={handleBlur("firstName")}
                    onChangeText={handleChange("firstName")}
                    error={
                      errors.firstName && touched.firstName && errors.firstName
                    }
                  />
                  <TextField
                    label="Last Name"
                    placeholder="smith"
                    icon="user"
                    value={values.lastName}
                    onBlur={handleBlur("lastName")}
                    onChangeText={handleChange("lastName")}
                    error={
                      errors.lastName && touched.lastName && errors.lastName
                    }
                  />
                  <TextField
                    label="Middle Name"
                    icon="user"
                    placeholder="optional"
                    value={values.middleName}
                    onBlur={handleBlur("middleName")}
                    onChangeText={handleChange("middleName")}
                    error={
                      errors.middleName &&
                      touched.middleName &&
                      errors.middleName
                    }
                  />
                  <TextField
                    label="Email"
                    placeholder="john@abc"
                    type="email"
                    icon="mail"
                    value={values.email}
                    onBlur={handleBlur("email")}
                    onChangeText={handleChange("email")}
                    error={errors.email && touched.email && errors.email}
                  />
                  <TextField
                    label="Phone Number"
                    placeholder="+13251034312"
                    type="phone"
                    icon="phone"
                    value={values.phoneNumber}
                    onBlur={handleBlur("phoneNumber")}
                    onChangeText={handleChange("phoneNumber")}
                    error={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                  />
                  <DatePicker
                    label="Birthday"
                    value={values.dateOfBirth}
                    error={
                      errors.dateOfBirth &&
                      touched.dateOfBirth &&
                      errors.dateOfBirth
                    }
                    helperText={errors.dateOfBirth}
                    onChange={(date) => {
                      handleChange("dateOfBirth")(date.toISOString());
                    }}
                  />
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
                      {errors.gender && touched.gender && errors.gender && (
                        <FormHelperText>{errors.gender}</FormHelperText>
                      )}
                      <FormLabel text="Gender" />
                      <DropdownMenu
                        placeholder="Select"
                        options={[{ label: "Male" }, { label: "Female" }]}
                        onItemChanged={(item) =>
                          handleChange("gender")(item.label)
                        }
                        error={errors.gender && touched.gender && errors.gender}
                      />
                    </FormGroup>
                  </View>
                  <View style={{ marginTop: 56 }}>
                    <TextField
                      border={false}
                      label="Language"
                      placeholder="English"
                      value={values.language}
                      onBlur={handleBlur("language")}
                      onChangeText={handleChange("language")}
                      error={
                        errors.language && touched.language && errors.language
                      }
                    />
                    <Text>
                      Personal details are used for opening a trade account and
                      are not passed to any third parties. This information is
                      handler securely and confidentially.
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
                      onItemChanged={(item) =>
                        handleChange("accountType")(item.label)
                      }
                      error={
                        errors.accountType &&
                        touched.accountType &&
                        errors.accountType
                      }
                    />
                    {errors.accountType &&
                      touched.accountType &&
                      errors.accountType && (
                        <FormHelperText>{errors.accountType}</FormHelperText>
                      )}
                  </FormGroup>
                  <View style={{ marginTop: 56 }}>
                    <TextField
                      label="Password"
                      icon="lock"
                      placeholder="Account password"
                      type="password"
                      value={values.password}
                      onBlur={handleBlur("password")}
                      onChangeText={handleChange("password")}
                      error={
                        errors.password && touched.password && errors.password
                      }
                    />
                    <TextField
                      label="Confirm Password"
                      icon="lock"
                      placeholder="Account password"
                      type="password"
                      value={values.confirmPassword}
                      onBlur={handleBlur("confirmPassword")}
                      onChangeText={handleChange("confirmPassword")}
                      error={
                        errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword
                      }
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <Button
                onPress={handleSubmit}
                variant="contained"
                fullWidth={true}
                color="black"
              >
                Next
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
