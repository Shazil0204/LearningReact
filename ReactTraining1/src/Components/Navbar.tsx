// navbar.tsx

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faAddressCard, faTasks, faFileContract } from "@fortawesome/free-solid-svg-icons";



export default function Navbar(props: { bgColor: string; btnColor: string }) {
  const { bgColor, btnColor } = props;
  let navlinks = [
    { text: "Home", icon: faHouseChimney },
    { text: "About", icon: faAddressCard },
    { text: "Services", icon: faTasks },
    { text: "Contact", icon: faFileContract }
  ];
  const navStyle =
    "mx-2 w-64 text-center p-2 rounded-lg duration-300 cursor-pointer font-thin hover:scale-95 hover:bg-indigo-800 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] hover:drop-shadow-none list-none";

  return (
    <div className={`h-dvh flex justify-center ${bgColor} p-2 font-mono`}>
      <div className="text-white text-2xl rounded-lg">
        <div className="flex">
          {navlinks.map((nav) => (
            <Link to={nav.text === "Home" ? "/" : `/${nav.text.toLowerCase()}`} className={`${btnColor} ${navStyle}`} key={nav.text}>
              <FontAwesomeIcon icon={nav.icon} className="mr-2" /> {nav.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
