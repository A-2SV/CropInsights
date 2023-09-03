import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const ForgotPassword = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto py-20">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="text-center">
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Forgot Password? 🔒
              </h4>
              <p className="mb-8">
                Enter your email and we'll send you instructions to reset your
                password
              </p>
              <form className="mb-6">
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded"
                    autoFocus
                  />
                </div>
                <button
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600"
                  type="submit"
                >
                  Send Reset Link
                </button>
              </form>
              <div className="text-center">
                <Link href="/login" passHref className="text-blue-500">
                  {" "}
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;