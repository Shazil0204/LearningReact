export default function Navbar() {
  let navlinks = ["Home", "About", "Services", "Contact"];
  const navStyle =
    "mx-5 w-32 text-center p-2 bg-gray-300/25 rounded-lg hover:bg-gray-300/50 duration-300 cursor-pointer font-thin border border-transparent hover:border-blue-500 hover:scale-95";
  return (
    <div className="h-screen bg-indigo-950/85 p-2 font-mono">
      <div className="flex justify-center text-white text-2xl rounded-lg">
        <div className="flex">
          {navlinks.map((nav) => (
            <div className={navStyle} key={nav}>
              {nav}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
