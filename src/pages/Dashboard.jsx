function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      <p className="mb-4 text-gray-700">Welcome back! Here's your progress:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Web Development</h3>
          <div className="bg-gray-200 rounded h-4 mt-2">
            <div className="bg-blue-600 h-4 rounded w-3/4"></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">75% completed</p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Python Programming</h3>
          <div className="bg-gray-200 rounded h-4 mt-2">
            <div className="bg-blue-600 h-4 rounded w-1/2"></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">50% completed</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
