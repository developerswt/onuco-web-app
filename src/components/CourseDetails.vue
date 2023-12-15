<template>
    <div>
        <div id="search_container" class="container-fluid jk">
            <div class="first_block">
                <div class="container">
                    <div class="search_inner_block">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="">
                                    <Breadcrumbs />
                                </div>
                            </div>
                        </div>
                        <div v-if="isMobile" class="container-fluid">
                            <div v-if="videoOptions.sources.length > 0" class="video_block mb-4">
                                <video-player
ref="videoPlayer" class="mobileVideo" :options="videoOptions"
                                    :video-id="videoId" :course-id="courseId" :watch-time="watchTime"
                                    :is-subscribed="userIsSubscribed" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-12 col-sm-12 col-md-6">
                                <div class="search_right_block">
                                    <h4 class="academic_head_text mt-2">

                                        <span id="aca_text">{{ book.title }} </span>

                                    </h4>
                                    <div class="">
                                        <p
v-for="instructor in book.instructorName" id="professor_text"
                                            :key="instructor.id"> {{ instructor.name }}</p>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-3 col-6 col-sm-6 col-md-6">
                                            <p id="duration_text" class="mb-2"><img
                                                    src="../assets/images/Iconionic-ios-timer@2x.png">{{
                                                        book.videoDemand }}
                                            </p>
                                        </div>
                                        <div class="col-lg-4 col-md-3  col-6 col-sm-6 col-md-6">
                                            <p id="module_text" class="mb-2"><img
                                                    src="../assets/images/Iconmap-school@2x.png">{{ book.modules }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12 col-sm-12 col-md-6">


                                <div class="icon_blck">
                                    <StarRatings :rating="ratings !== undefined ? ratings : 0" :max-rating="5" />

                                    <p style="cursor: pointer;" @click="showPopup()">({{ ratingCount || 0 }} Reviews)</p>
                                </div>

                                <p id="amount_text"><span id="strike_text"> &#8377;{{ book.actualPrice }}</span>
                                    &#8377;{{ book.discountedPrice }} <router-link to="/login"> <button
                                            id="search_button">buy now</button></router-link></p>
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
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div id="inner_container" class="container">
                <h4 class="academic_head_text_one">
                    <b id="aca_text">Course</b>Description
                </h4>
                <p id="course_text" v-html="book.description"></p>
                <div class="row">
                    <div class="col-lg-12">
                        <section id="tab_block">
                            <div class="pt-4 topic-card" style="padding-right: 14px;">
                                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                                    <el-tab-pane label="Subject" name="first" class="rt">
                                        <div class="row box mb-5">
                                            <div class="col-sm-6">
                                                <div v-for="(topic, index) in book.subject" :key="topic.id" class="card">
                                                    <div class="accordion-item">
                                                        <h5 class="card-header">
                                                            <div
id="heading-example"
                                                                :class="index === 0 ? 'd-block kj' : 'collapsed d-block kj'"
                                                                data-toggle="collapse" :href="'#collapse-example' + index"
                                                                aria-expanded="true" aria-controls="collapse-example">

                                                                <div class="row">
                                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                                        <button
class="btn btn-link"
                                                                            style="text-decoration: none; border: none;">
                                                                            {{ topic.heading }}
                                                                        </button>
                                                                    </div>
                                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                                        <div class="action"><i
id="sem_icon"
                                                                                class="fa fa-chevron-right rotate-icon"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </h5>
                                                        <div
:id="'collapse-example' + index"
                                                            :class="index === 0 ? 'collapse show' : 'collapse'"
                                                            aria-labelledby="heading-collapsed">
                                                            <div
v-for="lessons in topic.values" :key="lessons.id"
                                                                class="cards_body_color">
                                                                <div class="row">
                                                                    <div class="col-lg-6 col-6 col-sm-6 ">
                                                                        <div class="accordion_block_one">
                                                                            <i
class="fa" aria-hidden="true" :class="{
                                                                                'fa-circle-o': !hasAnySubjectComplete(lessons),
                                                                                'fa-check': hasAnySubjectComplete(lessons),
                                                                            }" style="margin-right: 10px;"></i>
                                                                            <p
