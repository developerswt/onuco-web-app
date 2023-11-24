<template>
    <div class="container-fluid mt-5">
        <header>
          <span class="menu-anchor" @click="toggleMenu" :class="{ 'menu-active': isMenuActive }"></span>
 
</header>

<menu  style="margin-top: 68px;">
  <ul>
   
            <li class="nav-item ">
            <router-link to="/ApHome" class="nav-link"> <i class="fas fa-fw fa-tachometer-alt"> </i>Dashboard</router-link>
    </li>
    <li><router-link to="/ApFaculty">Lecturers</router-link></li>
    <li><router-link to="/StudentDetails">Students</router-link></li>
    <li><router-link to="/ApBilling">Billing</router-link></li>
    <div class="sidebar-heading">
        ACCOUNT PAGES
    </div>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Sign Out</a></li>
  </ul>
</menu>
</div>
  </template>
  <!-- <script>
  $(document).ready(function(){
$('.menu-anchor').on('click touchstart', function(e){
$('html').toggleClass('menu-active');
  e.preventDefault();
});

})
</script> -->
<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log('toggleMenu called');

      this.isMenuActive = !this.isMenuActive;
      document.querySelector('html').classList.toggle('menu-active');
    },
  },
}
</script>

<style scoped>

* {
 
  padding: 0;
}


html, body {overflow-x: hidden;}

body {
  font: 100% arial, verdana, tahoma, sans-serif;
  color: #FFF;
  background-color: #f1c40f;
}

header {
  /* background:  rgb(17, 205, 239); */
  background: radial-gradient(at right bottom, #0066CC -15%,  #9CCEFF  80%);
  padding: 30px;
  overflow: hidden;
}

header h1 {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  width: 80%;
  font-size: 1.5em;
}
h1 a {color: #FFF; text-decoration: none;}

header input {
  float: right;
  padding: 10px;
  width: 200px;
  border: none;
}

.main {
  padding: 30px;
  background-color:white;
}
.main p {
  font-size: .9em;
  line-height: 1.2em;
  margin-bottom: 20px;
}

.menu-anchor {
  width: 40px;
  height: 32px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  text-indent: -9999px;
  overflow: hidden;
  cursor: pointer;
  background: #FFF;
}

.menu-anchor:before {
  content: "";
  display: block;
  margin: 7px auto;
  width: 70%;
  height: 0.25em;
  background:  rgb(17, 205, 239);
  box-shadow: 0 .45em 0 0  rgb(17, 205, 239), 0 .9em 0 0  rgb(17, 205, 239);
}

.menu-active .menu-anchor {background:white;}

menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 220px;
  height: 100%;
  padding-top: 10px;
  background:  white;
  box-shadow: inset -5px -10px 10px 0 rgba(0,0,0,.3)
}

menu li a {
  display: block;
  border-bottom: 1px solid rgba(255,255,255,.3);
  margin: 0 10px;
  padding: 10px;
  color:  rgb(17, 205, 239);
  text-decoration: none;
}

menu li a:hover {
  /* background:  rgb(17, 205, 239); */
  background: radial-gradient(at right bottom, #0066CC -15%,  #9CCEFF  80%);
  color:  white;
}


menu {
  -webkit-transform: translateX(-220px);
  -moz-transform: translateX(-220px);
  -ms-transform: translateX(-220px);
  transform: translateX(-220px);
  -webkit-transition: all .25s linear;
  -moz-transition: all .25s linear;
  -ms-transition: all .25s linear;
  transition: all .25s linear;
}


header, .main {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all .25s linear;
  -moz-transition: all .25s linear;
  -ms-transition: all .25s linear;
  transition: all .25s linear;
}

/*
   Com a classe menu-active na tag HTML
*/
.menu-active menu {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}

.menu-active header, 
.menu-active .main {
  -webkit-transform: translateX(220px);
  -moz-transform: translateX(220px);
  -ms-transform: translateX(220px);
  transform: translateX(220px);
}
/* .cardpd{
  padding: 0px !important;
} */
 .card {
  position: relative;
  min-width: 300px;
  height: 140px;

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
 
  border-radius: 15px;

  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}
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

  color: black;
  z-index: 1;
  transition: 0.5s;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: #0d4b7e;
  font-size: 19px;
}

  .card .box .content p {
  
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

@media screen and (max-width:520px) {
   .card .box .content h2 {
  position: absolute;
  top: 0px;
  left: 0;
  font-size: 2.7rem;
  color: rgba(41, 37, 37, 0.1);
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

.sidebar-heading {
  text-align:left;
  padding: 0 1rem;
  font-weight: 800;
  font-size: 15px;
  color: #b7b9cc;
}
 .view{
    height: 240px;
}
</style>