import AuthBgLayout from "../components/AuthBgLayout";
import Button from "../components/form/Button";

interface SquareProps {
  value?: string;
}

const codes = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
];

const Square = (props: SquareProps) => {
  const { value } = props;
  return (
    <div className="bg-gray-50 w-11 h-11 rounded-md flex items-center justify-center">
      <p className="font-bold text-black">{value}</p>
    </div>
  );
};

function Otp() {
  return (
    <>
      <AuthBgLayout>
        <h3 className="font-bold text-[20px] text-gray-800">
          OTP Verification
        </h3>
        <p className="text-gray-800 text-sm mt-8">
          Enter 6 digits code we have sent to your mobile
        </p>
        <p className="text-gray-800 text-sm mb-4">number 09768676123</p>

        <div className="flex justify-between">
          {codes.map((item) => (
            <Square key={item.value} value={item.value} />
          ))}
        </div>

        <div className="text-right mt-[14px] mb-[50px]">
          <a
            href="#"
            className="text-[14px] text-blue-100 font-medium hover:text-blue-50"
          >
           Resend Code!
          </a>
        </div>

        <Button type="submit">Verify</Button>
      </AuthBgLayout>
    </>
  );
}

export default Otp;
