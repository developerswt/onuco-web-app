<template>
  <div class="container">
    <h5>Add & Update Semester </h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">Semester Name :</label>
        <el-select v-model="selectedSem" @change="emitSelectedType" style="padding: 4px;">
    <el-option :value="null" label="Please Select" disabled></el-option>
    <el-option v-for="product in products" :key="product.id" :value="product.id" :label="product.name"></el-option>
  </el-select>
      </div>
      <div  class="table-responsive" style="background-color: white;">
        <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Semester Name</th>
              <th>Description</th>
              <th>Semester Rout Name</th>
              <th>University Id</th>
              <th>IsActive</th>
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
                <td>{{ selectedProduct.semesterName }}</td>

                <td>{{ selectedProduct.universityId }}</td>

                <td >{{ selectedProduct.isActive }}</td>

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
      </div>
          <el-button class="btn1" @click="toggleForm">{{ formVisible ? 'Close' : 'Add New' }}</el-button>

<el-dialog v-model="formVisible" title="Add New Course" :width="'470px'" :style="{ 'height': '670px' }">
    <el-form :model="newBranch" ref="form" label-position="top" class="frm">
        <el-form-item>{{ newBranch.id }}</el-form-item>
        <el-form-item label="Semester Name:" prop="name">
          <el-input v-model="newBranch.name" @input="validateFirstLetterCapital"  required></el-input>
        </el-form-item>

        <el-form-item label="Description:" prop="description">
          <el-input v-model="newBranch.description" type="textarea" class="size" required></el-input>
        </el-form-item>

        <el-form-item label="University Id:" prop="universityId">
          <el-input v-model="this.selecteduniversity" readonly required></el-input>
        </el-form-item>

        <el-form-item label="Semester Rout Name:" prop="semesterName">
          <el-input v-model="newBranch.semesterName" required pattern="[a-z0-9]+(-[a-z0-9]+)*" title="Please enter a valid Kebab Case."></el-input>
          <span v-if="!isKebabCase(newBranch.semesterName)" style="color: red;">Please enter a valid Kebab Case.</span>
        </el-form-item>

        <el-form-item label="IsActive:" prop="isActive">
          <el-input v-model="newBranch.isActive" readonly required></el-input>
        </el-form-item>

        <el-button class="btn2" type="primary" native-type="submit">Add Semester</el-button>
      </el-form>
    </el-dialog>
          
  </div>
  <Confirmation ref="Confirmation" />
</div>
</template>

<script>
import Confirmation from './Confirmation.vue';
import AxiosInstance from '../config/axiosInstance';
import { ElSelect, ElOption, ElButton, ElDialog, ElForm, ElFormItem, ElInput } from 'element-plus';

export default {
name: "AddSem",
components: {
  Confirmation,
  ElSelect,
    ElOption,
    ElButton,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
},
// props: ['selecteduniversity'],
props:{selecteduniversity : {
  type: Number,
  required: true,
}
},
emits: ['selected-semester-changed'],
data() {
  return {
    formVisible: false,
    products: [],
    selectedSem: '',
    selectedProduct: { id:'', name: '', description: '',universityId:'',isActive:'' },
    isLoading: false,
    editMode: false,
    editedProduct: {
    id: null,
    name: '',
    description: '',
    universityId: null,
    isActive: '',
  },
    newBranch: {
    name: '',
    description: '',
    universityId: this.selecteduniversity,
    semesterName: '',
    isActive: 1,
   },
  };
},
computed: {
isTableVisible() {
  return !!this.selectedSem; // Show table if a type is selected
},
},
// watch: {
//   selecteduniversity: {
//     immediate: true,
//     handler(newVal, oldVal) {
//       this.loadData();
//     },
//   },
// },
watch: {
selecteduniversity: {
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

  validateFirstLetterCapital() {
      if (/^[a-z]/.test(this.newBranch.name)) {
        this.newBranch.name = this.newBranch.name.charAt(0).toUpperCase() + this.newBranch.name.slice(1);
      }
    },

  isKebabCase(input) {
    const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    return kebabCaseRegex.test(input);
  },

    emitSelectedType() {
        this.$emit('selected-semester-changed', this.selectedSem);
        this.loadData(); 
        this.loadProductDetails();
    },
  toggleForm() {
      this.formVisible = !this.formVisible;
    },

  async loadData() {
    this.isLoading = true;
  try {
    const res = await AxiosInstance.get(`/Semester/GetSemesterByUniversityId/` + this.selecteduniversity);
    this.products = res.data;
    this.loadProductDetails();

  } catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
    } 
    finally {
    this.isLoading = false;
  }
},

async loadProductDetails() {

    const selectedProduct = this.products.find(product => product.id === this.selectedSem);
     if (selectedProduct) {
    this.selectedProduct = { ...selectedProduct };
    //this.newBranch.universityId = this.selectedProduct.id; 

  }
},

  enableEditMode() {
  this.editMode = true;
  this.editedProduct.id = this.selectedProduct.id;
  this.editedProduct.name = this.selectedProduct.name;
  this.editedProduct.description = this.selectedProduct.description;
  this.editedProduct.universityId = this.selectedProduct.universityId;
  this.editedProduct.isActive = this.selectedProduct.isActive

},

async updateProduct(id) {
  try {
    const res = await AxiosInstance.put(`/Semester` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description + '&isActive=' + this.editedProduct.isActive );
    console.log(res);

      await this.loadData();
      this.editMode = false; 
      this.ismodel = true;
      this.loadProductDetails();
      this.$refs.Confirmation.open("Semester Updated successfully.");

    }  catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
    } 
  },

async addBranch() {
  this.isLoading = true;
  try {
    const response = await AxiosInstance.post(`/Semester`, this.newBranch);
    this.ismodel = true; 
    console.log("Branch added successfully");
    await this.loadData();
    this.loadProductDetails();
      this.$refs.Confirmation.open("Semester Added successfully.");

    this.newBranch = {
    name: '',
    description: '',
    universityId: this.selecteduniversity,
    semesterName: '',
    isActive: 1,
   };
   this.$refs.form.reset(); 
      
  }  catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
    } 
  finally {
         this.isLoading = false;
         this.formVisible = false;

  }
},
async deleteProduct(id) {
    try {
      const confirmed = await this.$refs.Confirmation.open(
        "Are you sure ?"
      );
      if (!confirmed) {
        return; 
      }
      this.editedProduct.isActive = '0';
      const res = await AxiosInstance.put(`/Semester/SoftUpdateSemester`  + '?' + 'id=' + id + '&isActive=' + this.editedProduct.isActive );
      console.log(res);

        console.log("Semester deleted successfully");
        await this.loadData();
        this.loadProductDetails();

        this.selectedSem = '';
      this.selectedProduct = { id:'', name: '', description: '',universityId:'',isActive: '' };

        // Show success dialog
        this.$refs.Confirmation.open("Semester deleted successfully.");
   
    }  catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
    } 
    finally {
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
       margin-left: 20px;
       margin-top: -20px;
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
    padding: 22px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
   }
   .btn1{
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      padding: 22px 18px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
      position: relative;
      top: 65px;
      left: 94px;
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
 .custom-form {
  padding: 20px;
}

/* Custom button styling */
.custom-btn {
  text-align: center;
  margin-top: 20px;
}
.table {
    width: 100%;
    margin-bottom:0px !important;
    color: #212529;
}
</style>