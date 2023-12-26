<template>
    <div class="container jk">
        <Breadcrumbs class="pl-2" />
        <div class="Instructor_parent_block">
            <h2 class="instructor_head_text mt-4"><span id="Meet_text">Meet</span> Instructor</h2>
            <section>
                <div class="instructor-details">
                    <div class="professor-block">
                        <div class="row">
                            <div class="col-md-5 col-lg-5">
                                <div class="row">
                                    <div class="col-lg-4 col-4 col-sm-4">
                                        <div class="professor_image_block">
                                            <img
v-if="faculty.imageUrl !== ''" :src="faculty.imageUrl"
                                                class="img-fluid">
                                            <img v-else src="../assets/images/Image21.png" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-8 col-sm-8">
                                        <h5 id="prof_text">{{ faculty.name }}</h5>
                                        <div class="row">
                                            <div class="col-lg-12 mn1">
                                                <div class="row aa">
                                                    <div class="col-lg-7 col-6 col-sm-6 col-md-6">
                                                        <StarRatings :rating="ratings" :max-rating="5" />
                                                    </div>
                                                    <div class="col-lg-5 col-6 col-sm-6 col-md-6">
                                                        <p id="review_text">
                                                            <a class="rating_icons" style="cursor: pointer;" @click="showPopup()">({{ ratingCount || 0 }}
                                                            reviews)</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <p class="rating_icons"><StarRatings :rating="ratings" :max-rating="5" /> (23 reviews) </p> -->
                                        <div class="social-icons">
                                            <a :href="faculty.youTube" target="blank" class="fa fa-youtube-play"></a>
                                            <a :href="faculty.twitter" target="blank" class="fa fa-twitter"></a>
                                            <a :href="faculty.linkedin" target="blank" class="fa fa-linkedin"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-7">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="share_icon_block" style="color: aliceblue;">
                                            <img src="../assets/images/Union193.png" class="share-icon">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="btn-group">
                                            <button id="left_button" type="button" class="btn" style="color: #b1afaf;">13
                                                Following</button>
                                            <button id="right_button" type="button" class="btn" style="color: #b1afaf;">1200
                                                Follwers</button>
                                        </div>
                                    </div>
                                    <div class="app1">
                                        <div v-if="isPopupVisible" class="popup">
                                            <div class="popup-content">
                                                <div class="">
                                                    <span class="close" @click="closePopup">&times;</span>
                                                    <h5>Ratings System</h5>
                                                </div>
                                                <hr>
                                                <form @submit.prevent="submitRating">
                                                    <label for="rating">Rate the faculty :</label><br>
                                                    <el-rate v-model="rating" size="large" allow-half /><br>
                                                    <input type="submit" value="Submit">
                                                </form>
                                                <!-- Add your popup content here -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="app" class="row professor-details">
                        <div class="col-sm-12 col-lg-12">
                            <p v-if="!faculty.readMore" class="professor-details_text">{{ faculty && faculty.description ?
                                faculty.description.slice(0, 168) : '' }}
                                <span class="read" @click="toggleReadMore">...<span style="color:blue;cursor: pointer;">Read more</span></span>
                            </p>
                            <p v-if="faculty.readMore" class="professor-details_text">{{ faculty.description }}
                                <span @click="toggleReadMore"><br><span style="color:blue;cursor: pointer;">Read less</span></span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
                
        </div>
            <section id="Course_section">   
                <div class="container">
                <h5 class="course_text"><span id="course_text">Courses</span> (230)</h5>
               
                    <carousel :settings="settings" :breakpoints="breakpoints">
                    <slide  v-for="person in persons" :key="person.id">
                    
                        <router-link to="/SemesterDetails">
                           
                            <div id="instructor_card" class="card">
                                <div class="card-title">
                                    <div class="row">
                                        <div class="col-md-12 ">

                                            <div class="card_top_text">
                                                <div class="row">
                                                     
                                                    <div class="col-lg-10 col-9 col-sm-9">
                                                        <p class="ft" data-placement="top" :title="person.name" > {{ person.name.slice(0,18)}}...</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/Union193.png" style="width: 16px; height: 20px;" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p class="ft" > 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p id="small_text"  class="ft">240
                                                            hrs</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p class="ft" >{{ person.description.slice(0,50) }}...</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/Path4025.png" style="width: 30px; height:30px;" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <!-- <p style="color: #707070;" class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                       
                                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                                class="fa fa-star"></i><i class="fa fa-star-o"></i>
                                                            (23
                                                            reviews) </p> -->
                                                            <div class="row">
                                                                <div class="col-lg-6 col-6">
                                                            <p class="rating_icons"><StarRatings :rating="ratings" :max-rating="5"/></p>
                                                        </div>
                                                        <div class="col-lg-6 col-6" style="position: relative; top: 8px;left: 20px; font-size: 15px; color:rgb(112, 112, 112)">
                                                            <p> (23 reviews) </p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    
                    
                </slide>
                <template #addons>

                    <navigation>
                        <template #next>
                            <i class="fa fa-chevron-right" style="--fa-secondary-color: #0400e0;"></i>
                        </template>
                        <template #prev>
                            <i class="fa fa-chevron-left" style="--fa-secondary-color: #0400e0;"></i>
                        </template>
                    </navigation>

                </template>
            </carousel>



        </div>
    </section>
    <section id="non_course_section">
        <div class="container">
            <h5 class="course_text"><span id="course_text">Non-Academic </span> Courses (10)</h5>


            <carousel :items-to-show="3" class="courosel1" :settings="settings" :breakpoints="breakpoints">
                <slide v-for="slide in 5" :key="slide">




                    <!-- <div class="col-md-6 col-lg-4"> -->
                    <router-link to="/SemesterDetails">

                        <div id="instructor_card" class="card">
                            <div class="card-title">
                                <div class="row">
                                    <div class="col-md-12 ">

                                        <div class="card_top_text">
                                            <div class="row">

                                                <div class="col-lg-10 col-9 col-sm-9">
                                                    <p class="ft"> Math 1 (NEP Series)</p>
                                                </div>

                                                <div class="col-lg-2 col-3 col-sm-3">
                                                    <img
