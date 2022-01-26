import api from "../../services/api";
import { ProductType } from "@/dto/types";

export const productList = {
  state: {
    productList: Array<ProductType>(),
  },
  mutations: {
    SET_PRODUCTLIST(state: any, data: Array<ProductType>) {
      state.productList = data;
    },
  },
  actions: {
    async getProductListAction(ctx: any) {
      const newproductList = await api.getProducts();

      ctx.commit("SET_PRODUCTLIST", newproductList.data);
    },
  },
  getters: {
    productById: (state: any) => (productId: number) => {
      return state.productList.find(
        (product: ProductType) => product.id === productId
      );
    },
  },
};
