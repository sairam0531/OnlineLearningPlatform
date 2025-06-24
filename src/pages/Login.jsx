function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/2 bg-blue-700 text-white flex items-center justify-center">
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
      </div>

      {/* Right Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-3/4 max-w-md">
          <h2 className="text-xl font-semibold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input className="w-full px-3 py-2 border rounded" type="password" placeholder="Password" />
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
