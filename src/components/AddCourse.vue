<template>
  <div class="container">
    <h5>Add/Update Subject</h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">Subject Name :</label>
        <el-select v-model="selectedCourse" @change="loadProductDetails" style="padding: 4px;">
  <el-option :label="''" :value="null" disabled selected hidden>Please Select</el-option>
  <el-option v-for="product in products" :key="product.id" :label="product.name" :value="product.id">
    {{ product.name }}
  </el-option>
</el-select>

      </div>
      <div class="table-responsive" style="background-color: white;">
        <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="181%" cellspacing="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Subject Name</th>
              <th>Description</th>
              <th>Actual Price</th>
              <th>Discount Price</th>
              <th>Subject Rout Name</th>
              <th>Semester Id</th>
              <th>Work Flow</th>
              <th>Number Of Months</th>
              <th>IsActive</th>
              <th>ImageFile</th>
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
                  <textarea  v-model="editedProduct.description" type="text" required></textarea>
                </td>
                <td v-if="!editMode">{{ selectedProduct.actualPrice }}</td>
                <td v-if="editMode">
                  <input v-model="editedProduct.actualPrice" type="text" required >
                </td>
                <td v-if="!editMode">{{ selectedProduct.discountPrice }}</td>
                <td v-if="editMode">
                  <input v-model="editedProduct.discountPrice" type="text" required  @input="validateDiscountPrice">
                  <span v-if="discountPriceError" style="color: red;">Discount price cannot be greater than actual price.</span>
                </td>
                <td>{{ selectedProduct.courseName }}</td>
                <td>{{ selectedProduct.semesterId }}</td>
                <td>
                  <span v-if="!editMode">{{ selectedProduct.workFlowStatement }}</span>
                  <select v-if="editMode" v-model="editedProduct.workFlowStatement" required>
                      <option value="Draft">Draft</option>
                      <option value="Review">Review</option>
                      <option value="Release">Release</option>
                  </select>
                </td>
                <td v-if="!editMode">{{ selectedProduct.numberOfMonths }}</td>
                <td v-if="editMode">
                  <input v-model="editedProduct.Numberofmonths" type="text" required  @input="validatemonths" >
                  <span v-if="monthsError" style="color: red;">Number of months must be between 1 and 12</span>
                </td>
                <td>{{ selectedProduct.isActive }}</td>

            <!-- <td v-if="!editMode">{{ selectedProduct.isActive }}</td>
             <td v-if="editMode">
               <input v-model="editedProduct.isActive" type="text" required>
             </td> -->
              <td v-if="!editMode">{{ selectedProduct.imageUrl }}</td>
              <td v-if="editMode">
                <input type="file" accept="image/*" @change="handleFileChange" required>
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

