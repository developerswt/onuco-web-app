<template>
  <div class="container">
    <h5>Add & Update Universities </h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">University Name :</label>
        <select v-model="selectedUni" @change="emitSelectedType">
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
              <th>University Name</th>
              <th>Description</th>
              <th>University Rout Name</th>
              <th>Branches Id</th>
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
                  <textarea v-model="editedProduct.description" class="size" type="text" required></textarea>
                </td>
                <td>{{ selectedProduct.universityName }}</td>
                <td>{{ selectedProduct.branchesId }}</td>
                <td>
              <div class="button-row">
                <button v-if="!editMode" @click="enableEditMode()">Edit</button>
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
      <h5 class="modal-title">Add New University</h5>
      <button type="button" class="close" @click="toggleForm">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form ref="form" @submit.prevent="addBranch"> 
                  <p><b></b> {{newBranch.id}}</p>
                  <label for="branchName">University Name:</label>
                  <input id="branchName" v-model="newBranch.name" type="text" required><br>

                  <label for="description">Description:</label>
                  <textarea id="description" v-model="newBranch.description" class="size" type="text" required></textarea><br>

                <label for="branchesId">Branches Id:</label>
                <input id="branchesId" v-model="this.selectedbranch" type="text" readonly required><br>

                <!-- <label for="universityName"><b>University Name:</b></label>
                <input id="universityName" v-model="newBranch.universityName" type="text" required> -->
                <label for="universityName"><b>University Rout Name:</b></label>
  <input
    id="universityName"
    v-model="newBranch.universityName"
    type="text"
    required
    pattern="[a-z0-9]+(-[a-z0-9]+)*"
    title="Please enter a valid Kebab Case."
  >
  <span v-if="!isKebabCase(newBranch.universityName)" style="color: red; position:relative; bottom:12px;">Please enter a valid Kebab Case.</span><br>


            <button class="btn2" type="submit">Add University</button>
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
import Confirmation from './Confirmation.vue';
import AxiosInstance from '../config/axiosInstance';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default {
name: "AddUni",
components: {
  Confirmation,
},
props:{selectedbranch : {
  type: Number,
  required: true,
}
},
emits: ['selected-university-changed'],
data() {
  return {
    formVisible: false,
    products: [],
    selectedUni: '',
    selectedProduct: { id:'', name: '', description: '', branchesId:'' },
    isLoading: false,
    editMode: false,
    editedProduct: {
    id: null,
    name: '',
    description: '',
    branchesId: null,
  },
    newBranch: {
    name: '',
    description: '',
    branchesId: this.selectedbranch,
    universityName: '',
   },
  };
},
computed: {
isTableVisible() {
  return !!this.selectedUni; // Show table if a type is selected
},
},
watch: {
selectedbranch: {
  immediate: true,
  handler() {
    this.loadData();
    this.loadProductDetails();

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
    this.$emit('selected-university-changed', this.selectedUni);
    this.loadData(); 
    this.loadProductDetails();
  },
  toggleForm() {
      this.formVisible = !this.formVisible;
    },

  async loadData() {
    this.isLoading = true;
  try {
    const res = await AxiosInstance.get(`/University/GetUniversitiesBySemesterId/` + this.selectedbranch);
    this.products = res.data;
    // console.log(this.selectedbranch);
    // this.loadProductDetails();

  } catch (error) {
    console.log(error);
  } finally {
    this.isLoading = false;
  }
},

async loadProductDetails() {
  const selectedProduct = this.products.find(product => product.id === this.selectedUni);
  if (selectedProduct) {
    this.selectedProduct = { ...selectedProduct };
  // this.newBranch.branchesId = this.selectedProduct.id; 

  }
  
},

  enableEditMode() {
  this.editMode = true;
  this.editedProduct.id = this.selectedProduct.id;
  this.editedProduct.name = this.selectedProduct.name;
  this.editedProduct.description = this.selectedProduct.description;
  this.editedProduct.branchesId = this.selectedProduct.branchesId;

},

async updateProduct(id) {
  try {
    const res = await AxiosInstance.put(`/University` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description );
    console.log(res);

    if (res.status === 200) {
      await this.loadData();
      this.editMode = false; 
      this.ismodel = true; 
      this.loadProductDetails();
      this.$refs.Confirmation.open("University Updated successfully.");

    }
    } catch (error) {
      console.error(error);
      this.$refs.Confirmation.open("Error Updating University.");

    }
  },

async addBranch() {
  this.isLoading = true;
  try {
    const response = await AxiosInstance.post(`/University`, this.newBranch);
    this.ismodel = true; 
  if (response.status === 200) {
    console.log("Branch added successfully");
    await this.loadData();
    this.loadProductDetails();

      this.$refs.Confirmation.open("University Added successfully.");

    this.newBranch = {
    name: '',
    description: '',
    branchesId: this.selectedbranch,
    universityName: '',
   };
   this.$refs.form.reset(); 
  } 
      
  } catch (error) {
    this.isLoading = false;
    console.error("Error adding University:", error);
    this.$refs.Confirmation.open("Error Adding University.");

  }
  finally {
         this.isLoading = false;
         this.formVisible = false;
  }
},
async deleteProduct(id) {
    try {
      const confirmed = await this.$refs.Confirmation.open(
        "Are you sure you want to delete this University ?"
      );
      if (!confirmed) {
        return; // If the user cancels, do nothing
      }

      const res = await AxiosInstance.delete(`/University?id=${id}`);
      console.log(res);

      if (res.status === 200) {
        console.log("University deleted successfully");
        await this.loadData();
        this.loadProductDetails();

        this.selectedUni = '';
      this.selectedProduct = { id:'', name: '', description: '' , branchesId:''};

        // Show success dialog
        this.$refs.Confirmation.open("University deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting University:", error);

      // Show error dialog
      this.$refs.Confirmation.open("Error deleting University.");
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
      padding: 7px 18px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
      position: relative;
      top: 68px;
      left: 780px;
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
</style>