import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextApi } from "../../context/AuthPrivider";

const Login = () => {
  const { authUser, setAuthUser } = contextApi();

  console.log(authUser);
  const [userDetails, setUserDetails] = useState({
    email: "",

    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        localStorage.setItem("token", result.Token);
        navigate("/");
        setAuthUser(result.user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full bg-[#9da6b99f] space-y-4">
      <div className="a border border-black p-6">
        <div className="text w-40% p-12 space-y-2">
          <h1 className="text-4xl font-bold text-red-950">
            Welcome to Chat App
          </h1>
          <h1 className="text-3xl font-bold text-center">
            Create a new account
          </h1>
          <h2 className="text-xl font-bold text-center">
            Its free and always will be
          </h2>
        </div>
        <form action="" className="space-y-4  " onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 h-[4rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 h-[4rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="password"
              onChange={handleChange}
            />
          </label>
          <button className="btn btn-outline btn-primary w-full ">
            Primary
          </button>
        </form>
        <div>
          <span>
            <Link to={'/register'}>
              dont have an account ?
              <span className="text-white underline cursor-pointer mx-2">
                Sign up
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
