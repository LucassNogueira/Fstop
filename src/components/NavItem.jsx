import React from "react";

const NavItem = ({ content, href }) => {
  return (
    <li className="md:ml-8 md:my-0 my-7 text-lg font-semibold list-none">
      <a href={href}>{content}</a>
    </li>
  );
};

export default NavItem;
