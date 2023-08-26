<template>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">

        <div class="container">
          

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-navicon" style="color:black; font-size:28px;"></i></span>
            </button>

            <router-link class="navbar-brand " to="/"><img src="../assets/images/logo1.png" class="logo"></router-link>
            <a class="nav-link gh" href="#"><i class="fa fa-sign-in"></i></a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Courses">Courses</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Announcement">Announcement</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Contact">Contact Us</router-link>
                    </li>
                 

                </ul>

                <ul class="navbar-nav ml-auto">
                    <form class="search-bar">
                        <input class="text" type="search" placeholder="Search" aria-label="Search">
                        <!-- <button class="" type="submit"><i class="fa fa-search"></i></button> -->
                        <i class="fa-solid fa-magnifying-glass" style="color: #0066cc;"></i>
                    </form>
                  
                    <li class="nav-item dropdown active" v-if="isLoggedIn">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hi {{ this.isuser.attributes.name }} 
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" to="/Picture">Profile</router-link>
                            <router-link class="dropdown-item" to="" @click="logout">Logout</router-link>
                            <router-link class="dropdown-item" to=""></router-link>
                        </div>
                    </li>
                    <li class="nav-item" v-else>
                        <router-link to="/Login" class="nav-link">Login <span style="padding-left:10px;">/ Sign Up</span></router-link>
                    </li>
              
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to="/Signup">  Sign Up</router-link>
                    </li> -->
                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
import { Auth } from 'aws-amplify';


export default {
    name: "NavbarView",
    data() {
        return {
            // userInfo: JSON.parse(localStorage.getItem('username')),
            // userAttributes: null,
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
        isuser() {
          console.log(this.$store.state.user);
          return this.$store.state.user;
        },
        istoken() {
          console.log(this.$store.state.token);
          return this.$store.state.token;
        }
    },
    methods: {
        async logout() {
            try {
                await Auth.signOut();
                // await Auth.forgetDevice();
                // console.log('Signed out and forgot device');
                this.$store.commit('isLoggedIn', false);
                this.$store.dispatch('logout')
                localStorage.removeItem("username");
                this.$router.push("/Login");
            } catch (error) {
                alert(error.message);
            }
        },
    },
}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 42px;
}

nav {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

li {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;

}

.navbar {
    background: #E4F0FE 0% 0% no-repeat padding-box;
    opacity: 1;


}

.nav-link {
    color: #707070;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
}

li>a {
    position: relative;
    color: #595959;
    text-decoration: none;
}

li>a:hover {
    color: #595959;
}

li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #595959;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

li>a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}

.gh {
    font-size: 30px;
    display: none;
}

.gh1 {
    display: block;
}

@media screen and (max-width: 768px) {
    .gh {
        display: block;
    }

    .gh1 {
        display: none;
    }
    .search-bar{
        justify-content: space-between;
        margin-right:0 !important;

    }
    
    .parent_blocks{
justify-content: center;
    }
    .nav-link{
        font-size: 15px;

    }
   
}
@media (min-width: 768px) and (max-width: 992.92px) {
    .search-bar{
        justify-content: space-between;
    margin-right: 0 !important;
    }
}
/* .search-bar {
   
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    border-radius: 50px;
    border: 1px solid black;
    padding: 0px 2px;
    backdrop-filter: blur(4px) saturate(180%);
}
.search-bar input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    padding: 5px 25px;
    font-size: 20px;
    color: rgb(44, 0, 126);
}
::placeholder {
    color: rgb(44, 0, 126);
}

 
.search-bar button {
    border: 0;    
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: none;
    background: #58629b;
    cursor: pointer;
}
@media screen and (max-with: 600px) {
    .search-bar input {
        background: transparent;
        flex: 1;
        border: 0;
        outline: none;
        padding: 5px 25px;
        font-size: 20px;
        color: rgb(44, 0, 126);
    }
    .search-bar {
        width: 100%;
    }
} */
.search-bar button i {
    width: 25px;
    outline: none;

}

.search-bar {
    background: #FFFFFF7D 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    padding: 10px;
    /* backdrop-filter: blur(4px) saturate(180%); */
    margin-right: 20px;
}

.search-bar input {
    background: transparent;

    border: 0;
    outline: none;

    font-size: 14px;
    color: #D4D4D4;
}

.search-bar button {
    border: 0;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: none;
    background: #58629b;
    cursor: pointer;
}

.search-bar button i {
    width: 25px;
    color: #fff;
    position: relative;
    left: -10px;
    bottom: 30%;
}
.container-fluid{
    max-width: 1350px;
    margin:0 auto;
}

@media only screen and (min-width: 992px) and (max-width: 1400px) {
    .nav-link{
        font-size: 15px;
    }
}


</style>