src="../assets/images/Union193.png"
                                                        style="width: 16px; height: 20px;" class="icon">
                                                </div>
                                                <div class="col-lg-6 col-6 col-sm-6">
                                                    <p class="ft"> 18CS81</p>
                                                </div>
                                                <div class="col-lg-6 col-6 col-sm-6">
                                                    <p id="small_text" class="ft">240
                                                        hrs</p>
                                                </div>

                                                <div class="col-lg-9 col-9 col-sm-9">

                                                    <p class="ft">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Esse,
                                                        excepturi.</p>
                                                </div>

                                                <div class="col-lg-3 col-3 col-sm-3">
                                                    <div class="video_logo">
                                                        <img
src="../assets/images/Path4025.png"
                                                            style="width: 30px; height:30px;" class="video">
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <p style="color: #707070;" class="sub_icons mb-0"><i
                                                            class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                            class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                            class="fa fa-star-o"></i>
                                                        (23
                                                        reviews) </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>


                </slide>
                <template #addons>

                    <navigation>
                        <template #next>
                            <i class="fa fa-chevron-right" style="--fa-secondary-color: #0400e0;"></i>
                        </template>
                        <template #prev>
                            <i class="fa fa-chevron-left" style="--fa-secondary-color: #0400e0;"></i>
                        </template>
                    </navigation>

                </template>
            </carousel>

        </div>
    </section>

    <section id="tab_block">
        <div class="container">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane
v-for="att in faculty.attributue" :key="att.heading" :label="att.heading"
                    :name="att.heading">
                    <div class="" v-html="att.values"></div>
                </el-tab-pane>

            </el-tabs>
        </div>
    </section>


    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    <Offer />
</template>

