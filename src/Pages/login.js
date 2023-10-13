import { Link } from "react-router-dom";
import IntroductoryPage from "../components/introduction";
import googleLogo from "../assets/google-icon.png";
import "../form.css";

function login() {
  return (
    <main className="flex w-screen h-screen bg-white overflow-hidden mx-11 login">
      <IntroductoryPage />
      <div className="w-1/2 h-full flex justify-center flex-col">
        <div className="lg:w-80 lg:ml-12 md:w-72 md:h-auto md:ml-7">
          <div className="text-left">
            <h2 className="text-black font-bold leading-[40px] text-3xl">
              Welcome Back!
            </h2>
            <p className="text-sm">
              Input your details or use Quaapay wallet details to login to your
              account.
            </p>
          </div>
          <form
            // method="post"
            className="login-form flex flex-col items-start text-left mt-8 w-full"
          >
            <label htmlFor="email" className="w-full mb-3">
              Email
              <br />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full bg-zinc-100 rounded mt-1 px-3 py-2"
                placeholder="Enter your email address"
              />
              <div id="error" className="text-xs font-medium text-red-800" />
            </label>
            <label htmlFor="password" className="w-full mb-5">
              Password
              <br />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full bg-zinc-100 rounded mt-1 px-3 py-2"
                placeholder="Enter Password"
              />
              <div id="error" className="text-xs font-medium text-red-800" />
            </label>
            <div className="w-full flex justify-between">
              <label htmlFor="remember" className="text-sm">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="appearance-none border border-quaapay-indigo checked:bg-quaapay-indigo w-5 h-5 after:checked:content-['✔'] after:checked:text-white after:checked:flex after:checked:items-center after:checked:justify-center"
                />
                Remember Me
              </label>
              <a href="#" className="text-quaapay-indigo text-sm">
                Forgot your password?
              </a>
            </div>
            <div className="flex w-full items-center justify-center flex-col">
              <button
                type="submit"
                id="button"
                className="w-full bg-quaapay-indigo rounded mt-8 mb-3 h-10 text-white"
              >
                Log In
              </button>
              <span>OR</span>
              <button className="w-full border rounded mt-3 h-10 text-black flex items-center justify-center">
                <img
                  src={googleLogo}
                  alt="google-icon"
                  className="w-[30px] h-[30px] mr-2"
                />
                <a href="#">Login with Google</a>
              </button>
            </div>
          </form>
          <div className="w-full mt-5 flex items-center justify-center">
            <p className="text-sm">
              Don't have an account?
              <Link to="/Pages/signUp" className="text-quaapay-indigo">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default login;
