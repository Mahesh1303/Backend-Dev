import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="flex justify-center my-auto h-screen w-full">
      <div className="content-center text-4xl text-gray-500 ">
        <h1>This is A URL Shortener WebSite</h1>
      </div>
      <div className="w-full content-center ">
        <div className="bg-slate-200 h-fit w-3/5 justify-center mx-auto space-x-4 space-y-4 rounded-3xl shadow-slate-500 p-20 ">
          <form>
            <input
              type="text"
              placeholder="Enter Name"
              className="border-s-gray-600  w-full my-4 p-3 rounded-3xl"
            ></input>
            <input
              type="text"
              placeholder="Enter email"
              className="border-s-gray-600  w-full my-4 p-3 rounded-3xl"
            ></input>
            <input
              type="password"
              placeholder="Enter password"
              className="border-s-gray-600  w-full my-10 p-3 rounded-3xl"
            ></input>
            <button
              type="submit"
              className="bg-red-700 rounded-full p-3  text-white mb-4"
            >
              Register
            </button>
            <div>
              <Link to="/" className="text-blue-400">
                Dont have An Account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
