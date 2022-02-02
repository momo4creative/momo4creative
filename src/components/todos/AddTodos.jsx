import React, { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import Modal from "../main/Modal";

export default function AddTodos() {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show && (
        <button
          className="fixed bottom-4 right-4"
          type="button"
          onClick={() => setShow(true)}
        >
          <div className="text-4xl">
            <HiPlusCircle />
          </div>
        </button>
      )}

      <Modal open={show} close={() => setShow(false)}>
        <form className="space-y-4">
          <input className="w-full p-2 border" type="text" />
          <button className="w-full p-2 border" type="submit">
            Save
          </button>
        </form>
      </Modal>
    </>
  );
}
