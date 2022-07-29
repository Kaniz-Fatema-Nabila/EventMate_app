import React from "react";
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import * as Yup from 'yup';
import Screen from '../components/Screen';
import SubmitButton from '../components/SubmitButton';
import AppFormField from "../components/AppFormField";
//import AppForm from "../components/AppForm";
import ErrorMessage from "../components/ErrorMessage";
import { Formik } from "formik";
import AppTextInput from "../components/AppTextInput";

const validationSchema=Yup.object().shape({
    //name:Yup.string().required().email().label("Name*"),
    email:Yup.string().required().email().label("Email*"),
    password:Yup.string().required().min(4).label("Password*"),
    // address:Yup.string().required().email().label("Address"),
    // contact:Yup.string().required().min(4).label("Contact No."),
    // licence:Yup.string().required().email().label("Licence No."),
    // whatsapp:Yup.string().required().min(4).label("Whatsapp No."),
    // facebook:Yup.string().required().email().label("Facebook link"),
    // linkedin:Yup.string().required().min(4).label("LinkedIn link"),
    // instagram:Yup.string().required().email().label("Instagram link"),
    // youtube:Yup.string().required().min(4).label("Youtube link")
})
function VendorRegistrationScreen(props) {
    return (
  
        // <ImageBackground 
        // style={styles.background}
        // source={require('../assets/lightbg.jpg')}> 
    
<Screen style= {styles.container}>
    <Text style={styles.heading}>Vendor Registration </Text>
    
    <Text style={styles.text}> Please fill in this form to register as a vendor </Text>
    <Text></Text>
    
    <Formik
        initialValues={{name:" ",email: " ", password: " ",address:" ", contact:" ", licence:" ", whatsapp:" ", facebook:" ", linkedin:" ", instagram:" ", youtube:" "}}
        onSubmit={values=> console.log(values)}
        validationSchema={validationSchema}
    >
        {()=> (
        <>
        <AppFormField
            autoCapitalize= "none"
            name="name" 
            placeholder= "Name*"
        />
        
        <AppFormField
            autoCapitalize= "none"
            name="email" 
            placeholder= "Email*"
        />
            {/* <ErrorMessage error={errors[name]} visible={touched[name]}/> */}
            {/* <ErrorMessage error={errors.email} visible={touched.email}/> */}
        
        <AppFormField
            autoCapitalize= "none"
            name="address" 
            placeholder= "Address"
        />
        <AppFormField
            autoCapitalize= "none"
            name="contact" 
            placeholder= "Contact No."
        />
        {/* <AppFormField
            autoCapitalize= "none"
            name="licence" 
            placeholder= "Licence No."
        />
        <AppFormField
            autoCapitalize= "none"
            name="whatsapp" 
            placeholder= "Whatsapp No."
        />
        <AppFormField
            autoCapitalize= "none"
            name="facebook" 
            placeholder= "Facebook link"
        />
        <AppFormField
            autoCapitalize= "none"
            name="instagram" 
            placeholder= "Instagram link"
        />
        <AppFormField
            autoCapitalize= "none"
            name="youtube" 
            placeholder= "Youtube link"
        /> */}

         {/* <ErrorMessage error={errors.password} visible={touched.password}/> */}
            <SubmitButton style={styles.button}title= "Register"/>
       
         </> 
    )}  
      
    </Formik>
    
</Screen> 
     //</ImageBackground>
    );
}
const styles = StyleSheet.create({
  
    container: {
        padding:30,
        width: '100%',
        justifyContent: "flex-end",
        backgroundColor:"#FFFFFF"
},
    heading: {
        fontStyle: 'normal',
        fontSize: 20,
        fontWeight: 'bold',
        textAlignVertical: "top",
        textAlign: "center",
        color: "#000"
    },
   text: {
    fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'normal',
        textAlignVertical: "top",
        textAlign: "center",
        color: "#000"
   }
    }
)
export default VendorRegistrationScreen;