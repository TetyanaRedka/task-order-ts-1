<template>
  <Modal v-if="createOrder" v-on:edit="changeModal" />

  <el-button type="primary" @click="changeModal()">Добавить заказ</el-button>

  <div
    class="order-list"
    v-if="
      orderList.length > 0 && productList.length > 0 && statustList.length > 0
    "
  >
    <OrderCard v-for="item in orderList" :key="item.id" :orderData="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import OrderCard from "./components/OrderCard.vue";
import { OrderType, ProductType, StatusType } from "@/dto/types";
import Modal from "./components/Modal.vue";

export default defineComponent({
  name: "App",

  components: {
    OrderCard,
    Modal,
  },

  data() {
    return {
      createOrder: ref(false),
    };
  },

  mounted: function (this: any) {
    this.$store.dispatch("getProductListAction");
    this.$store.dispatch("getStatusListAction");
    this.$store.dispatch("getOrderListAction");
  },

  computed: {
    orderList(this: any): Array<OrderType> {
      return this.$store.state.orderList.orderList;
    },
    productList(this: any): Array<ProductType> {
      return this.$store.state.productList.productList;
    },
    statustList(this: any): Array<StatusType> {
      return this.$store.state.statusList.statusList;
    },
  },
  methods: {
    changeModal: function (this: any) {
      this.createOrder = !this.createOrder;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: rgb(245, 245, 245);
  padding-top: 60px;
}

body {
  margin: 0;
}

.order-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
