<template>
    <div class="container-fluid category-test pt-3" style="padding-left: 0px;">
        <div class="container" style="padding-left: 0px;">
            <h4 class="academic_head_text">

                <span id="aca_text">Top</span>Rated Courses
                <router-link to="/TopCourse">See all</router-link>
            </h4>
        </div>
    </div>
    <section id="Course_section">   
        <div class="container-fluid mb">
            <carousel :settings="settings" :breakpoints="breakpoints">
                <slide v-for="course in courses" :key="course.id"> 
                   
                        <div class="box">
                            <router-link :to="{ name:'CourseDetails', params:{name: course.courseName}}" style="text-decoration: none;">
                                <div class="wer">
                                    <!-- <img class="card-img-top offer1" src="../assets/images/java.jpg" alt="Card image cap" style="height: 155px !important;-->
                                    <div class="card-img-top offer1" style="height: 155px !important; background-color: rgb(75, 130, 146); color: white;"><br>
                                        <p>{{ course.name }}</p>
                                    </div>
                                    <div class="offer">
                                        <img class="card-img-top" src="../assets/images/offer.png">
                                    </div>
                                    <div class="offer-details">
                                        <span class="card-image-top"><b>20% OFF</b></span>
                                    </div>
                                </div>
                                <div class="card-body" >
                                    <p class="card-text">{{course.description.slice(0,65)}}...</p>
                                    <div class="text-left price" style="float: right;">
                                        <p style=" color:#707070 !important;">&#8377;<del style="margin-right: 5px;">{{ course.actualPrice }}</del><b style="margin-right: 2px; color:black">&#8377;{{ course.discountPrice }}</b></p>
                                
                                    </div> <br>
                                    <div class="row">
                                        <div class="col-sm-6  star">
                                            <StarRatings :rating="course.starRating || 0" :max-rating="5" />
                                        </div>
                                        <div class="col-sm-6" >
                                            <a href="#" class="btn btn-primary" >Buy Now</a>
                                        </div>
                                    </div>
                                </div>
 
                  
                            </router-link>
                        </div>   
                   

                </slide>
                <template #addons>         
                    <navigation >
                        <!-- <template #next>
                            <i class="fa fa-chevron-right" style="--fa-secondary-color: #0400e0;"></i>
                        </template>
                        <template #prev>
                            <i class="fa fa-chevron-left" style="--fa-secondary-color: #0400e0;"></i>
                        </template> -->
                    </navigation>
                
                </template>
            </carousel>
        </div>
                 
                    
           
            <!-- <div class="box">
                <router-link to="/Universities" style="text-decoration: none;">
                    <div class="wer">
                        <img class="card-img-top offer1" src="../assets/images/java.jpg" alt="Card image cap">
                        <div class="offer">
                            <img class="card-img-top" src="../assets/images/offer.png">
                        </div>
                        <div class="offer-details">
                            <font class="card-image-top"><b>20 % OFF</b></font>
                        </div>
                    </div>
                    
                    <div class="card-body">
                       
                        <p class="card-text">Data Management Sysyems & Visualization software developement</p>
                        <div class="text-left price" style="float: right;">
                           <p>&#8377;<del style="margin-right: 5px;">2099</del><b style="margin-right: 2px;">&#8377;1999</b></p>
                                
                            </div> <br>
                           <div class="row">
                            <div class="col-sm-6  star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="col-sm-6" >
                                <a href="#" class="btn btn-primary" >Buy Now</a>
                            </div>
                           </div>
                        </div>
 
                </router-link>
            </div> 
            <div class="box">
                <router-link to="/Universities" style="text-decoration: none;">
                    <div class="wer">
                        <img class="card-img-top offer1" src="../assets/images/java.jpg" alt="Card image cap">
                        <div class="offer">
                            <img class="card-img-top" src="../assets/images/offer.png">
                        </div>
                        <div class="offer-details">
                            <font class="card-image-top"><b>20 % OFF</b></font>
                        </div>
                    </div>
                    <div class="card-body">
                       
                        <p class="card-text">Data Management Sysyems & Visualization software developement</p>
                        <div class="text-left price" style="float: right;">
                           <p>&#8377;<del style="margin-right: 5px;">2099</del><b style="margin-right: 2px;">&#8377;1999</b></p>
                                
                            </div> <br>
                           <div class="row">
                            <div class="col-sm-6  star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="col-sm-6" >
                                <a href="#" class="btn btn-primary" >Buy Now</a>
                            </div>
                           </div>
                        </div>
 
                </router-link>
            </div>
            <div class="box">
                <router-link to="/Universities" style="text-decoration: none;">
                    <div class="wer">
                        <img class="card-img-top offer1" src="../assets/images/java.jpg" alt="Card image cap">
                        <div class="offer">
                            <img class="card-img-top" src="../assets/images/offer.png">
                        </div>
                        <div class="offer-details">
                            <font class="card-image-top"><b>20 % OFF</b></font>
                        </div>
                    </div>
                    <div class="card-body">
                       
                        <p class="card-text">Data Management Sysyems & Visualization software developement</p>
                        <div class="text-left price" style="float: right;">
                           <p>&#8377;<del style="margin-right: 5px;">2099</del><b style="margin-right: 2px;">&#8377;1999</b></p>
                                
                            </div> <br>
                           <div class="row">
                            <div class="col-sm-6  star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="col-sm-6" >
                                <a href="#" class="btn btn-primary" >Buy Now</a>
                            </div>
                           </div>
                        </div>
 
                </router-link>
            </div> -->
      
    </section>
