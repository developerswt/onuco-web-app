<template>
    <div>
        <div class="container-fluid jk" id="search_container">
            <div class="first_block">
                <div class="container">
                    <div class="search_inner_block">
                        <div class="row">
                            <div class="col-lg-12">
                                <!-- <Breadcrumbs /> -->
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">VTU</a></li>
                                        <li class="breadcrumb-item"><a href="#">{{ this.book.title }}</a></li>
                                        <li class="breadcrumb-item"><a href="#"></a></li>

                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-12 col-sm-12 col-md-6">
                                <div class="search_right_block">
                                    <h4 class="academic_head_text">

                                        <span id="aca_text">{{ this.book.title }} </span>

                                    </h4>
                                    <div class="" >
                                    <p id="professor_text" v-for="instructor in this.book.instructorName" :key="instructor.id"> {{ instructor.name }}</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-3 col-6 col-sm-6 col-md-6">
                                            <p id="duration_text" class="mb-2"><img
                                                    src="../assets/images/Iconionic-ios-timer@2x.png">{{
                                                        this.book.videoDemand }}
                                            </p>
                                        </div>
                                        <div class="col-lg-4 col-md-3  col-6 col-sm-6 col-md-6">
                                            <p id="module_text" class="mb-2"><img
                                                    src="../assets/images/Iconmap-school@2x.png">{{ this.book.modules }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12 col-sm-12 col-md-6">


                                <div class="icon_blck">
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                </div>
                                <p id="review_text">(23 Reviews)</p>
                                <p id="amount_text"><span id="strike_text"> &#8377;{{ this.book.actualPrice }}</span>
                                    &#8377;{{ this.book.discountedPrice }} <button id="search_button">buy now</button></p>

                            </div>
                        </div>

                    </div>


                </div>


            </div>
            <div class="container" id="inner_container">
                <h4 class="academic_head_text_one">
                    <span id="aca_text">Course </span>Description
                </h4>
                <p id="course_text" v-html="this.book.description"></p>


                <div class="row">
                    <div class="col-lg-12">
                        <section id="tab_block">
                            <div class="pt-4 topic-card">
                                <el-tabs class="demo-tabs" v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="Chapters" name="first" class="rt">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="card" v-for="(topic, index) in this.book.subject" :key="topic.id">
                                                    <div class="card-header"  data-toggle="collapse" :href="'#collapse-example' + index" aria-expanded="true" aria-controls="collapse-example" id="heading-example">
                                                        <div class="row">
                                                            <div class="col-lg-6 col-6 col-sm-6">
                                                                <button class="btn btn-link">
                                                                    {{ topic.heading }}
                                                                </button>
                                                            </div>
                                                            <div class="col-lg-6 col-6 col-sm-6">
                                                                <div class="action"><i
                                                                    class="fa fa-chevron-right rotate-icon"
                                                                    id="sem_icon"></i></div>
                                                                </div>
                                                        </div>
                                                    </div>

                                                    <div :id="'collapse-example' + index" class="collapse" :class="{ 'show': index === 0 }" aria-labelledby="heading-collapsed">
                                                        <div class="card-body" v-for="lessons in topic.values" :key="lessons.id">
                                                            <div class="row">
                                                                <div class="col-lg-6 col-6 col-sm-6 " >
                                                                    <div class="accordion_block_one">
                                                                        <i class="fa-solid fa-check"
                                                                            style="color: #08ab44;"></i>
                                                                        <p id="check_text"> {{ lessons.heading }}</p>
                                                                    </div>

                                                                </div>
                                                                <div class="col-lg-6 col-6 col-sm-6">
                                                                    <div class="accordion_block_two">
                                                                        <p id="duration_text">40m 13s</p>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="chapters_block" v-for="(subject, index) in lessons.values" :key="index.id">
                                                                <div class="row">
                                                                    <div class="col-lg-1 col-1 col-sm-1">
                                                                        <i class="fa-solid fa-check"
                                                                            style="color: #08ab44;"></i>
                                                                    </div>
                                                                    <div class="col-lg-7 col-10 col-sm-10">
                                                                        <p id="intro_text">{{ subject.lession }}</p>
                                                                        <div class="row">
                                                                            <div class="col-lg-6 col-6 col-sm-6">
                                                                                <p id="duration_text_one">{{ subject.time }}
                                                                                </p>
                                                                            </div>
                                                                            <div class="col-lg-6 col-6 col-sm-6">
                                                                                <div class="progress_block">
                                                                                    <div class="progress">
                                                                                        <div class="progress-bar"
                                                                                            role="progressbar"
                                                                                            aria-valuenow="0"
                                                                                            aria-valuemin="0"
                                                                                            aria-valuemax="100"></div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-4 col-12 col-sm-12">
                                                                        <div class="inside_block">

                                                                            <img src="../assets/images/Group1318@2x.png" 
                                                                                class="img-fluid" @click="switchVideo(subject.url)" style="cursor: pointer;">


                                                                            <img src="../assets/images/Iconionic-ios-bookmark@2x.png"
                                                                                class="img-fluid">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="video_block" v-if="videoOptions.sources.length>0">
                                                    <video-player :options="videoOptions" />
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
                                    <el-tab-pane label="Quiz" name="fourth">
                                        <div class="" v-html="this.book.quiz"></div>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <Offer />
        
    </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue';
import VideoPlayer from '../components/VideoPlayer.vue';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import AxiosInstance from '../config/axiosInstance'
import Offer from './Offer.vue'
export default {
    name: 'SemesterDetails',
    components: {
        VideoPlayer,
        Offer,
        Breadcrumbs
    },
    data() {
        return {
            activeName: 'first',
            book: [],
            videoOptions: {
                playbackRates: [0.5, 1, 1.5, 2],
                autoplay: false,
                controls: true,
                width: 100,
                techOrder: ['html5'],
                preload: "metadata",
                sources: [
                    // {
                    //     src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                    //     type: 'application/x-mpegURL',
                    //     //https://vz-b4f1e97e-483.b-cdn.net/65c65840-de66-4c27-afd0-a3b5a904b768/playlist.m3u8
                    //     withCredentials: false,
                    // }
                    
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
            client: new S3Client({
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
        const headers = { 'Authorization': this.authorizationHeader };
        try {
            const res = await AxiosInstance.get(`/Coursedetails/` + this.$route.query.id);
            this.book = res.data; 
            
            // this.videoOptions.sources[0].src = this.book.videoUrl;
            // this.book.chapters = JSON.parse(this.book.Chapters);
            // console.log(this.booh.chapters)
            this.videoOptions.sources = [
                    {
                        src: this.book.videoUrl,
                        type: 'application/x-mpegURL',
                        withCredentials: false,
                    }
            ]
            console.log(this.book);
            console.log(this.videoOptions);
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        switchVideo(video) {
            this.videoOptions.sources = video;
            console.log(video)
            // this.$refs.videoPlayer.load();
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
    }
}
</script>

<style scoped>
.jk {
    padding-top: 68px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

.first_block {
    background: #E5EFF9 0% 0% no-repeat padding-box;
    color: #0066CC;
    padding-left: 0px !important;
    padding-right: 0px !important;
}



.breadcrumb {
    background: transparent;
}

.breadcrumb-item a {
    color: #0066CC;
}

.breadcrumb-item+.breadcrumb-item::before {
    content: ">";
    color: #0066CC;
}

#duration_text img {
    width: 27px;
    margin-right: 7px;
}

#module_text img {
    width: 27px;
    margin-right: 7px;
}

.icon_blck i {
    margin: 10px;
}

.search_right_block {
    padding-left: 14px;
}

.academic_head_text {
    color: #006acd;
    font-size: 22px;

}

.academic_head_text_one {
    color: #006acd;
    font-size: 22px;
    margin-top: 20px;
}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

#professor_text {
    color: #0066CC;
    font-size: 18px;
}

#duration_text,
#module_text {
    color: #707070;
    font-size: 16px;
}

.icon_blck {
    text-align: right;
}

#review_text {
    text-align: right;
}

#strike_text {
    font-size: 18px;
    text-decoration: line-through;
    color: #707070;
    padding-right: 15px;
}

#amount_text {
    font-size: 22px;
    color: #0066CC;
    text-align: right;
    font-weight: 500;

}

#search_button {
    height: 30px;
    width: 90px;
    background: transparent;
    font-size: 12px;
    color: #0066CC;
    border: 1px solid #0066CC;
    border-radius: 4px;
    padding: 0;
    margin-left: 20px;
    text-transform: uppercase;

}

#search_container {
    background: #EFF5FC 0% 0% no-repeat padding-box;
    padding-left:0;
    padding-right:0;
 
}

