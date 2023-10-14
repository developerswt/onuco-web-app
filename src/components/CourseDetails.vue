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
                                    <ol class="breadcrumb" >
                                        <li class="breadcrumb-item"><router-link to="/" style="text-decoration: none;">Home</router-link></li>
                                        <li class="breadcrumb-item"><router-link :to="'/Academia/' + this.book.brachRouteName" style="text-decoration: none;">{{ this.book.branchName }}</router-link></li>
                                        <li class="breadcrumb-item"><router-link :to="'/Universities/' + this.book.universityRouteName"  style="text-decoration: none;">{{ this.book.university }}</router-link></li>
                                        <li class="breadcrumb-item"><router-link :to="'/CollegeDetails/' + this.book.collegeDetailsRouteName" style="text-decoration: none;">{{ this.book.collegeDetails }}</router-link></li>
                                        <li class="breadcrumb-item"><router-link to="" style="text-decoration: none;">{{ this.book.title }}</router-link></li>

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
                    <b id="aca_text">Course</b>Description
                </h4>
                <p id="course_text" v-html="this.book.description"></p>
                <div class="row">
                    <div class="col-lg-12">
                        <section id="tab_block">
                            <div class="pt-4 topic-card">
                                <el-tabs class="demo-tabs" v-model="activeName" @tab-click="handleClick">
                                    <el-tab-pane label="Subject" name="first" class="rt">
                                        <div class="row box mb-5">
                                            <div class="col-sm-6">
                                                <div class="card" v-for="(topic, index) in this.book.subject" :key="topic.id">
                                                    <div class="accordion-item">
                                                        <h5 class="card-header">
                                                            <div :class="index === 0 ? 'd-block kj' : 'collapsed d-block kj'" data-toggle="collapse" :href="'#collapse-example' + index" aria-expanded="true" aria-controls="collapse-example" id="heading-example">
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                                        <button class="btn btn-link" style="text-decoration: none; border: none;">
                                                                            {{ topic.heading }}
                                                                        </button>
                                                                    </div>
                                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                                        <div class="action"><i
                                                                            class="fa fa-chevron-right rotate-icon"
                                                                            id="sem_icon"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </h5>
                                                        <div :id="'collapse-example' + index"  :class="index === 0 ? 'collapse show' : 'collapse' " aria-labelledby="heading-collapsed">
                                                            <div class="cards_body_color" v-for="lessons in topic.values" :key="lessons.id">
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-6 col-sm-6 " >
                                                                        <div class="accordion_block_one">
                                                                            <i class="fa" aria-hidden="true"
                                                                                :class="{
                                                                                    'fa-circle-o': !hasAnySubjectComplete(lessons.values),
                                                                                    'fa-check': hasAnySubjectComplete(lessons.values),
                                                                                }"
                                                                                style="margin-right: 10px;"
                                                                            ></i>
                                                                            <p id="check_text"> {{ lessons.heading }}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                                        <div class="accordion_block_two">
                                                                            <p id="duration_text">40m 13s</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div :class="{ 'playing-subject': playingSubject === subject }" class="chapters_block" v-for="(subject, index) in lessons.values" :key="index.id">
                                                                    <div class="row sub" :class="{ 'playing-subject': playingSubject === subject }">
                                                                        <div class="col-lg-1 col-1 col-sm-1">
                                                                            <i class="fa" aria-hidden="true"
                                                                                :class="{
                                                                                    'fa-check': isProgressBarComplete(subject.id) && playingSubject !== subject,
                                                                                    'fa-circle-o': !isProgressBarComplete(subject.id) && playingSubject !== subject,
                                                                                    'fa-circle': playingSubject === subject
                                                                                }"
                                                                                style="margin-top: 6px;"
                                                                            ></i>
                                                                        </div>
                                                                        <div class="col-lg-7 col-10 col-sm-10" @click="switchVideo(subject.url, subject)" style="cursor: pointer;">
                                                                            <p id="intro_text">{{ subject.lession }}</p>
                                                                            <div class="row">
                                                                                <div class="col-lg-6 col-6 col-sm-6">
                                                                                    <p id="duration_text_one">{{ subject.time }}</p>
                                                                                </div>
                                                                                <div class="col-lg-6 col-6 col-sm-6">
                                                                                    <!-- <div v-for="video in watchTimeDatas" :key="video.id">
                                                                                        <div v-for="watch in video.watchTimeData" :key="watch.id"> v-if="subject.id === watch.videoId" -->
                                                                                            <div class="progress_block" >
                                                                                                <progress value="10" max="100">
                                                                                                    10
                                                                                                </progress>
                                                                                            </div>
                                                                                        <!-- </div>
                                                                                    </div> -->
                                                                                    <!-- <progress value="0" max="100"> </progress> -->
                                                                                </div>
                                                                                <!-- <div class="col-lg-6 col-6 col-sm-6">
                                                                                    <div class="progress_block">
                                                                                        <progress class="progress" value="75" max="100">
                                                                                            75%
                                                                                        </progress>
                                                                                    </div>
                                                                                </div> -->
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-4 col-12 col-sm-12">
                                                                            <div class="inside_block">
                                                                                <div class="progress-container" @click="switchVideo(subject.url, subject)">
                                                                                    <el-progress type="circle" :show-text="false" :percentage="10" :color="'#FF9924'"  :width="30" stroke-width="2"></el-progress>
                                                                                </div>

                                                                                <i class="fa" aria-hidden="true"
                                                                                    :class="{
                                                                                        'fa-bookmark-o': isProgressBarEmpty(subject.id),
                                                                                        'fa-bookmark': isProgressBarComplete(subject.id),
                                                                                        'fa-bookmark': isProgressBarStarted(subject.id),
                                                                                    }"
                                                                                    style=" font-size: 26px;"
                                                                                ></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>            
                                            <div class="col-sm-6">
                                                <div class="video_block mb-4" v-if="videoOptions.sources.length>0">
                                                    <video-player :options="videoOptions" :isSubscribed="userIsSubscribed" ref="videoPlayerRef" />
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
    </div>
    <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="'100px'" :height="'100px'"></Loading>        
