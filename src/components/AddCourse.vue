<template>
  <div class="container">
    <h5>Add & Update Subject</h5>
    <div class="container" style="margin-top: 72px;">
      <div>
        <label for="productDropdown">Subject Name :</label>
        <select v-model="selectedCourse" @change="loadProductDetails" style="padding: 4px;">
          <option value="" disabled selected hidden>Please Select</option>
          <option v-for="product in products" :key="product.id" :value="product.id">
            {{ product.name }}
          </option>
        </select>
      </div>
      <div class="table-responsive">
        <table v-if="isTableVisible" id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
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
              <th>Faculty Id</th>
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
                  <textarea  v-model="editedProduct.description" type="text" required></textarea>
                </td>
                <td v-if="!editMode">{{ selectedProduct.actualPrice }}</td>
                <td v-if="editMode">
                  <input v-model="editedProduct.actualPrice" type="text" required >
                </td>
                <td v-if="!editMode">{{ selectedProduct.discountPrice }}</td>
                <td v-if="editMode">
                  <input v-model="editedProduct.discountPrice" type="text" required>
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

              <td>{{ selectedProduct.facultyId }}</td>
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
      <h5 class="modal-title">Add New Subject</h5>
      <button type="button" class="close" @click="toggleForm">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form ref="form" @submit.prevent="addBranch"> 
                  <p><b></b> {{newBranch.id}}</p>
                  <label for="branchName">Subject Name:</label>
                  <input id="branchName" v-model="newBranch.name" type="text" required><br>

                  <label for="description">Description:</label>
                  <textarea id="description" v-model="newBranch.description" class="size" type="text" required></textarea><br>

                <label for="actualPrice">Actual Price:</label>
                <input id="actualPrice" v-model="newBranch.actualPrice" type="text" required><br>
                
                <label for="discountPrice">Discount Price:</label>
                <input id="discountPrice" v-model="newBranch.discountPrice" type="text" required><br>

                  <label for="semesterId">Semester Id:</label>
                  <input id="semesterId" v-model="this.selectedsemester" type="text" readonly required><br>

                  <!-- <label for="courseName">Subject Name:</label>
                  <input id="courseName" v-model="newBranch.courseName" type="text" required><br> -->
                  <label for="courseName"><b>Subject Rout Name:</b></label>
                  <input id="courseName" v-model="newBranch.courseName" type="text" required pattern="[a-z0-9]+(-[a-z0-9]+)*" title="Please enter a valid Kebab Case.">
                  <span v-if="!isKebabCase(newBranch.courseName)" style="color: red; position:relative; bottom:6px;">Please enter a valid Kebab Case.</span>


                  <label for="workFlowStatement">Work Flow:</label>
                  <select id="workFlowStatement" v-model="newBranch.workFlowStatement" class="size" type="text" required><br>
                    <option value="Draft">Draft</option>
                      <option value="Review">Review</option>
                      <option value="Release">Release</option>
                    </select>

                <label for="facultyId"><b>FacultyId:</b></label>
                <input id="facultyId" v-model="newBranch.facultyId" type="text" required>

                <label for="isActive">IsActive:</label>
               <input id="isActive" v-model="newBranch.isActive" type="text" readonly required><br>
 

                  <button class="btn2" type="submit">Add Subject</button>
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
  name: "ActstdBycourse",
  components: {
  Confirmation,
},
  // props: ['selectedsemester'],
  props:{selectedsemester : {
  type: Number,
  required: true,
}
},
  data() {
    return {
      formVisible: false,
      products: [],
      selectedCourse: '',
      selectedProduct: { id:'', name: '', description: '',actualPrice:'',discountPrice:'', semesterId:'', courseName:'',workFlowStatement:'',facultyId:'',isActive: '' },
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
      facultyId:null,
      isActive: '',
    },
      newBranch: {
      name: '',
      description: '',
      academiaId: '',
      actualPrice:'',
      discountPrice:'',
      semesterId: this.selectedsemester, 
      courseName:'',
      workFlowStatement:'',
      facultyId: '',
      isActive: 1,
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
      } 
       finally {
       this.isLoading = false;
  }
},

