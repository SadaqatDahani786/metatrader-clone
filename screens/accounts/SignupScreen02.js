import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Checkbox from "react-native-bouncy-checkbox";
import { useImageDimensions } from "@react-native-community/hooks";

//Components
import TextField from "../../components/TextField";
import FormGroup from "../../components/FormGroup";
import FormLabel from "../../components/FormLabel";
import Button from "../../components/Button";

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
            <Text style={styles.pageHeaderSubtitle}>Addresses</Text>
          </View>
        );
      },
      headerTitleStyle: {
        fontFamily: "Bebas Neue",
      },
    });
  }, []);

  return (
    <View style={styles.container}>
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
          <TextField label="Country" icon="" placeholder="USA" />
          <TextField label="State" icon="" placeholder="optional" />
          <TextField label="City" icon="" placeholder="New York" />
          <TextField label="Zip Code" icon="" placeholder="optional" />
          <TextField
            label="Address"
            icon="map-pin"
            placeholder="21st street, avenue park"
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
            />
          </FormGroup>
          <FormGroup delegatedStyles={{ borderBottomWidth: 0 }}>
            <Text style={styles.agreementText}>
              By enabling accept you agree with the terms and conditions for
              opening an account and data protection policy.
            </Text>
          </FormGroup>
        </View>
      </View>
      <View style={styles.footer}>
        <Button variant="contained" fullWidth={true} color="black">
          Register
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
  container: { backgroundColor: "white", flex: 1 },
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
