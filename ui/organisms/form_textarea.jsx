import { reactStyle, Field, Button } from "react-atomic-molecule";
import AdminForm from "../molecules/form";

const FormTextarea = (props) => {
  const {
    children,
    label,
    name,
    value,
    onChange,
    defaultValue,
    buttonText,
    ...reset
  } = props;

  const valueAttr = {};
  if (defaultValue) {
    valueAttr.defaultValue = defaultValue;
  } else if (value) {
    valueAttr.value = value;
  }
  return (
    <AdminForm {...reset}>
      {children}
      <Field
        atom="textarea"
        label={label}
        name={name}
        onChange={onChange}
        {...valueAttr}
      />
      <Button type="submit">{buttonText}</Button>
    </AdminForm>
  );
};

export default FormTextarea;
