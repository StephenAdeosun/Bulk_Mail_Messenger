import { Link } from "react-router-dom";
import IntroductoryPage from "../components/introduction";
import googleLogo from "../assets/google-icon.png";
import useFormValidation from "../hooks/useFormValidation";
import "../form.css";

function Signup() {
  const validationRules = {
    email: { required: true, validate: (value) => value.includes("@") },
    password: { required: true, validate: (value) => value.length >= 6 },
    confirmPassword: {
      required: true,
      validate: (value) => value === formData.password,
      errorMessage: "Passwords do not match",
    },
  };

  const { formData, errors, handleChange, validateForm } = useFormValidation(
    { email: "", password: "", confirmPassword: "" },
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Signup Form submitted!");
    }
  };

  return (
    <>
      <div className="flex w-screen h-screen bg-white overflow-hidden px-6 lg:px-0 signup">
        <IntroductoryPage />
        <div className="w-full sm:w-1/2 h-full flex justify-center flex-col">
          <div className="lg:w-80 lg:ml-12 md:w-72 md:h-auto md:ml-7">
            <div className="text-left">
              <h2 className="text-black font-bold leading-[40px] text-3xl">
                Create Account
              </h2>
              <p className="text-sm">
                Welcome to our vibrant community where your journey to seamless
                information world begins.
              </p>
            </div>
            <form
              className="flex flex-col items-start text-left mt-8 w-full"
              onSubmit={handleSubmit}
            >
              <label htmlFor="email" className="w-full mb-3">
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`w-full bg-zinc-100 rounded mt-1 px-3 py-2 ${
                    errors.email && "border-red-500"
                  }`}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </label>
              <label htmlFor="password" className="w-full mb-5">
                Password
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`w-full bg-zinc-100 rounded mt-1 px-3 py-2 ${
                    errors.password && "border-red-500"
                  }`}
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </label>
              <label htmlFor="confirmPassword" className="w-full mb-5">
                Re-Enter Password
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className={`w-full bg-zinc-100 rounded mt-1 px-3 py-2 ${
                    errors.confirmPassword && "border-red-500"
                  }`}
                  placeholder="Enter Password Again"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword}
                  </p>
                )}
              </label>
            </form>
            <div>
              <button
                type="submit"
                className="w-full bg-quaapay-indigo rounded mt-8 mb-6 h-10 text-white"
                onClick={handleSubmit}
              >
                Log In
              </button>
              <span>OR</span>
              <br />
              <button className="w-full border rounded mt-5 h-10 text-black flex items-center justify-center">
                <img
                  width="30"
                  height="30"
                  src={googleLogo}
                  alt="google-logo"
                  className="mr-2"
                />{" "}
                <a href="#">Sign up with Google</a>
              </button>
            </div>
            <p className="text-sm mt-5">
              Already have an account?{" "}
              <Link to="../Pages/login" className="text-quaapay-indigo">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
