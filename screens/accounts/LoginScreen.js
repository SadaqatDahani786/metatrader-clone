import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from "formik";

//Components
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import TextField from "../../components/TextField";
import Divider from "../../components/Divider";
import Button from "../../components/Button";
import DropdownMenu from "../../components/DropdownMenu";
import FormHelperText from "../../components/FormHelperText";

//Validators
import { isEmail, isEmpty } from "../../utils/validators";

/*
 ** ** =============================================================
 ** ** ** Component [LoginScreen]
 ** ** =============================================================
 */
const LoginScreen = ({ route, navigation }) => {
  /*
   ** **
   ** ** ** Route Options & Navigation
   ** **
   */
  const { broker } = route.params;

  /*
   ** **
   ** ** ** Effects
   ** **
   */
  //Set route options
  useLayoutEffect(() => {
    navigation.setOptions({
      title: broker.company,
      headerTitleStyle: { fontFamily: "Bebas Neue" },
    });
  }, []);

  /*
   ** **
   ** ** ** Methods
   ** **
   */
  //Handles input validation for form fields
  const handleInputValidation = (values) => {
    //1) Store errors
    const errors = {};

    //2) Validate Email address
    if (isEmpty(values.email)) errors.email = "Please provide email address.";
    else if (isEmail(values.email))
      errors.email = "Please provide correct email address.";

    //3) Validate Password
    if (isEmpty(values.password))
      errors.password = "Please provide your account password.";

    //4)  Validate Server
    if (isEmpty(values.server))
      errors.server = "Please select the server to connect to.";

    //5) Return errors
    return errors;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate("SignupScreen01", { broker })}
          style={({ pressed }) => [
            styles.pressable,
            { backgroundColor: pressed ? "hsl(0, 0%, 20%)" : "transparent" },
          ]}
          android_ripple={{ color: "rgba(255, 255, 255, 0.5)" }}
        >
          <View style={styles.avatar}>
            <MaterialCommunityIcons
              name="arrow-top-right-bold-outline"
              size={32}
              color="deepskyblue"
            />
          </View>
          <View style={styles.group}>
            <Text style={styles.headerTitle}>Open a real account</Text>
            <Text style={styles.headerSubtitle}>
              For live trading, additional certificates are required
            </Text>
          </View>
          <Feather size={24} name="chevron-right" color="white" />
        </Pressable>
      </View>
      <Divider />
      <View style={styles.row}>
        <Text style={styles.title}>Login to an existing account</Text>
      </View>
      <Divider />
      <View style={styles.loginForm}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            server: "",
          }}
          onSubmit={({ email, password, server }) => {
            alert("Login");
          }}
          validate={handleInputValidation}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <>
              <TextField
                label="Email"
                placeholder="john@abc"
                type="email"
                icon="mail"
                value={values.login}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                error={errors.email && touched.email && errors.email}
              />
              <TextField
                label="Password"
                placeholder="password"
                type="password"
                icon="lock"
                value={values.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                error={errors.password && touched.password && errors.password}
              />
              <View style={styles.orderHigh}>
                <FormGroup>
                  <FormLabel text="Server" />
                  <DropdownMenu
                    error={errors.server && touched.server}
                    placeholder="Select"
                    onItemChanged={(item) => handleChange("server")(item.label)}
                    options={[{ label: "ExnessMt5-Real5" }]}
                  />
                  {errors.server && touched.server && errors.server && (
                    <FormHelperText>{errors.server}</FormHelperText>
                  )}
                </FormGroup>
              </View>
              <View style={{ marginTop: 56 }}>
                <FormGroup>
                  <FormLabel text="Save password" />
                  <BouncyCheckbox
                    style={{ zIndex: 0 }}
                    iconImageStyle={{ zIndex: 0 }}
                    textContainerStyle={{ zIndex: 0 }}
                    size={18}
                    fillColor="deepskyblue"
                    iconStyle={{ borderRadius: 4 }}
                    innerIconStyle={{ borderRadius: 4 }}
                  />
                </FormGroup>
              </View>
              <Button fullWidth={false} variant="text" size="SM" color="info">
                Forgot Password?
              </Button>
              <Button
                onPress={handleSubmit}
                variant="contained"
                fullWidth={true}
                color="black"
              >
                Login
              </Button>
            </>
          )}
        </Formik>
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
  container: { flex: 1, backgroundColor: "white" },
  header: {
    width: "100%",
    backgroundColor: "black",
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  group: { flex: 1, gap: 4 },
  avatar: {
    width: 56,
    height: 56,
    backgroundColor: "black",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "hsl(0, 0%, 80%)",
  },
  row: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 18,
    width: "100%",
    textAlign: "center",
  },
  loginForm: {
    paddingHorizontal: 16,
  },
  inputText: {
    width: "100%",
    padding: 8,
    fontSize: 16,
  },
  linkText: {
    fontSize: 14,
    color: "deepskyblue",
    paddingVertical: 16,
  },
  orderHigh: {
    position: "absolute",
    zIndex: 10,
    top: 122,
    left: 16,
    right: 16,
  },
});

export default LoginScreen;