<script>
import axiosInstance from '../config/axiosInstance'
import Breadcrumbs from "./Breadcrumbs.vue"
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import StarRatings from './StarRatings.vue'
import Offer from './Offer.vue'
export default {
    name: 'InstructorView',
    components: {
        Offer,
        Loading,
        Breadcrumbs,
        Carousel,
        Slide,
        StarRatings,
        Navigation,

    },
    data() {
        return {
            ratingCount: '',
            rating: '',
            isPopupVisible: false,
            modalShow: false,
            readMore: false,
            isLoading: false,
            faculty: [],
            ratings: [],
            persons: [],
            settings: {
            itemsToShow: 1,
            snapAlign: 'center',
            readActivated: false,
            
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
            activeName: 'first',
            attribute: [
                { key: "Name", value: "Arun" },
                { key: "Age", value: 30 },
                { key: "Location", value: "India" },
            ],
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
        isuser() {
            console.log(this.$store.state.user.signInUserSession.idToken.payload);
            return this.$store.state.user.signInUserSession.idToken.payload;
        },
    },
    async created() {
        this.isLoading = true;
        try {
            const res = await axiosInstance.get(`/Faculty/` + this.$route.params.name);
            this.faculty = res.data;
            this.activeName = this.faculty.attributue[0].heading;
            const result = await axiosInstance.get(`/Ratings?id=` + this.faculty.id + "&objectTypeId=4");
            this.ratings = result.data.averageRating;
            this.ratingCount = result.data.ratingCount;
            console.log(this.ratings);
            const results = await axiosInstance.get(`/Bestfaculty/BestCoursesByFaculty/`+ this.faculty.id);
            this.persons = results.data;
            console.log(this.persons);

            

        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
    methods: {
        showPopup() {
            this.isPopupVisible = true;
        },
        closePopup() {
            this.isPopupVisible = false;
        },
        toggleReadMore() {
            this.faculty.readMore = !this.faculty.readMore;
        },

        // activateReadMore(){
        //     this.readActivated = true;
        // },

        handleClick(tab, event) {
            console.log(tab, event);
        },
        submitRating() {
            axiosInstance.post('/Ratings', {
                userId: this.isuser['cognito:username'],
                objectId: this.faculty.id,
                objectTypeId: 4,
                ratingScore: this.rating
            })
                .then(response => {
                    // Handle success (if needed)
                    console.log(response.data);
                    this.rating = '';
                    this.closePopup();
                })
                .catch(error => {
                    // Handle error (if needed)
                    console.error(error);
                });
        }
    }
}
</script>



<style scoped>


.jk {
    padding-top: 5%;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }

    ::v-deep #sub_text {
        text-align: left;
    }
}

@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }

    ::v-deep #sub_text {
        text-align: left;
    }

}


@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }

    ::v-deep #sub_text {
        text-align: left;
    }
}

.social-icons .fa {
    padding: 10px;
    font-size: 14px;
    width: 35px;
    text-align: center;
   
    margin: 12px 10px 0px 0px;
    /* border-radius: 50%; */
    clip-path: circle();
}

.social-icons .fa:hover {
    opacity: 0.7;
}

.social-icons .fa-linkedin {
    background: #007bb5;
    color: white;
}

.social-icons .fa-youtube-play {
    background: blue;
    color: white;
}

.social-icons .fa-twitter {
    background: #55ACEE;
    color: white;
}

.share-icon {

    background-color: green;

    clip-path: circle();
    width: 40px;
    height: 44px;
    padding: 10px;
    text-align: right;
}

.professor-name .share-icon {
    float: right;
}

.professor-name .btn-group {
    float: right;
    margin-top: 10%;
    margin-right: -5%;
}

.professor-name .btn-group {
    background-color: white;
    border-top-left-radius: 2em 2em;
    border-top-right-radius: 2em 2em;
    border-bottom-right-radius: 2em 2em;
    border-bottom-left-radius: 2em 2em;
}

.professor-details {

    text-align: left;
    /* font: normal normal normal 12px/16px Segoe UI; */
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0px;
    color: #828282;
    opacity: 1
}

.icon {
    width: 25px;
    height: 25px;
    float: right;
    color: white;
}

/* ::v-deep .advisory {
    padding-left: 23px;
} */
.video {
    width: 50px;


}

::v-deep .fa-circle {
    margin: 7px;
    position: relative;
    bottom: 7px;
}

/* ::v-deep .row_class i */
.kl .card {
    padding: 10px 10px 0px;
    /* background-color: #8B8989; */

    color: black;
    cursor: pointer;
    /* background: radial-gradient(to right, darkblue, lightgray, blue); */
    box-shadow: 0px 0px 9px #000000A1;
    border: 1px solid #FFFFFF;

}

.mn p {
    float: left;
}

.mn img {
    float: right;
}

.mn1 i {
    float: left;
}

.mn1 p {
    float: right;
}

#small_text {
    text-align: right;
}

.video_logo {
    text-align: right;
}


::v-deep .Object_text {
    color: #006acd;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
    font-family: 'Noto Sans', sans-serif;
    margin-top: 20px;
}

::v-deep .advisory_heading {
    color: black;
    font-size: 17px;
    margin-bottom: 0px;
    font-family: 'Noto Sans', sans-serif;
    margin-top: 20px;
}

