<template>
    <div>
        <div class="container-fluid jk" id="search_container">
            <div class="first_block">
                <div class="container">
                    <div class="search_inner_block">
                        <div class="row">
                            <div class="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">VTU</a></li>
                                        <li class="breadcrumb-item"><a href="#">Maths</a></li>
                                        <li class="breadcrumb-item"><a href="#">{{ this.book.semester }}</a></li>

                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="search_right_block">
                                    <h4 class="academic_head_text">

                                        <span id="aca_text">{{ this.book.title }} </span>

                                    </h4>
                                    <p id="professor_text"> {{ this.book.instructorName }}</p>
                                    <div class="row">
                                        <div class="col-lg-8 col-md-3">
                                            <p id="duration_text" class="mb-2"><img
                                                    src="../assets/images/Iconionic-ios-timer@2x.png">{{
                                                        this.book.videoDemand }}
                                            </p>
                                        </div>
                                        <div class="col-lg-4 col-md-3">
                                            <p id="module_text" class="mb-2"><img
                                                    src="../assets/images/Iconmap-school@2x.png">{{ this.book.modules }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">


                                <div class="icon_blck">
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                </div>
                                <p id="review_text">(23 Reviews)</p>
                                <p id="amount_text"><span id="strike_text"> &#8377;1999</span>
                                    &#8377;947 <button id="search_button">buy now</button></p>

                            </div>
                        </div>

                    </div>


                </div>


            </div>
            <div class="container" id="search_container">
                <h4 class="academic_head_text_one">
                    <span id="aca_text">Course </span>Description
                </h4>
                <p id="course_text">{{ this.book.description }}</p>


                <div class="row">
                    <div class="col-lg-12">
                        <section id="tab_block">
                            <div class="pt-4 topic-card">
                                <el-tabs class="demo-tabs" @tab-click="handleClick">
                                    <el-tab-pane label="Chapters" name="first" class="rt">
                                        <div class="row" v-for="(topic, index) in this.book.chapters" :key="topic.id">
                                            <div class="col-lg-6">
                                                <div class="card">
                                                    <div class="card-header"  data-toggle="collapse" :href="'#collapse-example' + index" aria-expanded="true" aria-controls="collapse-example" id="heading-example">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <button class="btn btn-link">
                                                                    {{ topic.heading }}

                                                                </button>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="action"><i
                                                                        class="fa fa-chevron-right rotate-icon"
                                                                        id="sem_icon"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div :id="'collapse-example' + index" class="collapse"
                                                        aria-labelledby="heading-collapsed">
                                                        <div class="card-body" v-for="lessons in topic.values" :key="lessons.cid">
                                                            <div class="row">
                                                                <div class="col-lg-6" >
                                                                    <div class="accordion_block_one">
                                                                        <i class="fa-solid fa-check"
                                                                            style="color: #08ab44;"></i>
                                                                        <p id="check_text"> Chapter-1</p>
                                                                    </div>

                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="accordion_block_two">
                                                                        <p id="duration_text">40m 13s</p>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="chapters_block">
                                                                <div class="row">
                                                                    <div class="col-lg-1">
                                                                        <i class="fa-solid fa-check"
                                                                            style="color: #08ab44;"></i>
                                                                    </div>
                                                                    <div class="col-lg-7">
                                                                        <p id="intro_text">{{ lessons.lesson }}</p>
                                                                        <div class="row">
                                                                            <div class="col-lg-6">
                                                                                <p id="duration_text_one">{{ lessons.time }}
                                                                                </p>
                                                                            </div>
                                                                            <div class="col-lg-6">
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

                                                                    <div class="col-lg-4">
                                                                        <div class="inside_block">

                                                                            <img src="../assets/images/Group1318@2x.png"
                                                                                class="img-fluid">


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
            isuser: localStorage.getItem("username"),
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
                        src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
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
            client: new S3Client({
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
    async created() {
        console.log("Hi");
        const command = new GetObjectCommand({
            Bucket: "onuco-s3",
            Key: "diabetes1.mp4"
        });
        const headers = { 'Authorization': this.authorizationHeader };
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Coursedetails/` + this.$route.query.id, { headers });
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
            this.imageFromS3 = "data:image/jpeg;base64," + this.responseFromS3;
            console.log(this.responseFromS3);
        } catch (err) {
            console.error(err);
        }
    },

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
    padding-left: 32px;
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
}</style>