id="check_text" data-palcement="top"
                                                                                :title="lessons.heading"> {{
                                                                                    lessons.heading.slice(0, 16) }}...</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-6 col-6 col-sm-6">
                                                                        <div class="accordion_block_two">
                                                                            <p id="duration_text">40m 13s</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
v-for="(subject, lessonIndex) in lessons.values"
                                                                    :key="lessonIndex.id"
                                                                    :class="{ 'playing-subject': playingSubject === subject }"
                                                                    class="chapters_block">
                                                                    <div
class="row sub"
                                                                        :class="{ 'playing-subject': playingSubject === subject }">
                                                                        <div class="col-lg-1 col-1 col-sm-1">
                                                                            <i
class="fa" aria-hidden="true" :class="{
                                                                                'fa-check': isProgressBarComplete(subject.id) && playingSubject !== subject,
                                                                                'fa-circle-o': !isProgressBarComplete(subject.id) && playingSubject !== subject,
                                                                                'fa-circle': playingSubject === subject
                                                                            }" style="margin-top: 6px;"></i>
                                                                        </div>
                                                                        <div
class="col-lg-7 col-10 col-sm-10"
                                                                            style="cursor: pointer;"
                                                                            @click="switchVideo(subject.url, subject)">
                                                                            <p id="intro_text">{{ subject.lession }}</p>
                                                                            <div class="row">
                                                                                <div class="col-lg-6 col-6 col-sm-6">
                                                                                    <p id="duration_text_one">{{
                                                                                        calculateTime(subject.id).timeInMinutes
                                                                                    }}:{{
    calculateTime(subject.id).remainingSeconds
}}</p>
                                                                                </div>
                                                                                <div class="col-lg-6 col-6 col-sm-6">
                                                                                    <div class="progress_block">
                                                                                        <div
                                                                                            v-if="hasMatchingVideoId(subject.id)">
                                                                                            <progress
                                                                                                :value="calculatePercentage(subject.id)"
                                                                                                max="100">{{
                                                                                                    getWatchTime(subject.id)
                                                                                                }}</progress>
                                                                                        </div>
                                                                                        <div v-else>
                                                                                            <progress
value="0"
                                                                                                max="100">0</progress>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-4 col-12 col-sm-12">
                                                                            <div class="inside_block">
                                                                                <div
class="progress-container"
                                                                                    @click="switchVideo(subject.url, subject)">
                                                                                    <div
v-if="hasMatchingVideoId(subject.id)"
                                                                                        class="progress_block">
                                                                                        <el-progress
type="circle"
                                                                                            :show-text="false"
                                                                                            :percentage="calculatePercentage(subject.id)"
                                                                                            :color="'#FF9924'" :width="30"
                                                                                            :stroke-width="2"></el-progress>
                                                                                    </div>
                                                                                    <div v-else class="progress_block">
                                                                                        <el-progress
type="circle"
                                                                                            :show-text="false"
                                                                                            :percentage="0"
                                                                                            :color="'#FF9924'" :width="30"
                                                                                            :stroke-width="2"></el-progress>
                                                                                    </div>

                                                                                </div>

                                                                                <i
class="fa" aria-hidden="true" :class="{
                                                                                    'fa-bookmark-o': !isProgressBarComplete(subject.id) && playingSubject !== subject,
                                                                                    'fa-bookmark': isProgressBarComplete(subject.id) || playingSubject === subject,
                                                                                }" style=" font-size: 26px;"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="!isMobile" class="col-sm-6">
                                                <div v-if="videoOptions.sources.length > 0" class="video_block mb-4">
                                                    <video-player
