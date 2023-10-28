<template>
    
    <div class="container jk">
        <!-- <Breadcrumbs /> -->
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
                                            <img :src="this.faculty.imageUrl" class="img-fluid" v-if="this.faculty.imageUrl !== ''">
                                            <img src="../assets/images/Image21.png" class="img-fluid" v-else>
                                        </div>

                                    </div>
                                    <div class="col-lg-8 col-8 col-sm-8">
                                        <h5 id="prof_text">{{ this.faculty.name }}</h5>
                                        <p class="rating_icons"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                class="fa fa-star-o"></i> (23 reviews) </p>
                                        <div class="social-icons">
                                            <a :href="this.faculty.youTube" target="blank" class="fa fa-youtube-play"></a>
                                            <a :href="this.faculty.twitter" target="blank" class="fa fa-twitter"></a>
                                            <a :href="this.faculty.linkedin" target="blank" class="fa fa-linkedin"></a>

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
                                            <button type="button" class="btn" id="left_button" style="color: #b1afaf;">13 Following</button>
                                            <button type="button" class="btn" id="right_button" style="color: #b1afaf;">1200 Follwers</button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div class="row professor-details">
                        <div class="col-sm-12 col-lg-12">
                            <p class="professor-details_text" v-html="this.faculty.description"></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Course_section">
                <h5 class="course_text"><span id="course_text">Courses</span> (230)</h5>
                <div class="row">
                    
                    <div class="col-md-6 col-lg-4">
                        <router-link to="/SemesterDetails">
                           
                            <div class="card" id="instructor_card">
                                <div class="card-title">
                                    <div class="row">
                                        <div class="col-md-12 ">

                                            <div class="card_top_text">
                                                <div class="row">
                                                     
                                                    <div class="col-lg-10 col-9 col-sm-9">
                                                        <p style="font-size: 14px;"> Math 1 (NEP Series)</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;"> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;" id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p style="font-size: 14px; color: #707070;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/Path4025.png" style="width: 30px; height:30px;" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p style="color: #707070;" class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                        
                                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                                class="fa fa-star"></i><i class="fa fa-star-o"></i>
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
                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                        <router-link to="/SemesterDetails">
                            
                            <div class="card" id="instructor_card">
                                <div class="card-title">
                                    <div class="row">
                                        <div class="col-md-12 ">

                                            <div class="card_top_text">
                                                <div class="row">
                                                    
                                                    <div class="col-lg-10 col-9 col-sm-9">
                                                        <p style="font-size: 14px;"> Math 1 (NEP Series)</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;"> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;" id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p style="font-size: 14px; color: #707070;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/Path4025.png" style="width: 30px; height:30px;" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p style="color: #707070;" class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                        
                                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                                class="fa fa-star"></i><i class="fa fa-star-o"></i>
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
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <router-link to="/SemesterDetails">
                            
                            <div class="card" id="instructor_card">
                                <div class="card-title">
                                    <div class="row">
                                        <div class="col-md-12 ">

                                            <div class="card_top_text">
                                                <div class="row">
                                                    
                                                    <div class="col-lg-10 col-9 col-sm-9">
                                                        <p style="font-size: 14px;"> Math 1 (NEP Series)</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;"> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;" id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p style="font-size: 14px; color: #707070;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/Path4025.png" style="width: 30px; height:30px;" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p style="color: #707070;" class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                        
                                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                                class="fa fa-star"></i><i class="fa fa-star-o"></i>
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
                    </div>

                    
                    
                    
                </div>
            </section>
            <section id="non_course_section">
                <h5 class="course_text"><span id="course_text">Non-Academic </span> Courses (10)</h5>
                <div class="row">
                    

                   
                    

                    <div class="col-md-6 col-lg-4">
                        <router-link to="/SemesterDetails">
                            
                            <div class="card" id="instructor_card">
                                <div class="card-title">
                                    <div class="row">
                                        <div class="col-md-12 ">

                                            <div class="card_top_text">
                                                <div class="row">
                                                    
                                                    <div class="col-lg-10 col-9 col-sm-9">
                                                        <p style="font-size: 14px;"> Math 1 (NEP Series)</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px;color: #707070;"> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;" id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p style="font-size: 14px; color: #707070;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/Path4025.png" style="width: 30px; height:30px;" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p style="color: #707070;" class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                       
                                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                                class="fa fa-star"></i><i class="fa fa-star-o"></i>
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
                    </div>
                    
                    <div class="col-md-6 col-lg-4">
                        <router-link to="/SemesterDetails">
                           
                            <div class="card" id="instructor_card">
                                <div class="card-title">
                                    <div class="row">
                                        <div class="col-md-12 ">

                                            <div class="card_top_text">
                                                <div class="row">
                                                    
                                                    <div class="col-lg-10 col-9 col-sm-9">
                                                        <p style="font-size: 14px;"> Math 1 (NEP Series)</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;"> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p style="font-size: 14px; color: #707070;" id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p style="font-size: 14px; color: #707070;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/Path4025.png" style="width: 30px; height:30px;" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p style="color: #707070;" class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                       
                                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                                class="fa fa-star"></i><i class="fa fa-star-o"></i>
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
                    </div>
                </div>
            </section>
           
            <section id="tab_block">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane :label="att.heading" v-for="att in this.faculty.attributue" :name="att.heading" :key="att.heading">
                        <div class="" v-html="att.values"></div>
                    </el-tab-pane>
                    
                </el-tabs>
            </section>

        
        </div>
      
      
    </div>
    <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="'100px'" :height="'100px'"></Loading>
    <Offer />
    
