<template>
    
    <div class="container jk">
        <div class="Instructor_parent_block">
            <h2 class="instructor_head_text"><span id="Meet_text">Meet</span> Instructor</h2>
            <section>
                <div class="instructor-details">
                    <div class="professor-block">
                        <div class="row">

                            <div class="col-md-5 col-lg-5">
                                <div class="row">
                                    <div class="col-lg-4 col-4 col-sm-4">
                                        <div class="professor_image_block">
                                            <img src="../assets/images/MaskGroup1.png" class="img-fluid">
                                        </div>

                                    </div>
                                    <div class="col-lg-8 col-8 col-sm-8">
                                        <h5 id="prof_text">Dr. Vijaya Kumar B.P</h5>
                                        <p class="rating_icons"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                class="fa fa-star"></i><i class="fa fa-star"></i><i
                                                class="fa fa-star-o"></i> (23 reviews) </p>
                                        <div class="social-icons" v-for="social in faculty" :key="social.id">
                                            <a :href="social.youTube" class="fa fa-youtube-play"></a>
                                            <a :href="social.twitter" class="fa fa-twitter"></a>
                                            <a :href="social.linkedin" class="fa fa-linkedin"></a>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-7 col-lg-7">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="share_icon_block">
                                            <img src="../assets/images/share.png" class="share-icon">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="btn-group">
                                            <button type="button" class="btn" id="left_button">13 Following</button>
                                            <button type="button" class="btn" id="right_button">1200 Follwers</button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div class="row professor-details">
                        <div class="col-sm-12 col-lg-12">
                            <p class="professor-details_text">VIJAY KUMAR B. P. Received the Ph. D degree in Electrical
                                Communication Engg., Department
                                from Indian Institute of Science (IISc), Bangalore in 2003, M.Tech degree in Computer
                                Science and Technology from Indian Institute of Technology, Roorkee (IITR), with honors in
                                1992 and Bachelor’s degree in Electronics and Communications from Mysore University with
                                Distinction in the year 1987. With a proven success record of boosting leadership actions
                                over 33 years of extensive teaching and research experience including 25 years of
                                administrative experience. He is currently a professor and Head R & D, Industry Interaction
                                coordinator, Information Science and Engg., Dept., M S Ramaiah Institute of Technology,
                                Bangalore, Karnataka, India, where he is involved in research and teaching UG and PG
                                students, and his major area of research are Computational Intelligence (Machine Learning)
                                applications in Mobile, IoT, Sensor networks, Big data, Cognitive Computing applications and
                                Software Quality Engineering.</p>
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
                                                        <p><b>Math 1 (NEP Series)</b></p>
                                                    </div>
                                                   
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                        
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
                                                        <p><b>Math 1 (NEP Series)</b></p>
                                                    </div>
                                                    
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                        
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
                <h5 class="course_text"><span id="course_text">Non-Academic Courses</span> (10)</h5>
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
                                                        <p><b>Math 1 (NEP Series)</b></p>
                                                    </div>
                                                   
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                       
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
                                                        <p><b>Math 1 (NEP Series)</b></p>
                                                    </div>
                                                    
                                                    <div class="col-lg-2 col-3 col-sm-3">
                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p> 18CS81</p>
                                                    </div>
                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                        <p id="small_text">240
                                                            hrs</p>
                                                    </div>
                                                   
                                                    <div class="col-lg-9 col-9 col-sm-9">

                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
                                                            excepturi.</p>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-3 col-sm-3">
                                                        <div class="video_logo">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <p class="sub_icons mb-0"><i class="fa fa-star"></i><i
                                                       
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
            
            <section id="tab_block" v-for="facult in faculty" :key="facult.id">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="OBJECTIVES" name="first">
                        <div class="" v-html="facult.objective"></div>
                    </el-tab-pane>
                    <el-tab-pane label="CONTACT" name="second">
                        <h2 class="Object_text"><img src="../assets/images/g2.png" class="img-fluid" /> Contact</h2>
                        <p style="padding-left: 25px;"><span id="Sub_text">Contact Us:</span>{{ facult.contact }}</p>
                    </el-tab-pane>
                    <el-tab-pane label="EDUCATION" name="third">
                        <div class="" v-html="facult.education"></div>
                    </el-tab-pane>
                    <el-tab-pane label="EXPERIENCE" name="fourth">
                        <div class="" v-html="facult.experience"></div>
    
                    </el-tab-pane>
                    <el-tab-pane label="RESEARCH" name="fifth">
                        <div class="" v-html="facult.research"></div>
                    </el-tab-pane>
                    <el-tab-pane label="PUBLICATIONS" name="sixth">
                        <div class="experience_block" v-for="publication in facult.publication" :key="publication.id">
                            <h2 class="Object_text"><img src="../assets/images/g2.png" class="img-fluid" /> Publication
                            </h2>

                            <div class="row" id="row_block" v-for="publicationdetails in publication.values" :key="publicationdetails.id">
                                
                                <div class="div">
                                    <p><span id="education_text">{{ publication.heading }}</span></p>
                                    <p><span id="education_text">Author: </span>{{ publicationdetails.author }}.</p>
                                        
                                    <p><span id="education_text">Price: </span>{{ publicationdetails.price }}</p>
                                    
                                    <div>
                                        <span id="education_text">Description: </span><br>
                                        <p class="pt-3" v-html="publicationdetails.description"></p> 
                                    </div>
                                </div>
                            </div>    
                        </div>    
                    </el-tab-pane>
                    <el-tab-pane label="ADVISORY" name="seventh"></el-tab-pane>
                    <el-tab-pane label="SKILLS" name="eight">
                        <h2 class="Object_text"><img src="../assets/images/g2.png" class="img-fluid" /> Skills</h2>
                        <p style="padding-left: 25px;"><span id="Sub_text">Skill:</span>{{ facult.skill }}</p>
                    </el-tab-pane>
                    <el-tab-pane label="CONTRIBUTIONS" name="nine">
                        <h2 class="Object_text"><img src="../assets/images/g2.png" class="img-fluid" /> Contributions</h2>
                        
                        <div class="" style="padding-left: 25px;" v-html="facult.contribution"></div>
                    </el-tab-pane>
                    <el-tab-pane label="PROJECTS" name="ten">
                        <div class="experience_block" v-for="project in facult.project" :key="project.id">
                            <h2 class="Object_text"><img src="../assets/images/g2.png" class="img-fluid" /> Project
                            </h2>
                            <div class="row" id="row_block" v-for="projectdetails in project.values" :key="projectdetails.id">
                                
                                <div class="div">
                                    <!-- <p><span id="education_text">{{ project.heading }}</span></p> -->
                                    <p><span id="education_text">Environment: </span></p>
                                    
                                    <div class="" v-for="skills in projectdetails.environment" :key="skills.id">
                                        <li>{{ skills }}.</li>
                                    </div>

                                    <p class="pt-3"><span id="education_text">Role: </span> {{ projectdetails.role }} </p>

                                    <p><span id="education_text">From Duration: </span> {{ projectdetails.fromDuration }} </p>

                                    <p><span id="education_text">To Duration: </span>{{ projectdetails.toDuration }} </p>
                                    
                                    
                                </div>
                            </div>    
                        </div>  
                    </el-tab-pane>
                    <el-tab-pane label="FacultyDescription" name="eleven">
                        <div class="research_block">
                            <h2 class="Object_text"><img src="../assets/images/g2.png" class="img-fluid" /> Faculty Description </h2>
                            <div class="research_inner_block">
                                <p v-html="facult.facultyDescription"></p>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Duties And Responsibilities" name="twleve">
                        <div class="research_block">
                            <h2 class="Object_text"><img src="../assets/images/g2.png" class="img-fluid" /> Duties And Responsibilities </h2>
                            <div class="research_inner_block">
                                <p v-html="facult.dutiesAndResponsibilities"></p>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </section>

        
        </div>
      
      
    </div>
    <Offer />
    
