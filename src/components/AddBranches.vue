<template>
    <div class="container">
      <h5>Branches Update & Create</h5>
      <div class="container" style="margin-top: 72px;">
        <div>
          <label for="productDropdown">Select BranchName:</label>
          <select v-model="selectedbranch" @change="emitSelectedType">
            <option v-for="product in products" :key="product.id" :value="product.id">
              {{ product.name }}
            </option>
          </select>
        </div>
        <div class="table-responsive">
          <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Academia Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{{ this.selectedProduct.id }}</td>
                  <td v-if="!editMode">{{ this.selectedProduct.name }}</td>
                  <td v-if="editMode">
                    <input v-model="this.selectedProduct.id" type="text" required>
                  </td>
                  <td v-if="!editMode">{{ this.selectedProduct.description }}</td>
                  <td v-if="editMode">
                    <input v-model="editedProduct.description" type="text" required>
                  </td>
                  <td>{{ this.selectedProduct.id }}</td>
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

                    <label for="academiaId">AcademiaId:</label>
                    <input id="academiaId" v-model="newBranch.academiaId" type="text" required><br>

                    <label for="branchName"><b>BranchName:</b></label>
                    <input id="branchName" v-model="newBranch.branchName" type="text" required>

                    <button class="btn2" type="submit">Add Branch</button>
                </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AxiosInstance from '../config/axiosInstance';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  
  export default {
    name: "AddBranch",
    props: ['selectedacademic'],
    data() {
      return {
        formVisible: false,
        products: [],
        selectedbranch: null,
        selectedProduct: { id: null, name: '', description: '',academiaId:null },
        isLoading: false,
        editMode: false,
        editedProduct: {
        id: null,
        name: '',
        description: '',
        academiaId: null,
      },
        newBranch: {
        name: '',
        description: '',
        academiaId: '',
        branchName: '',
       },
      };
    },
    created() {
      // console.log(this.selectedtype);
      this.loadData();
      console.log('Selected Type:', this.selectedAcademics);
    },
    methods: {
      emitSelectedType() {
        this.$emit('selected-branches-changed', this.selectedbranch);
      },
      toggleForm() {
          this.formVisible = !this.formVisible;
        },

      async loadData() {
        this.isLoading = true;
      try {
        const res = await AxiosInstance.get(`/Branches/Branches/` + this.selectedacademic);
        this.products = res.data;
        // this.selectedbranch = this.products.id;
        console.log(this.selectedAcademics);
  
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    
    async loadProductDetails() {
    // {
    //   const selectedBranchId = this.selectedbranch;
    //     console.log('Selected Product ID:', selectedBranchId);

    //     this.$store.commit('setBranch', selectedBranchId);
    // },
    const selectedProduct = this.products.find(product => product.id === this.selectedbranch);
  
  if (selectedProduct) {
    this.selectedProduct = { ...selectedProduct }; // Use the nested academia property
  }
  const selectedBranchId = this.selectedbranch;
        console.log('Selected Product ID:', selectedBranchId);

        this.$store.commit('setBranch', selectedBranchId);
},
  // if (Array.isArray(this.rowData)) {
    // const selectedProduct = this.products.includes(product => product.id === this.selectedbranch);
    // console.log(selectedProduct);
  //   if (selectedProduct) {
  //     // Do something with the selected product
  //     console.log(selectedProduct);
  //   } else {
  //     console.warn(`Product with ID ${this.selectedbranch} not found.`);
  //   }
  // } else {
  //   console.error('rowData is not an array:', this.rowData);
  // }
// },


      enableEditMode() {
      this.editMode = true;
      this.editedProduct.id = this.selectedProduct.id;
      this.editedProduct.name = this.selectedProduct.name;
      this.editedProduct.description = this.selectedProduct.description;
      this.editedProduct.academiaId = this.selectedProduct.academiaId;

    },

    async updateProduct(id) {
      try {
        const res = await AxiosInstance.put(`/Branches` + '?' +'id='+ id + '&name='+ this.editedProduct.name + '&desc=' + this.editedProduct.description );
        console.log(res);

        if (res.status === 200) {
          await this.loadData();
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

      const response = await AxiosInstance.post('/Branches', this.newBranch);
      this.ismodel = true;

      if (response.status === 200) {
        console.log("Branch added successfully");
        await this.getdata();
        alert("Insert Successful");
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
    async getdata() {
       this.isLoading = true;
        try {
            const res = await AxiosInstance.get(`/Branches`);
            this.products = res.data;

            if (Array.isArray(this.products.branches)) {
            this.rowData = this.products.branches;
        } else {
            console.error('Branches is not an array:', this.products.branches);
        }

        if (this.rowData.length > 0) {
            this.selectedbranch = this.rowData[0].id;
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