::v-deep .advisory p {
    font-size: 16px;
}

::v-deep #Sub_text {
    color: #9E9E9E;
    padding-right: 20px;
}


::v-deep .Sub_paragraph {
    color: #61646B;

}

::v-deep .Objective_left_side {
    text-align: left;
}

::v-deep .Objective_left_side {
    text-align: left;
}

.round_class {
    height: 20px;
    width: 20px;
    background: orange;
    border-radius: 50%;
    margin-left: 14px;

}

::v-deep .line_class {
    width: 2px;
    height: auto;
    background: #0177FB;
    position: relative;
    top: 18px;
    left: -16px;
    margin-bottom: 18px;
    /* bottom: 10px; */

}
/* .fa-circle{
    position: relative;
    bottom: 7px;
} */

::v-deep #row_block {
    padding-left: 15px;
}

/* ::v-deep #row_block1 {
    padding: 30px 18px;
} */
/* ::v-deep .details {
    padding-left: 25px;
} */
::v-deep .row_class {
    display: flex;
    margin-top: -3px;
    /* padding-left: 25px;
    padding-left: 25px; */
}

::v-deep #education_text {
    color: #61646b;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-size: 16px;
    font-weight: bold;
    /* position: relative;
    left: 15px; */
}

::v-deep .row_class i {
    padding: 4px 0px 0px 10px;
}

.experience_block,
.research_block {
    margin-top: 30px;
}

.Instructor_parent_block {
    max-width: 1300px;
    margin: 0 auto;
}

.professor_image_block {
    text-align: center;
}

.professor_image_block img {
    background-color: #fff;
    box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #FFFFFF;

    height: 100px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 100px;
    margin-left: 22px;
}

#Course_section,
#non_course_section,
#tab_block {
    margin: 30px 0px 20px 15px;
    margin: 30px 0px 20px 15px;
}

.el-tabs__content,
.education_block {
    margin-top: 30px;
}

.div {
    padding-left: 20px;
}



.ptext {
    margin-bottom: 15px;
}

@media screen and (max-width: 912px) {
    ::v-deep .Objective_left_side {
        text-align: left;
    }
}

@media only screen and (min-width: 760px) and (max-width: 912px) {
    ::v-deep .Objective_left_side {
        text-align: left;
        width: 25%;
        float: left;
    }

    ::v-deep .Objective_right_side {
        float: right;
        width: 75%;
    }
}

@media screen and (max-width:767.98px) {
    #prof_text {
        font-size: 15px;
    }

    .instructor_head_text {
        font-size: 18px;

        text-align: center;
    }

    .professor-details_text {
        margin: 0;
    }

    .instructor_head_text,
    .course_text,
    ::v-deep .Object_text {
        font-size: 14px !important;
    }



    ::v-deep #education_text,
    #institute_text {
        font-size: 14px;
        margin-bottom: 0px;
    }

    .div p {
        font-size: 14px;
    }

    #sub_text {
        font-size: 14px;
        padding-right: 10px;
        margin-bottom: 0;
    }

    #education_text {
        font-weight: bold;
        color: #61646B;

    }

    ::v-deep #row_block {
        margin-top: -30px;
        padding: 27px;
        text-align: left;
    }

    ::v-deep #row_block1 {
        margin-top: -30px;
        padding: 30px 15px;
        text-align: left;
    }

    .Sub_paragraph,
    .research_inner_block p,
    ::v-deep .professor-details_text {
        font-size: 14px;
    }

    .rating_icons i {
        padding: 0;
    }
    .Objective_left_side{
     text-align: left !important;
    }


}

@media (min-width: 768px) and (max-width: 992px) {

    ::v-deep .Object_text {
        font-size: 18px;
    }

    #sub_text {
        margin-bottom: 0;
    }

    #row_block {
        margin-top: 15px;
    }

    ::v-deep #education_text {
        font-size: 18px;
    }
}

.course_text {
    font-size: 20px;
    margin-top: -15px;
}


@media (max-width: 600px) {
    #sub_text {
        text-align: left;
    }


}

.btn-group .btn {
    background-color: #EFF5FC;
}

.professor-details_text {
    margin: 25px;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 1.2;
    font-family: 'Noto Sans', sans-serif;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #828282;
    opacity: 1;
}

