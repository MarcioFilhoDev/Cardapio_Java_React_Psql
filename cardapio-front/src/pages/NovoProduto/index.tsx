import { useState, type SubmitEvent } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useFoodMutate } from "../../hooks/useFoodMutate";

export default function NovoProduto() {
  const navigate = useNavigate();

  const { mutate } = useFoodMutate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function criarNovoProduto(e: SubmitEvent) {
    e.preventDefault();

    if (title !== "" && price !== "" && image !== "") {
      const data = {
        title: title,
        image: image,
        price: Number(price.replace(",", ".")),
      };

      mutate(data);
      navigate("/");
    } else {
      alert("Existem campos vazios. Preencha-os");
      return;
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header title="Registrando novo produto" />

      <form
        onSubmit={(e) => criarNovoProduto(e)}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="nome do produto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="R$"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="link da imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white py-1.5 rounded text-xl"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
