import { ReactNode } from "react";
import { X } from "phosphor-react";

import { Container, Content } from "./styles";

interface ModalProps {
  onClose(): void;
  width?: string;
  height?: string;
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  width = "32rem",
  height,
  children,
}) => {
  const id = "modal";

  function handleOutsideClick(e: any) {
    if (e.target.id === id) onClose();
  }

  return (
    isOpen && (
      <Container id={id} onClick={handleOutsideClick}>
        <Content $width={width} $height={height}>
          <X size={20} weight="bold" onClick={onClose} />
          {children}
        </Content>
      </Container>
    )
  );
};

export default Modal;