.instructor_head_text {
    padding: 0px 0px 20px 2px;
    font-size: 20px;
}

.col-lg-10 .col-9 .col-sm-9 .col-md-9 {
    position: relative;
    right: 20px;
}

#instructor_card {
    background: #EEEAE4;
    background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%);

    border: 1px solid #F0F6FC;
    width: 88%;
    height: 212px;
    opacity: 1;
    padding: 4%;
    border-radius: 4%;
    text-align: left;
    position: relative;
    left: 145px;
}

.ft {
    font-size: 14px;
    color: #707070;
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 14px;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.carousel__slide {
    scroll-snap-stop: auto;
    flex-shrink: 0;
    margin: -2px;
    position: relative !important;
    right: 113px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateZ(0);
}

@media(max-width:280px) {
    .ft {
        font-size: 12px;
    }

    #instructor_card {
        background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%);
        border: 1px solid #F0F6FC;
        width: 88%;
        height: 195px;
        opacity: 1;
        padding: 4%;
        border-radius: 8%;
        text-align: left;
        position: relative;
        left: 133px;
        font-size: 11px;

    }
}

@media (max-width:950px) {
    #instructor_card {
        background: #EEEAE4;
        background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%);
        border: 1px solid #F0F6FC;
        width: 88%;
        height: 212px;
        opacity: 1;
        padding: 4%;
        border-radius: 4%;
        text-align: left;
        position: relative;
        left: -31px !important;
    }
}

@media (max-width:540px) {
    #instructor_card {
        position: relative;
        left: 13px !important;
        font-size: 11px;
        height: 200px;
    }

    .ft {
        font-size: 12px;
    }
}

@media (max-width:500px) {
    #instructor_card {
        background: #EEEAE4;
        background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%);

        border: 1px solid #F0F6FC;
        width: 88%;
        height: 212px;
        opacity: 1;
        padding: 4%;
        border-radius: 4%;
        text-align: left;
        position: relative;
        left: 143px !important;
    }
}

.Ratings_button_block {
    margin-left: 123%;
    cursor: pointer;
}

.Ratings_button_block .btn {
    background-color: green;
    padding: 5px 90px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
}

input[type=number] {
    width: 100%;
}

label {
    font-weight: bold;
    color: black;
}

input[type=submit] {
    margin-top: 2%;
    background-color: green;
    padding: 5px 90px;
    border: none;
    color: white;
    cursor: pointer;
}


#app1 {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black background */
    z-index: 900;
    /* Set a z-index lower than the popup but higher than the content */
    display: none;
}

.popup h5 {
    color: #006acd;
    font-weight: bold;
    text-align: left;
}

.popup {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 30%;
    left: 50%;
    width: 70%;
    /* Adjust the width as needed */
    max-width: 400px;
    /* Set a maximum width */
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.popup-content {
    text-align: center;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

.star-rating {
    font-size: 24px;
}
.details{
    position: relative;
    left: 16px;
}
@media screen and (max-width: 1024px) {
    .Ratings_button_block {
        margin-left: 109%;
        cursor: pointer;
    }
}

@media screen and (max-width: 912px) {
    .Ratings_button_block {
        margin-left: 34%;
        cursor: pointer;
    }
}

@media screen and (min-width: 500px) and (max-width: 540px) {
    .Ratings_button_block {
        margin-left: 48%;
        cursor: pointer;
    }
}

@media screen and (min-width: 450px) and (max-width: 490px) {
    .Ratings_button_block {
        margin-left: 30%;
        cursor: pointer;
    }
}

@media screen and (min-width: 400px) and (max-width: 450px) {
    .Ratings_button_block {
        margin-left: 35%;
        cursor: pointer;
    }
}

@media screen and (min-width: 350px) and (max-width: 390px) {
    .Ratings_button_block {
        margin-left: 26%;
        cursor: pointer;
    }
}

@media screen and (min-width: 330px) and (max-width: 350px) {
    .Ratings_button_block {
        margin-left: 17%;
        cursor: pointer;
    }
}

@media screen and (min-width: 300px) and (max-width: 329px) {
    .Ratings_button_block {
        margin-left: 10%;
        cursor: pointer;
    }
}
#review_text{
    color: #828282; 
    position:relative;
    top:7px; 
    right:65px;
}
@media (max-width:540px) {
    #review_text{
    color: #828282; 
    position:relative;
    top:7px; 
    right:20px;
} 
}
</style>