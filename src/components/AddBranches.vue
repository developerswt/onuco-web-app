<template>
    <div class="container">
      <h5>Add & Update Branch</h5>
      <div class="container" style="margin-top: 72px;">
        <div>
          <label for="productDropdown">Branch Name :</label>
          <el-select v-model="selectedbranch" @change="emitSelectedType" placeholder="Please Select" style="padding: 4px;">
            <el-option v-for="product in products" :key="product.id" :value="product.id" :label="product.name"></el-option>
          </el-select>
        </div>
        <div  class="table-responsive" style="background-color: white;">
          <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Branch Name</th>
                <th>Description</th>
                <th>Branch Rout Name</th>
                <th>Course Id</th>
                <th>IsActive</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{{ selectedProduct.id }}</td>
                  <td v-if="!editMode">{{ selectedProduct.name }}</td>
                  <td v-if="editMode">
                    <input v-model="selectedProduct.name" type="text" required>
                  </td>
                  <td v-if="!editMode">{{ selectedProduct.description }}</td>
                  <td v-if="editMode">
                    <textarea v-model="editedProduct.description" class="size" type="text" required></textarea>
                  </td>
                  <td>{{selectedProduct.branchName }}</td>
                  <td>{{ selectedProduct.id }}</td>
                  <td v-if="!editMode">{{ selectedProduct.isActive }}</td>
               <td v-if="editMode">
                 <input v-model="editedProduct.isActive" type="text" required>
               </td>
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
            <el-button class="btn1" @click="toggleForm">{{ formVisible ? 'Add New' : 'Add New' }}</el-button>
            <el-dialog v-model="formVisible" title="Add New Course" :width="'470px'" :style="{ 'height': '670px' }">
              <el-form :model="newBranch" ref="form" label-position="top" class="frm">
                <el-form-item>{{ newBranch.id }}</el-form-item>
  
        <el-form-item label="Branch Name" prop="name">
          <el-input v-model="newBranch.name"  @input="validateFirstLetterCapital" type="text" required></el-input>
        </el-form-item>
  
        <el-form-item label="Description" prop="description">
          <el-input v-model="newBranch.description" type="textarea" required></el-input>
        </el-form-item>
  
        <el-form-item label="Course ID" prop="academiaId">
          <el-input v-model="this.selectedacademic" readonly></el-input>
        </el-form-item>
  
        <el-form-item label="Branch Rout Name" prop="branchName">
          <el-input v-model="newBranch.branchName" required pattern="[a-z0-9]+(-[a-z0-9]+)*" title="Please enter a valid Kebab Case."></el-input>
          <span v-if="!isKebabCase(newBranch.branchName)" style="color: red;">Please enter a valid Kebab Case.</span>
        </el-form-item>
  
        <el-form-item label="IsActive" prop="isActive">
          <el-input v-model="newBranch.isActive" readonly></el-input>
        </el-form-item>
  
        <el-form-item>
          <el-button type="primary" class="btn2" @click="addBranch">Add Branch</el-button>
        </el-form-item>
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
  name: "AddBranch",
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
  // props: ['selectedacademic'],
  props:{selectedacademic : {
    type: Number,
    required: true,
  }
  },
  emits: ['selected-branches-changed'],
  
  data() {
    return {
      formVisible: false,
      products: [],
      selectedbranch:'',
      selectedProduct: { id: '', name: '', description: '',academiaId:'', isActive:'' },
      isLoading: false,
      editMode: false,
      editedProduct: {
      id: null,
      name: '',
      description: '',
      academiaId: null,
      branchName:'',
      isActive:'',
    },
      newBranch: {
      name: '',
      description: '',
      academiaId: this.selectedacademic,
      branchName: '',
      isActive: 1,
     },
    };
  },
  computed: {
  isTableVisible() {
    return !!this.selectedbranch; // Show table if a type is selected
  },
  },
  watch: {
  selectedacademic: {
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
      // Check if the input follows the Kebab Case pattern
      const kebabCaseRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;
      return kebabCaseRegex.test(input);
    },
  
    emitSelectedType() {
      this.$emit('selected-branches-changed', this.selectedbranch);
      this.loadData(); 
      this.loadProductDetails();
  
    },
    toggleForm() {
        this.formVisible = !this.formVisible;
      },
  
    async loadData() {
      this.isLoading = true;
    try {
      const res = await AxiosInstance.get(`/Branches/Branches/` + this.selectedacademic);
      this.products = res.data;
      this.loadProductDetails();
  
    } 
     catch(error){
          this.isLoading = false;
          console.log(error.response.data.Message);
          this.$refs.Confirmation.open(error.response.data.Message);
          this.$refs.Confirmation.showOKButton = true;
          this.$refs.Confirmation.showCancelButton = false;
        } 
         finally {
      this.isLoading = false;
    }
  },
  
  async loadProductDetails() {
  const selectedProduct = this.products.find(product => product.id === this.selectedbranch);
  
  if (selectedProduct) {
  this.selectedProduct = { ...selectedProduct }; 
  }
  },
  
    enableEditMode() {
    this.editMode = true;
    this.editedProduct.id = this.selectedProduct.id;
    this.editedProduct.name = this.selectedProduct.name;
    this.editedProduct.description = this.selectedProduct.description;
    this.editedProduct.academiaId = this.selectedProduct.academiaId;
    this.editedProduct.branchName = this.selectedProduct.branchName;
    this.editedProduct.isActive = this.selectedProduct.isActive;
  },
  
  async updateProduct(id) {
    try {
      const res = await AxiosInstance.put(`/Branches` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description + '&isActive=' + this.editedProduct.isActive );
  
        await this.loadData();
        this.editMode = false; 
        this.ismodel = true; 
        this.loadProductDetails();
        this.$refs.Confirmation.open("Branch Updated successfully.");
        this.$refs.Confirmation.showOKButton = true;
        this.$refs.Confirmation.showCancelButton = false;
      }   
      catch(error){
          this.isLoading = false;
          console.log(error.response.data.Message);
          this.$refs.Confirmation.open(error.response.data.Message);
          this.$refs.Confirmation.showOKButton = true;
          this.$refs.Confirmation.showCancelButton = false;
      }
    },
  
    async addBranch() {
  this.isLoading = true;
  try {
  
    const response = await AxiosInstance.post(`/Branches`, this.newBranch);
    this.ismodel = true;
  
      await this.loadData();
      this.loadProductDetails();
      this.$refs.Confirmation.open("Branch Added successfully.");
      this.$refs.Confirmation.showOKButton = true;
      this.$refs.Confirmation.showCancelButton = false;
      this.newBranch = {
        name: '',
        description: '',
        academiaId: this.selectedacademic,
        branchName: '',
        isActive: 1,
     };
     this.$refs.form.reset(); 
    }   
    catch(error){
          this.isLoading = false;
          console.log(error.response.data.Message);
          this.$refs.Confirmation.open(error.response.data.Message);
          this.$refs.Confirmation.showOKButton = true;
          this.$refs.Confirmation.showCancelButton = false;
          this.newBranch = {
        name: '',
        description: '',
        academiaId: this.selectedacademic,
        branchName: '',
        isActive: 1,
     };
  
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
          return; 
        }
        this.editedProduct.isActive = '0';
           const res = await AxiosInstance.put(`/Branches/SoftUpdateBranches` + '?' + 'id=' + id + '&isActive=' + this.editedProduct.isActive );
          await this.loadData();
          this.loadProductDetails();
  
          this.selectedbranch = '';
          this.selectedProduct = { id: '', name: '', description: '',academiaId:'' ,isActive:''};
  
          this.$refs.Confirmation.open("Branch deleted successfully.");
          this.$refs.Confirmation.showOKButton = true;
          this.$refs.Confirmation.showCancelButton = false;
      }  
      catch(error){
          this.isLoading = false;
          console.log(error.response.data.Message);
          this.$refs.Confirmation.open(error.response.data.Message);
          this.$refs.Confirmation.showOKButton = true;
          this.$refs.Confirmation.showCancelButton = false;
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
      padding: 18px 17px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
      position: relative;
      top: 63px;
    left: -20px;
  
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
  