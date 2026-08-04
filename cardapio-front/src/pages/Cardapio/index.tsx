import CardProduct from "../../components/CardProducts";
import { useProducts } from "../../hooks/useProducts";
import Header from "../../components/Header";

export default function Cardapio() {
  const { data } = useProducts();

  return (
    <div className="flex flex-1 h-dvh flex-col items-center">
      <Header title="Cardápio" />

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-10">
        {data?.map((item) => (
          <CardProduct
            key={item.id}
            price={item.price}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
