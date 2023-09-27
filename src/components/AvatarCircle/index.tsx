import { ImgHTMLAttributes } from "react";

import { Container } from "./styles";

interface AvatarCircleProps extends ImgHTMLAttributes<HTMLImageElement> {
  avatar: string | null | undefined;
  size?: string;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({
  avatar,
  size = "48px",
  ...rest
}) => {
  return (
    <Container
      {...rest}
      src={avatar || "https://i.imgur.com/HYrZqHy.jpg"}
      $size={size}
    />
  );
};

export default AvatarCircle;
