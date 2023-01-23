import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const Login = async () => {
  //   await axios
  //     .post("https://assign-api.piton.com.tr/api/rest/login", {
  //       email: "adevrim@gmail.com",
  //       password: "123456"
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin();
  };

  const handleLogin = () => {
    fetch("https://assign-api.piton.com.tr/api/rest/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("err: " + err));
  };

  return (
    <section className="flex h-screen items-center">
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

          <h5 className="font-sm mt-11 text-formText">Welcome back!</h5>
          <h2 className="text-3xl font-bold tracking-tight text-formText">
            Login to your account
          </h2>
          <form
            className="space-y-12"
            method="POST"
            //   onSubmit={handleSubmit}
          >
            <div className="-space-y-px rounded-md shadow-sm pt-8">
              <div>
                <label htmlFor="email-address">E-mail</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none px-3 py-2 border-none text-gray-900 placeholder-gray-500 bg-formInputBackground mb-4"
                  placeholder="john@mail.com"
                  // onChange={(e) => setEmail(e.target.value)}
                  // value={email}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none px-3 py-2 border-none text-gray-900 placeholder-gray-500 bg-formInputBackground"
                  placeholder="******"
                  // onChange={(e) => setPassword(e.target.value)}
                  // value={password}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center mb-">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-formOutline"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 text-formOutline"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="pt-11">
              <button
                type="submit"
                className="group relative flex w-full justify-center bg-formButton py-2 px-4 text-sm font-medium text-white mb-2"
              >
                Login
              </button>
              <button
                type="submit"
                className="group relative flex w-full justify-center border border-formOutline bg-transparent py-2 px-4 text-sm font-medium text-formRegister "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
