import { Routes, Route } from "react-router-dom";
import Todos from "./pages/todos/Todos";
import NotFound from "./pages/main/404NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="todos" element={<Todos />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
