import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between items-end text-[2rem]">
        <div className="logo font-normal m-[2rem] transform transition-transform hover:translate-x-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]">
          <Link
            className="bg-gray-100 p-3 rounded-lg"
            to="/"
          >
            ReactTransition
          </Link>
        </div>
        <div className="flex">
          <div className="m-[2rem] transform transition-transform hover:translate-y-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0)]">
            <Link className="bg-gray-100 p-3 rounded-lg" to="/">
              Home
            </Link>
          </div>
          <div className="m-[2rem] transform transition-transform hover:translate-y-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0)]">
            <Link className="bg-gray-100 p-3 rounded-lg" to="/about">
              About
            </Link>
          </div>
          <div className="m-[2rem] transform transition-transform hover:translate-y-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0)]">
            <Link className="bg-gray-100 p-3 rounded-lg" to="/contact">
              Contact
            </Link>
          </div>
          <div className="m-[2rem] transform transition-transform hover:translate-y-3 drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0)]">
            <Link className="bg-gray-100 p-3 rounded-lg" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  
}
