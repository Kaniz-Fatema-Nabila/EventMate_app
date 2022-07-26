import React, { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import VendorRegistrationScreen from "./app/screens/VendorRegistrationScreen";
import UserRegistrationScreen from "./app/screens/UserRegistrationScreen";
import ListingScreen from "./app/screens/ListingScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import CreateEventScreen from "./app/screens/CreateEventScreen";
export default function App() {
  //return <LoginScreen />;
  //return <VendorRegistrationScreen/>;
  //return <UserRegistrationScreen/>;
  //return <ListingScreen/>;
  //return <ViewImageScreen/>;
  //return <CreateEventScreen />;
  return <ListingEditScreen />;
}
