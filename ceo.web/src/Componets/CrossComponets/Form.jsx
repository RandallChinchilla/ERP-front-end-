import React from "react";
import formJson from "../Cartera Pasiva/Data/pasDataAportante.json";
import * as Yup from "yup";
import { ImportExportOutlined } from "@material-ui/icons";
import { useForm } from "../../Hooks/useForm";
import { FormInput } from "./FormInput";

const initialValues = {};
const requiredFields = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    validationSchema: validationSchema,
  });

  return (
    <div>
      <form noValidate>
        {formJson.map(({ type, name, placeholder, label }) => {
          switch (type) {
            case "input":
              return (
                <FormInput
                  key={name}
                  type={type}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  register={register}
                />
              );
            default:
              break;
          }
        })}
      </form>
    </div>
  );
};
