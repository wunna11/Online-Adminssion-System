import { useFormContext, RegisterOptions } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../../lib/helper";

interface InputParams {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  type?:
    | "text"
    | "email"
    | "number"
    | "password"
    | "file"
    | "hidden"
    | "checkbox"
    | "image"
    | "radio"
    | "search"
    | "submit"
    | "tel";
  readOnly?: boolean;
  requiredField?: boolean;
  validation?: RegisterOptions;
}

export default function Input({
  id,
  label,
  placeholder = "",
  helperText = "",
  type = "text",
  readOnly = false,
  // requiredField = false,
  validation,
  ...rest
}: InputParams) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-[20px]">
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
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          className={classNames(
            readOnly
              ? "bg-gray-50 text-black focus:ring-0 cursor-not-allowed border-gray-200 focus:border-gray-200"
              : errors[id]
              ? "bg-gray-50 text-black border-red-50 focus:ring-red-50 focus:border-red-50"
              : "bg-white text-gray-900 border border-gray-300 focus:ring-gray-200 focus:border-gray-800",
            "block w-full border text-sm rounded-lg p-2.5 placeholder-gray-300"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />

        {errors[id] && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ExclamationCircleIcon className="w-5 h-5 text-xl text-red-500" />
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