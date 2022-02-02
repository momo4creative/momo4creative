import React from "react";
import Backdrop from "./Backdrop";

export default function Modal({ children, open, close }) {
  function hideModal() {
    close();
  }

  if (!open) return null;

  return (
    <section className="fixed top-0 left-0 w-full h-screen p-10">
      <Backdrop close={hideModal} />
      <div className="relative bg-white max-w-md mx-auto p-4 shadow-md">
        {children}
      </div>
    </section>
  );
}
