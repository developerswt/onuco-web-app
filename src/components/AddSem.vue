<template>
    <div class="container">
      <h5>Semester Update & Create</h5>
      <div class="container" style="margin-top: 72px;">
        <div>
          <label for="productDropdown">Select Semester Name:</label>
          <select v-model="selectedSem"  @change="emitSelectedType">
            <option v-for="product in products" :key="product.id" :value="product.id">
              {{ product.name }}
            </option>
          </select>
        </div>
        <!-- <div class="table-responsive">
          <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>University Id</th>
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
                  <td>{{ selectedProduct.universityId }}</td>
                  <td>
                    <button v-if="!editMode" @click="enableEditMode()">Edit</button>
                    <button v-if="editMode" @click="updateProduct(editedProduct.id)">Update</button>
                  </td>
                </tr>
              </tbody>
          </table>
          
          <button class="btn1" @click="toggleForm">{{ formVisible ? 'Close' : 'Add New' }}</button>
          <form v-show="formVisible" class="frm" style="margin-top:25px"  @submit.prevent="addBranch">
                    <p><b></b> {{newBranch.id}}</p>
                    <label for="branchName"> Name:</label>
                    <input id="branchName" v-model="newBranch.name" type="text" required><br>

                    <label for="description">Description:</label>
                    <input id="description" v-model="newBranch.description" type="text" required><br>

                    <label for="universityId">University Id:</label>
                    <input id="universityId" v-model="newBranch.universityId" type="text" required><br>

                    <label for="semesterName"><b>Semester Name:</b></label>
                    <input id="semesterName" v-model="newBranch.semesterName" type="text" required>

                    <button class="btn2" type="submit">Add Semester</button>
                </form>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>
  import AxiosInstance from '../config/axiosInstance';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  
  export default {
    name: "AddSem",
    props: ['selecteduniversity'],
    data() {
      return {
        formVisible: false,
        products: [],
        selectedSem: null,
        selectedProduct: { id: null, name: '', description: '',universityId:null },
        isLoading: false,
        editMode: false,
        editedProduct: {
        id: null,
        name: '',
        description: '',
        universityId: null,
      },
        newBranch: {
        name: '',
        description: '',
        universityId: '',
        semesterName: '',
       },
      };
    },
    created() {
      this.loadData();
    },
    methods: {
        emitSelectedType() {
            this.$emit('selected-semester-changed', this.selectedSem);
        },
      toggleForm() {
          this.formVisible = !this.formVisible;
        },

      async loadData() {
        this.isLoading = true;
      try {
        const res = await AxiosInstance.get(`/Semester/GetSemesterByUniversityId/` + this.selecteduniversity);
        this.products = res.data;
  
    //   if (Array.isArray(this.products.semester)) {
    //     this.rowData = this.products.semester;
    //   } else {
    //     console.error('semester is not an array:', this.products.semester);
    //     this.rowData = []; 
    //   }
  
    //   if (this.rowData.length > 0) {
    //     this.selectedSem = this.rowData[0].id;
    //     this.loadProductDetails();
    //   }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    
    // async loadProductDetails() {
    //   if (Array.isArray(this.rowData)) {
    //     const selectedProduct = this.rowData.find(product => product.id === this.selectedSem);
    //   if (selectedProduct) {
    //     this.selectedProduct = { ...selectedProduct };
    //     //this.newBranch.universityId = this.selectedProduct.id; 

    //   }
    //   } else {
    //     console.error('rowData is not an array:', this.rowData);
    //   }
    // },

      enableEditMode() {
      this.editMode = true;
      this.editedProduct.id = this.selectedProduct.id;
      this.editedProduct.name = this.selectedProduct.name;
      this.editedProduct.description = this.selectedProduct.description;
      this.editedProduct.universityId = this.selectedProduct.universityId;

    },

    async updateProduct(id) {
      try {
        const res = await AxiosInstance.put(`/Semester` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description );
        console.log(res);

        if (res.status === 200) {
          await this.getdata();
          this.editMode = false; // Disable edit mode after successful update
          this.ismodel = true; 
        }
        } catch (error) {
          console.error(error);
        }
      },

    async addBranch() {
      this.isLoading = true;
      try {
        const response = await AxiosInstance.post('/Semester', this.newBranch);
        this.ismodel = true; 
      if (response.status === 200) {
        console.log("Branch added successfully");
        await this.getdata();
          // this.gridApi.refreshCells({ force: true });

        alert("Insert Successful");
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
    async getdata() {
       this.isLoading = true;
        try {
            const res = await AxiosInstance.get(`/Semester`);
            this.products = res.data;

            if (Array.isArray(this.products.semester)) {
            this.rowData = this.products.semester;
        } else {
            console.error('semester is not an array:', this.products.semester);
        }

        if (this.rowData.length > 0) {
            this.selectedSem = this.rowData[0].id;
            this.loadProductDetails();
        }
        } catch (error) {
            console.log(error);
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
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 80px; 
    }


    button:hover {
        background-color: #007bff;
    }
</style>
