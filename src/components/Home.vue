<template>
    <Carousel />
    <div class="container-fluid jk">
        <Academics />
        <TopRatedCourses />
        <BestLecture />
    </div>
    <Offer />
    <div class="container-fluid content">
        <div class="container">
            <div class="Opt-in">
                <h4>Opt-in for Onuco Content</h4>
                <form>
                    <input type="text" placeholder="Email Address " name="search">
                    <input type="submit" value="Subscribe">
                </form>
                <p>By Submitting this form, I agree to Onuco's <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </div>
    <div class="container pt-4 mb-5">
        <img src="../assets/images/add.png" style="width: 100%; height: 100%;">
    </div>        
        
</template>

<script>
import Academics from './Academics.vue'
import Carousel from "./Carousel.vue"
import TopRatedCourses from "./TopRatedCourses.vue"
import BestLecture from "./BestLecture.vue"
import Offer from './Offer.vue'

export default {
    name: 'HomeView',
    components: {
        Carousel,
        Academics,
        TopRatedCourses,
        BestLecture,
        Offer
    }
}
</script>

<style scoped>
.jk {
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
/* .box {
    padding: 15px 20px 0px;
    background-color: #FF9900;
    margin-bottom: 3%;
    background: #FF9900 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    width: 675px;
    top: 1274px;
    left: 118px;
    height: 146px;
    text-align: left;
    color: white;
}
.box h2 {
    font: normal normal normal 22px/30px Segoe UI;
    letter-spacing: 0px;
    opacity: 1;
}
.box p {
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 0.8;
}
.box .col-md-4 p {
    font-size: 14px;
}
.box .col-md-8 {
    text-align: right;
}
@media screen and (max-width: 600px) {
    .box {
        padding: 15px 20px 0px;
        background-color: #FF9900;
        margin-bottom: 3%;
        background: #FF9900 0% 0% no-repeat padding-box;
        border-radius: 6px;
        opacity: 1;
        width: 100%;
        top: 1274px;
        left: 118px;
        height: 146px;
        text-align: left;
        color: white;
    }
    .box p {
        font: normal normal normal 16px/21px Segoe UI;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 0.8;
    }
    .box .col-md-4 p {
        font-size: 14px;
        width: 35%;
        float: left;
    }
    .box .col-md-8 {
        float: right;
        width: 65%;
        position: relative;
        top: -53px;
        left: 38%;
    }
} */
.content {
    top: 1582px;
    left: 0px;
    width: 100%;
    height: 227px;
    background: #0066CC 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom: 2%;
}
.Opt-in h4 {
    text-align: center;
    font: normal normal normal 20px/20px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding: 58px 0px 0px;
}
.Opt-in form {
    text-align: center;
    margin-top: 2%;
}
.Opt-in input[type=text] {
  padding: 6px;
  width: 40%;
  margin-top: 3px;
  font-size: 17px;
  border: none;
}
.Opt-in input[type=submit] {
  padding: 6px;
  background: #F57200;
  font-size: 17px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  text-transform: uppercase;
  opacity: 1;
}

.topnav .search-container button:hover {
  background: #ccc;
}
.Opt-in p {
    text-align: center;
    margin-top: 2%;
    font: normal normal normal 12px/20px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
}
.Opt-in a{
    color: #FFFFFF;
    cursor: pointer;
}
/* .add img {
    position: relative;
    bottom: 30px;
    left: 60px;
}
@media screen and (max-width: 912px) {
    .add img {
        display: none;
    }
} */
</style>
