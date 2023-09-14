import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuthentication } from "../../contexts/Authentication";

import { Spiner } from "../../assets/sources";

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
  const { signIn, loading, loggedEmail } = useAuthentication();

  const [email, setEmail] = useState(loggedEmail);
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { result, message } = await signIn({ email, password });

    if (result === "success") toast.success(message);
    if (result === "error") toast.error(message);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Entrar</h1>

        <Group>
          <Label htmlFor="email">Endereço de e-mail</Label>
          <Input
            id="email"
            name="email"
            type="text"
            value={email}
            placeholder="Digite seu e-mail"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Group>

        <Group>
          <Label htmlFor="password">Sua senha secreta</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            placeholder="Digite sua senha"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Group>

        <Button>{loading ? <Spiner /> : "Fazer login"}</Button>

        <LinkRegister>
          <p>Novo no Collabspace?</p>
          <a onClick={handleRegister}>Cadastre-se agora</a>
        </LinkRegister>
      </Form>
    </Container>
  );
};

export default Login;
