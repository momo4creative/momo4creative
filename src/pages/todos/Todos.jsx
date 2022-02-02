import {} from "react";
import AddTodos from "../../components/todos/AddTodos";
import ListTodos from "../../components/todos/ListTodos";

export default function Todos() {
  return (
    <>
      <header className="flex justify-between items-center bg-slate-500 text-white">
        <div className="mr-auto p-2">
          <div className="text-2xl font-bold">Todolist</div>
        </div>
        <div>name</div>
      </header>

      <ListTodos />

      <AddTodos />
    </>
  );
}
