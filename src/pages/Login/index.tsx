import { useNavigate } from "react-router-dom";

import {
  Container,
  Form,
  Group,
  Label,
  Input,
  Button,
  LinkRegister,
} from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <Container>
      <Form>
        <h1>Entrar</h1>

        <Group>
          <Label htmlFor="">Endereço de e-mail</Label>
          <Input type="text" placeholder="Digite seu e-mail" required />
        </Group>

        <Group>
          <Label htmlFor="">Sua senha secreta</Label>
          <Input type="password" placeholder="Digite sua senha" required />
        </Group>

        <Button>Fazer login</Button>

        <LinkRegister>
          <p>Novo no Collabspace?</p>
          <a onClick={handleRegister}>Cadastre-se agora</a>
        </LinkRegister>
      </Form>
    </Container>
  );
};

export default Login;