</template>

<script>
import Breadcrumbs from "./Breadcrumbs.vue"
import axios from 'axios'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';


import Offer from './Offer.vue'
import BreadcrumbsVue from './Breadcrumbs.vue';
export default {
    name: 'InstructorView',
    components: {
       Offer,
       Loading,
       Breadcrumbs
    },
    data() {
        return {
            isLoading: false,
            faculty: [],
            activeName: '',
        }
    },    
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
    async created() {   
        this.isLoading = true;
        try {
            const res = await axios.get(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/Faculty/` + this.$route.params.name);
            this.faculty = res.data;
            this.activeName = this.faculty.attributue[0].heading;
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
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
/* #instructor_card{
    background: #FBAEBB;
    background: radial-gradient(at left top, #FBAEBB, #B6DEF5);
    box-shadow: 0px 0px 9px #000000A1;
    border: 1px solid #FFFFFF;
} */
#instructor_card{
    background: #EEEAE4;
    background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%);
    /* box-shadow: 0px 0px 9px #000000A1; */
    border: 1px solid #F0F6FC;
    width: 100%;
    height: 221px;
    opacity: 1;
    padding: 6%;
    border-radius: 4%;
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }
    ::v-deep #sub_text{
        text-align: left;
    }
}

@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }
    ::v-deep #sub_text{
        text-align: left;
    }
}

/* .user-img {
    width: 12%;
    height: 12%;
}
.col-md-5 img {
    float: left;
    width: 30%;
    height: 100%;
} */
/* .col-md-5 h5 p .social-icons {
    float: right;
    width: 70%;
    height: 100%;
} */

/* .col-md-5 h5 {
    margin-top: 5%;
} */
.social-icons .fa {
    padding: 10px;
    font-size: 14px;
    width: 35px;
    text-align: center;
    text-decoration: none;
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
}
::v-deep .row_class i[data-v-54dfdb7f]
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

.card {
  
  
    margin-bottom: 4%;
    margin-top: 20px;
    width: 100%;
    color: black;
   
   height: 200px;
    padding: 10px;

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
    text-align: right;
}
::v-deep .Objective_left_side {
    text-align: right;
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
    top: 23px;
    left: -16px;
    margin-bottom: 18px;
    /* bottom: 10px; */

}

::v-deep #row_block {
    padding-left: 15px;
}
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
}
/* ::v-deep .research_inner_block {
    padding-left: 25px;
} */
/* ::v-deep .research_inner_block {
    padding-left: 25px;
} */
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
    background-color:#fff;
    box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #FFFFFF;    
    
    height:100px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:100px;
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
        text-align: right;
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
    #sub_text{
        margin-bottom:0;
    }
    #row_block{
        margin-top:15px;
    }
    ::v-deep #education_text{
        font-size:18px;
    }
}
.course_text{
    font-size: 20px;
    margin-top: -15px;
}


@media (max-width: 600px) {
    #sub_text{
        text-align: left;
    }
    
}
.btn-group .btn {
    background-color: #EFF5FC ;
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
.col-lg-10 .col-9 .col-sm-9 .col-md-9{
    position: relative;
    right: 20px;
}
</style>