</template>

<script>
import axios from 'axios';
import VideoPlayer from './VideoPlayer.vue';
import Offer from './Offer.vue'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import AxiosInstance from '../config/axiosInstance'

export default {
    name: 'SemesterDetails',
    components: {
        VideoPlayer,
        Offer,
        Loading
        // Breadcrumbs
    },
    data() {
        return {
            isLoading: false,
            userIsSubscribed: false,
            courseDetails: null,
            playingSubject: null,
            watchTimeDatas: [],
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

        }
    },
    computed: {
        isuser() {
            console.log(this.$store.state.user);
            return this.$store.state.user;
        },
        videoType() {
            if (typeof this.videoOptions.sources.src === 'string') {
                if(this.videoOptions.sources.src.endsWith('.mp4')) {
                    return 'video/mp4'; // MP4 Format
                } else if(this.videoOptions.sources.src.endsWith('.m3u8')) {
                    return 'application/x-mpegURL';  // HLS Format
                }    
            } else {
                return '';
            }
        }
    },
    methods: {
        hasAnySubjectComplete(subjects) {
            return subjects.every(subject => this.hasCompleteWatchTime(subject.id));
        },
        hasCompleteWatchTime(subjectId) {
                // Check if any watch time data for the given subjectId has a WatchTime of 100
            return this.watchTimeDatas.every(video => {
                const watchData = video.watchTimeData.find(watch => watch.videoId === subjectId);
                return watchData && watchData.watchTime === 100;
            });
        },
        getCurrentUserCognitoId() {
            const jwtToken = localStorage.getItem('username');
            if (!jwtToken) {
                // Handle the case where the token is not found in local storage
                return null;
            }
            try {
                // Decode the JWT token (assuming it's in the format "header.payload.signature")
                const [, payload] = jwtToken.split('.');
                const decodedPayload = JSON.parse(atob(payload));

                // Extract the sub ID
                const subId = decodedPayload.sub;

                return subId;
            } catch (error) {
                console.error('Error decoding JWT token:', error);
                return null;
            }
        },
        async switchVideo(newVideoUrl, subject) {
            if (this.$refs.videoPlayerRef.player) {
                const player = this.$refs.videoPlayerRef.player;
        
                // Pause the current video (if it's playing)
                player.pause();
        
                // Reset the current time
                player.currentTime(0);

                // Change the video source to the new URL
                this.videoOptions.sources = [
                {
                    src: newVideoUrl,
                    type: this.videoType,
                    withCredentials: false,
                },
            ];
 
            this.playingSubject = subject;
                // Hide the poster image if it's displayed
            this.$refs.videoPlayerRef.showPoster = false;

                // Load the new video source
            player.src(this.videoOptions.sources);
        
                // Listen for the 'loadedmetadata' event before playing
            player.one('loadedmetadata', async () => {
                    // Play the new video
                    await player.play();
            });

            // Preload the new video source
                player.load();
            }
        },
        updateChapterProgress(chapterIndex, newProgress) {
            this.lessons[chapterIndex].progress = newProgress;
        },
        isProgressBarStarted(videoId) {
            // Check if there is watch time data for the given videoId
            return this.watchTimeDatas.some(video => {
                const watchData = video.watchTimeData.find(watch => watch.videoId === videoId);
                return watchData && watchData.watchTime > 0;
            });
        },
        isProgressBarComplete(videoId) {
            // Check if the watch time for the given videoId is 100%
            return this.watchTimeDatas.some(video => video.watchTimeData.some(watch => watch.videoId === videoId && watch.watchTime === 100));
        },
        isProgressBarEmpty(videoId) {
            // Check if there is no watch time data for the given videoId or all watch times are 0
            return !this.watchTimeDatas.some(video =>
                video.watchTimeData.some(watch => watch.videoId === videoId && watch.watchTime > 0)
            );
        },
        shouldShowCircleIcon(subjectId) {
            // Return true if the video source has changed, otherwise return false
            return this.videoChanged;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
    },
    async created(){
        this.isLoading = true;
        try {
            const res = await AxiosInstance.get(`/Coursedetails/` + this.$route.params.name);
            this.book = res.data; 
            const result = await AxiosInstance.get('/StateManagement');
            this.watchTimeDatas = result.data;
            console.log(this.watchTimeDatas);
            const subscription = await AxiosInstance.get(`/UserCourseSubscription?` + "courseName=" + this.$route.params.name);
            this.courseDetails = subscription.data;
            // console.log(this.courseDetails);
            // const currentUserSubId = this.getCurrentUserCognitoId();
            // console.log(this.courseDetails.userCognitoId);
            if (this.courseDetails === true) {
                this.userIsSubscribed = true;
            } else {
                this.userIsSubscribed = false;
            }
            this.videoOptions.sources = [
                {
                    src: this.book.videoUrl,
                    type: this.videoType,
                    withCredentials: false,
                }
            ]
           
            console.log(this.book);
            console.log(this.videoOptions);
        } catch (err) {
            console.error(err);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
}
</script>

<style scoped>
progress{
    /*reset to default appearance*/
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
 
    width: 200px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid #434343;
}
 
/*style for background track*/
progress::-webkit-progress-bar {
    /* background: rgb(221, 221, 221); */
    background: #CCCCCC;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0) inset;
    border-radius: 6px;
    height: 4px;
    width: 171px;
}
/*style for progress track*/
progress::-webkit-progress-value {
    background-image: linear-gradient(120deg,#ffd173 0,#18cc00 55%);
    border-radius: 20px;
}
.progress-container {
    position: relative;
    width: 30px; /* Set the width and height of the container */
    height: 30px;
    margin: 5px;
    background-image: url('../assets/images/Group1318@2x.png'); /* Replace 'your-image.jpg' with your image URL */
    background-size: cover;
}
.progress-container .el-progress {
    position: absolute;
    left: 0px;
    top: 0px;
}
.el-progress--circle {
  margin-right: 35px;
}    
.jk {
    padding-top: 68px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

.first_block {
    background: #E5EFF9 0% 0% no-repeat padding-box;
    color: #0066CC;
    padding-left: 0px !important;
    padding-right: 2px !important;
}
.breadcrumb {
    background: transparent;
}

.breadcrumb-item a {
    color: #888888;
    font-size: 16px;
}

.breadcrumb-item+.breadcrumb-item::before {
    content: ">";
    color: #888888;
}
ol {
    margin-top: 0;
    margin-left: -17px;
    margin-bottom: 1rem;
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
    padding-left: 0px;
}

/* .academic_head_text {
    color: #006acd;
    font-size: 22px;

} */

.academic_head_text_one {
    color: #006acd;
    font-size: 22px;
    margin-top: 20px;
    margin-left: 9px;
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
    padding-right: 10px;
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
    padding-left: 0;
    padding-right: 0;

}

.search_inner_block {
    padding: 10px 10px 20px 10px;
}

#course_text {
    color: #777777;
    font-size: 16px;
    font-weight: lighter;
}
.el-tabs {
    --el-tabs-header-height: 40px;
    padding-left: 13px;
}
.action #sem_icon {
    float: right;
    font-size: 20px;
    width: 6px;
    height: 13px;
    color: #0066CC;
    opacity: 1;
    margin-top: 5px;
    margin-right: 3px;
    cursor: pointer;
    

}
.kj {
    cursor: poniter;
}

.kj:not(.collapsed) .rotate-icon {
    transform: rotate(90deg);
}

.btn-link {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 14px/19px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}
/* .sem_icon {
    width: 6px;
    height: 13px;
    border: 2px solid #0066CC;
    opacity: 1;
} */
@media screen and (min-width: 100px) and (max-width: 600px) {
    .box {
        display: flex;
        flex-direction: column-reverse;
    }
} 
.action {
    text-align: right;
    padding-top: 5px;
}

.action i {
    color: #0066CC;
}

/* .card-header:not(.collapsed) .action i {
    transform: rotate(90deg);
} */

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
    padding-left: 29px;
    margin-right: 19px;
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
.progress-container {
  position: relative;
  cursor: pointer;
}

.progress-circle {
  position: absolute;
  top: 0;
  left: 0;
}
.inside_block img {

    height: 30px;
    margin: 5px;
}
.cards_body_color {
    background: #E5EFF9;
}

#accordion {
    margin-bottom: 40px;

}

#inner_container {
    padding-left: 38px;
}


@media (max-width:598.98px) {
    #aca_text {
        font-size: 15px;
    }

    #professor_text {
        font-size: 15px;
    }

    #duration_text,
    #module_text {
        font-size: 14px;
    }

    .icon_blck {
        text-align: left;
        padding-left: 10px;
    }

    .icon_blck i {
        margin: 4px;
    }

    #review_text {
        text-align: left;
        padding-left: 10px;
    }

    #amount_text {
        font-size: 15px;
        text-align: left;
        padding-left: 10px;

    }

    .academic_head_text_one {
        font-size: 16px;
    }

    #course_text {
        padding: 0;

    }

    .action {
        padding: 5px 10px 10px 10px;
    }

    .card-header {
        height: 40px;
        padding: 0;
    }

   

    

    .inside_block {
        margin-left: 0;
        justify-content: end;
    }

    #inner_container {
        padding-left: 15px;
    }
}


