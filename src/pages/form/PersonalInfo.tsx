import { FormProvider, useForm } from "react-hook-form";
import AuthBgLayout from "../components/AuthBgLayout";
import CheckBox from "../components/form/Checkbox";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import ReactSelect from "../components/form/ReactSelect";
import DatePicker from "../components/form/DatePicker";

function PersonalInfo() {
  const methods = useForm({
    mode: "onTouched",
    // resolver: yupResolver(userLoginSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const genderArr = [
    { value: "0", label: "Male" },
    { value: "1", label: "Female" },
  ];

  return (
    <>
      <AuthBgLayout>
        <h3 className="font-bold text-[20px] text-gray-800">
          Please fill out this form to continue your application progress.
        </h3>
        <div className="pt-[20px]">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="text-gray-800 font-medium text-[16px] mb-3">
                  Are you an alumni SFU?
                </p>
                <div className="flex space-x-10">
                  <CheckBox id="is_sfu" label="Yes" />
                  <CheckBox id="not_sfu" label="No" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="first_name"
                    label="First Name"
                    placeholder="Enter your first name"
                    requiredField
                  />

                  <Input
                    id="first_name"
                    label="Last Name"
                    placeholder="Enter your last name"
                    requiredField
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
                </div>

                <Button type="submit">Submit</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </AuthBgLayout>
    </>
  );
}

export default PersonalInfo;