</template>


<script>
import axiosInstance from '../config/axiosInstance'
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import StarRatings from './StarRatings.vue';

export default {
    name: 'TopRatedCourses',
    components: {
       
       Carousel,
        Slide,
       StarRatings,
        Navigation,

    },
    data() {
        return {
            isLoading: false,
            courses: [],
            settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
   
        breakpoints: {
   
            900: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            820: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            768:{
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
            600: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            375:{
                itemsToShow: 1,
                snapAlign: 'center',
            },
            360:{
                itemsToShow: 1,
                snapAlign: 'center', 
            },
            540:{
                itemsToShow: 2,
                snapAlign: 'center', 
            },
            280:{
                itemsToShow: 1,
                snapAlign: 'center', 
            }
          
        },
        }
    },
    
    async created() {   
        try {
            const res = await axios.get(`https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api/TopRatedCourses`);
            this.courses = res.data;
            console.log(this.courses);
            for (const course of this.courses) {
                const res = await this.getByRatings(course.id);
                course.starRating = res.averageRating;
            }
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async getByRatings(courseId) {
            try {
                const result = await axiosInstance.get(`/Ratings?id=${courseId}&objectTypeId=5`);
                return result.data;
            } catch (error) {
                console.error(error);
                return 0; // or handle error accordingly
            }
        },
    }
}
</script>



<style scoped>
/* .container-fluid category-test pt-3{
    padding-left: 0%;
} */

.category-test a {
    text-decoration: none;
}

.card-image-top {
    font-weight: bold;
}
.category-test h4 a {
    float: right;
    color: #0d4b7e;
    font-size: 17px;
    font-family: 'Noto Sans', sans-serif;
  
}

/* .box .offer {
    width: 100px;
    height: 20px;
    position: relative;
    top: -177px;
    left: -5px;
    font-size: 12px;
} */
/* .offer-details {
    font-size: 12px;
    color: white;
    position: relative;
    top: -179px;
    left: -85px;
} */
/* .btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
}
.btn {
    position: relative;
    left: 15%;
} */
/* .wr {
    position: relative;
    left: 9px;
    top: -4px;
    font-size: 12px;
} */
/* .box  offer {
    position: absolute;
    width: 10%;
    height: 7%;
    top: -10px;
    left: -4px;
    font-size: 12px;
} */

/* .box .card-text {
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
    color: black;
} */
/* 
.box .card-title {
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    color: black;
    margin-top: -20px;
} */

.box .star {
    color: orange;
    position: relative;
    top: 8px;
    left: -29px;
    letter-spacing: 2px;
    display: flex;
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

    height: 310px;
    /* UI Properties */
    width: 321px;
    /* border: 1px solid #FFFFFF; */
    cursor: pointer;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    opacity: 1;
    margin-bottom: 3%;
    margin-top: 20px;

}

.box .row {
    padding: 12px 10px;
}

@media screen and (max-width: 400px){

.box {
    width: 100%;
    margin-bottom: 35px;
    height: 360px;
}
}

@media screen and (max-width: 600px) {
    .box {
        width: 100%;
        margin-bottom: 35px;
        height: 370px;
    }

    .box .offer {
        position: absolute;
        top: -13px;
    }

    .offer-details {
        position: relative;
        top: -200px;
    }

    .academic_head_text {
        font-size: 15px !important;
        padding-left: 0 !important;

    }

    .category-test h4 a {
        padding-right: 0;
        font-size: 15px !important;
    }
}

@media only screen and (min-width: 600px) and (max-width: 912px) {
    .box {
        width: 47%;
        margin-bottom: 35px;
        height: 380px;
    }
}

@media only screen and (min-width: 950px) and (max-width: 1024px) {
    .box {
        width: 30%;
        margin-bottom: 3%;
        height: 380px;
    }
}

@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text {
        font-size: 20px;
    }

}

.price p {
    color: black;
    float: left;
    width: 35%;
}

.price a {
    width: 60%;
    float: right;

}

.offer {
    position: absolute;
    width: 90px;
    height: 10px;
    top: -12px;
    left: -5px;

}

.offer-details {
    position: absolute;
    top: -10px;
    left: 5px;
    color: white;
    font-size: 14px;
}

.wer {
    position: relative;
}

.academic_head_text {
    color: #006acd;
    padding-left:0px;
    font-size: 20px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}
.box .card-text {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
}
.box .card-title {
    margin-top: -20px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
}
.btn{
    width: 120px; 
    height: 37px;
    margin-left: 10px; 
    margin-left: 28px;
}

.card-body{
    padding: 1rem;
}
@media screen and(max-width: 1024px) {
.btn{
   
    margin-left: 115px;
    margin-top: 0px;
}

.box{
height: auto;
}
}
@media only screen and (min-width: 300px) and (max-width: 700px) {
    .btn{ 
    margin-left: 118px;
    margin-top: -30px;

   
} 
}

@media screen and (min-width: 100px) and (max-width: 300px) {

.btn[data-v-3344e108] {
    margin-left: 75px;
    margin-top: -30px;
    width: 93px;
    font-size: 15px;
}
.box {
    width: 100%;
    margin-bottom: 35px;
    height: 320px;
}
}
@media(max-width:520px){
    .box{
    width: 86%;
    margin-bottom: 24px;
    height: 335px;
}
.btn{
    margin-left: 90px;
    margin-top: -30px;
}
.fa{
    font-size: 16px; 
}

}
.fa{
    font-size: 16px;
}


</style>

