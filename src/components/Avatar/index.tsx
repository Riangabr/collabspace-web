import { ImgHTMLAttributes } from "react";

import { Container } from "./styles";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  borderEffect?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ borderEffect = false, ...rest }) => {
  return <Container {...rest} borderEffect={borderEffect} />;
};

export default Avatar;
