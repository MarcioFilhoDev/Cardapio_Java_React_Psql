import { PackagePlus } from "lucide-react";

interface CardProps {
  title: string;
  price: number;
  image: string;
}

export default function CardProduct(props: CardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-2xl shadow">
        <img
          src={props.image}
          alt={props.title}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="text-sm font-medium text-neutral-700 truncate">
            {props.title}
          </h2>

          <p className="text-lg font-bold text-neutral-900">
            {props.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            rounded-full
            bg-neutral-900
            px-4 py-2
            text-white
            transition-colors
            hover:bg-neutral-700
          "
        >
          <PackagePlus size={18} />
          <span className="text-sm font-medium">Adicionar</span>
        </button>
      </div>
    </div>
  );
}
