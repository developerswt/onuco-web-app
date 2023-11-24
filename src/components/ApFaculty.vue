<template>
    <div class="container" style="margin-top: 72px;">
   <div class="table-responsive">
    <div>
            <label><b>Faculty Id:</b></label><br>
                <input type="text" v-model="facultyId" />
            </div> <br>
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
                        <td>{{product.totalSubscribedStudents}}</td>
                    </tr>
                   </tbody>
                       
               </table>
            </div> 
            </div>
</template>
<script>
import axios from 'axios';
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
            facultyId:"",
           
          }
        },
        created() {
        this.loadData();
    },
    watch: {
        facultyId: {
            handler: 'loadData',
            immediate: true, 
        },
    },
    methods: {
        async loadData() {
            this.isLoading = true;
            if (!this.facultyId) {
                return;
            }

            try {
                const res = await axios.get(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/UserCourseSubscription/facultyTotalAmountCollectedPerSubject?facultyId=${this.facultyId}`);
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
