import { ImgHTMLAttributes } from "react";

import { Container } from "./styles";

interface AvatarCircleProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: string;
  avatar: string | null | undefined;
}

const AvatarCircle: React.FC<AvatarCircleProps> = ({
  size = "48px",
  avatar,
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
