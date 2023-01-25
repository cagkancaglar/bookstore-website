import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [userToken, setUserToken] = useState("");

  const tokenHandle = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token || userToken) {
      navigate("/home");
    }
  };

  useEffect(() => {
    tokenHandle();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please enter your e-mail"),
      password: Yup.string()
        // .min(6, 'Must be at least 6 characters long')
        // .max(20, 'Must be a maximum 20 characters or less')
        // .matches(/[0-9]/, 'Requires a number')
        // .matches(/[a-z]/, 'Requires a lowercase letter')
        // .matches(/[A-Z]/, 'Requires an uppercase letter')
        // .matches(/[^\w]/, 'Requires a symbol')
        .required("Please enter your password"),
    }),
    onSubmit: ({ email, password }) => {
      handleLogin(email, password);
    },
  });

  const handleLogin = (email, password) => {
    fetch("https://assign-api.piton.com.tr/api/rest/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserToken(data.action_login.token);
        if (rememberMe) {
          localStorage.setItem(
            "token",
            JSON.stringify(data.action_login.token)
          );
          navigate("/home");
        }
        if (userToken) {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="flex h-screen justify-center items-center">
      <div className="bg-indigo-600 hidden lg:block h-screen">
        <img
          src="/assets/images/login-register.png"
          alt=""
          className="w-[720px] h-full object-cover"
        />
      </div>

      <div
        className="bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full">
          <div className="flex justify-center">
            <svg
              width="120"
              height="78"
              viewBox="0 0 120 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0847129 34.0698L27.9196 0L38.1296 0.0140442L53.086 18.4245L42.8645 26.6242L33.0044 14.487L13.5738 38.2701L33.0345 63.1256L82.6863 0.0908642L93.0336 0.0945839L119.83 34.1644L120 41.977L94.4499 77.528L84.1331 78L68.1383 59.5896L78.0818 51.0591L88.616 63.1842L106.457 38.3598L87.8546 14.7081L38.1911 77.7577L27.8348 77.7427L0 42.1917L0.0847129 34.0698Z"
                fill="#6251DD"
              />
            </svg>
          </div>

          <h5 className="font-bold opacity-60 font-sm mt-11 mb-2 text-formText">
            Welcome back!
          </h5>
          <h2 className="text-3xl font-semibold tracking-tight text-formText">
            Login to your account
          </h2>
          <form
            className="space-y-12"
            method="POST"
            onSubmit={formik.handleSubmit}
          >
            <div className="-space-y-px rounded-md pt-8">
              <div className="mb-3">
                <label htmlFor="email-address" className="font-bold text-lg">
                  E-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-[400px] h-[60px] appearance-none p-4 border-none text-gray-900 placeholder-gray-500 bg-formInputBackground my-3"
                  placeholder="john@mail.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-sm font-semibold opacity-50 text-[color:red]">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="password" className="font-bold text-lg">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-[400px] h-[60px] appearance-none p-4 border-none text-gray-900 placeholder-gray-500 bg-formInputBackground my-3"
                  placeholder="******"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-sm font-semibold opacity-50 text-[color:red]">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center mb-">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-[18px] w-[18px] rounded border-formOutline"
                  value={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-[16px] text-gray-900 text-formOutline font-semibold"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="pt-11">
              <button
                type="submit"
                className="group relative flex w-[400px] h-[60px] justify-center items-center bg-formButton py-[10px] px-[20px] text-[24px] font-bold text-[color:white] mb-2 rounded"
                disabled={!formik.values.email || !formik.values.password}
              >
                Login
              </button>
              <Link
                type="button"
                to={"/register"}
                className="group relative flex  mt-[10px] w-[400px] h-[60px] justify-center items-center border border-formOutline bg-[color:white] py-2 px-4 text-[24px] font-bold text-formRegister"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
