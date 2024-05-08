import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { useRef, useState } from "react";
const Login = () => {
  const userName = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleButtonClick = () => {
    console.log(userName.current.value);
    console.log(password.current.value);
    const message = checkValidData(
      userName.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <form
          className="w-2/6 absolute p-12 bg-green-300 my-36 rounded-lg mx-auto right-0 left-0  text-black"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl py-4 text-green-900">Login</h1>

          <input
            ref={userName}
            className="p-4 my-4 w-full bg-white-800 border border-gray-600
            "
            type="text"
            placeholder="Enter your Username"
          />
          <input
            ref={password}
            className="p-4 my-4 w-full bg-white-800 border border-gray-600"
            type="password"
            placeholder="Enter your Password"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="p-4 my-4 bg-green-600 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
