

<template>
     <div class="container" ><p>Dashbord > Active Student By Course </p>
    <div class="container" style="margin-top: 72px;">
   <div class="table-responsive">
    <!-- <div>
            <label><b>Faculty Id:</b></label><br>
                <input type="text" v-model="facultyId" />
            </div> <br> -->
               <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
                   <thead>
                       <tr><th>Id</th>
                        <th>Course Id</th>
                           <!-- <th>Subject Name</th> -->
                           <th>Start Date</th>
                           <th>End Date</th>
                           <th>Total Amount Collected</th>
                          
                       </tr>
                   </thead>
                   <tbody v-for="products in product.activeStudents" :key="products.id">
                    <tr>
                        <td>{{ products.id }}</td>
                        <td>{{ products.courseId }}</td>
                        <!-- <td>{{ product.courseName }}</td> -->
                        <td>{{ products.startdate }}</td>
                        <td>{{ products.enddate }}</td>
                        <td>{{ this.products.totalAmountCollected }}</td>
                    </tr>
                   </tbody>
                </table>
            </div> 
            </div>
            </div>
</template>
<script>
import AxiosInstance  from '../config/axiosInstance';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  export default {

  name: "ActstdBycourse",
  data() {        
          return {
            product:[],
           
           
          }
        },
    computed: {
        isuser() {
            console.log(this.$store.state.user);
            return this.$store.state.user.signInUserSession.idToken.payload;
        },
    //     isUserfaculty() {
    //   return Array.isArray(this.isuser?.['cognito:groups']) &&
    //     this.isuser['cognito:groups'][1] === '"Faculty"';
    //   },
    },
        created() {
        this.loadData();
    },
    
    methods: {
        async loadData() {
            this.isLoading = true;
            console.log(this.isuser)
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
