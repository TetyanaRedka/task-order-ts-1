import axios from "axios";

import { OrderType } from "@/dto/types";

axios.defaults.baseURL = "https://webtest.it.ua/testApp/api";

const getProducts = async () => await axios.get(`products`);

const getOrders = async () => await axios.get(`/orders`);

const getStatus = async () => await axios.get(`/statuses`);

const addOrder = async (newOrder: Omit<OrderType, "id" | "count">) =>
  await axios.post(`/orders/add`, newOrder);

const deleteOrder = async (orderId: number) =>
  await axios.post(`/orders/delete/${orderId}`);

const modifyOrder = async (modifiedOrder: OrderType) =>
  await axios.post(`/orders/update`, modifiedOrder);

const api = {
  getProducts,
  getOrders,
  getStatus,
  addOrder,
  deleteOrder,
  modifyOrder,
};

export default api;
