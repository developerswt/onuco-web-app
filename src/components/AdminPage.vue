<template>
  <div class="admin-page">
    <div id="app" :class="{ 'sidebar-collapse': isSidebarCollapsed }">
      <SideNavBar :isCollapsed="isSidebarCollapsed" @selectContent="selectContent"  />
      <div class="main-container" :style="{ 'margin-left': sidebarMargin }">
        <div class="content-container" v-if="selectedContent === 'dashboard'">
          <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Dashboard</span>
          <SuperAdmin v-if="isUserSuperadmin" />
          <Admin v-if="isUserAdmin" />
          <Faculty v-if="isUserfaculty" />
        </div>
        <div class="content-container" v-if="selectedContent === 'addUpdate'">
           <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Add and Update</span>
           <div class="row">
              <div class="col-sm-12">
                <DataCreation />
              </div>  
           </div>
        </div>
        <div class="content-container" v-if="selectedContent === 'viewDetails'">
          <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">view details</span>
          <ViewDetails v-if="isUserAdmin || isUserSuperadmin"/>
          <FacultyViewDetails v-if="isUserfaculty" />
        </div>
        <div class="content-container" v-if="selectedContent === 'branches'">
          <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Branches</span>
          <AdBranches />
        </div>
        <div class="content-container" v-if="selectedContent === 'academics'">
          <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Academics</span>
          <AdAcademics />
        </div>
        <div class="content-container" v-if="selectedContent === 'university'">
        <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">University</span>
          <AdUni />
        </div>
        <div class="content-container" v-if="selectedContent === 'semester'">
        <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Semester</span>
          <AdSem />
        </div>
        <div class="content-container" v-if="selectedContent === 'types'">
        <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Types</span>
          <AdTypes />
        </div>
        <div class="content-container" v-if="selectedContent === 'courses'">
        <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Courses</span>
          <AdCourse />
        </div>
        <div class="content-container" v-if="selectedContent === 'facultyInfo'">
        <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Faculty Info</span>
          <ApLecture />
        </div>
        <div class="content-container" v-if="selectedContent === 'studentInfo'">
        <i class="fa fa-bars bars_icon" @click="toggleSidebar"></i>&nbsp;&nbsp;&nbsp;&nbsp;<span class="page_title">Student Info</span>
          <StudentDetails />
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import SideNavBar from './SideNavBar.vue';
import SuperAdmin from './SuperAdmin.vue';
import Admin from './Admin.vue';
import Faculty from './Faculty.vue';
import DataCreation from './DataCreation.vue';
import ViewDetails from './ViewDetails.vue';
import FacultyViewDetails from './FacultyViewDetails.vue';
import AdBranches from './AdBranches.vue';
import AdUni from './AdUni.vue';
import AdSem from './AdSem.vue';
import AdAcademics from './AdAcademics.vue';
import AdTypes from './AdTypes.vue';
import AdCourse from './AdCourse.vue';
import ApLecture from './ApLecture.vue';
import StudentDetails from './StudentDetails.vue'

export default {
    name: 'AdminPage',
    components: {
      AdBranches,
        SideNavBar,
        SuperAdmin,
        Admin,
        Faculty,
        DataCreation,
        ViewDetails,
        FacultyViewDetails,
        AdUni,
        AdSem,
        AdAcademics,
        AdTypes,
        AdCourse,
        ApLecture,
        StudentDetails
    },
    data() {
      return {
        isSidebarCollapsed: true,
        selectedContent: 'dashboard',
      };
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
          this.isuser['cognito:groups'][0] === 'Faculty';
      },
      isUserSuperadmin() {
        return Array.isArray(this.isuser?.['cognito:groups']) &&
          this.isuser['cognito:groups'][0] === 'SuperAdmin';
      },
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
        },
        selectContent(content) {
          this.selectedContent = content;
        },
    },
}
</script>

<style scoped>
.bars_icon {
  cursor: pointer;
  position: relative;
  top: -2.5px;
}
.admin-page {
    padding-top: 5%;
    height: 100%;
    width: 100%;
  }
  #app {
    display: flex;
    height: 100%;
  }

  .page_title {
    color: #666;
    font-size: 24px;
    font-weight: bold;
  }
  .main-container {
    flex: 1;
    transition: margin-left 0.3s ease;
    padding: 20px;
    background-color: #EFF5FC; /* Set the background color */
  }
  
  .content-container {
    padding: 20px;
    width: 100%;
  }
  
  .placeholder-content {
    margin-top: 20px;
    text-align: center;
    color: #555;
  }
  
  /* Add styles for the Sidebar component */
  .sidebar {
    width: 230px; /* Original sidebar width */
    height: 100%;
    background: #FFF;
    transition: width 0.3s ease;
    box-shadow: -10px 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar-collapse .sidebar {
    width: 48px; /* Collapsed sidebar width */
  }
  
  .sidebar .menu-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    padding: 15px;
  }
  
  .sidebar .menu-btn span {
    width: 30px;
    height: 3px;
    background-color: #fff;
  }
  .header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.bars_icon {
  cursor: pointer;
  margin-right: 10px;
}

.page_title {
  color: #666;
  font-size: 24px;
  font-weight: bold;
}
@media screen and (max-width: 1024px) {
  .sidebar {
    padding-top: 3%;
  }
}


  @media (max-width: 768px) {
    .sidebar {
      width: 190px; /* Adjusted width for mobile */
    }
  
    .sidebar-collapse .main-container {
      margin-left: 0; /* No margin when collapsed on mobile */
    }
    .header {
    flex-direction: row; /* Display items in a row for mobile */
    justify-content: space-between; /* Add space between items */
  }

  .bars_icon {
    margin-left: 0;
  }

  .content-container {
    padding-left: 0;
    padding-right: 0;
  }

  .main-container {
    flex-direction: column; /* Stack items in a column for mobile */
  }
  .sidebar-collapse .main-container {
      margin-left: 0; /* No margin when collapsed on mobile */
    }
  }
  @media screen and (max-width: 600px) {
  .sidebar {
    padding-top: 6%;
    width: 220px;
  }
}
@media screen and (max-width: 450px) {
  .sidebar {
    padding-top: 11%;
  }
  .main-container {
    padding-top: 9%;
  }
}
@media screen and (max-width: 400px) {
  .sidebar {
    padding-top: 11%;
  }
  .main-container {
    padding-top: 9%;
  }
}

</style>
