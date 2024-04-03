import { boolean, mixed, object, string } from "yup";
import {
  emailErrMsg,
  maxErrMsg,
  maxLenErrMsg,
  minErrMsg,
  requiredErrMsg,
} from "./validation-message";

export const personalInfoSchema = object({
  is_sfu: boolean().required(requiredErrMsg("Sfu Student")),
  first_name: string().required(requiredErrMsg("First Name")),
  last_name: string().required(requiredErrMsg("Last Name")),
  gender: mixed().test(
    "Select-Required",
    requiredErrMsg("Gender"),
    function (value: any) {
      if (value === undefined) {
        return false;
      }
      if (value.value === undefined) {
        return false;
      }
      return true;
    }
  ),
  dob: string().required(requiredErrMsg("Date of Birth")),
  address1: string().required(requiredErrMsg("Address 1")),
  address2: string().required(requiredErrMsg("Address 2")),
  city: string().required(requiredErrMsg("City")),
  region: mixed().test(
    "Select-Required",
    requiredErrMsg("Gender"),
    function (value: any) {
      if (value === undefined) {
        return false;
      }
      if (value.value === undefined) {
        return false;
      }
      return true;
    }
  ),
  email: string()
    .email(emailErrMsg)
    .required(requiredErrMsg("Email"))
    .max(50, maxLenErrMsg(50)),
    phone: string()
    .required(requiredErrMsg("Phone"))
    .min(0, minErrMsg(0))
    .max(11, maxErrMsg(11)),
});
