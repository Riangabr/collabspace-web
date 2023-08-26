import { ImgHTMLAttributes } from "react";

import { Container } from "./styles";

interface AvatarCircleProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: string;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({
  size = "48px",
  ...rest
}) => {
  return <Container {...rest} $size={size} />;
};

export default AvatarCircle;
