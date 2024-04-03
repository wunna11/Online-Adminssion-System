import { useEffect, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInfoSchema } from "../../lib/validation/PersonalInfo";
import CheckBox from "../components/form/Checkbox";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import ReactSelect from "../components/form/ReactSelect";
import DatePicker from "../components/form/DatePicker";
import "../../css/custom.css";

interface PersonalInfoParams {
  onClick: (data: any) => void;
}

function PersonalInfo(props: PersonalInfoParams) {
  const { onClick } = props;

  const [isSfu, setIsSfu] = useState(0);
  // const [done, setDone] = useState(false);

  const genderArr = [
    { value: "0", label: "Male" },
    { value: "1", label: "Female" },
  ];

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(personalInfoSchema),
  });

  const {
    handleSubmit,
    // control,
    // formState: { isDirty, isValid },
  } = methods;

  // Watch all fields to check for changes
  // const watchedFields = useWatch({
  //   control,
  //   defaultValue: {},
  // });

  // useEffect(() => {
  //   if (isDirty && isValid) {
  //     setDone(!done);
  //   }
  // }, [watchedFields, isDirty, isValid]);

  return (
      <div className="pt-[20px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onClick)}>
            <div>
              <p className="text-gray-800 font-medium text-[16px] mb-3">
                Are you an alumni SFU?
              </p>
              <div className="flex space-x-10">
                <CheckBox
                  id="is_sfu"
                  label="Yes"
                  checked={isSfu == 1}
                  onChange={() => setIsSfu(1)}
                  value={isSfu}
                />
                <CheckBox
                  id="is_sfu"
                  label="No"
                  checked={isSfu == 0}
                  onChange={() => setIsSfu(0)}
                  value={isSfu}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="first_name"
                  label="First Name"
                  placeholder="Enter your first name"
                />

                <Input
                  id="last_name"
                  label="Last Name"
                  placeholder="Enter your last name"
                />

                <ReactSelect
                  id="gender"
                  label="Gender"
                  optionsObject={genderArr}
                  placeholder="Select Gender"
                  requiredField
                />

                <DatePicker
                  id="dob"
                  label="Date Of Birth"
                  // placeholder="Please Select Date"
                />

                <div className="col-span-2">
                  <Input
                    id="address1"
                    label="Address"
                    placeholder="Address 1"
                  />

                  <Input id="address2" placeholder="Address 2" />
                </div>

                <Input id="city" placeholder="City" />

                <ReactSelect
                  id="region"
                  optionsObject={genderArr}
                  placeholder="Select Region"
                  requiredField
                />

                <Input
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email here"
                />

                <Input
                  id="phone"
                  label="Phone Number"
                  type="number"
                  placeholder="09xxxxxxxxx"
                />
              </div>
            </div>

            <div className="float-right">
              <Button secondary type="submit">
                Next
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
  );
}

export default PersonalInfo;
