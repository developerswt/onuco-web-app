<template>
    <nav class="navbar navbar-expand-lg fixed-top" style="background: #EFF5FC 0% 0% no-repeat padding-box; opacity: 1;">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fa fa-navicon" style="color:black; font-size:28px;"></i></span>
        </button>

        <router-link class="navbar-brand " to="/"><img src="../assets/images/logo1.png" class="logo"></router-link>
        <a class="nav-link gh" href="#"><i class="fa fa-sign-in"></i></a>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
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
                    <router-link class="nav-link" to="/Contactus">Contact Us</router-link>
                </li>
            </ul>
            <form class="search-bar">
                <input class="text" type="search" placeholder="Search" aria-label="Search">
                <button class="" type="submit"><i class="fa fa-search"></i></button>
            </form>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item gh1">
                    <router-link class="nav-link" to="/Login">Log in</router-link>
                </li>
                <li class="nav-item gh1">
                    <router-link class="nav-link" to="/Signup">Sign up</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    name: "NavbarView",
}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 35px;
}
nav {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
li {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    
}
.Navbar {
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
.nav-link {
    color: rgb(44, 0, 126);
}
li > a {
   position: relative;
   color: #595959;
   text-decoration: none;
}

li > a:hover {
   color: #595959;
}

li > a:before {
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

li > a:hover:before {
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
@media screen and (max-width: 600px) {
    .gh {
        display: block;
    }
    .gh1 {
        display: none;
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
</style>