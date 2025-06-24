function Signup() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col justify-center items-center bg-blue-700 text-white w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-4">Join Us</h1>
        <p className="text-lg text-center">Create your account and start learning today!</p>
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
