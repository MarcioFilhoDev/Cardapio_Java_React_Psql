import { NavLink } from "react-router-dom";
import { PackagePlus, Scroll, ShoppingBag } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 ${
              isActive ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"
            }`
          }
        >
          <Scroll size={20} />
          Cardápio
        </NavLink>

        <NavLink
          to="/novo"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 ${
              isActive ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"
            }`
          }
        >
          <PackagePlus size={20} />
          Novo produto
        </NavLink>

        <NavLink
          to="/produtos"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 ${
              isActive ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"
            }`
          }
        >
          <ShoppingBag size={20} />
          Produtos
        </NavLink>
      </nav>
    </aside>
  );
}
