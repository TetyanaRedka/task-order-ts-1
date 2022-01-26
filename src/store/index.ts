import { createStore } from "vuex";

import { orderList } from "./modules/orderList";
import { productList } from "./modules/productsList";
import { statusList } from "./modules/statusList";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { orderList, productList, statusList },
});
