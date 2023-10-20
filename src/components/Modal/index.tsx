import { X } from "phosphor-react";
import { ReactNode, useEffect } from "react";

import { Container, Content } from "./styles";

interface ModalProps {
  children: ReactNode;
  width?: string;
  height?: string;
  isOpen: boolean;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  width = "480px",
  height,
  children,
}) => {
  const id = "modal";

  function handleOutsideClick(e: any) {
    if (e.target.id === id) onClose();
  }

  useEffect(() => {
    function handleTypedKey(event: KeyboardEvent) {
      if (event.key === "Escape") if (isOpen) onClose();
    }

    document.addEventListener("keydown", handleTypedKey);

    return () => {
      document.removeEventListener("keydown", handleTypedKey);
    };
  }, [onClose, isOpen]);

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
