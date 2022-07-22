import React from "react";
import { Link, useLocation } from "react-router-dom";

export const CustomLink = ({ children, path, ...props }) => {
  const location = useLocation();
  const active = location.pathname.includes(path);

  return (
    <li className={active ? "nav__item active" : "nav__item"}>
      <Link to={path} {...props}>
        {children}
      </Link>
    </li>
  );
};
