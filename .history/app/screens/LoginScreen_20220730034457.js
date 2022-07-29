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
import AppButton from "../components/AppButton";
// import { NavigationActions } from "react-navigation";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

async function login (){
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/users', {
      email:"m@g.com",
      password:"z",
    });
    if (response.status === 201) {
      alert(` You have created: ${JSON.stringify(response.data)}`);
    } else {

      throw new Error("An error has occurred");
    }
  } catch (error) {
    alert("An error has occurred");
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
      setFullName('');
      setEmail('');
    } else {
      throw new Error("An error has occurred");
    }
  } catch (error) {
    alert("An error has occurred");
    setIsLoading(false);
  }
};
function LoginScreen(props) {
// function LoginScreen({ navigation }) {
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

              <SubmitButton title="Login" />
              <AppButton title="Login-tem" onPress={() => navigation.navigate("Feed")} />

  
              <Button
                onPress={() => {
                  login();
                }}
                title="Testing API"
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
