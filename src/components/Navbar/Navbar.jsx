import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "./Link";

const navigation = [
  { id: 1, name: "Google", url: "https://www.google.com", path: "/search" },
  { id: 2, name: "YouTube", url: "https://www.youtube.com", path: "/watch" },
  { id: 3, name: "GitHub", url: "https://github.com", path: "/explore" },
  { id: 4, name: "Twitter", url: "https://twitter.com", path: "/home" },
  { id: 5, name: "Wikipedia", url: "https://www.wikipedia.org", path: "/wiki" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const link = navigation.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between px-10 py-5">
      <div className="flex justify-center items-center">
        <div>
          <div className="" onClick={() => setMenu(!menu)}>
            {menu ? (
              <X className="md:hidden" />
            ) : (
              <Menu className="md:hidden" />
            )}
          </div>
          <ul
            className={`md:hidden absolute ${
              menu ? "left-10" : "-left-34"
            } bg-gray-200 duration-1000 rounded-sm`}
          >
            {link}
          </ul>
        </div>
        <h1>Logo</h1>
      </div>

      <ul className="hidden text-center items-center md:flex gap-5">{link}</ul>
      <button className="btn btn-primary">Sign Up</button>
    </nav>
  );
};

export default Navbar;
