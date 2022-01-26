<template>
  <div class="modal" @mousedown="close">
    <div class="modal-container">
      <CreateOrder :actualOrder="{}" :creating="true" v-on:edit="editChange" />
    </div>
  </div>
</template>

<script lang="ts">
import CreateOrder from "./CreateOrder.vue";

export default {
  name: "Modal",
  components: {
    CreateOrder,
  },

  methods: {
    editChange(this: any) {
      this.$emit("edit");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 100;
}
.modal-container {
  background-color: white;
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
}
</style>
