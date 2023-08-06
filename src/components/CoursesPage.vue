<template>
    <div class="container-fluid jk">
        <h2><b>Engineering</b> Courses</h2>
        <div class="mb">
            <div class="row pt-4">
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                <div class="box">
                    <router-link to="/Universities" style="text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>Computer Science</h5>
                                <p>Computer Science</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
            </div>
        </div>
        <Offer />
    </div> 
</template>

<script>
import Offer from './Offer.vue'

export default {
    name: 'CoursesPage',
    components: {
        Offer
    }
}
</script>

<style scoped>
.jk {
    padding-top: 7%;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }
}
.mb .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
}
.box {
    top: 168px;
    left: 697px;
    height: 95px;
    /* UI Properties */
    width: 24%;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 80px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    margin-bottom: 1%;
    
}
.box .row {
    padding: 12px 10px;
}


.box h5 {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}
.box p {
    font-size: 14px;
    line-height: 35%;
    text-align: left;
    
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.49;
}
@media screen and (max-width: 600px) {
    .box .col-md-3 {
        float: left;
        width: 25%;
    }
    .box .col-md-9 {
        float: right;
        width: 75%;
    }
    .box {
        width: 100%;
        margin-bottom: 5%;
    }
}
@media only screen and (min-width: 600px) and (max-width: 912px) {
    .box {
        width: 47%;
        margin-bottom: 3%;
    }
}
@media only screen and (min-width: 950px) and (max-width: 1024px) {
    .box {
        width: 45%;
        margin-bottom: 3%;
    }
}
h2 {
    font: normal normal 600 22px/30px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
}
</style>