v-if="renderComponent" ref="videoPlayer"
                                                        :options="videoOptions" :is-subscribed="userIsSubscribed"
                                                        :video-id="videoId" :course-id="courseId" :watch-time="watchTime" />
                                                </div>
                                            </div>
                                        </div>
                                    </el-tab-pane>
                                    <el-tab-pane label="Description " name="second">
                                        <div class="" v-html="book.courseDescription"></div>
                                    </el-tab-pane>
                                    <el-tab-pane label="Question Bank" name="third">
                                        <div class="" v-html="book.questionBank"></div>
                                    </el-tab-pane>
                                    <el-tab-pane label="Quiz" name="fourth">
                                        <div class="" v-html="book.quiz"></div>
                                    </el-tab-pane>
                                </el-tabs>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    <div class="container-fluid cf"></div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
import VideoPlayer from './VideoPlayer.vue';
// import Offer from './Offer.vue'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import StarRatings from './StarRatings.vue'

import AxiosInstance from '../config/axiosInstance'

export default {
    name: 'SemesterDetails',
    components: {
        VideoPlayer,
        Loading,
        Breadcrumbs,
        StarRatings
    },
    data() {
        return {
            watchTime: null,
            ratingCount: '',
            isMobile: window.innerWidth <= 767,
            renderComponent: true,
            ratings: [],
            rating: '',
            readMore: false,
            courseId: null,
            videoId: null,
            isLoading: false,
            userIsSubscribed: false,
            courseDetails: null,
            playingSubject: null,
            isPopupVisible: false,
            watchTimeDatas: [],
            activeName: 'first',
            book: [],
            videoOptions: {
                playbackRates: [0.5, 1, 1.5, 2],
                autoplay: false,
                controls: true,
                width: 100,

                sources: [

                ],
            },

        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
        isusers() {
            console.log(this.$store.state.user.signInUserSession.idToken.payload);
            return this.$store.state.user.signInUserSession.idToken.payload;
        },
        isuser() {
            console.log(this.$store.state.user);
            return this.$store.state.user;
        },
        videoType() {
            let type = '';

            if (typeof this.videoOptions.sources.src === 'string') {
                if (this.videoOptions.sources.src.endsWith('.mp4')) {
                    type = 'video/mp4'; // MP4 Format
                } else if (this.videoOptions.sources.src.endsWith('.m3u8')) {
                    type = 'application/x-mpegURL'; // HLS Format
                }
            }

            return type;
        }
    },
    mounted() {
        // Attach an event listener to the window resize event
        window.addEventListener('resize', this.handleWindowResize);

        window.addEventListener('orientationchange', this.handleOrientationChange);
        // Call the method to initially set the isMobile property
        this.handleWindowResize();
    },
    beforeUnmount() {
        // Remove the event listener when the component is destroyed to avoid memory leaks
        window.removeEventListener('orientationchange', this.handleOrientationChange);

        window.removeEventListener('resize', this.handleWindowResize);
    },
    async created() {
        this.isLoading = true;
        try {
            const res = await AxiosInstance.get(`/Coursedetails/` + this.$route.params.name);
            this.book = res.data;
            const subscription = await AxiosInstance.get(`/UserCourseSubscription?` + "courseName=" + this.$route.params.name);
            this.courseDetails = subscription.data;
            console.log(this.courseDetails);
            const resul = await AxiosInstance.get(`/Ratings?id=` + this.book.id + "&objectTypeId=5");
            this.ratings = resul.data.averageRating;
            this.ratingCount = resul.data.ratingCount;
            console.log(this.ratings);
            // console.log(this.courseDetails.userCognitoId);
            if (this.courseDetails === true) {
                this.userIsSubscribed = true;
            } else {
                this.userIsSubscribed = false;
            }
            if (this.userIsSubscribed) {
                try {
                    const result = await AxiosInstance.get('/StateManagement/' + this.book.id);
                    this.watchTimeDatas = result.data;
                    console.log(this.watchTimeDatas);
                } catch {
                    this.watchTimeDatas = { "id": 0, "userId": "dbae6829-8b5e-4f31-9c79-9d3b0c0aec08", "courseId": 0, "watchTimeData": [] };
                    console.log(this.watchTimeDatas);
                }
            }

            this.videoOptions.sources = [
                {
                    src: this.book.videoUrl,
                    type: this.videoType,
                    withCredentials: false,
                }
            ]
            this.courseId = this.book.id;

            console.log(this.book.id);
            console.log(this.videoOptions);
        } catch (err) {
            console.error(err);
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
        handleWindowResize() {
            // Update the isMobile property based on the window width
            this.isMobile = window.innerWidth <= 767;
        },
        toggleReadMore() {
            this.book.readMore = !this.book.readMore;
        },

        hasMatchingVideoId(subjectId) {
            if (this.watchTimeDatas && this.watchTimeDatas.length > 0) {
                return this.watchTimeDatas[0].watchTimeData.some(watch => watch.videoId === subjectId);
            }
            return false;
        },
        getWatchTime(subjectId) {
            if (this.watchTimeDatas && this.watchTimeDatas.length > 0) {
                const watchData = this.watchTimeDatas[0].watchTimeData.find(watch => watch.videoId === subjectId);
                return watchData ? watchData.watchTime : 0;
            } else {
                // Handle the case when watchTimeDatas or watchTimeData is undefined
                return 0;
            }
        },

        calculatePercentage(subjectId) {
            const totalTime = this.getTotalTime(subjectId);
            const watchTime = this.getWatchTime(subjectId);

            if (totalTime && watchTime) {
                console.log((watchTime / totalTime) * 100);
                return (watchTime / totalTime) * 100;
            } else {
                return 0;
            }
        },
        calculateTime(subjectId) {
            const totalTime = this.getTotalTime(subjectId);

            if (totalTime) {
                const timeInHours = Math.floor(totalTime / 3600);
                const timeInMinutes = Math.floor((totalTime % 3600) / 60);
                const remainingSeconds = Math.floor((totalTime % 3600) % 60);
                return {
                    timeInHours,
                    timeInMinutes,
                    remainingSeconds
                };
            } else {
                return {
                    timeInHours: 0,
                    timeInMinutes: 0,
                    remainingSeconds: 0
                };
            }
        },


        getTotalTime(subjectId) {
            const subject = this.findSubjectById(subjectId);
            return subject ? parseFloat(subject.time) : 0;
        },

        findSubjectById(subjectId) {
            for (const topic of Object.values(this.book.subject)) {
                for (const lessons of topic.values) {
                    for (const subject of lessons.values) {
                        if (subject.id === subjectId) {
                            return subject;
                        }
                    }
                }
            }
            return null;
        },
        hasAnySubjectComplete(subjects) {
            return subjects.values.every(subject => this.hasCompleteWatchTime(subject.id));
        },
        hasCompleteWatchTime(subjectId) {
            const subject = this.findSubjectById(subjectId);
            if (subject) {
                const totalTime = parseFloat(subject.time);
                const watchTime = this.getWatchTime(subjectId);

                if (totalTime && watchTime) {
                    const percentage = Math.round((watchTime / totalTime) * 100);
                    return percentage === 100;
                }
            }

            return false;
        },
        handleOrientationChange() {
            // Check if the device is in landscape mode
            const isLandscape = window.innerWidth > window.innerHeight;

            // If in landscape mode, make the video fullscreen
            if (isLandscape) {
                this.makeVideoFullscreen();
            }
        },
        makeVideoFullscreen() {
            const videoPlayer = this.$refs.videoPlayer;

            // Check if Fullscreen API is supported
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            } else if (videoPlayer.mozRequestFullScreen) {
                videoPlayer.mozRequestFullScreen();
            } else if (videoPlayer.webkitRequestFullscreen) {
                videoPlayer.webkitRequestFullscreen();
            } else if (videoPlayer.msRequestFullscreen) {
                videoPlayer.msRequestFullscreen();
            }
        },
        getCurrentUserCognitoId() {
            const jwtToken = localStorage.getItem('username');
            if (!jwtToken) {
                return null;
            }
            try {
                const [, payload] = jwtToken.split('.');
                const decodedPayload = JSON.parse(atob(payload));

                const subId = decodedPayload.sub;

                return subId;
            } catch (error) {
                console.error('Error decoding JWT token:', error);
                return null;
            }
        },

        async switchVideo(newVideoUrl, subject) {

            if (this.$refs.videoPlayer && this.$refs.videoPlayer.player) {
                const player = this.$refs.videoPlayer.player;

                this.videoId = subject.id;
                console.log(this.videoId);
                player.pause();
                console.log('Player paused.');


                this.renderComponent = false;
                console.log(this.renderComponent);
                await this.$nextTick();
                this.renderComponent = true;

                this.videoOptions.sources = [
                    {
                        src: newVideoUrl,
                        type: this.videoType,
                        withCredentials: false,
                    }
                ];

                this.playingSubject = subject;
                console.log('Video source updated.');

                this.watchTime = this.getWatchTime(subject.id);
                console.log(this.watchTime);

                player.src(this.videoOptions.sources);
            }
        },

        isProgressBarComplete(subjectId) {
            const totalTime = parseFloat(this.findSubjectById(subjectId).time);
            const watchTime = this.getWatchTime(subjectId);

            if (totalTime && watchTime) {
                const percentage = Math.round((watchTime / totalTime) * 100);
                return percentage === 100;
            }

            return false;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        submitRating() {
            AxiosInstance.post('/Ratings', {
                userId: this.isusers['cognito:username'],
                objectId: this.book.id,
                objectTypeId: 5,
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
    },
}
</script>

<style scoped>
progress {
    /*reset to default appearance*/
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 200px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid #434343;
}

progress::-webkit-progress-bar {
    background: #CCCCCC;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0) inset;
    border-radius: 6px;
    height: 4px;
    width: 171px;
}

progress::-webkit-progress-value {
    background-image: linear-gradient(120deg, #ffd173 0, #18cc00 55%);
    border-radius: 20px;
}

.progress-container {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 5px;
    background-image: url('../assets/images/Group1318@2x.png');
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
    padding-left: 15px;
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
        position: relative;
        left: 1px;
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

.chapters_block .playing-subject {
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
    color: #08AB44;
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

.cf {
    width: 100%;
    height: 200px;
    background-image: url('../assets/images/Group 246.png');
}

.video2 {
    display: none;
}

.video1 {
    display: block;
}

@media (max-width:520px) {
    .video2 {
        display: block;
    }

    .container-fluid .video2 {
        padding-left: 0px;
        padding-right: 0px;
    }

    .Ratings_button_block .btn {
        padding: 6px 53px 6px !important;
        position: relative;
        right: 153px;
    }
}

.star-rating {
    font-size: 24px;
}

.Ratings_button_block {
    margin-left: 55%;
    cursor: pointer;
}

.Ratings_button_block .btn {
    background-color: green;
    padding: 5px 60px;
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

.popup h5 {
    color: #006acd;
    font-weight: bold;
    text-align: left;
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
    z-index: 900;
    display: none;
}

.popup {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 30%;
    left: 50%;
    width: 70%;
    max-width: 400px;
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

/* Media query for smaller screens */
@media (max-width: 600px) {
    .popup {
        width: 90%;
    }
}

@media (max-width: 767px) {

    .mobileVideo {
        width: 335px;
        margin-left: -6%;
    }

}

@media (max-width: 360px) {

    .mobileVideo {
        width: 330px;
        margin-left: -7%;
    }

}
</style>