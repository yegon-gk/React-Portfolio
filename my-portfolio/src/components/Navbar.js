import React from "react";

const Navbar = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.section}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
