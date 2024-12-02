import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-291px)] ">
      <form className="w-full max-w-lg rounded-lg bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?
            <Link
              to={"/register"}
              className="text-blue-500 hover:underline ml-2"
            >
              Register Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
