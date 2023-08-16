import { TextareaHTMLAttributes } from "react";

import { Container } from "./styles";

type InputAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const InputArea: React.FC<InputAreaProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default InputArea;
