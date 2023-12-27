<template>
  <div class="container ">
    <section class="main" >
    <div class="row" style="justify-items: center;">
  <div v-if="isUserSuperadmin"  class="col-sm-3 cardpd">
   <div class="card color" >
    <div class="box">
      <div v-if="person" class="content">

      <h3 class="head"> <router-link to="/ActStudents"> Active Students </router-link></h3>
        <span style=" font-size:26px"> {{person.activeStudentsCount }}</span>
    </div>
    </div>
  </div>
  </div>
  <div v-if="isUserSuperadmin" class="col-sm-3 cardpd">
  <div class="card color">
    <div class="box">
      <div v-if="student" class="content">
        <h3 class="head"> <router-link to="/InactStudents">Inactive Students</router-link></h3>
        <span style=" font-size:26px"> {{student.inactiveStudentsCount }}</span>
    </div>
   </div>
  </div>
  </div>
  <div v-if="isUserAdmin"  class="col-sm-3 cardpd">
   <div class="card color" >
    <div class="box">
      <div v-if="count" class="content">
      <h3 class="head"><router-link to="/StudentDetails">Complete Students </router-link></h3>
      <span style=" font-size:26px"> {{count.completedStudentsCount }}</span>      
    </div>
    </div>
  </div>
  </div>
  <div v-if="isUserAdmin" class="col-sm-3 cardpd">
  <div class="card color">
    <div class="box">
      <div class="content">
        <h3 class="head"><router-link to="/ApLecture">Lecturer Payments </router-link></h3>
    </div>
   </div>
  </div>
  </div>
</div>
<div class="row" style="justify-items: center;">
  <div v-if="isUserSuperadmin" class="col-sm-3 cardpd" >
   <div class="card color" >
    <div class="box">
      <div class="content">
      <h3 class="head"> <router-link to="/SubStudents"> Subscription Students </router-link></h3>
        
    </div>
    </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
  <div class="card color">
    <div class="box">
      <div class="content">
        <h3 class="head"> <router-link to="/ActstdBycourse">Active Students By Course</router-link></h3>
    
    </div>
   </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
   <div class="card color" >
    <div class="box">
      <div class="content">
      <h3 class="head"> <router-link to="/ListOfSubject">List Of Subjects  </router-link></h3>
       
    </div>
    </div>
  </div>
  </div>
  <!-- <div class="col-sm-3 cardpd">
  <div v-if="isUserSuperadmin" class="card color " >
    <div class="box">
      <div class="content">
        <h3 class="head"><router-link to="/CourseUpdate">Courses Update</router-link></h3>
       
    </div>
   </div>
  </div>
  </div> -->
</div>
<!-- <div class="row" style="justify-items: center;">
  <div class="col-sm-3 cardpd">
   <div v-if="isUserSuperadmin" class="card color">
    <div class="box">
      <div class="content">
      <h3 class="head"> <router-link to="/SemUpdate"> Semisters Update  </router-link></h3>
        
    </div>
    </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
  <div v-if="isUserSuperadmin" class="card color">
    <div class="box">
      <div class="content">
        <h3 class="head"> <router-link to="/UniUpdate">University Update</router-link></h3>
    
    </div>
   </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
   <div v-if="isUserSuperadmin" class="card color vv">
    <div class="box">
      <div class="content">
      <h3 class="head"><router-link to="/BranchesUpdate">Branches Update</router-link></h3>
             
    </div>
    </div>
  </div>
  </div>
  <div v-if="isUserSuperadmin" class="col-sm-3 cardpd" >
   <div class="card color" >
    <div class="box">
      <div class="content">
      <h3 class="head"> <router-link to="/AcademicsUpdate">Academics Update </router-link></h3>
        
    </div>
    </div>
  </div>
  </div>
 
</div> -->
<div v-if="isUserAdmin" class="row"  style="justify-items: center;">
  <div class="col-sm-3 cardpd">
   <div class="card color" >
    <div class="box">
      <div class="content">
      <h3 class="head"> <router-link to="/AdBranches">Branches </router-link></h3>
        
    </div>
    </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
  <div class="card color">
    <div class="box">
      <div class="content">
        <h3 class="head"> <router-link to="/AdUni">University</router-link></h3>
    
    </div>
   </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
   <div class="card color vv">
    <div class="box">
      <div class="content">
      <h3 class="head"><router-link to="/AdCourse">Courses Details</router-link></h3>
             
    </div>
    </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
  <div class="card color vv" >
    <div class="box">
      <div class="content">
        <h3 class="head"><router-link to="/AdSem">Semesters</router-link></h3>
       
    </div>
   </div>
  </div>
  </div>
