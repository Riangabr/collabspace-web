import { ImgHTMLAttributes } from "react";

import { Container } from "./styles";

interface AvatarSquareProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: string;
  borderEffect?: boolean;
}

const AvatarSquare: React.FC<AvatarSquareProps> = ({
  size = "56px",
  borderEffect = false,
  ...rest
}) => {
  return <Container {...rest} $size={size} $borderEffect={borderEffect} />;
};

export default AvatarSquare;
