<template>
  <div class="order-info">
    <div class="image">
      <el-image
        v-if="selectedProduct.photoUrl"
        :src="selectedProduct.photoUrl"
        alt="Product-view"
      >
      </el-image>
    </div>

    <div class="order-detales">
      <div>
        <p class="product-data">
          <el-select v-model="selectedProductId" placeholder="Name">
            <el-option
              v-for="product in productList"
              :key="product.id"
              :label="product.name"
              :value="product.id"
            ></el-option>
          </el-select>
        </p>
        <p class="product-data">Цена: {{ selectedProduct.price }}</p>
        <p class="product-data">
          Количество:
          <el-input-number v-model="productCount" type="number" :min="1" />
        </p>
        <p class="product-data">Сумма: {{ ammount }}</p>
        <p class="product-data">
          Статус:
          <span v-if="statustList.length > 0 && creating">
            {{ statustList[0].name }}</span
          >
          <el-select
            v-if="!creating"
            v-model="selectedStatusId"
            placeholder="Name"
          >
            <el-option
              v-for="status in statustList"
              :key="status.id"
              :label="status.name"
              :value="status.id"
            ></el-option>
          </el-select>
        </p>
      </div>
      <div class="button-block">
        <el-button
          type="primary"
          @click="modifyOrder()"
          :disabled="selectedProductId ? false : true"
          >сохранить</el-button
        >
        <el-button type="primary" @click="changeEmit()">отмена</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { OrderType, ProductType, StatusType } from "@/dto/types";
import { PropType } from "@vue/runtime-core";

export default {
  name: "create-order",

  data(this: any): any {
    return {
      selectedProductId: this.actualOrder.productId as number,
      productCount: (this.actualOrder.count || 1) as number,
      selectedStatusId: this.actualOrder.statusId as number,
    };
  },

  props: {
    actualOrder: {
      required: true,
      type: Object as PropType<OrderType>,
    },
    creating: Boolean,
  },

  computed: {
    productList(this: any): Array<ProductType> {
      return this.$store.state.productList.productList;
    },
    statustList(this: any): Array<StatusType> {
      return this.$store.state.statusList.statusList;
    },
    selectedProduct(this: any): ProductType | string {
      const selectedProduct = this.productList.find(
        (product: ProductType) => product.id === this.selectedProductId
      );
      if (selectedProduct) return selectedProduct;
      return "";
    },
    ammount(this: any): number | string {
      if (this.selectedProduct)
        return this.productCount * this.selectedProduct.price;
      return "";
    },

    isDisabled: function (this: any) {
      return this.selectedProductId ? true : false;
    },
  },

  methods: {
    modifyOrder(this: any): void {
      if (this.creating) {
        const newOrder = {
          productId: this.selectedProductId,
          count: this.productCount,
        };
        this.$store.dispatch("addOrderAction", newOrder);
        this.changeEmit();
      } else {
        const modifiedOrder = {
          id: this.actualOrder.id,
          productId: this.selectedProductId,
          count: this.productCount,
          statusId: this.selectedStatusId,
        };
        this.$store.dispatch("modifyOrderAction", modifiedOrder);
        this.changeEmit();
      }
    },
    changeEmit(this: any): void {
      this.$emit("edit");
    },
  },
};
</script>

<style scoped>
.order-info {
  display: flex;
  height: 100%;
}

.image {
  padding: 5px;
  width: 150px;
}

.product-data {
  text-align: left;
  margin: 8px;
}
.order-detales {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.button-block {
  display: flex;
  justify-content: start;
  padding: 8px;
}
</style>
