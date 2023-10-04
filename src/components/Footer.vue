<template>
    <!-- <div class="" style="padding-bottom: 150px;"> -->
    <div class="container-fluid footer">
        <div class="container">
            <div class="row">
            <div class="col-md-5">
                <img src="../assets/images/UNUCO_LOGO.png" class="footer-logo">
                <p style="color:white;">@ 2023 onuco.com All rights reserved.</p>
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
<!-- </div> -->
</template>


<script>
export default {
    name: 'FooterView'
}
</script>


<style scoped>
.footer {
    /* position: fixed;
    bottom: 0px;
    left: 0px; */
    width: 100%;
    height:auto;
    background: #0066CC 0% 0% no-repeat padding-box;
    opacity: 1;
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

@media screen and (max-width: 912px) {
    .footer{
        height: 155px;
    }
}
</style>