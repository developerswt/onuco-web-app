<template>
    <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-navicon" style="color:black; font-size:28px;"></i></span>
            </button>
         <a class="navbar-brand " href="/"><img src="../assets/images/logo1.png" class="logo"></a>

            <el-icon class="el-input__icon search2" @click="toggleSearchBoxVisibility"
                                style="color: blue;cursor: pointer;margin-right: 13px;">
                            <Search />
                        </el-icon>           
                        <el-row class="demo-autocomplete search2" style="width: 280px; margin-right: 25px; position: relative; right: 9px;" v-if="showSearchBox && showSearchBoxOnNavbar">
    <el-col :span="23">
        <el-autocomplete
            v-model="searchTerm"
            :fetch-suggestions="querySearch"
            :trigger-on-focus="false"
            value-key="title"
            size="large"
            style="background-color: color: blue; font-size: 12px; position: relative;left: 52px;"
            class="w-100 search"
            @select="handleSelect"
            clearable
            placeholder="Search..."
            @keydown.enter="handleKeyEnter(searchTerm)"
        >
            <template #suffix>
                <el-icon
                    class="el-input__icon"
                    @click="handleKeyEnter(searchTerm)"
                    style="color: blue; cursor: pointer;"
                >
                    <Search />
                </el-icon>
            </template>
        </el-autocomplete>
    </el-col>
</el-row>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item" :class="{ 'active': isActive('/') }">
                        <router-link class="nav-link" to="/" >Home</router-link>
                    </li>
                    <li class="nav-item"   :class="{ 'active': isActive('/Mylearnings') }">
                        <router-link class="nav-link" v-if="isLoggedIn" to="/Mylearnings" >My Learning</router-link>
                    </li>
                    <li class="nav-item" :class="{ 'active': isActive('/Courses') || isActiveAcademia() }">

                        <router-link class="nav-link"  to="/Courses" >Courses</router-link>
                    </li>
                  
                    <li class="nav-item" :class="{ 'active': isActive('/Announcement') }">

                        <router-link class="nav-link" to="/Announcement" >Announcement</router-link>
                    </li>
                    <li class="nav-item" :class="{ 'active': isActive('/Contact') }">

                        <router-link class="nav-link" to="/Contact" >Contact Us</router-link>
                    </li>


                </ul>


                <ul class="navbar-nav ml-auto">
                    <el-row class="demo-autocomplete search1" style="width: 250px;  margin-right: 25px; " v-if="showSearchBoxOnNavbar">
                        <el-col :span="23">
                            <el-autocomplete v-model="searchTerm" :fetch-suggestions="querySearch" :trigger-on-focus="false"
                                value-key="title" size="large" style="background-color: color: blue; font-size: 12px;"
                                class=" w-100  search"  @select="handleSelect" clearable placeholder="Search..."
                                @keydown.enter="handleKeyEnter(searchTerm)">
                                <template #suffix>
                                    <!-- <el-icon class="el-input__icon" v-if="searchTerm !== ''" style="position: absolute;right: 27px; cursor: pointer;" @click="clearInput"><CircleClose /></el-icon> -->
                                    <!-- <el-icon class="el-input__icon" @click="handleIconClick">
                                    <edit />
                                    </el-icon> -->

                                    <el-icon class="el-input__icon" @click="handleKeyEnter(searchTerm)"
                                        style="color: blue;cursor: pointer;">
                                        <Search />
                                    </el-icon>
                                </template>
                            </el-autocomplete>
                        </el-col>
                    </el-row>

                    <li class="nav-item dropdown " v-if="isLoggedIn">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hi {{ isuser.name }}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" to="/UpdatedProfile"><i class="fa fa-user" aria-hidden="true"></i> Profile</router-link>
                            <router-link class="dropdown-item" to="UserNotification"><i class="fa fa-bell" aria-hidden="true"></i> Notification</router-link>
                            <router-link class="dropdown-item" to=""><i class="fa fa-cog" aria-hidden="true"></i> Setting</router-link>
                            <router-link class="dropdown-item" to="" @click="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</router-link>
                        </div>
                    </li>
                    <li class="nav-item" v-else :class="{ 'active': isActive('/Login') }">
                        <router-link to="/Login" class="nav-link">Login<span style="padding-left:5px;">/ Sign
                                Up</span></router-link>
                    </li>
                    


                </ul>
            </div>
        </div>

    </nav>
</template>

<script>
import { Auth } from 'aws-amplify';

import axios from 'axios';