@media (max-width:1024px) {
    #aca_text {
        font-size: 15px;
    }

    #professor_text {
        font-size: 15px;
    }

    #duration_text,
    #module_text {
        font-size: 14px;
    }

    .icon_blck i {
        margin: 4px;
    }

    #amount_text {
        font-size: 15px;


    }

    .academic_head_text_one {
        font-size: 16px;
    }

    #course_text {
        padding: 0;

    }

    .action {
        padding: 5px 10px 10px 10px;
    }

    .card-header {
        height: 40px;
        padding: 0;
    }

    .video_block {
        margin-top: 0px;
    }

    .inside_block {
        margin-left: 0;
        justify-content: end;
    }

    #inner_container {
        padding-left: 15px;
    }

}



progress {
  border: none;
  width: 171px;
  height: 10px;
  /* background: #fff; */
  margin-left: -76px;
}
@media screen and (min-width: 760px) and (max-width: 915px) {
    progress {
        margin-left: -70px;
    }
}
@media only screen and (max-width: 550px) {
    progress {
        margin-left: -120px;
    }
}
@media only screen and (max-width: 499px) {
    progress {
        margin-left: -69px;
    }
}
@media only screen and (max-width: 280px) {
    progress {
        margin-left: -29px;
    }
}
@media only screen and (max-width: 1024px) {
    progress {
        margin-left: -55px;
    }
}
progress {
  color: #FF9924;
}

