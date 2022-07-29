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

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function login (){
  console.warn("login func");
  YellowBox.ignoreWarnings(['Warning: ...']);
}
function LoginScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/cute-lights.jpg")}
    >
      <Text style={styles.text}> </Text>

      <Screen style={styles.container}>
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

              <SubmitButton onPress={() => {
    alert('You tapped the button!');
  }} title="Login" />
  
  <Button
  onPress={() => {
    alert('You tapped the button!');
  }}
  title="Press Me"
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
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    color: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 30,
  },
  container: {
    padding: 20,
    width: "100%",
    justifyContent: "flex-end",
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
