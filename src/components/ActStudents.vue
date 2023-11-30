<template>
     <div class="container" ><p> > Active Student </p>
    <div class="container" style="margin-top: 72px;">
      
   <div class="table-responsive">
               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr>
                           <!-- <th>ID</th>
                           <th>Course Name</th> -->
                           <!-- <th>status</th> -->
                           <th>Active Students</th>
                           <th>Total Amount</th>
                           <th> Paid Amount</th>
                           
                           
                          
                       </tr>
                   </thead>
                    <tbody v-if="person">
                        <tr>
                        <!-- <td>{{person.id }}</td>
                        <td>{{person.name }}</td> -->
                        <!-- <td>{{ person.state }}</td> -->
                        <td>{{this.person.activeStudentsCount }}</td>
                        <td>{{ this.person.totalAmount }}</td>
                        <td>{{ this.person.discountedAmount }}</td>
                    </tr>
                    </tbody>   
               </table>
           </div>
           
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
            person:null,
          }
        },
        async created() { 
            this.isLoading = true;  
        try {
            const res = await axios.get(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/UserCourseSubscription/GetActiveStudentsCount`);
            this.person = res.data;
            console.log(this.person);
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
    }


</script>
<style scoped>

</style>