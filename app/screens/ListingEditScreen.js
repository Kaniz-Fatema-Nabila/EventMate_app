import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
//import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import AppFormPicker from "../components/AppFormPicker";
import SubmitButton from "../components/SubmitButton";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
});

const categories = [
  { label: "Decoration", value: 1 },
  { label: "Catering", value: 2 },
  { label: "Music", value: 3 },
  { label: "Photography", value: 4 },
  { label: "Cake", value: 5 },
  { label: "Outfit", value: 6 },
  { label: "Gift", value: 7 },
  { label: "Makeover", value: 8 },
  { label: "Mehedi", value: 9 },
];

function ListingEditScreen({ props, navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Add Service</Text>
        <Text></Text>
      </View>
      <Formik
        initialValues={{ email: " ", password: " " }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <AppFormField
              style={styles.button}
              maxLength={300}
              name="title"
              placeholder="Title"
            />
            <AppFormField
              style={styles.button}
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            />
            <AppFormPicker
              items={categories}
              name="category"
              placeholder="Category"
            />
            <AppFormField
              style={styles.button}
              maxLength={300}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />

            <SubmitButton title="Post" />
            <Button
              title="Post tem"
              onPress={() => navigation.navigate("UserFeed")}
            />
          </>
        )}
      </Formik>
      {/* </AppForm> */}
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },

  button: {
    backgroundColor: "#D1D0CE",
    borderRadius: 50,
    flexDirection: "row",
    width: "100%",
    padding: 0,
    marginVertical: 2,
    fontSize: 18,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  textContainer: {
    marginTop: 15,
    marginLeft: 10,
  },
});
export default ListingEditScreen;
