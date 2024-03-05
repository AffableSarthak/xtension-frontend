"use client";
import { useFormState } from "react-dom";
import { loginToXtension } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const [loginObj, formAction] = useFormState(loginToXtension, null);

  useEffect(() => {
    console.log(loginObj);
    if (loginObj?.toast) {
      if (loginObj.toast.type === "SUCCESS") {
        toast.success(loginObj.toast.message);
      } else {
        toast.error(loginObj.toast.message);
      }
    }

    if (loginObj?.redirectPath) {
      router.push(loginObj.redirectPath);
    }
  }, [loginObj]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            xtension
          </h2>
          <form action={formAction}>
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="block text-gray-300 font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="userName"
                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-300 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="passKey"
                name="passKey"
                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-700 text-white"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
