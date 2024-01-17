<template>
  <div class="container">
    <h5>Add & Update Course Name </h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">Course Name :</label>
        <select v-model="selectedAcademics" @change="emitSelectedType" style="padding: 4px;">
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
                <th>Course Rout Name</th>
                <th>Type Id</th>
                <th>IsActive</th>
                <th>Actions</th>
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
                  <textarea v-model="editedProduct.description" class="size" type="text" required></textarea>
                </td>
               
                <td >{{selectedProduct.academiaName }}</td>
               
                <td>{{ selectedProduct.typeId }}</td>

                <td>{{ selectedProduct.isActive }}</td>

                <td>
              <div class="button-row">
                <button class="bn" v-if="!editMode" @click="enableEditMode()">Edit</button>
                <button v-if="editMode" @click="updateProduct(editedProduct.id)">Update</button>
                <button @click="deleteProduct(selectedProduct.id)">Delete</button>
              </div>
            </td>
              </tr>
            </tbody>

        </table>
        <div>
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
      <form ref="form" @submit.prevent="addBranch">
            <p><b></b> {{newBranch.id}}</p>
            <label for="branchName">Course Name:</label>
            <input id="branchName" v-model="newBranch.name" type="text" required><br>
      
            <label for="description">Description:</label>
            <textarea id="description" v-model="newBranch.description" class="size" type="text" required></textarea><br>
  
            <label for="typeId">TypeId:</label>
            <input id="typeId" v-model="this.selectedtype" type="text" readonly required><br>
            
            <label for="academiaName"><b>Course Rout Name:</b></label>
            <input id="academiaName" v-model="newBranch.academiaName" type="text" required pattern="[a-z0-9]+(-[a-z0-9]+)*" title="Please enter a valid Kebab Case.">
            <span v-if="!isKebabCase(newBranch.academiaName)" style="color: red;position:relative; bottom:12px;">Please enter a valid Kebab Case.</span><br>

            <label for="isActive">IsActive:</label>
            <input id="isActive" v-model="newBranch.isActive" type="text" readonly required><br>
            
            <button class="btn2" type="submit">Add Course</button>
          </form>
          </div>
          </div>
          </div>
          </div>
        </div>
    </div>
    </div>
    <Confirmation ref="Confirmation" />
  </div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import Confirmation from './Confirmation.vue';

export default {
  name: "AddTypes",
  components: {
  Confirmation,
},
  props:{selectedtype : {
  type: Number,
  required: true,
}
},
emits: ['selected-academic-changed'],

  data() {
    return {
      products: [],
      selectedAcademics: '',
      formVisible: false,
      selectedProduct: { id: null, name: '', description: '', typeId: '', isActive:''},
      editMode: false,
      editedProduct: {
      id: null,
      name: '',
      description: '',
      typeId: null,
      academiaName: '',
      isActive:'',
    },
      newBranch: {
      name: '',
      description: '',
      typeId: this.selectedtype,
      academiaName:'',
      isActive:1,

    },
    };
  },
  computed: {
  isTableVisible() {
    return !!this.selectedAcademics; 
  },
},
watch: {
  selectedtype: {
    immediate: true,
    handler() {
      this.loadData();
    },
  },
},
  created() {
    this.loadData();

},
methods: {
  isKebabCase(input) {
    // Check if the input follows the Kebab Case pattern
    const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    return kebabCaseRegex.test(input);
  },

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
      } 
      catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
      } 
      finally {
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
  this.editedProduct.isActive = this.selectedProduct.isActive
},

async updateProduct(id) {
  try {
    const res = await AxiosInstance.put(`/Academia` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description + '&isActive=' + this.editedProduct.isActive );
      console.log(res);
      await this.loadData();
      this.editMode = false; 
      this.ismodel = true; 
      this.loadProductDetails();
      this.$refs.Confirmation.open("Course Updated successfully.");
    
    }catch(error){
    this.isLoading = false;
    console.log(error.response.data.Message);
    
        this.$refs.Confirmation.open(error.response.data.Message);
    }
  this.editMode = false;
},

  toggleForm() {
      this.formVisible = !this.formVisible;
    },

    async loadProductDetails() {
    const selectedProduct = this.products.find(product => product.id === this.selectedAcademics);
    
    if (selectedProduct) {
      this.selectedProduct = { ...selectedProduct };
    }
  },
  async addBranch() {
  this.isLoading = true;
  try {
    const response = await AxiosInstance.post(`/Academia`, this.newBranch);
      console.log(response);
      await this.loadData();
      this.loadProductDetails();
      this.$refs.Confirmation.open("Course Added successfully.");

      this.newBranch = {
        name: '',
        description: '',
        typeId: this.selectedtype,
        academiaName: '',
        isActive:1,
      };
      this.$refs.form.reset(); 
    
  } catch(error){
    this.isLoading = false;
    console.log(error.response.data.Message);
    
        this.$refs.Confirmation.open(error.response.data.Message);

  } finally {
    this.isLoading = false;
    this.formVisible = false;

  }
},


async deleteProduct(id) {
    try {
      const confirmed = await this.$refs.Confirmation.open(
        "Are you sure?"
      );
      if (!confirmed) {
        return; // If the user cancels, do nothing
      }

      this.editedProduct.isActive = '0';
         const res = await AxiosInstance.put(`/Academia/SoftUpdateAcademia` + '?' + 'id=' + id + '&isActive=' + this.editedProduct.isActive );
        console.log(res);

        console.log("Course deleted successfully");
        await this.loadData();
        this.loadProductDetails();

        this.selectedAcademics = '';
        this.selectedProduct = { id:'', name: '', description: '' ,typeId:'', isActive:''};

        this.$refs.Confirmation.open("Course deleted successfully.");

    } catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
    
        this.$refs.Confirmation.open(error.response.data.Message);
  
    } finally {
      this.isLoading = false;
    }
  },
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
    padding: 10px 22px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
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
      padding: 10px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
      position: relative;
      top: 65px;
      left: 842px;
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
.button-row {
display: flex;
}

.button-row button {
margin-right: 10px; 
}
.bn{
  padding: 10px 31px;
  font-weight: 600;
    font-size: 15px;
 }
</style>