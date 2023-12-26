<template>
  <div class="container">
    <h5>Types Update & Create</h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">Select Types:</label>
        <select v-model="selectedTypes" @change="emitSelectedType">
          <option v-for="product in products" :key="product.id" :value="product.id">
            {{ product.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';

export default {
  name: "AddTypes",
  data() {
    return {
      products: [],
      selectedTypes: null,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    
    emitSelectedType() {
      this.$emit('selected-type-changed', this.selectedTypes);
    },
    async loadData() {
      try {
        const res = await AxiosInstance.get(`/Types`);
        this.products = res.data;
        console.log(this.products);
      } catch (error) {
        console.log("hi");
        console.log(error);
      } 
    },
  },

};
</script>

<style scoped>
/* Styles go here */
</style>
