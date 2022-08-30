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
import * as Keychain from "react-native-keychain";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { NavigationActions } from "react-navigation";
// import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(1).label("Password"),
});

// <<<<<<< HEAD
async function login(values, navigation) {
  try {
    console.log("in")
    // const navigate = useNavigation()

    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {
    const response = await axios.post('http://192.168.0.105:8000/api/login', values
      // const response = await axios.post('http://192.168.0.104:8000/api/login' ,{
      //   email:"mahirpunna@gmail.com",
      //   password:"z",
      // }
    );
    // if (response.status === 201) {
    //   alert(` You have created: ${JSON.stringify(response.data)}`);
    // } else {

    //   throw new Error("An error has occurred");
    // }
    const name = response.data.data.name
    const token = response.data.token
    console.log(name)
    console.log(token)
    const username = 'zuck';
    // const password = 'poniesRgr8';

    // await Keychain.setGenericPassword(name, token);
    // await Keychain.setGenericPassword(username, password);

    // await AsyncStorage.setItem("userData", JSON.stringify(name));
    await AsyncStorage.setItem("token", JSON.stringify(token));
    // await AsyncStorage.setItem("userData", username);

    navigation.navigate("Feed")

  } catch (error) {
    alert("An error has occurred");
    console.log(error)
    // YellowBox.ignoreWarnings(['Warning: ...']);
  }
  // try {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', { cancelToken: source.token });

  //     alert(` You have created: ${JSON.stringify(response.data)}`);

  // } catch (error) {
  //   alert("An error has occurred");
  // YellowBox.ignoreWarnings(['Warning: ...']);
  // }
}

// const onSubmitFormHandler = async (event) => {
//   if (!fullName.trim() || !email.trim()) {
//     alert("Name or Email is invalid");
//     return;
//   }
//   setIsLoading(true);
//   try {
//     const response = await axios.post(`${baseUrl}/api/users`, {
//       fullName,
//       email,
//     });
//     if (response.status === 201) {
//       alert(` You have created: ${JSON.stringify(response.data)}`);
//       setIsLoading(false);
//       setFullName('');
//       setEmail('');
//     } else {
//       throw new Error("An error has occurred");
//     }
//   } catch (error) {
//     alert("An error has occurred");
//     setIsLoading(false);
//   }
// };
function LoginScreen({ props, navigation }) {
  // function LoginScreen({ navigation }) {

  // =======
  // async function login() {
  //   try {
  //     console.log("in");

  //     const response = await axios.post("http://192.168.0.105:8000/api/login", {
  //       email: "mr@g.com",
  //       password: "zzzzzzz",
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     alert("An error has occurred");
  //     console.log(error);
  //     // YellowBox.ignoreWarnings(['Warning: ...']);
  //   }
  // }

  // const onSubmitFormHandler = async (event) => {
  //   if (!fullName.trim() || !email.trim()) {
  //     alert("Name or Email is invalid");
  //     return;
  //   }
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post(`${baseUrl}/api/users`, {
  //       fullName,
  //       email,
  //     });
  //     if (response.status === 201) {
  //       alert(` You have created: ${JSON.stringify(response.data)}`);
  //       setIsLoading(false);
  //       setFullName("");
  //       setEmail("");
  //     } else {
  //       throw new Error("An error has occurred");
  //     }
  //   } catch (error) {
  //     alert("An error has occurred");
  //     setIsLoading(false);
  //   }
  // };
  // function LoginScreen({ props, navigation }) {
  //   // function LoginScreen({ navigation }) {
  // >>>>>>> 6735c050ceabd4da0075e8fcd459e1aa8d7e25d6
  return (
    // <ImageBackground
    //   style={styles.background}
    //   source={require("../assets/cute-lights.jpg")}
    // >

    // <<<<<<< HEAD
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: " ", password: " " }}
        onSubmit={(values) => login(values, navigation)}
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
            {/* <Button
                onPress={() => {
                  login();
                }}
                title="Testing API"
              /> */}
            <SubmitButton title="Login" />
            <Button title="Login tem" onPress={() => navigation.navigate("Feed")} />





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
    // =======
    //     <Screen style={styles.container}>
    //       {/* <Text style={styles.text}> </Text> */}
    //       <Formik
    //         initialValues={{ email: " ", password: " " }}
    //         onSubmit={(values) => console.log(values)}
    //         validationSchema={validationSchema}
    //       >
    //         {() => (
    //           <>
    //             <AppFormField
    //               autoCapitalize="none"
    //               icon="email"
    //               name="email"
    //               placeholder="Email"
    //             />
    //             {/* <ErrorMessage error={errors.email} visible={touched.email}/> */}
    //             <AppFormField
    //               autoCapitalize="none"
    //               icon="lock"
    //               //onBlur={()=> setFieldTouched("password")}
    //               //onChangeText={handleChange("password")}
    //               name="password"
    //               placeholder="Password"
    //               secureTextEntry
    //               textContentType="password"
    //             />
    //             {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
    //             <Button
    //               onPress={() => {
    //                 login();
    //               }}
    //               title="Testing API"
    //             />
    //             <SubmitButton title="Login" />
    //             <Button
    //               title="Login tem"
    //               onPress={() => navigation.navigate("UserFeed")}
    //             />

    //             <TouchableHighlight
    //               style={styles.buttonContainer}
    //               onPress={() => this.onClickListener("restore_password")}
    //             >
    //               <Text>Forgot your password?</Text>
    //             </TouchableHighlight>
    //           </>
    //         )}
    //       </Formik>
    //     </Screen>
    //     // </ImageBackground>
    // >>>>>>> 6735c050ceabd4da0075e8fcd459e1aa8d7e25d6
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
