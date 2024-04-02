import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {

  const [show, setShow] = useState(true)

  const clickShowPage = () => {
    setShow(!show)
  };

  return (
    <>
      {show ? (
        <Login onClick={clickShowPage} />
      ) : (
        <Register onClick={clickShowPage} />
      )}
    </>
  );
}
