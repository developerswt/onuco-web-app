<!-- App.vue -->
<template>
  <div class="container" style="margin-top: 72px;">
   <div class="table-responsive">
    <div class="row">
      <div class="col-sm-12">
               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                   <thead>
                       <tr>
                           <!-- <th>ID</th> -->
                        
                           <th>Subject Name</th>
                           <th>Total Amount collected</th>
                           <th>Subscription Students</th>
                           <!-- <th>Fee</th>
                           <th>Fee Due</th> -->
                       </tr>
                   </thead>
                   <tbody v-for="item in item" :key="item.subjectName">
                    <tr>
                        <td>{{ item.subjectName }}</td>
                        <td> {{ item.totalAmountCollected }}</td>
                        <td>{{item.totalSubscribedStudents}}</td>
                    </tr>
                   </tbody>
                       
               </table>
            </div>
      </div>
      </div>
    
  </div>
</template>

<script>
  import axios from 'axios';
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  export default {

  name: "SubStudent",
  components: {
          Loading,
          
      },
  data() {        
          return {
            item:[],
          }
        },
        async created() { 
            this.isLoading = true;  
        try {
            const result = await axios.get(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/UserCourseSubscription/TotalAmountCollectedPerSubject`);
            this.item = result.data;
            console.log(this.item);

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

<style>

</style>
