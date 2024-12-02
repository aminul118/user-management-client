import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-291px)]">
      <form className="w-full max-w-lg bg-base-100 shadow-xl p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Now</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Enter your name"
            required
          />
        </div>

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

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="input input-bordered"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            name="photoUrl"
            className="input input-bordered"
            placeholder="Enter your photo URL"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Register Now
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?
            <Link to={"/login"} className="text-blue-500 hover:underline ml-2">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
