import React, { useState } from "react";
import { signupFields } from "../../constants/login_form_field";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => {
  fieldsState[field.id] = "";
});
const SignUpComponent = () => {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => {
    console.log(signupState);
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {};

  return (
    <form
      className="space-y-6 flex flex-col justify-center"
      onSubmit={handleSubmit}
    >
      <div className="">
        {fields.map((field, index) => (
          <div className="mb-5" key={index}>
            <label htmlFor={field.labelFor} className="sr-only">
              {field.labelText}
            </label>
            <input
              value={signupState[field.id]}
              onChange={handleChange}
              id={field.id}
              name={field.name}
              type={field.type}
              required={field.isRequired}
              className="rounded-md appearance-none relative text-base block w-full h-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
            Forgot your password?
          </a>
        </div>
      </div>
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green -700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
      >
        Sign in
      </button>
    </form>
  );
};

export default SignUpComponent;
