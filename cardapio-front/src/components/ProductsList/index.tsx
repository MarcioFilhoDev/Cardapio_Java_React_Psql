import { Trash } from "lucide-react";
import type { FoodData } from "../../Types";
import { useFoodMutate } from "../../hooks/useFoodMutate";

export default function ProductsList(data: FoodData) {
  const { deleteProduct } = useFoodMutate();

  async function deleteFood(id: number) {
    await deleteProduct(id);
  }

  return (
    <div className="flex flex-row items-start gap-3">
      <div className="overflow-hidden rounded-2xl shadow">
        <img
          src={data.image}
          alt={data.title}
          width={256}
          height={64}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col w-52">
        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="text-lg font-medium text-neutral-700 truncate">
            {data.title}
          </h2>

          <p className="text-lg font-bold text-neutral-900">
            {data.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <div className="self-end">
          <button
            onClick={() => deleteFood(data?.id ? data.id : 0)}
            className="bg-rose-200 p-2 rounded-2xl"
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
}
