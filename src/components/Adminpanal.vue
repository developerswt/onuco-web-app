<template>
    <div  >
        <div class="container-fluid">
           <SideBar/>
           <router-view :key="$route.fullPath" />
        </div>
    </div>
    <!-- <div class="pt-5 text-center mb-5" v-else>
        <h3>Sorry It Right Now Not Table Here. Please <router-link to="/LoginPage">Login</router-link></h3>
    </div>  -->
</template>

<script>

// import ApMenu from './ApMenu.vue'
import SideBar from './SideBar.vue'
// import APDashboard from './APDashboard.vue'
export default{
    name: "AdminPanel-world",
    components: {
       
        SideBar,
        // APDashboard,
    },
    data(){
        return{

        }
    },
    // computed: {
    //   isLoggedIn() {
    //     return this.$store.state.IsLoggedIn;
    //   }
    // },
}
</script>


<style scoped>
.container-fluid {
    width: 100%;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
}
 .pgs{
    width: 100%;
    padding-right: 0px;
    margin-right: auto;
    margin-left: auto;
 }
</style>
