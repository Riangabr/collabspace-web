import { ImgHTMLAttributes } from "react";

import { Container } from "./styles";

interface AvatarSquareProps extends ImgHTMLAttributes<HTMLImageElement> {
  avatar: string | null | undefined;
  size?: string;
  borderEffect?: boolean;
}

const AvatarSquare: React.FC<AvatarSquareProps> = ({
  avatar,
  size = "56px",
  borderEffect = false,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      src={avatar || "https://i.imgur.com/HYrZqHy.jpg"}
      $size={size}
      $borderEffect={borderEffect}
    />
  );
};

export default AvatarSquare;
