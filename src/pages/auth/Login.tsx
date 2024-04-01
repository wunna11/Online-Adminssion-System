import { useForm, FormProvider } from "react-hook-form";
import AuthBgLayout from "../components/AuthBgLayout";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import PasswordInput from "../components/form/PasswordInput";

function Login() {
  const methods = useForm({
    mode: "onTouched",
    // resolver: yupResolver(userLoginSchema),
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
                  <a href="#" className="text-[14px] text-blue">
                    Forget Password?
                  </a>
                </div>

                <Button type="submit">Login</Button>

                <div className="text-center text-[14px] text-gray-800 pt-[14px]">
                  <p>
                    Don't have an account?
                    <a href="">Register</a>
                  </p>
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
