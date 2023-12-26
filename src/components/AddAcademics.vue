<template>
    <div class="container">
      <h5>Academia Update & Create</h5>
      <div class="container" style="margin-top: 72px;">
        <div>
          <label for="productDropdown">Select Academics:</label>
          <select v-model="selectedAcademics" @change="emitSelectedType">
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
    props: ['selectedtype'],
    data() {
      return {
        products: [],
        selectedAcademics: null,
      };
    },
    created() {
      this.loadData();
    },
    methods: {
      emitSelectedType() {
        this.$emit('selected-academic-changed', this.selectedAcademics);
      },
      async loadData() {
        this.isLoading = true;
        try {
          const res = await AxiosInstance.get(`Academia/GetAcademiaByTypeId/` + this.selectedtype);
          this.products = res.data;
          console.log(this.products);
        } catch (error) {
          console.log(error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles go here */
  </style>
  