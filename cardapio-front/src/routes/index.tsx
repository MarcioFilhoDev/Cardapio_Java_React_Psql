import { Routes, Route } from "react-router-dom";
import Cardapio from "../pages/Cardapio";
import NovoProduto from "../pages/NovoProduto";
import ListaProdutos from "../pages/ListaProdutos";
import DashboardLayout from "../Layouts/DashboardLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Cardapio />} />
        <Route path="/novo" element={<NovoProduto />} />
        <Route path="/produtos" element={<ListaProdutos />} />
      </Route>
    </Routes>
  );
}
