import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const Register = () => {
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
                  className="flex items-center justify-center mb-2"
                >
                  <img src="/logo.png" alt="logo" className="h-8" />
                </Link> */}
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Create an Account 👋
              </h4>
              <p className="mb-8">
                Please fill in the details below to create your account
              </p>
              <form className="mb-6">
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded"
                    autoFocus
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block mb-1 font-semibold"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-1 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirm-password"
                    className="block mb-1 font-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm your password"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-8">
                  <Link href="/Dashboard">
                    <button
                      className="w-full py-2 px-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600"
                      type="submit"
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </form>
              <p className="text-center">
                <span>Already have an account?</span>
                <Link href="/Login" passHref className="text-blue-500">
                  {" "}
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;