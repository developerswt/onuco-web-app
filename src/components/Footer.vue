<template>
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-md-6">
                <img src="../assets/images/logo1.png" class="footer-logo">
                <p>@ 2023 onuco.com All rights reserved.</p>
            </div>
            <div class="col-md-6 social-link">
                <p>Communities | Courses | Trainers | FAQs | Blog | Privacy | Terms of Service</p>
                <p>Email: name@example.com Call: 9845098450</p>
                <p>Connect with Us:
                    <i class="fa fa-facebook"></i>&nbsp;
                    <i class="fa fa-twitter"></i>&nbsp;
                    <i class="fa fa-google"></i>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'FooterView'
}
</script>


<style scoped>
.footer {
    top: 1582px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #0066CC 0% 0% no-repeat padding-box;
    opacity: 1;
}
.footer-logo {
    margin-top: 10%;
    width: 30%;
    height: 30%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
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
</style>