export default {
    name: "NavbarView",
    props: {
        showSearchBox: Boolean,
        showSearchBoxes:Boolean
    },
    data() {
        return {
            searchTerm: null,
            suggestions: [],
            showSuggestions: false,
            dataarray: [],
            searchTerm: null,
            suggestions: [],
            showSuggestions: false,
            dataarray: [],
            name: '',
            // username: localStorage.getItem("username")
            showSearchBox: false,
            showSearchBoxes: true
            
        }
    },
    computed: {
        showSearchBoxOnNavbar() {
            return this.$route.path !== '/search';
        },
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
        isuser() {
            console.log(this.$store.state.user.signInUserSession.idToken.payload);
            return this.$store.state.user.signInUserSession.idToken.payload;
        },
        istoken() {
            return this.$store.state.token;
        },
        // user() {
        //     return this.$store.state.user;
        // },
    },
    methods: {
        toggleSearchBoxVisibility() {
         this.showSearchBox = !this.showSearchBox;
        },
        handleKeyEnter(item) {
            if (item.length >= 2) {
                this.$router.push({ path: '/search', query: { data: item } });
            }
            console.log(item)
            document.querySelector(".search").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            handleKeyEnter(this.value); // Assuming this.value holds the current search term
        }
    });
        },
        handleSelect(item) {
            if (item.title.length >= 2) {
                this.$router.push({ path: '/search', query: { data: item.title } });
                console.log(item);
            }
            console.log(item);
            // this.$router.push({path:'/GlobalSearchPage',query:{Search:item}});

        },
        querySearch(queryString, cb) {
            console.log(queryString)
            let results = queryString ? this.createFilter(queryString) : this.dataarray;
            console.log(results);
            cb(results);

        },
        createFilter(queryString) {
            console.log("queryString", queryString)
            axios.get("https://migzype4x8.ap-southeast-1.awsapprunner.com/api/GlobalSearch?searchTerm=" + this.searchTerm)
                .then((res) => (this.dataarray = res.data));
            console.log(this.dataarray);
            return this.dataarray;

        },
        async logout() {
            try {
                Auth.signOut();
                this.$store.commit('isLoggedIn', false);
                this.$store.dispatch('logout');
                localStorage.removeItem("username");
                // this.$router.push("/Login");
            } catch (error) {
                alert(error.message);
            }
        },
        isActive(route) {
            return this.$route.path === route;
        },
        isActiveAcademia() {
      // Check if the current route starts with "/Academia/" and has a parameter
            return this.$route.path.startsWith('/Academia/') && this.$route.params.name;
        },
  
        clearInput() {
            this.searchTerm = '';
        }

    },
    created() {
  try {
    const jwtToken = localStorage.getItem('username');
    if (jwtToken) {
      const parts = jwtToken.split('.');
      if (parts.length === 3) {
        const payload = parts[1];
        const decodedPayload = atob(payload);
        console.log(decodedPayload);
        const jwtPayload = JSON.parse(decodedPayload);
        if (jwtPayload.email) {
          this.name = jwtPayload.name;
          console.log(this.name);
        } else {
          console.log('JWT payload does not contain the "name" property.');
        }
      } else {
        console.log('Invalid JWT format.');
      }
    } else {
      console.log('JWT token not found in local storage.');
    }
  } catch (error) {
    console.error('Error decoding JWT:', error);
  }
}

}


</script>

<style scoped>
.search1{
    display: block;
}
.search2{
    display: none;
}
.logo {
    width: 100px;
    height: 42px;
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
    background: #FFFFFF 0% 0% no-repeat padding-box;
    /* background: #E4F0FE 0% 0% no-repeat padding-box; */
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

/* li>a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
} */

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



    .search-bar {
        justify-content: space-between;
        margin-right: 0 !important;
        margin-right: 0 !important;

    }

    .parent_blocks {
        justify-content: center;

    }



    .nav-link {
        font-size: 15px;

    }


}


@media (min-width: 768px) and (max-width: 992.92px) {

    .search-bar {
        justify-content: space-between;
        margin-right: 0 !important;
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

.el-input__inner::placeholder {
    font-size: 12px !important;
}

.search-bar {
    background-color: #FFFFFF7D 0% 0% no-repeat padding-box;
    background-color: #FFFFFF7D 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid blue;
    border: 1px solid blue;
    padding: 10px;
    /* backdrop-filter: blur(4px) saturate(180%); */


}

.search-bar input {
    background: transparent;

    border: 0;
    outline: none;

    font-size: 14px;
    color: black;
    color: black;
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



.container-fluid {
    max-width: 1350px;
    margin: 0 auto;
}

@media only screen and (min-width: 992px) and (max-width: 1400px) {
    .nav-link {
        font-size: 15px;
    }
}

.search-bar {
    position: relative;
    /* Create a positioning context */
}


.navbar-autocomplete {
    display: flex;
    align-items: center;
}

.autocomplete-input {
    width: 200px;
    /* Adjust the width as needed */
}

.demo-autocomplete .autocomplete-input {
    background-color: blue;
}

.el-autocomplete .el-input__inner {
    font-size: 12px;
}

.search {
    color: blue;
}

/* .router-link-exact-active {
    border-bottom: 2px solid blue;
    bottom: -15px;
} */
.nav-item.active {
  border-bottom: 2px solid blue; /* Add the border for the active link */
  margin-bottom: -16px; /* Add margin for the active link */
  margin-left: 0px;
}
@media screen and (max-width:912px) {
    .search1{
    display: none;
}
.search2{
    display: block;
    font-size: 22px;
    position: relative;
    bottom: 4px;
}
}

@media screen and (max-width:280px) {
    .search1{
    display: none;
}
.search2{
    display: block;
    font-size: 20px;
    position: relative;
    right: -6px;
}
}
@media screen and (max-width: 920px) {
    .nav-item.active {
        display: none;
    }
}
</style>