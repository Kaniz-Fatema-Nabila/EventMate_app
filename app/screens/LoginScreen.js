import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  YellowBox,
  Button,
} from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/AppFormField";
import { Formik } from "formik";
import axios from "axios";
import AppButton from "../components/AppButton";
// import { NavigationActions } from "react-navigation";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

async function login() {
  try {
    console.log("in");

    const response = await axios.post("http://192.168.0.105:8000/api/login", {
      email: "mr@g.com",
      password: "zzzzzzz",
    });
    console.log(response.data);
  } catch (error) {
    alert("An error has occurred");
    console.log(error);
    // YellowBox.ignoreWarnings(['Warning: ...']);
  }
}

const onSubmitFormHandler = async (event) => {
  if (!fullName.trim() || !email.trim()) {
    alert("Name or Email is invalid");
    return;
  }
  setIsLoading(true);
  try {
    const response = await axios.post(`${baseUrl}/api/users`, {
      fullName,
      email,
    });
    if (response.status === 201) {
      alert(` You have created: ${JSON.stringify(response.data)}`);
      setIsLoading(false);
      setFullName("");
      setEmail("");
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    alert("An error has occurred");
    setIsLoading(false);
  }
};
function LoginScreen({ props, navigation }) {
  // function LoginScreen({ navigation }) {
  return (
    // <ImageBackground
    //   style={styles.background}
    //   source={require("../assets/cute-lights.jpg")}
    // >

    <Screen style={styles.container}>
      {/* <Text style={styles.text}> </Text> */}
      <Formik
        initialValues={{ email: " ", password: " " }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              icon="email"
              name="email"
              placeholder="Email"
            />
            {/* <ErrorMessage error={errors.email} visible={touched.email}/> */}
            <AppFormField
              autoCapitalize="none"
              icon="lock"
              //onBlur={()=> setFieldTouched("password")}
              //onChangeText={handleChange("password")}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
            <Button
              onPress={() => {
                login();
              }}
              title="Testing API"
            />
            <SubmitButton title="Login" />
            <Button
              title="Login tem"
              onPress={() => navigation.navigate("UserFeed")}
            />

            <TouchableHighlight
              style={styles.buttonContainer}
              onPress={() => this.onClickListener("restore_password")}
            >
              <Text>Forgot your password?</Text>
            </TouchableHighlight>
          </>
        )}
      </Formik>
    </Screen>
    // </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
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
  text: {
    fontStyle: "normal",
    fontSize: 20,
    //fontWeight: 'bold',
    textAlignVertical: "bottom",
    color: "#FFFFFF",
  },
});
export default LoginScreen;
