<template>
    <div class="container-fluid jk">
        <div class="container pt-4">
        <h3 id="semester_text">{{ this.book.semester }}</h3>
        
        <div class="pt-3">
            <div class="row">
                <div class="col-md-6 col-12 col-sm-12">
                  
                        <!-- <video style="width: 100%;" v-if="videoOptions.sources[0].src !== '' " class="card-image-top" controls><source src="../assets/images/preview.mp4" type="video/mp4"></video> -->
                        <div class="div" style="padding:5px;">
                            <video-player :options="videoOptions" />
                        </div>
                    
             
                    <!-- <button @click="clickButton()">click</button>             -->
                </div>
                <div class="col-md-6">
                    <h2 id="book_title">{{ this.book.title }}</h2>
                    <p id="book_description">{{ this.book.description }}</p>
                    <div class="card mn">
                        <div class="row">
                            <div class="col-md-6 col-6 col-sm-6">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="mb-0">Math 1 (NEP Series)</p>
                                    </div>
                                    <div class="col-md-12">
                                        {{ this.book.instructorName }}
                                    </div>
                                </div>
                          
                                            
                                
                            </div>
                            <div class="col-md-6 col-6 col-sm-6">
                                <div class="row">
                                    <div class="col-md-12">
                                        <el-rate v-model="value"  clearable /><br>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="" style="float:right;">
                                       <p style="padding-right:10px;">(23 Reviews)</p> 
                                    </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>    
                    </div>
                    <div class="">
                        <img src="../assets/images/video1.png" style="width: 20px; height: 20px;">&nbsp;
                        <span><span>{{ this.book.videoDemand }}</span></span>
                        <p>{{ this.book.module }}</p>
                    </div>
                    <div class="mt-3">
                        <router-link to="/Razorpay" v-if="isLoggedIn"><button class="btn btn-dark w-100">Enroll Now</button></router-link>
                        <router-link to="/Login" v-else><button class="btn btn-dark w-100">Enroll Now</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="pt-4 topic-card">
            <el-tabs class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="Chapters" name="first" class="rt">
                    <div class="row" v-for="(topic, index) in this.book.chapters" :key="topic.id">
                        <div class="col-lg-6">
                            <div class="card" >
                                <h5 class="card-header">
                                    <div class="collapsed d-block kj" data-toggle="collapse" :href="'#collapse-example' + index" aria-expanded="true" aria-controls="collapse-example" id="heading-example" >
                                        <span class="action"><i class="fa fa-chevron-right rotate-icon" id="sem_icon"></i></span>
                                        {{ topic.heading }}
                                    </div>
                                </h5>
                                 
                                <div :id="'collapse-example' + index" class="collapse" aria-labelledby="heading-collapsed"> 
                                    <div class="card-body">
                                        <div class="row kl">
                                            <div class="col-lg-12" v-for="lessons in topic.values" :key="lessons.cid">
                                                <div class="card" id="tab_card">
                                                    <div class="row">
                                                        <div class="col-1 col-sm-1  col-lg-2 col-md-1">
                                                            <p style="padding-top:10px;"> {{ lessons.cid }} </p>
                                                        </div>
                                                        <div class="col-6 col-sm-6 col-lg-7 col-md-8">
                                                            <p class="mb-0" id="lesson_text">{{ lessons.lesson }}<br>{{ lessons.time }}</p>
                                                            
                                                        </div>
                                                        <div class="col-3 col-sm-3 col-lg-3 text-center col-md-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                    
                </el-tab-pane>
                <el-tab-pane label="Description " name="second">
                    <div class="" v-html="this.book.courseDescription"></div>
                </el-tab-pane>
                <el-tab-pane label="Question Bank" name="third">
                    <div class="" v-html="this.book.questionBank"></div>
                </el-tab-pane>
                <el-tab-pane label="Quiz" name="fourth"><div class="" v-html="this.book.quiz"></div></el-tab-pane>
            </el-tabs>
        </div>
        <div class="pt-5 related-topic">
            <h3 id="relate_text">Related topic</h3>
            <div class="row pt-3 mb-5">
                
              
               
                <div class="col-md-5 col-lg-3">
                    <div class="card" id="semester_card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-10 col-md-10 col-9 col-sm-9 ">
                                            <div class="row">
                                                <div class="col-lg-12 col-12 col-sm-12">
                                                    <p class="mb-0"><b>Math 1 (NEP Series)</b></p>
                                                </div>
                                                <div class="col-lg-12 col-12 col-sm-12">

                                                    <small>18CS81 240 hrs</small>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-3 col-sm-3">
                                            <img src="../assets/images/share.png" class="icon">
                                        </div>
                                    </div>
                               
                                   
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-9 col-sm-9">
                                            <p id="subject_text"><b>Subject Description</b></p>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-3 col-sm-3">
                                            <img src="../assets/images/video.png" class="video">
                                        </div>
                                    </div>
                                 
                                
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn2">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-7 col-12 col-sm-12">
                                            <p>Dr. Ashoka P R</p>
                                        </div>
                                        <div class="col-lg-5 col-md-5 col-12 col-sm-12">
                                            <el-rate v-model="value"  clearable />    
                                        </div>
                                    </div>
                                                                                                
                                        
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-3">
                    <div class="card" id="semester_card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-10 col-md-10 col-9 col-sm-9 ">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <p class="mb-0"><b>Artificial Intelligence</b></p>
                                                </div>
                                                <div class="col-lg-12">

                                                    <small>18CS81 240 hrs</small>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-3 col-sm-3">
                                            <img src="../assets/images/share.png" class="icon">
                                        </div>
                                    </div>
                               
                                   
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-9 col-sm-9">
                                            <p id="subject_text"><b>Subject Description</b></p>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-3 col-sm-3">
                                            <img src="../assets/images/video.png" class="video">
                                        </div>
                                    </div>
                                 
                                
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn2">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-7 col-7 col-sm-7">
                                            <p>Dr. Ashoka P R</p>
                                        </div>
                                        <div class="col-lg-5 col-md-5 col-5 col-sm-5">
                                            <el-rate v-model="value"  clearable />    
                                        </div>
                                    </div>
                                                                                                
                                        
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-3">
                    <div class="card" id="semester_card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-10 col-md-10 col-9 col-sm-9 ">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <p class="mb-0"><b>Web Developement</b></p>
                                                </div>
                                                <div class="col-lg-12">

                                                    <small>18CS81 240 hrs</small>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-3 col-sm-3">
                                            <img src="../assets/images/share.png" class="icon">
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-9 col-sm-9">
                                            <p id="subject_text"> <b>Subject Description</b></p>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-3 col-sm-3">
                                            <img src="../assets/images/video.png" class="video">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn2">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-7 col-7 col-sm-7">
                                            <p>Dr. Ashoka P R</p>
                                        </div>
                                        <div class="col-lg-5 col-md-5 col-5 col-sm-5">
                                            <el-rate v-model="value"  clearable />    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-3">
                    <div class="card" id="semester_card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-10 col-md-10 col-9 col-sm-9 ">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <p class="mb-0"><b>UX Designer</b></p>
                                                </div>
                                                <div class="col-lg-12">

                                                    <small>18CS81 240 hrs</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-3 col-sm-3">
                                            <img src="../assets/images/share.png" class="icon">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn1">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-9 col-sm-9">
                                            <p class="" id="subject_text"><b>Subject Description</b></p>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-3 col-sm-3">
                                            <img src="../assets/images/video.png" class="video">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 mn2">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-7 col-7 col-sm-7">
                                            <p>Dr. Ashoka P R</p>
                                        </div>
                                        <div class="col-lg-5 col-md-5 col-5 col-sm-5">
                                            <el-rate v-model="value"  clearable />    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Offer />
    </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import axios from "axios"