<el-dialog v-model="formVisible" title="Add New Course" :width="'470px'" :style="{ 'height': '1045px' }">
    <el-form :model="newBranch" ref="form" label-position="top" class="frm">
        <el-form-item>{{ newBranch.id }}</el-form-item>
        <el-form-item label="Subject Name:" prop="name">
          <el-input v-model="newBranch.name" @input="validateFirstLetterCapital"  required></el-input>
        </el-form-item>

        <el-form-item label="Description:" prop="desc">
          <el-input v-model="newBranch.desc" type="textarea" required></el-input>
        </el-form-item>

        <el-form-item label="Actual Price:" prop="ActualPrice">
          <el-input v-model="newBranch.ActualPrice" required></el-input>
        </el-form-item>

        <el-form-item label="Discount Price:" prop="DiscountedPrice">
          <el-input v-model="newBranch.DiscountedPrice" required  @input="validateDiscount"></el-input>
          <span v-if="discountError" style="color: red;">Discount price cannot be greater than actual price.</span>
        </el-form-item>

        <el-form-item label="Semester Id:" prop="SemesterId">
          <el-input v-model="this.selectedsemester" readonly required></el-input>
        </el-form-item>

        <el-form-item label="Subject Rout Name:" prop="CourseName">
          <el-input v-model="newBranch.CourseName" required pattern="[a-z0-9]+(-[a-z0-9]+)*"></el-input>
          <span v-if="!isKebabCase(newBranch.CourseName)" style="color: red;">Please enter a valid Kebab Case.</span>
        </el-form-item>

        <el-form-item label="Work Flow:" prop="WorkFlowStatement">
          <el-select v-model="newBranch.WorkFlowStatement" required>
            <el-option label="Draft" value="Draft"></el-option>
            <el-option label="Review" value="Review"></el-option>
            <el-option label="Release" value="Release"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Number Of Months:" prop="Numberofmonths">
        <el-input v-model="newBranch.Numberofmonths" @input="validateNumberofmonths"></el-input>
        <span v-if="numberofmonthsError" style="color: red;">Number of months must be between 1 and 12</span>
      </el-form-item>

        <el-form-item label="IsActive:" prop="IsActive">
          <el-input v-model="newBranch.IsActive" readonly required></el-input>
        </el-form-item>

        <!-- <el-form-item label="Image File:" prop="ImageUrl">
          <el-input type="file" @change="imageFileChange"  required></el-input>
        </el-form-item> -->
        <div>
          <label for="ImageUrl">Image File:</label>
          <input id="input_file" type="file" class="input_file" @change="imageFileChange">
        </div>
        <el-button class="btn2" type="primary" @click="addBranch">Add Subject</el-button>
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
  name: "ActstdBycourse",
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
  // props: ['selectedsemester'],
  props:{selectedsemester : {
  type: Number,
  required: true,
}
},
  data() {
    return {
      monthsError: '',
      numberofmonthsError: '',
      discountPriceError: false,
      discountError:false,
      selectedFile: null,
      formVisible: false,
      products: [],
      selectedCourse: '',
      selectedProduct: { id:'', name: '', description: '',actualPrice:'',discountPrice:'', semesterId:'', courseName:'',workFlowStatement:'',isActive: '',imageUrl: '',numberOfMonths:'' },
      isLoading: false,
      editMode: false,
      editedProduct: {
      id: null,
      name: '',
      description: '',
      actualPrice:'',
      discountPrice:'',
      semesterId:null, 
      courseName:'',
      workFlowStatement:'',
      isActive: '',
      imageUrl:'',
      Numberofmonths:'',
    },
      newBranch: {
      name: '',
      desc: '',
      ActualPrice:'',
      DiscountedPrice:'',
      SemesterId: this.selectedsemester, 
      CourseName:'',
      WorkFlowStatement:'',
      IsActive: 1,
      Numberofmonths:'',
     },
    };
  },
  computed: {
  isTableVisible() {
    return !!this.selectedCourse; // Show table if a type is selected
  },
},
watch: {
  selectedsemester: {
    immediate: true,
    handler() {
      this.loadData();
      this.clearTableData();
    },
  },
},
  created() {
    this.loadData();
    this.clearTableData();
  },
  methods: {
    validatemonths() {
      const numberOfMonths = parseInt(this.editedProduct.Numberofmonths);
      this.monthsError = numberOfMonths < 1 || numberOfMonths > 12 ;
    },
    validateNumberofmonths() {
      const numberOfMonths = parseInt(this.newBranch.Numberofmonths);
      this.numberofmonthsError = numberOfMonths < 1 || numberOfMonths > 12 ;
    },

    validateDiscountPrice() {
const discountPrice = parseFloat(this.editedProduct.discountPrice);
const actualPrice = parseFloat(this.editedProduct.actualPrice);

this.discountPriceError = discountPrice < 0 || discountPrice > actualPrice;
},

validateDiscount() {
const discountedPrice = parseFloat(this.newBranch.DiscountedPrice);
const actualPrice = parseFloat(this.newBranch.ActualPrice);

this.discountError = discountedPrice < 0 || actualPrice < 0 || discountedPrice > actualPrice;
},

    clearTableData() {
    this.selectedCourse = '';
    this.selectedProduct =  { id:'', name: '', description: '',actualPrice:'',discountPrice:'', semesterId:'', courseName:'',workFlowStatement:'',isActive: '',imageUrl: '',numberOfMonths:'' };
    this.editMode = false;
  },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.editedProduct.imageUrl = file;
    },
    imageFileChange(event) {
      if (event && event.target && event.target.files.length > 0) {
        this.selectedFile = event.target.files[0];
      }
    },

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

    toggleForm() {
        this.formVisible = !this.formVisible;
      },

  async loadData() {
    this.isLoading = true;
  try {
    const res = await AxiosInstance.get(`/Course/GetCourseBySemesterId/` + this.selectedsemester);
    this.products = res.data;
    this.loadProductDetails();

  }  catch(error){
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
  const selectedProduct = this.products.find(product => product.id === this.selectedCourse);
  if (selectedProduct) {
    this.selectedProduct = { ...selectedProduct };
    // this.selectedProduct.imageUrl = this.editedProduct.imageUrl;
  }
},


  enableEditMode() {
  this.editMode = true;
  this.editedProduct.id = this.selectedProduct.id;
  this.editedProduct.name = this.selectedProduct.name;
  this.editedProduct.description = this.selectedProduct.description;
  this.editedProduct.actualPrice = this.selectedProduct.actualPrice;
  this.editedProduct.discountPrice = this.selectedProduct.discountPrice;
  this.editedProduct.semesterId = this.selectedProduct.semesterId;
  this.editedProduct.courseName = this.selectedProduct.courseName;
  this.editedProduct.workFlowStatement = this.selectedProduct.workFlowStatement;
  this.editedProduct.isActive = this.selectedProduct.isActive;
  this.editedProduct.imageUrl = this.selectedProduct.imageUrl;
  this.editedProduct.Numberofmonths = this.selectedProduct.numberOfMonths;
},
async updateProduct(id) {
  try {
    if (
      parseFloat(this.editedProduct.actualPrice) >= parseFloat( this.editedProduct.discountPrice )
    ) {
      // Validate Numberofmonths
      const numberOfMonths = parseInt(this.editedProduct.Numberofmonths);
      if (isNaN(numberOfMonths) || numberOfMonths < 1 || numberOfMonths > 12) {
        // Show error message
        this.$refs.Confirmation.open(
          "Number of months must be between 1 and 12."
        );
        return;
      }
    const confirmed = await this.$refs.Confirmation.open("Are You Sure Update this?");
  if (!confirmed) {
     this.editMode = false; // Set editMode to false if the user cancels
     return;
  }
    let formData = new FormData();
    formData.append('ImageUrl', this.editedProduct.imageUrl);

    const res = await AxiosInstance.put(`/Course` + '?' +'id='+ id + '&Name='+ this.editedProduct.name + '&Description=' + this.editedProduct.description + '&ActualPrice=' + this.editedProduct.actualPrice + '&DiscountPrice=' + this.editedProduct.discountPrice  + '&WorkFlowStatement=' + this.editedProduct.workFlowStatement  + '&isActive=' + this.editedProduct.isActive + '&Numberofmonths=' + this.editedProduct.Numberofmonths ,
    formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

      await this.loadData();
      this.editMode = false; 
      this.ismodel = true; 
      this.loadProductDetails();
      this.$refs.Confirmation.open("Subject Updated successfully.");
      this.$refs.Confirmation.showOKButton = true;
      this.$refs.Confirmation.showCancelButton = false; 

    } 
  }catch (error) {
    this.isLoading = false;
    console.log(error.response.data.Message);
    this.$refs.Confirmation.open(error.response.data.Message);
    this.$refs.Confirmation.showOKButton = true;
    this.$refs.Confirmation.showCancelButton = false;

 } finally {
    this.editMode = false; 
 }
},


async addBranch() {
  this.isLoading = true;
  try {
    if (!this.isKebabCase(this.newBranch.CourseName)) {
        // Show error message
        this.$refs.Confirmation.open(
          "Course Route Name must be in kebab case."
        );
        return;
      }
    if (parseFloat(this.newBranch.ActualPrice) >= parseFloat(this.newBranch.DiscountedPrice)) {
     
      const numberOfMonths = parseInt(this.newBranch.Numberofmonths);
      if (isNaN(numberOfMonths) || numberOfMonths < 1 || numberOfMonths > 12) {
        // Show error message
        this.$refs.Confirmation.open(
          "Number of months must be between 1 and 12."
        );
        return;
      }

    let formData = new FormData();
    formData.append('ImageUrl', this.selectedFile);

    const response = await AxiosInstance.post(`/Course` + '?' + 'name=' + encodeURIComponent(this.newBranch.name) + '&desc=' + encodeURIComponent(this.newBranch.desc) + '&ActualPrice=' + this.newBranch.ActualPrice + '&DiscountedPrice=' + this.newBranch.DiscountedPrice + '&SemesterId=' + this.newBranch.SemesterId + '&CourseName=' + encodeURIComponent(this.newBranch.CourseName) + '&WorkFlowStatement=' + encodeURIComponent(this.newBranch.WorkFlowStatement) + '&IsActive=' + this.newBranch.IsActive + '&Numberofmonths=' + this.newBranch.Numberofmonths ,
    formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    this.ismodel = true; 

    await this.loadData();
    this.loadProductDetails();
    this.$refs.Confirmation.open("Subject Added successfully.");
    this.$refs.Confirmation.showOKButton = true;
    this.$refs.Confirmation.showCancelButton = false; 
    this.clearFormFields(); 
    
}  }catch(error){
        this.isLoading = false;
        this.$refs.Confirmation.open(error.response.data.Message);
        this.$refs.Confirmation.showOKButton = true;
        this.$refs.Confirmation.showCancelButton = false;
        this.clearFormFields(); 
      } 
  finally {
         this.isLoading = false;
         this.formVisible = false;
  }
},
clearFormFields() {
this.newBranch = {
  name: '',
  desc: '',
  ActualPrice: '',
  DiscountedPrice: '',
  SemesterId: this.selectedsemester,
  CourseName: '',
  WorkFlowStatement: '',
  IsActive: 1,
  ImageUrl: '',
  Numberofmonths: '',
};
this.$refs.form.reset();
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
         const res = await AxiosInstance.put(`/Course/SoftUpdateCourses` + '?' + 'id=' + id + '&isActive=' + this.editedProduct.isActive );

      if (res.status === 200) {
        await this.loadData();
        this.loadProductDetails();

        this.selectedCourse = '';
      this.selectedProduct = { id:'', name: '', description: '',actualPrice:'',discountPrice:'', semesterId:'', courseName:'',workFlowStatement:'',isActive: '',numberOfMonths:''};

        // Show success dialog
        this.$refs.Confirmation.open("Subject deleted successfully.");
        this.$refs.Confirmation.showOKButton = true;
      this.$refs.Confirmation.showCancelButton = false; 
      }
    } catch (error) {
      console.error("Error deleting Subject:", error);
      this.$refs.Confirmation.open("Error deleting Subject.");
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
  padding: 0px;
  margin-bottom: 4px;
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
    padding: 22px 13px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
   }
  /* .btn1{
      color: #fff;
  background-color: #007bff;
  border-color: #007bff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 80px; 
    margin-top: 20px;
  } */
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
bottom: 25px;
/* margin: 10% auto; */
}

.modal-content {
position: relative;
background-color: #fff;
border: 1px solid #ccc;
border-radius: 5px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
padding: 10px;
border-bottom: 1px solid #ccc;
background-color: #f8f9fa;
}

.modal-body {
padding: 15px;
}
.modal-header .close {
padding: 12px 14px;
margin: -9px -10px -10px auto;
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