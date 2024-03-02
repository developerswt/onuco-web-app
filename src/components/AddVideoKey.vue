<template>
    <div class="container mt-3">
        <h5 >Add & Update Video Security Key </h5>
        <div class="container" style="margin-top: 72px;">
            <div>
    <label for="productDropdown">Course Id :</label>
    <el-input class="size" v-model="courseId"></el-input>
  </div>
            <div class="table-responsive" style="background-color: white;">
                <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Course Id</th>
                            <th>Security Key</th>
                            <th>IsActive</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-if="!editMode">{{ selectedProduct.courseId }}</td>
                            <td v-if="editMode">
                                <input v-model="editedProduct.CourseId" type="text" required>
                            </td>
                            <td v-if="!editMode">{{ selectedProduct.securityKey}}</td>
                            <td v-if="editMode">
                                <input v-model="editedProduct.SecurityKey" class="size" type="text" required/>
                            </td>
                            <td v-if="!editMode">{{ selectedProduct.isActive }}</td>
                            <td v-if="editMode">
                                <input v-model="editedProduct.isActive" class="size" type="text" required/>
                            </td>
                            <td>
                                <div class="button-row">
                                    <button class="bn" v-if="!editMode" @click="enableEditMode()">Edit</button>
                                    <button v-if="editMode" @click="updateProduct(editedProduct.id)">Update</button>
                                    <button @click="deleteProduct(selectedProduct.courseId)">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <el-button class="btn1" @click="toggleForm">{{ formVisible ? 'Add New' : 'Add New' }}</el-button>
            <el-dialog v-model="formVisible" title="Add New Security Key" :width="'470px'" :style="{ 'height': '370px' }">
                <el-form :model="newBranch" ref="form" label-position="top" class="frm">
                    <el-form-item label="Course id" prop="CourseId">
                        <el-input v-model="newBranch.CourseId" type="text" required></el-input>
                    </el-form-item>
                    <el-form-item label="SecurityKey" prop="SecurityKey">
                        <el-input type="text" v-model="newBranch.SecurityKey" class="size" required></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn2" type="submit" @click="addBranch">Add Security Key</el-button>
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
    
    data() {
      return {
        courseId: null, 
        formVisible: false,
        selectedProduct: { courseId: '', securityKey: '', isActive:'' },
        editMode: false,
        editedProduct: {
            CourseId: '',
            SecurityKey: '',
            isActive:'',
      },
        newBranch: {
            CourseId: '',
            SecurityKey: '',
      },
      };
    },
    computed: {
        isTableVisible() {
            return !!this.selectedProduct.courseId; 
        },
    },
    watch: {
        courseId(newCourseId) {
            this.fetchData(newCourseId);
        }
    },

    created() {
        this.fetchData();
    },
  methods: {
    toggleForm() {
        this.formVisible = !this.formVisible;
      },
  
      async fetchData(courseId) {
            // If courseId is provided, use it, otherwise use this.courseId
            const id = courseId || this.courseId;
            
            if (!id) return; // Return if courseId is not available

            this.isLoading = true;
            try {
                const res = await AxiosInstance.get(`/VideoSecurity/GetByObjectbyCourseId/` + id);
                this.selectedProduct = res.data;
            } catch(error) {
                this.isLoading = false;
                console.log(error.response.data.Message);
                this.$refs.Confirmation.open(error.response.data.Message);
            } finally {
                this.isLoading = false;
            }
        },
    
  enableEditMode() {
    this.editMode = true;
    this.editedProduct.CourseId = this.selectedProduct.courseId;
    this.editedProduct.SecurityKey = this.selectedProduct.securityKey;
    this.editedProduct.isActive = this.selectedProduct.isActive;
    
  },
  
  async updateProduct(id) {
    try {
      const res = await AxiosInstance.put(`/VideoSecurity` + '?' +'&CourseId='+ this.editedProduct.CourseId + '&SecurityKey=' + this.editedProduct.SecurityKey + '&isActive=' + this.editedProduct.isActive );
        await this.fetchData();
        this.editMode = false; 
        this.ismodel = true; 
        // this.loadProductDetails();
        this.$refs.Confirmation.open("Course Updated successfully.");
      
      }catch(error){
      this.isLoading = false;
      console.log(error.response.data.Message);
      this.$refs.Confirmation.open(error.response.data.Message);
      }
    this.editMode = false;
  },
  
    async addBranch() {
    this.isLoading = true;
    try {
      const response = await AxiosInstance.post(`/VideoSecurity?`+ '&CourseId='+ this.newBranch.CourseId + '&SecurityKey=' + this.newBranch.SecurityKey );
      await this.fetchData();
        this.$refs.Confirmation.open("Course Added successfully.");
  
        this.newBranch = {
            CourseId: '',
            SecurityKey: '',
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
  
  
  async deleteProduct(CourseId) {
      try {
        const confirmed = await this.$refs.Confirmation.open(
          "Are you sure?"
        );
        if (!confirmed) {
          return; 
        }
  
        this.editedProduct.isActive = '0';
           const res = await AxiosInstance.put(`/VideoSecurity/SoftUpdateCourses` + '?' + 'CourseId=' + CourseId + '&isActive=' + this.editedProduct.isActive );
            await this.fetchData();
            this.editMode = false; 

        //   this.selectedProduct = { courseId: '', securityKey: '', isActive:''};
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
        font-weight: 600;
        font-size: 15px;
        }
  @media (max-width: 520px) {
  .btn1{
        color: #fff;
    background-color: #007bff;
    border-color: #007bff;
      padding: 18px 15px;
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