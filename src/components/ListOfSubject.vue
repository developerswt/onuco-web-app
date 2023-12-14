<template>
    <div class="container">
      <p>Dashbord > Active Student By Course </p>
      <div class="container" style="margin-top: 72px;">
        <div class="table-responsive">
          <!-- <div>
            <label><b>FacultyDyanamicRouting:</b></label><br>
            <input type="text" v-model="facultyDyanamicRouting" />
            <button style="position:relative; left:10px; background-color:#007bff;color:white; font-size:13px" @click="loadData"> Get Data</button>
          </div> -->
          <br>
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Subject Name</th>
                <th>Description</th>
                <th>Faculty Dyanamic Routing</th>
              </tr>
            </thead>
            <tbody v-for="product in product" :key="product.id">
              <tr>
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.subjectName }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.facultyDyanamicRouting }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import AxiosInstance  from '../config/axiosInstance';
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  
  export default {
    name: "Actstudent",
    components: {
      Loading,
    },
    data() {
      return {
        product: [],
        
      }
    },
    computed: {
        isuser() {
            console.log(this.$store.state.user);
            return this.$store.state.user.signInUserSession.idToken.payload;
        }
    },
    methods: {
      async loadData() {
        this.isLoading = true;
        try {
          const res = await AxiosInstance.get(`/Faculty/GetFacultySubjectByCognitoId` + this.isuser.sub);
          this.product = res.data;
          console.log(this.product);
        } catch (error) {
          this.isLoading = false;
          console.log(error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  }
  </script>
  
  <style scoped>
  </style>
  