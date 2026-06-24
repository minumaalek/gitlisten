"use client";
import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [isSucceed, setIsSucceed] = useState(false);

  const openModal = useCallback((content = null, succeed = false) => {
    if (succeed === true) setIsSucceed(true);

    setContent(content);
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = {
    isOpen,
    content,
    openModal,
    closeModal,
    isSucceed,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function Modal() {
  const { isOpen, closeModal, content, isSucceed } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;
  if (isOpen)
    return createPortal(
      <div
        className="fixed inset-0 h-screen w-screen backdrop-blur-sm flex items-center justify-center"
        onClick={closeModal}
      >
        <div className=" " onClick={(e) => e.stopPropagation()}>
          {content}
        </div>
      </div>,
      document.getElementById("modal-root"),
    );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
}
