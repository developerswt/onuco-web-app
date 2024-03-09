<template>
  <div class="container">
     <h5>Add & Update Course Type </h5>
     <div class="container" style="margin-top: 72px;">
          <div>
              <label for="productDropdown">Course Type :</label>
              <el-select v-model="selectedTypes" @change="emitSelectedType" placeholder="Please Select">
                  <el-option
                      v-for="product in products"
                      :key="product.id"
                      :value="product.id"
                      :label="product.name"
                    ></el-option>
                </el-select>
            </div>
        <div  class="table-responsive" style="background-color: white;">
         <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
           <thead>
             <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Description</th>
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
 
         <el-dialog class="fdata" v-model="formVisible" title="Add New Course Type" :width="'470px'" :style="{ 'height': '460px' }">
            <el-form :model="newBranch" ref="form" label-position="top" class="frm">
              <el-form-item label="Course Type Name" prop="name">
                <el-input v-model="newBranch.name" @input="validateFirstLetterCapital"></el-input>
              </el-form-item>

              <el-form-item label="Description" prop="description">
                <el-input type="textarea" v-model="newBranch.description" ></el-input>
              </el-form-item>
  
              <el-form-item label="Is Active" prop="isActive">
                <el-input v-model="newBranch.isActive" readonly ></el-input>
              </el-form-item>
  
              <el-form-item>
                <el-button type="primary" class="btn2" @click="addBranch">Add Course Type</el-button>
              </el-form-item>
            </el-form>
        </el-dialog>
       </div>
      <Confirmation ref="Confirmation" />
   </div>
 </template>
 
 <script>
 import AxiosInstance from '../config/axiosInstance';
 import Confirmation from './Confirmation.vue';
 import { ElSelect, ElOption, ElButton, ElDialog, ElForm, ElFormItem, ElInput } from 'element-plus';

 
 export default {
   name: "AddTypes",
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
   emits: ['selected-type-changed'],
 
   data() {
     return {
       products: [],
       selectedTypes: '',
       formVisible: false,
       selectedProduct: { id:'', name: '', description: '',isActive: '' },
       editMode: false,
       editedProduct: {
         id: null,
         name: '',
         description: '',
         isActive: 1 ,
       },
       newBranch: {
         name: '',
         description: '',
         isActive: 1 
       },
     };
   },
   computed: {
     isTableVisible() {
       return !!this.selectedTypes; 
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

    validateFirstLetterCapital() {
      if (/^[a-z]/.test(this.newBranch.name)) {
        this.newBranch.name = this.newBranch.name.charAt(0).toUpperCase() + this.newBranch.name.slice(1);
      }
    },

     emitSelectedType() {
       this.$emit('selected-type-changed', this.selectedTypes);
       this.loadData();
       this.loadProductDetails();
     },
     async loadData() {
       try {
         const res = await AxiosInstance.get(`/Types`);
         this.products = res.data;
         this.loadProductDetails();
         console.log(this.products);
 
       } catch (error) {
      //    console.log("hi");
      //    console.error(error);
      //  }
      this.isLoading = false;
        console.log(error.response.data.Message);
    
        this.$refs.Confirmation.open(error.response.data.Message);
        this.$refs.Confirmation.showOKButton = true;
          this.$refs.Confirmation.showCancelButton = false;
  
    }
     },
     enableEditMode() {
       this.editMode = true;
       this.editedProduct.id = this.selectedProduct.id;
       this.editedProduct.name = this.selectedProduct.name;
       this.editedProduct.description = this.selectedProduct.description;
       this.editedProduct.isActive = this.selectedProduct.isActive
     },
     async updateProduct(id) {
       try {
        // const confirmed = await this.$refs.Confirmation.open("Are You Sure Update this?");
        //  if (!confirmed) {
        //    return; 
        //  }
         const res = await AxiosInstance.put(`/Types` + '?' + 'id=' + id + '&name=' + this.editedProduct.name + '&desc=' + this.editedProduct.description + '&isActive=' + this.editedProduct.isActive );
         
         if (res.status === 200) {
           await this.loadData();
           this.editMode = false; 
           this.ismodel = true;
           this.loadProductDetails();
           this.$refs.Confirmation.open("Updated successfully.");
           this.$refs.Confirmation.showOKButton = true;
            this.$refs.Confirmation.showCancelButton = false;
         }
       } catch (error) {
        //  console.error(error);
        //  this.$refs.Confirmation.open("Error Updating.");
        this.isLoading = false;
        console.log(error.response.data.Message);
    
        this.$refs.Confirmation.open(error.response.data.Message);
        this.$refs.Confirmation.showOKButton = true;
          this.$refs.Confirmation.showCancelButton = false;
 
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
         const response = await AxiosInstance.post(`/Types`, this.newBranch);
         this.ismodel = true; 
         if (response.status === 200) {
           await this.loadData();
           this.loadProductDetails();
 
         this.$refs.Confirmation.open("Added successfully.");
         this.$refs.Confirmation.showOKButton = true;
         this.$refs.Confirmation.showCancelButton = false; 
         this.newBranch.name ='';
         this.newBranch.description = '';
     }
         } catch (error) {
          this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
        this.$refs.Confirmation.showOKButton = true;
        this.$refs.Confirmation.showCancelButton = false;
        this.newBranch.name ='';
        this.newBranch.description = '';
 
       }
       finally {
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
         const res = await AxiosInstance.put(`/Types/SoftUpdateTypes` + '?' + 'id=' + id + '&isActive=' + this.editedProduct.isActive );
        //  const res = await AxiosInstance.put(`/Types` + '?' + 'id=' + id + '&name=' + this.editedProduct.name + '&desc=' + this.editedProduct.description + '&isActive=' + this.editedProduct.isActive );

           await this.loadData();
           this.loadProductDetails();
 
           this.selectedTypes = '';
           this.selectedProduct = { id: '', name: '', description: '',isActive:''};
 
           // Show success dialog
           this.$refs.Confirmation.open("deleted successfully.");
           this.$refs.Confirmation.showOKButton = true;
            this.$refs.Confirmation.showCancelButton = false;
       } catch (error) {
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
        this.$refs.Confirmation.showOKButton = true;
        this.$refs.Confirmation.showCancelButton = false;
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
        top: 64px;
        left: 0px;
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
       top: 110px;
     left: -15px;
 
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
 .form-container {
  max-width: 400px;
  margin: auto;
}

/* Custom form styling */
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