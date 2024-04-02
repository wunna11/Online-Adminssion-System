import { useFormContext, RegisterOptions } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function CheckBox({
  id,
  label,
  helperText = "",
  type = "checkbox",
  checked,
  onChange,
  value,
  readOnly = false,
  validation,
  ...rest
}: {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  checked?: boolean;
  value: string | number;
  onChange?: () => void;
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
  validation?: RegisterOptions;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-5">
      <div className="relative">
        <input
          {...register(id, validation)}
          {...rest}
          id={id}
          name={id}
          type={type}
          readOnly={readOnly}
          checked={checked}
          onChange={onChange}
          value={value}
          className="w-6 h-6 text-primary bg-white-100 border-gray-300 rounded focus:ring-gray-400"
        />

        {label && (
          <label
            htmlFor={id}
            className="inline block mb-2 ml-3 text-[16px] font-medium text-gray-800"
          >
            {label}
          </label>
        )}

        {errors[id] && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ExclamationCircleIcon className="w-5 h-5 text-xl text-red-500" />
          </div>
        )}
      </div>
      <div className="mt-1">
        {helperText !== "" && (
          <p className="text-xs text-gray-500">{helperText}</p>
        )}
        {errors[id] && (
          <span className="text-sm text-red-50">
            {errors[id]?.message as string}
          </span>
        )}
      </div>
    </div>
  );
}
