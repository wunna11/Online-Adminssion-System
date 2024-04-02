import { useForm, FormProvider } from "react-hook-form";
import AuthBgLayout from "../components/AuthBgLayout";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import PasswordInput from "../components/form/PasswordInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterSchema } from "../../lib/validation/auth/register";

interface RegisterParams {
  onClick: () => void;
}

function Register(props: RegisterParams) {
  const { onClick } = props;

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(userRegisterSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <>
      <AuthBgLayout>
        <>
          <h3 className="font-bold text-[20px] text-gray-800">Register</h3>
          <div className="pt-[20px]">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  id="name"
                  label="Name"
                  placeholder="Enter your name here"
                  requiredField
                />

                <Input
                  id="phone"
                  label="Phone"
                  placeholder="09xxxxxxxxx"
                  requiredField
                />

                <Input
                  id="email"
                  label="Email Address"
                  placeholder="Enter your email here"
                  requiredField
                />

                <div className="mb-[20px]">
                  <PasswordInput
                    id="password"
                    label="Create Password"
                    placeholder="Enter password"
                    requiredField
                  />
                </div>

                <div className="mb-[40px]">
                  <PasswordInput
                    id="confirm_password"
                    label="Confirm Password"
                    placeholder="Retype password"
                    requiredField
                  />
                </div>

                <Button type="submit">Register</Button>

                <div className="text-center text-[14px] pt-[14px]">
                  <span className="text-gray-800">Have an account?</span>
                  <span
                    onClick={onClick}
                    className="text-blue-100 font-medium cursor-pointer ml-1 hover:text-blue-50"
                  >
                    Login
                  </span>
                </div>
              </form>
            </FormProvider>
          </div>
        </>
      </AuthBgLayout>
    </>
  );
}

export default Register;
