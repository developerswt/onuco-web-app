<template>
    <menu  style="margin-top: 68px;">
  <ul>
   
            <li class="nav-item active">
            <router-link to="/SideBar"> <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></router-link>
    </li>
    <li><router-link to="/ApLecture"> <span>Lecturers</span></router-link>
    </li>
    <li><a href="#">Students</a></li>
    <li><a href="#">Billing</a></li>
    <div class="sidebar-heading">
        ACCOUNT PAGES
    </div>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Sign Out</a></li>
  </ul>
</menu>
</template>
<script>

</script>
<style scoped>

* {
 
 padding: 0;
}

/* Isto é necessário para não haver rolagens horizontais quando movermos os elementos */
html, body {overflow-x: hidden;}

body {
 font: 100% arial, verdana, tahoma, sans-serif;
 color: #FFF;
 background-color: #f1c40f;
}

header {
 background:  rgb(17, 205, 239);
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
 background:  rgb(17, 205, 239);
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
</style>

