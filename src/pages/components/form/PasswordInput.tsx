import { useFormContext, RegisterOptions } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../../lib/helper";
import { useState } from "react";

interface InputParams {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  type?: "password";
  readOnly?: boolean;
  requiredField?: boolean;
  validation?: RegisterOptions;
}

export default function PasswordInput({
  id,
  label,
  placeholder = "",
  helperText = "",
  readOnly = false,
  // requiredField = false,
  validation,
  ...rest
}: InputParams) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  const add = (x: number) => (y: number) => x + y;
  const res = add(1)(2)
  // console.log('add', add(1))
  console.log('add', res)

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-800 text-left"
        >
          {label}
          {/* {requiredField && <span className="text-red-400">&nbsp;*</span>} */}
        </label>
      )}
      <div className="relative">
        <input
          {...register(id, validation)}
          {...rest}
          type={values.showPassword ? "text" : "password"}
          name={id}
          id={id}
          readOnly={readOnly}
          className={classNames(
            readOnly
              ? "bg-gray-50 text-black focus:ring-0 cursor-not-allowed border-gray-200 focus:border-gray-200"
              : errors[id]
              ? "bg-gray-50 text-black border-red-50 focus:border-red-50 focus:ring-red-50"
              : "bg-white text-gray-900 border border-gray-300 focus:ring-gray-200 focus:border-gray-800",
            "block w-full border text-sm rounded-lg p-2.5 placeholder-gray-300"
          )}
          placeholder={placeholder}
          aria-describedby={id}
          onChange={handlePasswordChange("password")}
          value={values.password}
        />

        {errors[id] && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ExclamationCircleIcon className="w-5 h-5 text-xl text-red-500" />
          </div>
        )}

        {!errors[id] && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div onClick={handleClickShowPassword} className="cursor-pointer">
              <img src="/img/auth/pwd.png" alt="password" />
            </div>
          </div>
        )}
      </div>

      <div className="mt-1 text-left">
        {helperText !== "" && (
          <p className="text-xs text-gray-500">{helperText}</p>
        )}
        {errors[id] && (
          <span className="text-sm text-red-50 text-left">
            {errors[id]?.message as string}
          </span>
        )}
      </div>
    </div>
  );
}
