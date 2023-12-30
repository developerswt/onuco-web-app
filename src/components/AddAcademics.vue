<template>
  <div class="container">
    <h5>Course Update & Create</h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">Course Name :</label>
        <select v-model="selectedAcademics" @change="emitSelectedType">
          <option value="" disabled selected hidden>Please Select</option>

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
                <th>Course Name</th>
                <th>Description</th>
                <th>Course Name</th>
                <th>Type Id</th>
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
                  <textarea class="size" v-model="editedProduct.description" type="text" required></textarea>
                </td>
                <td v-if="!editMode">{{ selectedProduct.academiaName }}</td>
                <td v-if="editMode">
                  <input v-model="editedProduct.academiaName" type="text" required>
                </td>
                <td>{{ selectedProduct.typeId }}</td>
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
      <h5 class="modal-title">Add New Course</h5>
      <button type="button" class="close" @click="toggleForm">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form @submit.prevent="addBranch">      
            <p><b></b> {{newBranch.id}}</p>
            <label for="branchName">Course Name:</label>
            <input id="branchName" v-model="newBranch.name" type="text" required><br>
      
            <label for="description">Description:</label>
            <textarea class="size" id="description" v-model="newBranch.description" type="text" required></textarea><br>
  
            <label for="typeId">TypeId:</label>
            <input id="typeId" v-model="this.selectedtype" type="text" required><br>
            
            <label for="academiaName"><b>Course Name:</b></label>
            <input id="academiaName" v-model="newBranch.academiaName" type="text" required> 

            <button class="btn2" type="submit">Add Course</button>
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
  props: ['selectedtype'],
  data() {
    return {
      products: [],
      selectedAcademics: '',
      formVisible: false,
      selectedProduct: { id: null, name: '', description: '' ,typeId: null},
      editMode: false,
      editedProduct: {
      id: null,
      name: '',
      description: '',
      typeId: null,
      academiaName: '',
    },
      newBranch: {
      name: '',
      description: '',
      typeId: this.selectedtype,
      academiaName:'',
    },
    };
  },
  computed: {
  isTableVisible() {
    return !!this.selectedAcademics; // Show table if a type is selected
  },
},
watch: {
  selectedtype: {
    immediate: true,
    handler(newVal, oldVal) {
      this.loadData();
    },
  },
},
  created() {
    this.loadData();

  },
  methods: {
    emitSelectedType() {
      this.$emit('selected-academic-changed', this.selectedAcademics);
      this.loadData(); 
      this.loadProductDetails();
    },
    async loadData() {
this.isLoading = true;
try {
  const res = await AxiosInstance.get(`Academia/GetAcademiaByTypeId/` + this.selectedtype);
  this.products = res.data;
  console.log('Data loaded:', this.products);
} catch (error) {
  console.error('Error loading data:', error);
} finally {
  this.isLoading = false;
}
},

    
    enableEditMode() {
    this.editMode = true;
    this.editedProduct.id = this.selectedProduct.id;
    this.editedProduct.name = this.selectedProduct.name;
    this.editedProduct.description = this.selectedProduct.description;
    this.editedProduct.typeId = this.selectedProduct.typeId
    this.editedProduct.academiaName = this.selectedProduct.academiaName
  },

  async updateProduct(id) {
    try {
      const res = await AxiosInstance.put(`/Academia` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description );

      console.log(res);

      if (res.status === 200) {
        await this.loadData();
        this.editMode = false; 
        this.ismodel = true; 
        this.loadProductDetails();
        // this.gridApi.refreshCells({ force: true });
      }
    } catch (error) {
      console.error(error);
    }
  },

    toggleForm() {
        this.formVisible = !this.formVisible;
      },

      async loadProductDetails(res) {
      
      const selectedProduct = this.products.find(product => product.id === this.selectedAcademics);
      
      if (selectedProduct) {
        this.selectedProduct = { ...selectedProduct };
       // this.newBranch.typeId  = this.selectedProduct.typeId;

      }
    },
    async addBranch() {
    this.isLoading = true;
    try {
      const response = await AxiosInstance.post('/Academia', this.newBranch);
      if (response.status === 200) {
        console.log("Branch added successfully");
        await this.loadData(); // Update dropdown data
        this.loadProductDetails();
        alert("Insert Successful");
        this.formVisible = false;

      } else {
        alert("Insert Fail");
      }
    } catch (error) {
      this.isLoading = false;
      console.error("Error adding branch:", error);
    } finally {
      this.isLoading = false;
    }
  },

      //   async getdata() {
      //       this.isLoading = true;
      //       try {
      //         const res = await AxiosInstance.get(`/Academia`);
      //         this.products = res.data;
      //         this.loadProductDetails();

      //       } catch (error) {
      //         console.log(error);
      //       } finally {
      //         this.isLoading = false;
      //       }
      //     },
        
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
      padding: 6px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
      position: relative;
      top: 67px;
      left: 830px;
      font-weight: 600;
      font-size: 15px;
      }
@media (max-width: 520px) {
.btn1{
      color: #fff;
  background-color: #007bff;
  border-color: #007bff;
    padding: 7px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 80px; 
    position: relative;
    top: 68px;
  left: 73px;

  }
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
.size{
  width: 470px;
}

</style>
