<template>
    <div class="container-fluid jk">
        <h3>{{ this.book.semester }}</h3>
        <div class="pt-3" style="padding: 0px 10px 0px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="card" style="width: 100%;">
                        <!-- <video style="width: 100%;" v-if="videoOptions.sources[0].src !== '' " class="card-image-top" controls><source src="../assets/images/preview.mp4" type="video/mp4"></video> -->
                        <video-player :options="videoOptions"  />
                    </div>   
                    <!-- <button @click="clickButton()">click</button>             -->
                </div>
                <div class="col-md-6">
                    <h2>{{ this.book.title }}</h2>
                    <p>{{ this.book.description }}</p>
                    <div class="card mn">
                        <div class="row">
                            <div class="col-md-6">
                                <p>Math 1 (NEP Series) <br> {{ this.book.instructorName }}</p>
                                            
                                <div class="">
                                    <el-rate v-model="value"  clearable /><br>
                                    <span>(23 Reviews)</span>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="">
                        <img src="../assets/images/video1.png" style="width: 20px; height: 20px;">&nbsp;
                        <span><span>{{ this.book.videoDemand }}</span></span>
                        <p>{{ this.book.module }}</p>
                    </div>
                    <div class="">
                        <button class="btn btn-dark w-100">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4 topic-card">
            <el-tabs class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="Chapters" name="first" class="rt">
                    <div class="row" v-for="topic in this.book.chapters" :key="topic.id">
                        <div class="col-sm-12">
                            <div class="card">
                                <h5 class="card-header">
                                    <div data-toggle="collapse" href="#collapse-example1" aria-expanded="true" aria-controls="collapse-example" id="heading-example" class="d-block kj">
                                        <span class="action"><i class="fa fa-angle-down rotate-icon"></i></span>
                                        {{ topic.heading }}
                                    </div>
                                </h5>
                                 
                                <div id="collapse-example1" class="collapse show" aria-labelledby="heading-example">
                                    <div class="card-body">
                                        <div class="row kl">
                                            <div class="col-sm-12" v-for="lessons in topic.values" :key="lessons.cid">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> {{ lessons.cid }} </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>{{ lessons.lesson }}<br>{{ lessons.time }}</p>
                                                            
                                                        </div>
                                                        <div class="col-sm-3">
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
            <h3>Related topic</h3>
            <div class="row pt-3 mb-4">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Artificial Intelligence</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                                                    
                                        
                                    <p>Dr. Ashoka P R</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>UX Designer</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                                                 
                                        
                                    <p>Dr. Ashoka P A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Web Development</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                               
                                        
                                    <p>Dr. Ashoka P R</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Math 1 (NEP Series)</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                                                   
                                        
                                    <p>Dr. Ashoka P R</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import axios from "axios"

export default {
    name: 'SemesterDetails',
    components: {
        VideoPlayer
    },
    data() {
        return {
            book: [],
            videoOptions: {
                playbackRates: [0.5, 1, 1.5, 2],
                autoplay: false,
                audiotrack: true,
                controls: true,
                width: 100,
                preload: "auto",
                poster: "http://127.0.0.1:5173/assets/images/1.png",
                sources: [
                    {  
                        src:
                            "https://d1ezh61feed07z.cloudfront.net/CAD_PROJECTION_OF_LINES_PROBLEM_1_RR.mp4",
                            type: "video/mp4"
                    },
                ],
                displayCurrentQuality: true,
                controlBar: {
                    skipButtons: {
                        forward: 5,
                        backward: 10,
                        muteToggle: false
                    }
                },
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
    async created(){
        console.log("Hi");
        const command = new GetObjectCommand({
            Bucket: "onuco-s3",
            Key: "diabetes1.mp4"
        });
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Coursedetails/` + this.$route.query.id);
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
    padding-top: 7%;
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
.mn {
    border: none;
    background-color: #EFF5FC;
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
  color: black;
}
.kj{
  cursor: pointer;
  border-bottom: none;
  color: black;
}



.kj:not(.collapsed) .rotate-icon {
  transform: rotate(180deg);
}
.video {
    width: 40px;
    height: 40px;
}
.kl .card {
    padding: 10px 10px 0px;
}
.kl .col-sm-7 {
    text-align: center;
}
.kl .col-sm-3 {
    text-align: right;
}
@media screen and (max-width: 600px) {
    .kl .col-sm-2 {
        float: left;
        width: 19%;
    }
    .kl .col-sm-3 {
        float: right;
        width: 20%;
    }
    .kl .col-sm-7 {
        text-align: left;
        width: 61%;
        font-size: 16px;
    }
}
.related-topic {
    padding-left: 11px;
}
.related-topic .card{
    padding: 10px 10px 0px;
    /* background-color: #8B8989; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: black;
    cursor: pointer;
}
.mn1 p {
    float: left;
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
</style>