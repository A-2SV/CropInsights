import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto py-20">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="text-center">
                {/* <Link
                  href="/"
                  passHref
                  className="flex items-center justify-center mb-2"
                >
                  <img src="/logo.png" alt="logo" className="h-8" />
                </Link> */}
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Welcome to CROPINSIGHTS AI! 👋
              </h4>
              <p className="mb-8">
                Please sign in to your account and start the adventure
              </p>
              <form className="mb-6">
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    className="w-full p-2 border border-gray-300 rounded"
                    autoFocus
                  />
                </div>
                <div className="mb-4 relative">
                  <div className="flex justify-between mb-1">
                    <label htmlFor="password" className="block font-semibold">
                      Password
                    </label>
                    <Link
                      href="/forgotPassword"
                      passHref
                      className="text-sm text-blue-500"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="flex">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="remember-me"
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="form-checkbox"
                    />
                    <span className="ml-2">Remember Me</span>
                  </label>
                </div>
                <Link href="/Dashboard">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                  >
                    Sign In
                  </button>
                </Link>
              </form>
              <p className="text-center">
                <span>New on our platform?</span>
                <Link href="/register" passHref className="text-blue-500">
                  {" "}
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;