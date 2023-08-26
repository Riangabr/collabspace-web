import { useNavigate } from "react-router-dom";

import { LogoRocket } from "../../assets/sources";

import { Container } from "./styles";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("feed/");
  };

  return (
    <Container>
      <LogoRocket onClick={handleLogo} />
    </Container>
  );
};

export default Header;