</div>
<div class="row" style="justify-items: center;"  >
  <div class="col-sm-3 cardpd" >
  <div v-if="isUserSuperadmin" class="card color vv">
    <div class="box">
      <div class="content">
        <h3 class="head"><router-link to="/ApBestFaculty">ADD Best Faculty</router-link></h3>
       
    </div>
   </div>
  </div>
  </div>
  <div v-if="isUserAdmin"  class="col-sm-3 cardpd">
  <div class="card color">
    <div class="box">
      <div class="content">
        <h3 class="head"> <router-link to="/AdAcademics">Academics</router-link></h3>
    
    </div>
   </div>
  </div>
  </div>
  <div v-if="isUserAdmin"  class="col-sm-3 cardpd">
   <div class="card color" >
    <div class="box">
      <div v-if="person" class="content">

      <h3 class="head"> <router-link to="/ActStudents"> Active Students </router-link></h3>
        <span style=" font-size:26px"> {{person.activeStudentsCount }}</span>
    </div>
    </div>
  </div>
  </div>
  <div class="col-sm-3 cardpd">
  <div v-if="isUserSuperadmin" class="card color vv" >
    <div class="box">
      <div class="content">
        <h3 class="head"><router-link to="/DataCreation">Data Creation</router-link></h3>
       
    </div>
   </div>
  </div>
  </div>
</div>
<div class="row" style="justify-items: center;"  >
  <!-- <div class="col-sm-3 cardpd" >
  <div v-if="isUserSuperadmin" class="card color vv">
    <div class="box">
      <div class="content">
        <h3 class="head"><router-link to="/TypesUpdate">Types Update</router-link></h3>
       
    </div>
   </div>
  </div>
  </div> -->
  <div v-if="isUserAdmin"  class="col-sm-3 cardpd">
  <div class="card color">
    <div class="box">
      <div class="content">
        <h3 class="head"> <router-link to="/AdTypes">Types</router-link></h3>
    
    </div>
   </div>
  </div>
  </div>
  <!-- <div class="col-sm-3 cardpd"  v-if="isUserAdmin">
   <div class="card color" >
    <div class="box">
      <div class="content" v-if="person">

      <h3 class="head"> <router-link to="/ActStudents"> Active Students </router-link></h3>
        <span style=" font-size:26px"> {{this.person.activeStudentsCount }}</span>
    </div>
    </div>
  </div>
  </div> -->
  <!-- <div class="col-sm-3 cardpd">
  <div class="card color vv" >
    <div class="box">
      <div class="content">
        <h3 class="head"><router-link to="/CourseWorkflow">Course Workflow</router-link></h3>
       
    </div>
   </div>
  </div>
  </div> -->
</div>


  <!-- <div class="row">
<div class="col-sm-8">
    <div class="card view">
    <div class="box">
      <div class="content">
        <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="50px" cellspacing="0">
                    <thead>
                      <header style="color: cornflowerblue; font-size:large;">Subject_Information</header>
                        <tr>
                            <th>Subject Name</th>
                            <th>Lecturer Name</th>
                          
                        </tr>
                    </thead>
                        
                </table>
            </div>
    </div>
   </div>
  </div>
</div>
<div class="col-sm-4">
    <div class="card view vv">
    <div class="box">
      <div class="content">
        
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="../assets/images/reva.jpg" class="d-block w-100" alt="..." style="height: 200px ;">
    </div>
    <div class="carousel-item">
      <img src="../assets/images/vtu.jpg" class="d-block w-100" alt="..." style="height: 200px ;">
    </div>
    <div class="carousel-item">
      <img src="../assets/images/chirst.jpg" class="d-block w-100" alt="..." style="height: 200px ;">
    </div>
  </div>
</div>
       
    </div>
   </div>
  </div>
</div>
  </div> -->


</section>

</div>
<!-- <form-wizard @on-complete="onComplete" step-size="xs">
    <tab-content title="Types">
      <AddTypes />
    </tab-content>
    <tab-content title="Academics" >
      <AcademicsUpdate />
    </tab-content>
    <tab-content title="Branches" >
      <AddBranches />
    </tab-content>
    <tab-content title="University" >
      <AddUni />
    </tab-content>
    <tab-content title="Semester">
      <AddSem />
    </tab-content>
    <tab-content title="Courses" >
      <AddCourse />
    </tab-content>
  
  </form-wizard> -->
</template>