</template>

<script>
import axiosInstance from '../config/axiosInstance'

import Offer from './Offer.vue'
export default {
    name: 'InstructorView',
    components: {
       Offer
    },
    data() {
        return {
            faculty: [],
            activeName: 'first',
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
    async created() {   
        try {
            const res = await axiosInstance.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Faculty`);
            this.faculty = res.data;
            console.log(this.faculty);
        } catch (error) {
            console.log(error);
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
#instructor_card{
    background: #FBAEBB;
    background: radial-gradient(at left top, #FBAEBB, #B6DEF5);
    box-shadow: 0px 0px 9px #000000A1;
    border: 1px solid #FFFFFF;
}
#instructor_card{
    background: #FBAEBB;
    background: radial-gradient(at left top, #FBAEBB, #B6DEF5);
    box-shadow: 0px 0px 9px #000000A1;
    border: 1px solid #FFFFFF;
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
    background-color: #828282;
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

.video {
    width: 50px;


}
::v-deep .fa-circle {
    margin-bottom: 10px;
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
    top: 18px;
    left: -8px;
    margin-bottom: 18px;
    /* bottom: 10px; */

}
::v-deep #row_block {
    padding-left: 25px;
}
::v-deep #row_block {
    padding-left: 25px;
}

::v-deep .row_class {
    display: flex;
    margin-top: 12px;
    padding-left: 25px;
    padding-left: 25px;
}

::v-deep #education_text {
    color: #61646b;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-size: 16px;
    font-weight: bold;
}
::v-deep .research_inner_block {
    padding-left: 25px;
}
::v-deep .research_inner_block {
    padding-left: 25px;
}
.row_class i {
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
        font-size: 15px !important;
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

    #row_block {
        margin-top: 15px;
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
}
</style>

