import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <form className="w-2/6 absolute p-12 bg-green-300 my-36 rounded-lg mx-auto right-0 left-0  text-black">
          <h1 className="font-bold text-3xl py-4 text-green-900">Login</h1>

          <input
            className="p-4 my-4 w-full bg-white-800 border border-gray-600
            "
            type="text"
            placeholder="Enter your Username"
          />
          <input
            className="p-4 my-4 w-full bg-white-800 border border-gray-600"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="p-4 my-4 bg-green-600 w-full rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
