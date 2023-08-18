<template>
    <Carousel />
    <Carouseltwo />
  
 

    <div class="container-fluid jk">
        <div class="container" id="home_container">
            <Academics />
        <TopRatedCourses />
        <BestLecture />
        </div>
       
    </div>
    <Offer />
    <div class="container-fluid content">
        <div class="container" >
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
import Carouseltwo from './Carouseltwo.vue'


export default {
    name: 'HomeView',
    components: {
        Carousel,
        Academics,
        TopRatedCourses,
        BestLecture,
        Offer,
        Carouseltwo
       
    }
}
</script>

<style scoped>
.jk {
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}


@media screen and (max-width: 600px) {
    .Opt-in input[type=text] {
        width:55% !important;
        font-size: 15px !important;

    }
    .Opt-in input[type=submit]{
        width:auto !important;
        font-size: 15px !important;
    }

}
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
    padding: 10px;
    width: 40%;
    margin-top: 3px;
    font-size: 17px;
    border: none;
}

.Opt-in input[type=submit] {
    padding: 10px;
    background: #F57200;
    font-size: 17px;
    border: none;
    cursor: pointer;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
    width:150px;
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

.Opt-in a {
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

.acdemic_block{
    max-width:1300px;
    margin:0 auto;
}
</style>
