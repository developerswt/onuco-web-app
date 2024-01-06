<template>
    <div id="app" class="sidebar">
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
            <div v-if="isUserSuperadmin" class="sidebar-item" @click="selectContent('addUpdate')">
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
            <div v-if="isUserAdmin || isUserSuperadmin" class="sidebar-item">
              <span id="dropdownMenuButton" class="icon user" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                <i class="fa fa-user"></i>
              </span>
              <span class="title user collapsed" data-toggle="collapse" href="#collapseExample1" aria-expanded="false"
                aria-controls="collapseExample">
                User Details&nbsp;&nbsp;
                <span class="action user"><i id="sem_icon" class="fa fa-chevron-right rotate-icon"></i></span>
              </span>

            </div>
          </li>
          <li>
            <div id="collapseExample1" class="collapse hj">
              <span class="subtitle" @click="selectContent('studentInfo')">Student Info</span>
              <span class="subtitle" @click="selectContent('facultyInfo')">Faculty Info</span>
            </div>
          </li>
          <li>
            <div v-if="isUserAdmin || isUserSuperadmin" class="sidebar-item">
              <span id="dropdownMenuButton" class="icon course" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <i class="fa fa-file"></i>
              </span>
              <span class="title course collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false"
                aria-controls="collapseExample">
                Course Details&nbsp;&nbsp;
                <span class="action course"><i id="sem_icon" class="fa fa-chevron-right rotate-icon"></i></span>
              </span>
            </div>
          </li>
          <li>
            <div id="collapseExample" class="collapse hj">
              <span class="subtitle" @click="selectContent('branches')">Branches</span>
              <span class="subtitle" @click="selectContent('university')">University</span>
              <span class="subtitle" @click="selectContent('semester')">Semester</span>
              <span class="subtitle" @click="selectContent('academics')">Academics</span>
              <span class="subtitle" @click="selectContent('types')">Types</span>
              <span class="subtitle" @click="selectContent('courses')">Courses</span>
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
    emits: ['toggleSidebar', 'selectContent'],
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
      this.$emit('toggleSidebar');
    },
    selectContent(content) {
      this.$emit('selectContent', content);
    }
  },
}
</script>

<style scoped>
.action {
  font-size: 15px;
  width: 1.2em;
  color: darkblue;
  opacity: 1;
  margin-left: 5px;
  /* Adjusted margin-left instead of padding-left */
}

.title .rotate-icon {
  transition: transform 0.3s ease;
  /* Added smooth transition effect */
}

.title:not(.collapsed) .rotate-icon {
  transform: rotate(90deg);
}


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
  align-items: center;
  /* Align items vertically */
}

.icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  margin-left: -20%;
  padding-top: 7%;

}

.title.user {
  padding-left: 3%;
}

.title.course {
  padding-left: 4%;
}

.action.user {
  margin-left: 23px;
}

.icon.user {
  padding-left: 6%;
}

.icon.course {
  padding-left: 6%;
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

.subtitle {
  position: relative;
  display: block;
  min-width: 60px;
  height: 50px;
  color: #9b59b6;
  margin-left: 12px;
  cursor: pointer;
}

.sidebar-collapse .title {
  display: none;
  /* Hide the title when collapsed */
}

.sidebar-collapse .subtitle {
  display: none;
  /* Hide the title when collapsed */
}

.sidebar-item {
  display: flex;
  cursor: pointer !important;
  align-items: center;
}

.sidebar-item .icon {
  color: #9b59b6;
}

#app {
  display: flex;
  height: auto !important;
}</style>