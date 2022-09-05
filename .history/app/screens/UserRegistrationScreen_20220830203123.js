import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  Button,
} from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/AppFormField";
import { Formik } from "formik";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  // name:Yup.string().required().name().label("Name*"),
  email: Yup.string().required().email().label("Email*"),
  password: Yup.string().required().min(4).label("Password*"),
});
function UserRegistrationScreen({ props, navigation }) {
  return (
    // <ImageBackground
    //   style={styles.background}
    //   source={require("../assets/lightbg.jpg")}
    // >
    <Screen style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}> Sign up </Text>
        <Text></Text>
        <Text style={styles.text}>
          {" "}
          Please fill in this form to create an account{" "}
        </Text>
        <Text></Text>
        <Text></Text>
        <Formik
          initialValues={{
            name: " ",
            email: " ",
            password: " ",
            dob: " ",
            address: " ",
            contact: " ",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {() => (
            <>
              <AppFormField
                autoCapitalize="none"
                name="name"
                placeholder="Name*"
              />

              <AppFormField
                autoCapitalize="none"
                name="email"
                placeholder="Email*"
              />
              {/* <ErrorMessage error={errors[name]} visible={touched[name]}/> */}
              {/* <ErrorMessage error={errors.email} visible={touched.email}/> */}
              <AppFormField
                autoCapitalize="none"
                name="password"
                placeholder="Password*"
                secureTextEntry
                textContentType="password"
              />
              <AppFormField
                autoCapitalize="none"
                name="dob"
                placeholder="Date Of Birth"
              />
              <AppFormField
                autoCapitalize="none"
                name="address"
                placeholder="Address"
              />
              <AppFormField
                autoCapitalize="none"
                name="contact"
                placeholder="Contact No."
              />

              {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
              {/* <SubmitButton title="Sign up" />
              <Button
                title="Signup tem"
                onPress={() => navigation.navigate("Login")}
              /> */}
              <AppButton
                title="Sign Up"
                onPress={() => navigation.navigate("Welcome")}
              />
              <TouchableHighlight
                style={styles.buttonContainer}
                onPress={() => this.onClickListener("login")}
              >
                <Text style={styles.text}>Already a member? Login</Text>
              </TouchableHighlight>
            </>
          )}
        </Formik>
      </ScrollView>
    </Screen>
    /* </ImageBackground> */
  );
}
const styles = StyleSheet.create({
  // background: {
  //   flex: 1,
  //   alignItems: "center",
  // },
  buttonContainer: {
    height: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 30,
  },
  container: {
    padding: 30,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "top",
    textAlign: "center",
    color: "#000",
  },
  text: {
    fontStyle: "normal",
    fontSize: 15,
    fontWeight: "normal",
    textAlignVertical: "top",
    textAlign: "center",
    color: "#000",
  },
});
export default UserRegistrationScreen;
