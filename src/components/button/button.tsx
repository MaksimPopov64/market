import React, { MouseEventHandler } from "react";

import "./button.scss";

const block = "button";
type Props = {
  text: string;
  handleClick: MouseEventHandler;
  className?: string;
};

const Button = ({ text, handleClick, className = "" }: Props) => (
  <button type="button" className={`${block} ${className}`} onClick={handleClick}>
    {text}
  </button>
);

export default Button;
