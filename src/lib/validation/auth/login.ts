import { object, string } from "yup";
import {
  emailErrMsg,
  maxLenErrMsg,
  minLenErrMsg,
  requiredErrMsg,
} from "../validation-message";
import {
  PASSWORD_MAX_LEN,
  PASSWORD_MIN_LEN,
} from "../validation-format";

export const userLoginSchema = object({
  email: string()
    .email(emailErrMsg)
    .required(requiredErrMsg("Email"))
    .max(50, maxLenErrMsg(50)),
  password: string()
    .required(requiredErrMsg("Password"))
    .min(PASSWORD_MIN_LEN, minLenErrMsg(PASSWORD_MIN_LEN))
    .max(PASSWORD_MAX_LEN, maxLenErrMsg(PASSWORD_MAX_LEN)),
});