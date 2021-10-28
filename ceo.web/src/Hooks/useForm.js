import { useState } from "react";
import axios from "axios";

export const useForm = (initialForm, validateForm, setData, Data) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  return {
    form,
    errors,
    response,
    handleChange,
    handleBlur,
    setForm,
  };
};
