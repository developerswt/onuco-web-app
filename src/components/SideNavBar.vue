<template>
    <div class="sidebar" id="app">
    <!-- Sidebar content -->
    <nav>
      <!-- Sidebar items go here -->
      <div class="placeholder-sidebar">
        <ul>
          <li>
            <div class="sidebar-item" @click="selectContent('dashboard')">
              <span class="icon"><i class="fa fa-home"></i></span>
              <span class="title">Dashboard</span>
            </div>
        </li>
          <li>
            <div class="sidebar-item" @click="selectContent('addUpdate')" v-if="isUserSuperadmin">
              <span class="icon"><i class="fa fa-edit"></i></span>
              <span class="title">Add / Update</span>
            </div>
          </li>
          <li>
            <div class="sidebar-item" @click="selectContent('viewDetails')">
              <span class="icon"><i class="fa fa-eye"></i></span>
              <span class="title">View Details</span>
            </div>
          </li>
          <li>
            <div class="sidebar-item" v-if="isUserAdmin || isUserSuperadmin">
              <span class="icon" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-file"></i></span>
              <span class="title" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Course Details</span>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <span class="dropdown-item" @click="selectContent('branches')">Branches</span>
                <span class="dropdown-item" @click="selectContent('university')">University</span>
                <span class="dropdown-item" @click="selectContent('semester')">Semester</span>
                <span class="dropdown-item" @click="selectContent('academics')">Academics</span>
                <span class="dropdown-item" @click="selectContent('types')">Types</span>
                <span class="dropdown-item" @click="selectContent('courses')">Courses</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
    name: 'SideNavBar',
    props: {
      isCollapsed: Boolean,
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
    toggleSidebar() {
      this.$emit('toggleSidebar');
    },
    selectContent(content) {
      this.$emit('selectContent', content);
    }
  },
}
</script>

<style scoped>

.sidebar {
  background: #FFF;
  color: #9b59b6;
  box-shadow: -10px 0 15px rgba(0, 0, 0, 0.1);
  width: 230px;
  height: 100%;
}


.placeholder-sidebar {
  padding: 10px;
}

ul {
  list-style-type: none;
}

li {
  display: flex;
  cursor: pointer;
  align-items: center; /* Align items vertically */
}

.icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  margin-left: -20%;
    padding-top: 7%;
  
}
.sidebar-collapse .icon {
    margin-left: -60%;

}
.title {
    padding-top: 7%;
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  color: #9b59b6;
  margin-left: -20px;
  cursor: pointer;
}

.sidebar-collapse .title {
  display: none; /* Hide the title when collapsed */
}
.sidebar-item {
  display: flex;
  cursor: pointer !important;
  align-items: center;
}
.sidebar-item .icon {
    color: #9b59b6;
}
#app{
  display: flex;
  height: auto !important;
}

</style>