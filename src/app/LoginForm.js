import React from 'react';

const LoginForm = () => {
  return (
    <form className="w-full max-w-sm">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
  <button
    type="submit"
    className="bg-orange-600 text-white w-full py-2 rounded-full hover:bg-orange-700"
  >
    LOGIN
  </button>
</form>
  )
}

export  default LoginForm