<script>
// import AddTypes from './AddTypes.vue'
// import AcademicsUpdate from './AcademicsUpdate.vue'
// import AddBranches from './AddBranches.vue'
// import AddUni from './AddUni.vue'
// import AddSem from './AddSem.vue'
// import AddCourse from './AddCourse.vue'
// import {FormWizard,TabContent} from "vue3-form-wizard";
// import 'vue3-form-wizard/dist/style.css'
import AxiosInstance  from '../config/axiosInstance';
  
  export default {

  name: "Aphome",
  components: {
    // FormWizard,
    // TabContent,
    // AddTypes,
    // AcademicsUpdate,
    // AddBranches,
    // AddUni,
    // AddCourse,
    // AddSem,
    AxiosInstance
  },
  data() {        
    return {
      person:null,
      student: null,
      count:null,
      counts:null,
    }
  },
  computed: {
    isuser() {
      return this.$store.state.user?.signInUserSession?.idToken?.payload;
    },
    isUserAdmin() {
      return Array.isArray(this.isuser?.['cognito:groups']) &&
        this.isuser['cognito:groups'][0] === 'Admin';
      },
      isUserfaculty() {
      return Array.isArray(this.isuser?.['cognito:groups']) &&
        this.isuser['cognito:groups'][1] === 'Faculty';
      },
     
      isUserSuperadmin() {
  return Array.isArray(this.isuser?.['cognito:groups']) &&
    this.isuser['cognito:groups'][0] === 'SuperAdmin';
},

  },
  methods: {
    onComplete() {
      alert("Yay. Done!");
    },
  },
  async created() {
    try {
      const activeRes = await AxiosInstance.get(`/UserCourseSubscription/GetActiveStudentsCount`);
      this.activeStudents = activeRes.data.activeStudents;
      console.log(this.activeStudents);
      const inactiveRes = await AxiosInstance.get(`/UserCourseSubscription/GetInactiveStudentsCount`);
      this.inActiveStudents = inactiveRes.data.inactiveStudents;

      this.processChartData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    processChartData() {
      const activeMonthMap = {};
      const inactiveMonthMap = {};

      const processStudents = (students, monthMap) => {
        students.forEach((student) => {
          const startDateMonth = this.getMonthYear(student.startdate);
          const endDateMonth = this.getMonthYear(student.enddate);

          const startMonthIndex = this.options.xaxis.categories.indexOf(startDateMonth);
          const endMonthIndex = this.options.xaxis.categories.indexOf(endDateMonth);

          for (let i = startMonthIndex; i <= endMonthIndex; i++) {
            const month = this.options.xaxis.categories[i];
            monthMap[month] = (monthMap[month] || 0) + 1;
          }
        });
      };

      processStudents(this.activeStudents, activeMonthMap);
      processStudents(this.inActiveStudents, inactiveMonthMap);

      this.series[0].data = this.options.xaxis.categories.map(month => activeMonthMap[month] || 0);
      this.series[1].data = this.options.xaxis.categories.map(month => inactiveMonthMap[month] || 0);
    },
    getMonthYear(date) {
      const d = new Date(date);
      const month = d.toLocaleString("en-US", { month: "short" });
      return month;
    },
  },

};
</script>

<style scoped>

 .card {
  position: relative;
  min-width: 260px;
  height: 180px;

  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2),
    inset -2px -2px 10px rgba(255, 255, 255, 0.1),
    2px 2px 10px rgba(0, 0, 0, 0.3), -2px -2px 10px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  margin: 10px;
  transition: 0.5s;
}
 .card:nth-child(1) .box .content a {
  background: #2196f3;
}

 .card:nth-child(2) .box .content a {
  background: #e91e63;
}

 .card:nth-child(3) .box .content a {
  background: #23c186;
}

  .card .box {
  position: absolute;
  top: 20px;
  left: 10px;
  right: 10px;
  /* bottom: 20px; */
  /* background: #2a2b2f; */
  border-radius: 15px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  /* background-image: url(../assets/Images/bgsoftware.jpg); */
  /* background: #EAF8FF; */
  
}

 /*  .card .box:hover {
  transform: translateY(-50px);
} */

  .card .box:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
}

  .card .box .content {
  /* padding: 20px; */
  text-align: center;
}

  .card .box .content h2 {
  position: absolute;
  top: 0px;
  right: 30px;
  font-size: 3.2rem;
  color: rgba(41, 37, 37, 0.1);
}

  .card .box .content h3 {
  /* font-size: 1rem; */
  color: black;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #0d4b7e;
  font-size: 19px;
}

  .card .box .content p {
  /* font-size: 1rem; */
  /* font-size: 18px; */
  font-weight: 300;
  color: rgb(41, 40, 40);
  z-index: 1;
  transition: 0.5s;
  text-align: justify;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 17px;
  color: black;
  overflow: visible !important;
}

  .card .box .content a {
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
  .card .box .content a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  background: #fff;
  color: #000;
}
/* .soft{
    background: linear-gradient(270deg, #EAF8FF 0%, #401085 100%);

} */
@media screen and (max-width:520px) {
   .card .box .content h2 {
  position: absolute;
  top: 0px;
  left: 0;
  font-size: 2.7rem;
  color: rgba(41, 37, 37, 0.1);
}
.vv{
  margin-bottom: 85px;
}

}

.card {
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}


@media (min-width: 100px) and (max-width: 700px){
 .card {
  height: 140px;
  position: relative;
  min-width: 260px;
}
.scroll {
 height: 250px;
  overflow: auto;
}

}
.view{
    height: 240px;
}
.head{
  font-size: 13px !important;
}
.color{
  background: #EEEAE4;
    background: radial-gradient(at left top, #EEEAE4 50%, #D3E4F6 80%);
    border: 1px solid #F0F6FC;
}

</style>