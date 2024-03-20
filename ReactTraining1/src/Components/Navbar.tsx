import { Link } from "react-router-dom";

export default function Navbar() {
  let navlinks = ["Home", "About", "Services", "Contact"];
  const navStyle =
    "mx-2 w-32 text-center p-2 bg-gray-300/25 rounded-lg duration-300 cursor-pointer font-thin hover:scale-95 hover:bg-green-500 hover:drop-shadow-2xl list-none";

  return (
    <div className="h-dvh flex justify-center bg-indigo-950/85 p-2 font-mono">
      <div className="text-white text-2xl rounded-lg">
        <div className="flex">
          <li className={navStyle}>
            <Link to="/">Home</Link>
          </li>
          <li className={navStyle}>
            <Link to="/About">About</Link>
          </li>
          <li className={navStyle}>Services</li>
          <li className={navStyle}>Contact</li>
        </div>
      </div>
    </div>
  );
}

// <div className="flex justify-center  text-white text-2xl rounded-lg">
//   <div className="flex">
//     {navlinks.map((nav) => (
//       <Link to={"/" + nav.toLowerCase()} className={navStyle} key={nav}>
//         {nav}
//       </Link>
//     ))}
//   </div>
// </div>