async loadProductDetails() {

    const selectedProduct = this.products.find(product => product.id === this.selectedCourse);
  if (selectedProduct) {
    this.selectedProduct = { ...selectedProduct };
    //this.newBranch.semesterId = this.selectedProduct.id; 

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
  this.editedProduct.facultyId = this.selectedProduct.facultyId;
  this.editedProduct.isActive = this. selectedProduct.isActive


},

async updateProduct(id) {
  try {
    const res = await AxiosInstance.put(`/Course` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description + '&ActualPrice=' + this.editedProduct.actualPrice + '&DiscountPrice=' + this.editedProduct.discountPrice  + '&WorkFlowStatement=' + this.editedProduct.workFlowStatement +'&isActive=' + this.editedProduct.isActive );
    console.log(res);

      await this.loadData();
      this.editMode = false; // Disable edit mode after successful update
      this.ismodel = true; 
      this.loadProductDetails();
      this.$refs.Confirmation.open("Subject Updated successfully.");

    }  catch(error){
        this.isLoading = false;
        console.log(error.response.data.Message);
        this.$refs.Confirmation.open(error.response.data.Message);
      } 
  },

//   async updatePrice(id) {
//     this.showDialog = false;
//       try {
//             const res = await AxiosInstance.put(`/Course/UpdateCoursePrice` + '?' +'id='+ id + '&coursename='+ this.editedProduct.courseName + '&NewActualPrice=' + this.editedProduct.actualPrice + '&NewDiscountedPrice=' + this.editedProduct.discountPrice);
//             console.log(res);
//             this.editMode = false; // Disable edit mode after successful update
//             this.ismodel = true;
//             this.loadProductDetails();

//         if (res.status === 200) {
//           await this.getdata();
//         }
//       } catch (error) {
//         console.log(error);
//         }
//   },

//    async updateWorkFlow(id) {
//     this.showDialog = false;
//     try {
//       const result = await AxiosInstance.put(`/Course/UpdateWorkflow/`+ id  + '/' + this.editedProduct.workFlowStatement );
//       console.log(result);
//       this.editMode = false; 
//       this.ismodel = true;
//       this.loadProductDetails();

//       if (result.status === 200) {
//     await this.getdata();
//   }
// } catch (error) {
//   console.log(error);
//   }
//   },

async addBranch() {
  this.isLoading = true;
  try {
    const response = await AxiosInstance.post(`/Course`, this.newBranch);
    this.ismodel = true; 

    console.log("Branch added successfully");
    await this.loadData();
    this.loadProductDetails();

      // this.gridApi.refreshCells({ force: true });

      this.$refs.Confirmation.open("Subject Added successfully.");

    this.newBranch = {
      name: '',
      description: '',
      academiaId: '',
      actualPrice:'',
      discountPrice:'',
      semesterId: this.selectedsemester, 
      courseName:'',
      workFlowStatement:'',
      facultyId: '',
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
        "Are you sure?"
      );
      if (!confirmed) {
        return; // If the user cancels, do nothing
      }
        this.editedProduct.isActive = '0';
         const res = await AxiosInstance.put(`/Branches/SoftUpdateCourse` + '?' + 'id=' + id + '&isActive=' + this.editedProduct.isActive );
        console.log(res);

      if (res.status === 200) {
        console.log("Subject deleted successfully");
        await this.loadData();
        this.loadProductDetails();

        this.selectedCourse = '';
      this.selectedProduct = { id:'', name: '', description: '',actualPrice:'',discountPrice:'', semesterId:'', courseName:'',workFlowStatement:'',facultyId:'',isActive: '' };

        // Show success dialog
        this.$refs.Confirmation.open("Subject deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting Subject:", error);

      // Show error dialog
      this.$refs.Confirmation.open("Error deleting Subject.");
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
  padding: 0px;
  margin-bottom: 4px;
  box-sizing: border-box;
}

  button {
      color: #fff;
  background-color: #007bff;
  border-color: #007bff;
    /* padding: 8px 12px; */
    border: none;
    border-radius: 4px;
    cursor: pointer;
   }
   .btn2 {
      color: #fff;
  background-color: #007bff;
  border-color: #007bff;
    padding: 8px 10px;
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
      padding: 7px 18px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
      position: relative;
      top: 80px;
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
  padding: 10px 25px;
 }
</style>