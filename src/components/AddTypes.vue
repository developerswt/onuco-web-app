<template>
 <div class="container">
    <h5>Types Update & Create</h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">Select Types :</label>
        <select v-model="selectedTypes" @change="emitSelectedType">
          <option value="" disabled selected hidden>Choose a Name</option>
          <option v-for="product in products" :key="product.id" :value="product.id">
            {{ product.name }}
          </option>
        </select>
      </div>
      <div  class="table-responsive">
        <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ selectedProduct.id }}</td>
              <td v-if="!editMode">{{ selectedProduct.name }}</td>
              <td v-if="editMode">
                <input v-model="editedProduct.name" type="text" required>
              </td>
              <td v-if="!editMode">{{ selectedProduct.description }}</td>
              <td v-if="editMode">
                <input v-model="editedProduct.description" type="text" required>
              </td>
              <td>
                <button v-if="!editMode" @click="enableEditMode()">Edit</button>
                <button v-if="editMode" @click="updateProduct(editedProduct.id)">Update</button>
              </td>
            </tr>
          </tbody>
        </table>

        <button class="btn1" @click="toggleForm">{{ formVisible ? 'Close' : 'Add New' }}</button>

          <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': formVisible }">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Add New Type</h5>
                  <button type="button" class="close" @click="toggleForm">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form @submit.prevent="addBranch">
                    <label for="branchName">Name:</label>
                    <input id="branchName" v-model="newBranch.name" type="text" required><br>
    
                    <label for="description">Description:</label>
                    <input id="description" v-model="newBranch.description" type="text" required><br>
    
                    <button class="btn2" type="submit">Add Type</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
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
      selectedTypes: '',
      formVisible: false,
      selectedProduct: { id:'', name: '', description: '' },
      editMode: false,
      editedProduct: {
        id: null,
        name: '',
        description: '',
      },
      newBranch: {
        name: '',
        description: '',
      },
    };
  },
  computed: {
    isTableVisible() {
      return !!this.selectedTypes; 
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    emitSelectedType() {
      this.$emit('selected-type-changed', this.selectedTypes);
      this.loadData();
      this.loadProductDetails();
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
    enableEditMode() {
      this.editMode = true;
      this.editedProduct.id = this.selectedProduct.id;
      this.editedProduct.name = this.selectedProduct.name;
      this.editedProduct.description = this.selectedProduct.description;
    },
    async updateProduct(id) {
      try {
        const res = await AxiosInstance.put(`/Types` + '?' + 'id=' + id + '&name=' + this.editedProduct.name + '&desc=' + this.editedProduct.description);
        console.log(res);

        if (res.status === 200) {
          await this.loadData();
          this.editMode = false; 
          this.ismodel = true;
          this.loadProductDetails();
        }
      } catch (error) {
        console.error(error);
      }
    },
    toggleForm() {
      this.formVisible = !this.formVisible;
    },
    async loadProductDetails() {
      const selectedProduct = this.products.find(product => product.id === this.selectedTypes);
      if (selectedProduct) {
        this.selectedProduct = { ...selectedProduct };
      }
    },


      async addBranch() {
        this.isLoading = true;
      try {
        const response = await AxiosInstance.post('/Types', this.newBranch);
        this.ismodel = true; 
        if (response.status === 200) {
          console.log("Branch added successfully");
          await this.loadData();
          this.loadProductDetails();

        alert("Insert Successful");
        this.formVisible = false;
    } else {
      alert("Insert Fail");
    }
        } catch (error) {
        this.isLoading = false;
        console.error("Error adding branch:", error);
      }
      finally {
             this.isLoading = false;
             }
    },
    // async getdata() {
    //     this.isLoading = true;
    //     try {
    //       const res = await AxiosInstance.get(`/Types`);
    //       this.products = res.data;
    //     } catch (error) {
    //       console.log(error);
    //     } finally {
    //       this.isLoading = false;
    //     }
    //   },
    },
  
    beforeRouteLeave(to, from, next) {
  console.log('Before leaving the route. Refreshing the table...');
  this.loadData(); // Add this line to refresh the table
  next();
},

};
</script>

<style scoped>
.frm{
        padding: 20px;
    border: 1px solid black;
    width: 90%;
    background-color: #fff;
     }
    

    .frm {
      max-width: 400px;
      margin: 0 auto;
      margin-bottom: 80px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 1px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }

    button {
        color: #fff;
    background-color: #007bff;
    border-color: #007bff;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
     }
     .btn2 {
        color: #fff;
    background-color: #007bff;
    border-color: #007bff;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
     }
    .btn1{
        color: #fff;
    background-color: #007bff;
    border-color: #007bff;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
      margin-top: 20px;
    }


    button:hover {
        background-color: #007bff;
    }
    .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-dialog {
    position: relative;
    margin: 10% auto;
  }

  .modal-content {
    position: relative;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .modal-header {
    padding: 15px;
    border-bottom: 1px solid #ccc;
    background-color: #f8f9fa;
  }

  .modal-body {
    padding: 15px;
  }
</style>
