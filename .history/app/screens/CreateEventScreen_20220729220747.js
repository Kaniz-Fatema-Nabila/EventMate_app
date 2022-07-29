import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/AppFormField";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.string().required().label("Date"),
});
function CreateEventScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.heading}>Create a New Event</Text>

      <Text style={styles.text}>
        {" "}
        Please fill in this form to create a new event{" "}
      </Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Formik
        initialValues={{
          date: " ",
          time: " ",
          location: " ",
          guest: " ",
          budget: " ",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              autoCapitalize="none"
              name="date"
              placeholder=" Date "
            />

            <AppFormField
              autoCapitalize="none"
              name="time"
              placeholder=" Time "
            />

            <AppFormField
              autoCapitalize="none"
              name="location"
              placeholder=" Location "
            />
            <AppFormField
              autoCapitalize="none"
              name="guest"
              placeholder=" Max Guest No."
            />
            <AppFormField
              autoCapitalize="none"
              name="budget"
              placeholder=" Budget "
            />

            <SubmitButton style={styles.button} title="Submit" />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  button: {
    marginVertical: 50,
    width: "90%",
  },
  container: {
    padding: 30,
    height: 50,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontStyle: "normal",
    fontSize: 20,
    fontWeight: "bold",
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
export default CreateEventScreen;
