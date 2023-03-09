import { createContext, useState } from "react";

import Modal from "../../components/Modal";
import { useToggle } from "../hooks/useToggle";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const toggle = useToggle();

  const [modalOptions, setModalOptions] = useState({
    content: null,
  });

  return (
    <>
      <ModalContext.Provider value={{ modalOptions, setModalOptions, toggle }}>
        {children}
        <Modal />
      </ModalContext.Provider>
    </>
  );
};
