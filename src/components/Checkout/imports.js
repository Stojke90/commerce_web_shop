import commerce from "../../lib/commerce";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import Confirmation from "./Confirmation";
import FormInput from "./FormInput";
import ShippingForm from "./ShippingForm";
import Reviwe from "./Reviwe";
import useStyles from "./style";

// inputs for form
const inputForm = [
  { name: "first_Name", label: "First Name" },
  { name: "last_Name", label: "Last Name" },
  { name: "address", label: "Address" },
  { name: "email", label: "Email" },
  { name: "city", label: "City" },
  { name: "zip", label: "ZIP / Postal Code" },
];

export {
  commerce,
  PaymentForm,
  AddressForm,
  Confirmation,
  useStyles,
  FormInput,
  ShippingForm,
  inputForm,
  Reviwe,
};
