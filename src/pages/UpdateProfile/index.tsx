import ProfileCard from "../../components/ProfileCard";
import LayoutDefault from "../../layouts/Default";
import Button from "../../components/Button";
import InputArea from "../../components/InputArea";
import { useState, useCallback, FormEvent } from "react";
import { toast } from "react-toastify";

import {
  Container,
  Forms,
  Form,
  Groups,
  Group,
  InputGroup,
  Label,
  Input,
  Select,
} from "./styles";
import { UupdateUser } from "../../services/users";
import { useAuthentication } from "../../contexts/Authentication";
import { maskCep, maskTelephone } from "../../utils/mask";

const provinces = [
  { key: "AC", value: "Acre" },
  { key: "AL", value: "Alagoas" },
  { key: "AP", value: "Amapá" },
  { key: "AM", value: "Amazonas" },
  { key: "BA", value: "Bahia" },
  { key: "CE", value: "Ceará" },
  { key: "DF", value: "Distrito Federal" },
  { key: "ES", value: "Espírito Santo" },
  { key: "GO", value: "Goiás" },
  { key: "MA", value: "Maranhão" },
  { key: "MT", value: "Mato Grosso" },
  { key: "MS", value: "Mato Grosso do Sul" },
  { key: "MG", value: "Minas Gerais" },
  { key: "PA", value: "Pará" },
  { key: "PB", value: "Paraíba" },
  { key: "PR", value: "Paraná" },
  { key: "PE", value: "Pernambuco" },
  { key: "PI", value: "Piauí" },
  { key: "RJ", value: "Rio de Janeiro" },
  { key: "RN", value: "Rio Grande do Norte" },
  { key: "RS", value: "Rio Grande do Sul" },
  { key: "RO", value: "Rondônia" },
  { key: "RR", value: "Roraima" },
  { key: "SC", value: "Santa Catarina" },
  { key: "SP", value: "São Paulo" },
  { key: "SE", value: "Sergipe" },
  { key: "TO", value: "Tocantins" },
];

const UpdateProfile: React.FC = () => {
  const { user, handleUser } = useAuthentication();

  const [name, setName] = useState(user?.name || "");
  const [telephone, setTelephone] = useState(
    maskTelephone(user?.telephone || ""),
  );
  const [birthDate, setBirtdate] = useState(user?.birthDate || "");
  const [bio, setBio] = useState(user?.bio || "");

  const [cep, setCep] = useState("");

  const handleUpdateUser = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();

        const { result, message } = await UupdateUser({
          name,
          telephone,
          birthDate,
          bio,
        });
        if (result === "success") {
          handleUser(name, telephone, birthDate, bio);
          toast.success(message);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [name, telephone, birthDate, bio, handleUser],
  );

  return (
    <LayoutDefault>
      <Container>
        <ProfileCard />

        <Forms>
          {/* Form sobre mim */}
          <Form onSubmit={handleUpdateUser}>
            <h1>Sobre mim</h1>

            <Groups>
              <Group>
                <InputGroup>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="birthDate">Data de nascimento</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirtdate(e.target.value)}
                    type="date"
                    required
                  />
                </InputGroup>
              </Group>

              <Group>
                <InputGroup>
                  <Label htmlFor="telephone">Telefone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    maxLength={15}
                    value={telephone}
                    onChange={(e) =>
                      setTelephone(maskTelephone(e.target.value))
                    }
                    placeholder="(00) 00000-0000"
                  />
                </InputGroup>
              </Group>
            </Groups>

            <InputGroup>
              <Label htmlFor="bio">Biografia</Label>
              <InputArea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                placeholder="Fale mais sobre você ..."
              />
            </InputGroup>

            <Button>Salvar</Button>
          </Form>

          {/* Form alterar senha */}
          <Form>
            <h1>Alterar senha</h1>

            <Groups>
              <Group>
                <InputGroup>
                  <Label htmlFor="currentPassword">Senha atual</Label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    placeholder="Digite senha atual"
                    required
                  />
                </InputGroup>
              </Group>

              <Group>
                <InputGroup>
                  <Label htmlFor="newPassword">Nova senha</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    placeholder="Digite a nova senha"
                    required
                  />
                </InputGroup>
              </Group>
            </Groups>

            <Button>Salvar</Button>
          </Form>

          {/* Form endereço */}
          <Form>
            <h1>Endereço</h1>

            <Groups>
              <Group>
                <InputGroup>
                  <Label htmlFor="country">País</Label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="Digite o país que você mora"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="province">Estado</Label>
                  <Select
                    id="province"
                    name="province"
                    placeholder="Seu estado"
                    required
                  >
                    {provinces.map(({ key, value }) => (
                      <option key={key} value={value}>
                        {key}
                      </option>
                    ))}
                  </Select>
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="street">Logradouro</Label>
                  <Input
                    id="street"
                    name="street"
                    placeholder="Nome da rua"
                    required
                  />
                </InputGroup>
              </Group>

              <Group>
                <InputGroup>
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    name="cep"
                    placeholder="00000-000"
                    maxLength={9}
                    value={cep}
                    onChange={(e) => setCep(maskCep(e.target.value))}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Digite qual cidade você mora"
                    required
                  />
                </InputGroup>
              </Group>
            </Groups>

            <Button>Salvar</Button>
          </Form>
        </Forms>
      </Container>
    </LayoutDefault>
  );
};

export default UpdateProfile;
