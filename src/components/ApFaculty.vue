<template>
     <div class="container" ><p> > Lecturers </p>
        <div class="container" style="margin-top: 72px;">
            <div class="table-responsive">
               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr><th>Id</th>
                           <th>Subject Name</th>
                           <th>Total Amount Collected</th>
                           <th>Total Subscribed Students</th>
                        </tr>
                   </thead>
                   <tbody v-for="product in product" :key="product.id">
                    <tr>
                        <td>{{ product.id }}</td>
                        <td>{{ product.courseName }}</td>
                        <td>{{ product.totalAmountCollected }}</td>
                        <td>{{ product.totalSubscribedStudents }}</td>
                    </tr>
                   </tbody>
                </table>
            </div> 
        </div>
    </div>
</template>
<script>
import axios from 'axios';
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
            product:[],
         
           
          }
        },
        created() {
        this.loadData();
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
                const res = await AxiosInstance.get(`/UserCourseSubscription/facultyTotalAmountCollectedPerSubject?UcognitoId=` + this.isuser.sub);
                this.product = res.data;
                console.log(this.product);
            } catch (error) {
                this.isLoading = false;
                console.log(error);
            }
            finally {
                this.isLoading = false;
            }
        },
    },
    }


</script>
<style scoped>

</style>
