


<!-- App.vue -->
<template>
    <div class="container" ><p>Dashbord > Subscription Students </p>
  <div class="container" style="margin-top: 72px;padding-bottom: 80px;">
   <div class="table-responsive">
    <div class="row">
      <div class="col-sm-12">
               <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
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
  <Loading v-model:active="isLoading"></Loading>

  </div>
</template>

<script>
  import AxiosInstance  from '../config/axiosInstance';
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
            const result = await AxiosInstance.get(`/UserCourseSubscription/TotalAmountCollectedPerSubject`);
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
