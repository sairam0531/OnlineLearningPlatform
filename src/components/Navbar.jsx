import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Online Learning</h1>
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/courses" className="hover:underline">Courses</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/courses" className="block hover:underline">Courses</Link>
          <Link to="/login" className="block hover:underline">Login</Link>
          <Link to="/signup" className="block hover:underline">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
