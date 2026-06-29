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

  const openModal = useCallback((content = null) => {
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
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}

export function Modal() {
  const { isOpen, closeModal, content } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return createPortal(
    <div
      className={`fixed inset-0 h-screen w-screen blurring flex items-center justify-center ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
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
