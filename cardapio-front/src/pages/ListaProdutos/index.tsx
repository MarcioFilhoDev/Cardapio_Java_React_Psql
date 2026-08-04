import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { useProducts } from "../../hooks/useProducts";

export default function ListaProdutos() {
  const { data } = useProducts();

  return (
    <div className="flex flex-1 flex-col">
      <Header title="Gerenciamento de produtos" />

      <div className="flex flex-col gap-10">
        {data?.map((item) => (
          <ProductsList
            key={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
