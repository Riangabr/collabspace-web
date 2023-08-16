import { ButtonHTMLAttributes, ReactNode } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
