import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthBgLayout from "../components/AuthBgLayout";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import PasswordInput from "../components/form/PasswordInput";
import { userLoginSchema } from "../../lib/validation/auth/login";


interface LoginParams {
  onClick: () => void,
}

function Login(props: LoginParams) {

  const { onClick } = props;

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(userLoginSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <>
      <AuthBgLayout>
        <>
        <h3 className="font-bold text-[20px] text-gray-800">LOGIN</h3>
          <div className="pt-[20px]">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  id="email"
                  label="Email Address"
                  placeholder="Enter Your Email Here"
                  requiredField
                />

                <PasswordInput
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                  requiredField
                />

                <div className="text-right mb-[20px]">
                  <a href="#" className="text-[14px] text-blue-100 font-medium hover:text-blue-50">
                    Forget Password?
                  </a>
                </div>

                <Button type="submit">Login</Button>

                <div className="text-center text-[14px] pt-[14px]">
                  <span className="text-gray-800">Don't have an account?</span>
                  <span
                    onClick={onClick}
                    className="text-blue-100 font-medium cursor-pointer ml-1 hover:text-blue-50"
                  >
                    Register
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

export default Login;
