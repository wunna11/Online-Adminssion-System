import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { CalendarIcon } from "@heroicons/react/24/solid";
import "../../../css/customDatePicker.css";
import { classNames } from "../../../lib/helper";

interface DataPickerParams {
  id: string;
  label?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  defaultYear?: number;
  defaultMonth?: number;
  defaultValue?: number;
  helperText?: string;
  readOnly?: boolean;
  requiredField?: boolean;
}

export default function DatePicker({
  id,
  label,
  placeholder,
  validation,
  defaultYear,
  defaultMonth,
  defaultValue,
  helperText,
  readOnly = false,
}: // requiredField = false,
DataPickerParams) {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const defaultDate = new Date();
  if (defaultYear) {
    defaultDate.setFullYear(defaultYear);
  }
  if (defaultMonth) {
    defaultDate.setMonth(defaultMonth);
  }

  return (
    <div className="relative mb-5">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-800 text-left"
        >
          {label}
          {/* {requiredField && <span className="text-red-400">&nbsp;*</span>} */}
        </label>
      )}

      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={id}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <div className="relative mt-1">
              <ReactDatePicker
                name={id}
                onBlur={onBlur}
                onChange={onChange}
                selected={value}
                className={classNames(
                  readOnly
                    ? "bg-gray-200 focus:ring-0 cursor-not-allowed border-gray-300 focus:border-gray-300"
                    : errors[id]
                    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-gray-200",
                  "block w-full bg-white-50 border text-gray-900 text-sm rounded-lg p-2.5 focus:outline-none focus:ring-2"
                )}
                placeholderText={placeholder}
                aria-describedby={id}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                openToDate={value ?? defaultDate}
                dateFormat="yyyy-MM-dd"
                readOnly={readOnly}
              />
              {!value && (
                <CalendarIcon className="w-5 h-5 absolute text-lg text-gray-500 transform -translate-y-1/2 pointer-events-none left-4 top-1/2" />
              )}
            </div>
            <div className="mt-1">
              {helperText !== "" && (
                <p className="text-xs text-gray-500">{helperText}</p>
              )}
              {errors[id] && (
                <span className="text-sm text-red-500">
                  {errors[id]?.message as string}
                </span>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
}
