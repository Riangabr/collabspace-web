import { ImgHTMLAttributes } from "react";

import { Container } from "./styles";

interface AvatarSquareProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: string;
  borderEffect?: boolean;
  avatar: string | null | undefined;
}

const AvatarSquare: React.FC<AvatarSquareProps> = ({
  size = "56px",
  borderEffect = false,
  avatar,
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
