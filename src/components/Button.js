import React from "react";
import { Link } from "react-router-dom";

const Button = ({text, to}) => {
  return <Link className="btn mb-[30px] mx-auto lg:mx-0" to={to}> {text} </Link>;
};

export default Button;
