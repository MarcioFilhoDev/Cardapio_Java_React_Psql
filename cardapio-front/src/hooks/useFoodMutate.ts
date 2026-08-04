import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";
import type { FoodData } from "../Types";

const API_URL = "http://localhost:8080";

const novoProduto = async (data: FoodData): AxiosPromise<FoodData> => {
  const response = axios.post(API_URL + "/newproduct", data);
  return response;
};

const deletaProduto = async (id: number) => {
  await axios
    .delete(API_URL + `/deleteproduct/${id}`)
    .then(() => {
      console.log("produto deletado");
    })
    .catch((error) => {
      console.error(error);
      alert("deu zebra");
    });
};

export function useFoodMutate() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: novoProduto,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food-data"],
      });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: deletaProduto,
    retry: 2,
    onSuccess: () => {
      queryClient.fetchQuery({
        queryKey: ["food-data"],
      });
    },
    onError: ({ message }) => {
      console.log(message);
      alert("algo deu errado");
    },
  });

  return { mutate: mutate.mutate, deleteProduct: deleteProduct.mutate };
}
