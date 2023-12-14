<template>
    <div class="container-fluid footer">
        <div class="container">
            <div class="row">
            <div class="col-md-5">
                <img src="../assets/images/UNUCO_LOGO.png" class="footer-logo">
                <p style="color:white; padding-top: 5%;">&#169; 2023 onuco.com All rights reserved.</p>
            </div>
            <div class="col-md-7 social-link">
                <p>Communities | Courses | Trainers | FAQs | Blog |<router-link style="text-decoration: none; color: white;" to="/Privacy"> Privacy </router-link> | <router-link style="text-decoration: none; color: white;" to="/Terms"> Terms of Service </router-link></p>
                <p>Email: name@example.com Call: 9845098450</p>
                <p>Connect with Us:
                    <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>&nbsp;
                    <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>&nbsp;
                    <i class="fa-brands fa-google" style="color: #ffffff;"></i>
                </p>
            </div>
        </div>
        </div>
   
    </div>

    <div class="container-fluid enqiury">

        <div class="row">
            <div class="col-md-3">
               <router-link to="/" exact-active-class="activeButton"  @click="setActiveButton('home')">
                    <button class="btn button" :class="{ activeButton: activeButton === 'home' }">
                        <div class="box">
                            <img src="../assets/images/home.png" class="icon" style="width: 15px; height: 15px; position: relative;bottom: 2px;">
                        </div>
                    </button>
               </router-link>
                <h2 class="txt">HOME</h2>
            </div>
            <div class="col-md-3">
                <router-link to="/UserNotification" exact-active-class="activeButton"  @click="setActiveButton('UserNotification')">
                    <button class="btn button" :class="{ activeButton: activeButton === 'UserNotification' }">
                        <div class="box">
                            <img src="../assets/images/Icon-ionic-ios-notifications.png" class="icon" style="width: 15px; height: 15px; position: relative;bottom: 2px;">
                        </div>
                    </button> 
                </router-link> 
                <h2 class="txt" style=" position: relative; right: 0px;">NOTIFICATION</h2>
            </div>
            <div class="col-md-3" style="color: white;">
                <router-link to="/Mylearnings" exact-active-class="activeButton" @click="setActiveButton('Mylearnings')">
                    <button class="btn button "  :class="{ activeButton: activeButton === 'Mylearnings' }">
                        <div class="box">
                            <img src="../assets/images/myLEarn.png" class="icon" style="width: 15px; height: 15px; position: relative;bottom: 2px;">
                        </div>
                    </button>
                </router-link> 
                <h2 class="txt" style="  position: relative; left: 8px;">MY_LEARNING</h2>  
            </div>
            <div class="col-md-3" style="color: white;">
                <router-link to="/UpdatedProfile" exact-active-class="activeButton" @click="setActiveButton('UpdatedProfile')">
                    <button class="btn button" :class="{ activeButton: activeButton === 'UpdatedProfile' }">
                        <div class="box">
                            <img src="../assets/images/Icon-awesome-user.png" class="icon" style="width: 15px; height: 15px; position: relative;bottom: 2px;">                            
                        </div>
                    </button> 
                </router-link> 
                <h2 class="txt" style="  position: relative; left: 3px;">PROFILE</h2>
            </div>
        </div>
    </div>

</template>


<script>
export default {
  name: 'AppFooterView',
  data() {
    return {
      activeButton: 'home',
    };
  },
  methods: {
    setActiveButton(button) {
      this.activeButton = button;
    },
  },
  
};

</script>


<style scoped>
.button:active,
.button:focus  {
    background-color: #FF9924 !important;
}
.activeButton {
    background-color: #FF9924 !important;
}
.footer {
   
    width: 100%;
    height: 100%;
    background: #0066CC 0% 0% no-repeat padding-box;
    opacity: 1;
    position: relative;
    z-index: 999;
}
.footer-logo {
    margin-top: 10%;
   
    background:transparent 0% 0% no-repeat padding-box;
}
.footer .col-md-6 {
    text-align: left;
    padding-left: 10%;
}
.footer .col-md-6 p {
    text-align: left;
    margin-top: 2%;
    color: white;
}
.footer .social-link {
    margin-top: 3%;
}
.footer .social-link p {
    text-align: right;
    color: white;
}
@media screen and (max-width: 912px) {
    .footer .social-link p {
        text-align: left;
        color: white;
    }
}

.enqiury {
    background: #EEEAE4;
    background: radial-gradient(at right bottom, #0066CC -15%,  #9CCEFF  80%);
    border: 1px solid #F0F6FC;
    display: none;
    padding-top: 3px;
    padding-bottom: 3px;
}

@media screen and (max-width: 520px) {
    .enqiury {
        display: block;
        position: fixed;
        bottom: -1px;
        z-index: 999;
    }
    .footer{
    display: none !important;
}
}
/* .footer{
    display: block;
}
.footer1{
    display: none;
} */
.btn
{
    border-radius: 50%;
    display: flex !important;
    position: relative;
    left: 25px;
}

.button {
  /* padding: 6px; */
  text-decoration: none;
  display:flex !important;
  margin: 1px 2px;
  cursor: pointer;
}
.txt{
    font-family: Segoe UI;
    font-size: 11px;
    color: #FFFFFF;
    text-align: right;
}
.col-md-3{
    position: relative;
    width: 23%;
    padding-right: 15px;
    padding-left: 15px;
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* margin-right: -15px; */
    margin-left: -15px;
}
@media (min-width:400px)and(max-width:450px) {
    .activeButton{
        position: relative;
        left: 10px;
    }

}
@media (max-width: 700px) {
  .footer[data-v-4896eafd]{
    z-index: 999 !important;
  }  
}
@media (max-width: 395px){
    .btn
{
    border-radius: 50%;
    display: flex !important;
    position: relative;
    left: 18px !important;
}
}
</style>