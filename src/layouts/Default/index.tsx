import { ReactNode } from "react";

import Header from "../../components/Header";

import { Container, Content } from "./styles";

interface LayoutDefaultProps {
  children: ReactNode;
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ children }) => {
  return (
    <Container>
      <Header />

      <Content>{children}</Content>
    </Container>
  );
};

export default LayoutDefault;
