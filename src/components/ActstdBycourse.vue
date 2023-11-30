<template>
     <div class="container" ><p> > Active Student By Course </p>
    <div class="container" style="margin-top: 72px;">
   <div class="table-responsive">
    <!-- <div>
            <label><b>Faculty Id:</b></label><br>
                <input type="text" v-model="facultyId" />
            </div> <br> -->
               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr><th>Id</th>
                        <th>Course Id</th>
                           <th>Subject Name</th>
                           <th>Start Date</th>
                           <th>End Date</th>
                           <th>Total Amount Collected</th>
                          
                       </tr>
                   </thead>
                   <tbody v-for="product in product.activeStudents" :key="product.id">
                    <tr>
                        <td>{{ product.id }}</td>
                        <td>{{ product.courseId }}</td>
                        <td>{{ product.courseName }}</td>
                        <td>{{ product.startdate }}</td>
                        <td>{{ product.enddate }}</td>
                        <td>{{ this.product.totalAmountCollected }}</td>
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
                const res = await AxiosInstance.get(`/UserCourseSubscription/ActiveStudentsByCourse?UcognitoId=` + this.isuser.sub);
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
