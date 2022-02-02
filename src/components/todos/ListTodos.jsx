import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";

export default function ListTodos() {
  return (
    <ul>
      <li className="flex items-center px-2 border-b last:border-none">
        <button className="p-2 text-2xl" type="button">
          <MdCheckBoxOutlineBlank />
        </button>
        <div className="px-2 py-4">Lorem ipsum dolor sit amet.</div>
        <button className="ml-auto p-2 text-red-500 text-xl" type="button">
          <HiOutlineTrash />
        </button>
      </li>
    </ul>
  );
}