progress::-webkit-progress-value {
  background: #FF9924;
}

progress::-moz-progress-bar {
  background: lightcolor;
}
.playing-subject {
    background: #FFFFFF;
    padding-top: 10px;
    margin-bottom: 15px;
    
}
.chapters_block .playing-subject  {
    border-left: 3px solid orange;
    margin-left: -20px;
    margin-top: -10px;
    margin-bottom: -16px;
}
.sub {
    padding-left: 33px;
}

.fa-circle {
  color: #FF9900; 
}
.fa-circle-o {
   color: #0066CC;
}
.fa-check {
    color:  #08AB44;
}
.fa-bookmark-o {
    color: #0066CC;
}
.fa-bookmark {
    color: #0066CC;
}
@media only screen and (min-width: 768px) and (max-width: 998px) {
    .accordion_block_one {
        display: flex;
        align-items: center;
        padding: 10px;
        padding-left: 9px;
        margin-right: 19px;
}
    .sub {
        padding-left: 2px !important;
    }
    
}
@media screen and (min-width: 100px) and (max-width: 400px) {
    .accordion_block_one {
        display: flex;
       
        padding: 10px;
        padding-left: 6px;
        margin-right: 9px;
    }
    .sub {
        padding-left: 0px !important;
    }
    .progress {
        margin-left: -34px;
        width: 136px;
    }
}
</style>
