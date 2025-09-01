import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-gray-400 btn w-full md:btn px-2 rounded-xs">
        <a href={route.url}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
