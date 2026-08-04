import axios, { type AxiosPromise } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { FoodData } from "../Types";

const API_URL = "http://localhost:8080";

const getProducts = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(API_URL + "/products");

  return response;
};

const deletaProduto = async (id: number): AxiosPromise<FoodData> => {
  const response = axios.delete(API_URL + "/deleteproduct/{id}", {
    params: {
      id: id,
    },
  });

  return response;
};

//  Utilizando React Query
export function useProducts() {
  const productsQuery = useQuery({
    queryFn: getProducts,
    queryKey: ["food-data"],
    retry: 2,
  });

  const deleteProduct = useMutation({
    mutationFn: deletaProduto,
    mutationKey: ["deleta-produto"],
    retry: 2,
  });

  return {
    ...productsQuery,
    deleteProducts: deleteProduct.mutate,
    data: productsQuery.data?.data,
  };
}