import Offer from './Offer.vue'
export default {
    name: 'SemesterDetails',
    components: {
        VideoPlayer,
        Offer,
    },
    data() {
        return {
            isuser: localStorage.getItem("username") ,
            book: [],
            videoOptions: {
                playbackRates: [0.5, 1, 1.5, 2],
                autoplay: false,
                controls: true,
                width: 100,
                techOrder: ['html5'],
                preload: "metadata",
                sources: [
                    {  
                        src:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
                            //https://vz-b4f1e97e-483.b-cdn.net/65c65840-de66-4c27-afd0-a3b5a904b768/playlist.m3u8
                            withCredentials: false,
                    }
                ],
                html5: {
                    nativeVideoTracks: false,
                    nativeAudioTracks: false,
                    nativeTextTracks: false,
                vhs: {
                    overrideNative: true,
                }
              },
                controlBar: {
                    skipButtons: {
                        forward: 5,
                        backward: 10,
                        muteToggle: false
                    },
                },
                plugins: {

                }
            },
            responseFromS3: '',
            imageFromS3: '',
            client : new S3Client({
                region: "ap-south-1",
                credentials: {
                    accessKeyId: "AKIAWTYHL72QB7Z2NM4X",
                    secretAccessKey: "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",
                } 
            }),
        };
    },
    computer: {
        authorizationHeader() {
            if (this.isLoggedIn) {
                return `Bearer ${this.isuser}`;
            } else {
                return ''; // Set your dummy value here
            }
        },
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
    },
    async created(){
        console.log("Hi");
        const command = new GetObjectCommand({
            Bucket: "onuco-s3",
            Key: "diabetes1.mp4"
        });
        const headers = { 'Authorization':  this.authorizationHeader };  
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Coursedetails/` + this.$route.query.id, { headers } );
            this.book = res.data; 
            // this.book.chapters = JSON.parse(this.book.Chapters);
            // console.log(this.booh.chapters)
            console.log(this.book); 
            console.log(this.client);
            const response = await this.client.send(command);
            console.log(response);
          // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
            this.responseFromS3 = await response.Body.transformToString("base64");
            //this.videoOptions.sources[0].src = "data:video/mp4;base64,"+this.responseFromS3;
            console.log(this.videoOptions);
            this.imageFromS3 = "data:image/jpeg;base64,"+this.responseFromS3;
            console.log(this.responseFromS3);
        } catch (err) {
            console.error(err);
        }
    },
    
}
</script>

<style scoped>

.jk {
    padding-top:100px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
#semester_text{
    font-size: 20px;
}
#semester_card{
    background: #FBAEBB;
background: radial-gradient(at left top, #FBAEBB, #B6DEF5);
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
   #semester_text{
    font-size: 18px;
   }
   #book_title{
    font-size: 18px;
    margin-top:20px;
   }
   #book_description{
    font-size: 15px;
    margin-top:20px;
   }

   #relate_text{
    font-size: 18px;
    padding-left:12px;
   }
   .related-topic .card{
    margin:10px;

   }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    #semester_text{
    font-size: 20px;
   }
   #semester_text{
    font-size: 18px;
   }
   #book_title{
    font-size: 18px;
    margin-top:20px;
   }
   #book_description{
    font-size: 15px;
    margin-top:20px;
   }
   .related-topic{
    padding:0 !important;
   }
   #relate_text{
    font-size: 18px;

   }
   .related-topic .card{
    margin:10px;

   }
   .mn1 p{
    font-size: 14px;
    margin-top:10px;
  
   }
}
.mn {
    border: none;
    background-color: #EFF5FC;
}
.mn1 p{
    font-size: 14px;
    margin-top:15px;
  
   }
.mn p {
    float: left;
}
.mn .el-rate {
    float: right;
}
.mn span {
    float: right;
}
.gh {
    width: 2rem;
    height: 2rem;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Times New Roman', Times, serif;
}
.demo-tabs {
  padding-left: 11px;
  
}
.el-tab-pane {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
}

.topic-card .card {
    border: 1px solid black;
    margin-top: 2%;
    width: 100%;
    

}
.kj .action {
    float: right;
    font-size: 20px;
    width: 1.2em;
    color: darkblue;
    opacity: 1;
    
}

.kj {
    cursor: pointer;
    border-bottom: none;
    color: black;
    opacity: 1;
}

#tab_card{
    background: #FBAEBB;
background: radial-gradient(at left top, #FBAEBB, #B6DEF5); 
padding:15px;
}


.kj:not(.collapsed) .rotate-icon {
    transform: rotate(90deg);
}

#tab_card{
    background: #FBAEBB;
background: radial-gradient(at left top, #FBAEBB, #B6DEF5); 
padding:15px;
}



.video {
    width: 40px;
padding-top:10px;
}


.related-topic {
    padding-left: 11px;
}
.related-topic .card{
    padding: 10px;
    /* background-color: #8B8989; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: black;
    cursor: pointer;
}
.mn1 p {
    float: left;
    margin-top:0;
}
.mn1 img {
    float: right;
}
.mn2 .el-rate {
    float: right;
}
.mn2 p {
    float: left;
}
.icon {
    width: 25px;
    height: 25px;
    margin-left: 55px;
}
.parent_block {
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 5%;
}
#relate_text{
font-size: 20px;
}
#subject_text{
        padding-top:15px;
    }

@media (max-width: 600px) {
    #lesson_text{
        font-size: 15px;
    }
    #subject_text{
        padding-top:15px;
    }
    .related-topic{
        padding-left:0;

    }
}
@media (max-width: 1024px) {
    #lesson_text{
        font-size: 18px;
    }
    #subject_text{
        padding-top:15px;
    }
    .related-topic{
        padding-left:0;

    }
    #relate_text{
        padding-left:12px;

    }
}
</style>