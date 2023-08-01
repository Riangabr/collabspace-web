import { Container, Form, Label, Input, Button } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Entrar</h1>

        <div>
          <Label htmlFor="">Endereço de e-mail</Label>
          <Input type="text" placeholder="Digite seu email" />
        </div>

        <div>
          <Label htmlFor="">Sua senha secreta</Label>
          <Input type="text" placeholder="Digite sua senha" />
        </div>

        <Button>Fazer login</Button>
      </Form>
    </Container>
  );
};

export default Login;