.search_inner_block {
    padding: 10px 10px 20px 10px;
}

#course_text {
    color: #777777;
    font-size: 16px;
    font-weight: lighter;
}

.action {
    text-align: right;
    padding-top: 5px;
}

.action i {
    color: #0066CC;
}

.card-header:not(.collapsed) .action i {
    transform: rotate(90deg);
}

#check_text {
    font-size: 16px;
    padding-left: 10px;
    margin-bottom: 0 !important;
    color: #0066CC;
}

.accordion_block_one {
    display: flex;
    align-items: center;
    padding: 10px;
}

.accordion_block_two {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: end;
}



.card-body {
    padding: 5px;
}

.chapters_block {
    padding-left: 20px;
    padding-right: 20px;

}

#duration_text_one {
    font-size: 12px;
    color: #9E9E9E;
}

#intro_text {
    margin-bottom: 0;
    font-size: 16px;
    color: #0066CC;
}

.progress {
    height: 5px;
    margin-top: 7px;
    background: #FF9900;
}

.inside_block {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 54px;
}

.inside_block img {

    height: 30px;
    margin: 5px;
}

.card-body {
    background: #E5EFF9;
}

#accordion {
    margin-bottom: 40px;

}
#inner_container{
    padding-left:38px;
}


@media (max-width:598.98px) {
    #aca_text{
        font-size: 15px;
    }
    #professor_text{
        font-size: 15px;
    }
    #duration_text,#module_text{
        font-size: 14px;
    }
    .icon_blck{
        text-align: left;
        padding-left:10px;
    }
    .icon_blck i{
        margin:4px;
    }
    #review_text{
        text-align: left;
        padding-left:10px;
    }
    #amount_text{
        font-size: 15px;
        text-align: left;
        padding-left:10px;

    }
    .academic_head_text_one{
        font-size: 16px;
    }

  #course_text {
    padding:0;

  }
  .action{
    padding: 5px 10px 10px 10px;
  }
  .card-header{
    height:40px;
    padding:0;
  }
  .video_block{
    margin-top:20px;
  }
  .inside_block{
    margin-left: 0;
    justify-content: end;
  }
  #inner_container{
    padding-left:15px;
  }
}


@media (max-width:1024px) {
    #aca_text{
        font-size: 15px;
    }
    #professor_text{
        font-size: 15px;
    }
    #duration_text,#module_text{
        font-size: 14px;
    }
  
    .icon_blck i{
        margin:4px;
    }
  
    #amount_text{
        font-size: 15px;
   

    }
    .academic_head_text_one{
        font-size: 16px;
    }

  #course_text {
    padding:0;

  }
  .action{
    padding: 5px 10px 10px 10px;
  }
  .card-header{
    height:40px;
    padding:0;
  }
  .video_block{
    margin-top:20px;
  }
  .inside_block{
    margin-left: 0;
    justify-content: end;
  }
  #inner_container{
    padding-left:15px;
  }
}

</style>