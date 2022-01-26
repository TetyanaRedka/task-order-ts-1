import api from "@/services/api";

import { OrderType, NewOrderType } from "@/dto/types";

export const orderList = {
  state: {
    orderList: Array<OrderType>(),
  },

  mutations: {
    SET_ORDERLIST(state: any, data: Array<OrderType>) {
      state.orderList = data;
    },

    ADD_TY_ORDERLIST(state: any, newOrder: OrderType) {
      state.orderList.orderList = state.orderList.push(newOrder);
    },

    FILTER_ORDERLIST(state: any, orderKey: number) {
      state.orderList = state.orderList.filter(
        (order: OrderType) => order.id !== orderKey
      );
    },

    MODIFY_ORDERLIST(state: any, modifiedOrder: OrderType) {
      state.orderList.map((order: OrderType, i: number) =>
        order.id === modifiedOrder.id
          ? (state.orderList[i] = modifiedOrder)
          : order
      );
    },
  },

  actions: {
    async getOrderListAction(ctx: any) {
      const newOrderList = await api.getOrders();

      ctx.commit("SET_ORDERLIST", newOrderList.data);
    },

    async addOrderAction(ctx: any, newOrder: NewOrderType) {
      const answer = await api.addOrder(newOrder);
      ctx.commit("ADD_TY_ORDERLIST", answer.data);
    },

    async deleteOrderAction(ctx: any, orderKey: number) {
      const answer = await api.deleteOrder(orderKey);

      if (answer.status === 200) {
        ctx.commit("FILTER_ORDERLIST", orderKey);
      }
    },

    async modifyOrderAction(ctx: any, modifiedOrder: OrderType) {
      const answer = await api.modifyOrder(modifiedOrder);

      if (answer.status === 200) {
        ctx.commit("MODIFY_ORDERLIST", answer.data);
      }
    },
  },
};
