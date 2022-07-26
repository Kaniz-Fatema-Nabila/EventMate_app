import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "./AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, names, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(names, item)}
        placeholder={placeholder}
        selectedItem={values[names]}
      />
      <ErrorMessage error={errors[names]} visible={touched[names]} />
    </>
  );
}

export default AppFormPicker;
