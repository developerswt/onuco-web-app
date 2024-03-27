<template>
   <MyCarousel />
    <div v-if="userIsSubscribed" class="container-fluid jk mb-5">
        <div class="container jk mb-4">
            <!-- <div class="learning_block">
                <div class="row">
                    <div class="col-lg-12">
                        <div>
                            <div class="purple_block">
                                <p id="new_text">NEW</p>
                                <div v-if="selectedItem !== null" class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="right_block">
                                            <p id="subject_text">{{ selectedItem.title }}</p>
                                            <p class="mb-0">{{ selectedItem.videoDemand }} Video Course</p>
                                            <p>{{ selectedItem.questionBank && selectedItem.questionBank.length ? selectedItem.questionBank.length + ' Question Banks' : '' }}</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="left_block">
                                            <p>{{ selectedItem.modules }} <span id="span_text">{{ selectedItem.topicsCount}} Topics</span></p>
                                            <router-link :to="{ name: 'CourseDetails', params: { name: selectedItem.courseRouteName } }">
                                                <button id="course_button">Start Course <i class="fa-solid fa-play" style="color: #ffffff;"></i></button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 justify-content-center">
                        <div class="radio_checkbox" style="text-align: center;">
                            <div v-for="item in myLearning" :key="item.id" class="radio-item"
                                :class="{ 'active': item === selectedItem }">
                                <div class="dot" @click="handleItemChange(item)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="tab_block">
                <section id="tab_block" >
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                        <el-tab-pane label="MY COURSES" name="first" >

                        <div v-if="selectedItem !== null" id="myTabContent" class="tab-content">
                            <div id="home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                                <div class="">
                                    <div class="row mt-3">
                                        <div class="col-lg-6 col-8 col-sm-8 col-md-6">
                                            <h4 class="academic_head_text">

                                                <span id="aca_text">interested</span> Courses

                                            </h4>
                                        </div>
                                        <!-- <div class="col-lg-6 text-right col-4 col-sm-4 col-md-6">
                                                <router-link id="see_text" to="#">See all</router-link>
                                            </div> -->
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="notify_block">

                                                <i class="fa-solid fa-triangle-exclamation" style="color: #ff9900;"></i>
                                                <p class="pt"> Please
                                                    subscribe the subjects to
                                                    get more details</p>
                                                <button id="course_list_button">Course List</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner_block" v-for="select in myLearning" :key="select.id">
                                        <div class="row" >
                                            <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                                <div id="asset_image">
                                                    <img src="../assets/images/book1.png" class="img-fluid">
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                                <router-link :to="{ name: 'CourseDetails', params: { name: select.courseRouteName } }" style="text-decoration: none;">
                                                    <p id="text_one" class="mb-0">{{ select.title }}</p>
                                                </router-link>
                                                <p id="text_two">stacks</p>
                                            </div>
                                        </div>
                                        <div class="row line">
                                            <div class="col-lg-4 col-sm-4 col-6">
                                                <div class="progress_block">
                                                    <progress :value="calculatePercentage(select)" max="100">{{
                                                            getWatchTime(select) }}</progress>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-sm-8 col-6 text">
                                                <p id="text_three">{{ remainingTimes(select) }} left</p>
                                            </div>
                                            <!-- <button class="bt">BUY NOW</button> -->
                                        </div>

                                    </div>

                                    <!-- </div>
                                            </div>
                                        </div>             -->
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="LIVE" name="third">
                            <span id="aca_text">Live</span> Courses
                            <div v-if="!selectedItem?.videoCompleted" class="">
                                <div v-if="selectedItem !== null" id="myTabContent" class="tab-content" >
                                    <div id="home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab"  v-for="item in myLearning" :key="item.id" >
                                        <div class="row mt-4 ">
                                            <div class="col-lg-6 text-left col-8 col-sm-8 col-md-6 ">
                                                <h6 style="color:#B4B4B4;">{{ item.university }}</h6>
                                                <p class="text_line">{{ item.title }}</p>
                                                <div class="row ml-0">
                                                    <div class=" info">
                                                        <p>{{ item.instructorName[0].name }}</p>
                                                    </div>
                                                    <div class="asset_image info1">
                                                        <img src="../assets/images/Iconionic-ios-timer@2x.png"
                                                            class="img-fluid ml-2" style="width: 17px; height: 17px;">
                                                        {{ calculateTime(item).timeInHours }}:{{
                                                            calculateTime(item).timeInMinutes }}:{{ calculateTime(item).remainingSeconds }}
                                                    </div>
                                                    <div class="asset_image info2">
                                                        <img src="../assets/images/Iconmap-school@2x.png"
                                                            class="img-fluid ml-2" style="width: 17px; height: 18px;">
                                                        {{ item.modules }}<br>
                                                    </div>
                                                    <div>
                                                        <p class="pp" style="color: #666666; font-size: 12px; float: left;">
                                                        {{ item.courseDescription }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div v-if="videoOptions.sources.length > 0" class="video_block mb-4 mt-2">
                                                    <video-player v-if="renderComponent" :options="getVideoOptions(item.videoUrl)" :is-subscribed="userIsSubscribed" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="inner_block">
                                            <div class="row">
                                                <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                                    <div id="asset_image">
                                                        <img src="../assets/images/book1.png" class="img-fluid">
                                                    </div>
                                                </div>
                                                <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                                    <router-link
                                                        :to="{ name: 'CourseDetails', params: { name: item.courseRouteName } }"
                                                        style="text-decoration: none;">
                                                        <p id="text_one" class="mb-0">{{ item.title }}</p>
                                                    </router-link>
                                                    <p id="text_two">stacks</p>
                                                </div>
                                            </div>
                                            <div class="row line">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4 prog">
                                                    <div class="progress_block">
                                                        <div>
                                                            <progress :value="calculatePercentage(item)"
                                                                max="100">{{ getWatchTime(item) }}</progress>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4 time">
                                                    <p class="text_three">{{ remainingTimes(item) }} left</p>
                                                </div>
                                                <!-- <button class="bt">BUY NOW</button> -->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="COMPLETED" name="fourth">
                            <div v-if="selectedItem?.videoCompleted" class="">
                                <div v-if="selectedItem !== null" id="myTabContent" class="tab-content">
                                    <div id="home" class="tab-pane fade show active" role="tabpanel"
                                        aria-labelledby="home-tab">
                                        <div class="">
                                            <div class="row mt-3">
                                                <div class="col-lg-6 col-8 col-sm-8 col-md-6">
                                                    <h4 class="academic_head_text">
                                                        <span id="aca_text">interested</span> Courses
                                                    </h4>
                                                </div>
                                                <div class="col-lg-6 text-right col-4 col-sm-4 col-md-6">
                                                    <router-link id="see_text" to="#">See all</router-link>
                                                </div>
                                            </div>
                                            <div class="inner_block"  v-for="page in myLearning" :key="page.id">
                                                <div class="row">
                                                    <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                                        <div id="asset_image">
                                                            <img src="../assets/images/book1.png" class="img-fluid">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                                        <router-link
                                                            :to="{ name: 'CourseDetails', params: { name: page.courseRouteName } }"
                                                            style="text-decoration: none;">
                                                            <p id="text_one" class="mb-0">{{ page.title }}</p>
                                                        </router-link>
                                                        <p id="text_two">stacks</p>
                                                        <div class="row line">
                                                            <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                                <div class="progress_block">
                                                                    <div>
                                                                        <progress
:value="calculatePercentage(page)"
                                                                            max="100">{{ getWatchTime(page)
                                                                            }}</progress>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="comp col-lg-4 col-12 col-sm-12 col-md-4">
                                                            <p class="text_three">{{ remainingTimes(page) }}
                                                                Completed</p>
                                                        </div>
                                                        <!-- <button class="bt">BUY NOW</button> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </section>
        </div>
    </div>
</div>
<div v-else class="else mb-4 mt-0">
        <p style="text-align:center;color:#0177FB;" class="msz mb-4">You are not subscribed to any courses at the moment. Please subscribe to a course to access my learning</p>

        <img src="../assets/images/error1.png" class="img-fluid  mx-auto d-block mb-5">
        <!-- <div class="button_block mx-auto text-center">
            <router-link to="/Login"> <button class="btn btn-primary " style=" width: 80px;padding: 10px;">Login</button></router-link>
        </div> -->
    </div>
<Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VideoPlayer from './VideoPlayer.vue';
import MyCarousel from "./MyCarousel.vue"

export default {
    name: 'MylearningsView',
    components: {
        Loading,
        VideoPlayer,
        MyCarousel
    },
    data() {
        return {
            renderComponent: true,
            isLoading: false,
            userIsSubscribed: true,
            activeName: 'first',
            myLearning: [],
            selectedItem: null,
            userSubscribed:false,

            videoOptions: {
                playbackRates: [0.5, 1, 1.5, 2],
                autoplay: false,
                controls: true,
                width: 100,
                preload: 'auto',
                // techOrder: ['html5'],
                // preload: "metadata",
                sources: [

                ],
            },
        }
    },
    computed: {
        // authorizationHeader() {
        //     if (this.isLoggedIn) {
        //         return `Bearer ${this.isuser}`;
        //     } else {
        //         return ''; 
        //     }
        // },

        authorizationHeader() {
    if (this.isLoggedIn && this.$store.state.user && this.$store.state.user.signInUserSession) {
        return `Bearer ${this.$store.state.user.signInUserSession.idToken.payload}`;
    } else {
        return ''; // Set your dummy value here
    }
},
        isLoggedIn()
        {
            return this.$store.state.isLoggedIn;
        },

        isuser() {
            return this.$store.state.user.signInUserSession.idToken.payload;
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
        },
        istoken() {
            return this.$store.state.token;
        },
        user() {
            return this.$store.state.id;
        },
    },
    async created() {
    this.isLoading = true;
    try {
        const res = await AxiosInstance.get(`/MyLearnings?CognitoId=` + this.isuser.sub);
        this.myLearning = res.data;
        console.log(res);
        if (this.myLearning.length > 0) {
            this.selectedItem = this.myLearning[0];
            
            this.updateVideoSources(); // Update video sources initially
        }
        this.renderComponent = false;
        await this.$nextTick();
        this.renderComponent = true;
    } catch (error) {
        console.log(error);
    } finally {
        this.isLoading = false;
    }
},
    methods: {
        updateVideoSources() {
        this.videoOptions.sources = this.myLearning.map(item => ({
            src: item.videoUrl,
            type: this.videoType,
            withCredentials: false,
        }));
    },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        async handleItemChange(item) {
            // Update your component's state to display the selected item's details
            this.selectedItem = item;

            if (this.$refs.videoPlayer.player) {
                const player = this.$refs.videoPlayer.player;

                // Pause the current video
                player.pause();

                this.renderComponent = false;
                await this.$nextTick();
                this.renderComponent = true;

                // Change the video source to the new URL
                this.videoOptions.sources = [{
                    src: this.selectedItem.videoUrl,
                    type: this.videoType,
                    withCredentials: false,
                }];

                // Set the new sources
                player.src(this.videoOptions.sources);
            }
        },

        calculateTime(selectedItem) {
            const totalTime = this.getTotalTime(selectedItem);

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
        calculateRemainingTime(totalTime, watchTime) {
            if (typeof totalTime !== 'number' || typeof watchTime !== 'number') {
                throw new Error('Invalid input. Please provide valid numbers for totalTime and watchTime.');
            }

            if (totalTime < 0 || watchTime < 0) {
                throw new Error('Invalid input. Please provide non-negative numbers for totalTime and watchTime.');
            }

            const remainingTime = totalTime - watchTime;

            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = Math.floor((totalTime % 3600) % 60);

            return `${hours}:${minutes}:${seconds}`;
        },

        remainingTimes(selectedItem) {
            const totalTime = this.getTotalTime(selectedItem);
            const watchTime = this.getWatchTime(selectedItem);
            return this.calculateRemainingTime(totalTime, watchTime);
        },

        calculatePercentage(selectedItem) {
            const totalTime = this.getTotalTime(selectedItem);
            const watchTime = this.getWatchTime(selectedItem);

            if (totalTime && watchTime && isFinite(totalTime) && isFinite(watchTime)) {
                const percentage = (watchTime / totalTime) * 100;
                return percentage;
            } else {
                return 0;
            }
        },
        findSubjectById(selectedItem) {
            if (this.myLearning && Array.isArray(this.myLearning)) {
                for (const topic of this.myLearning) {
                    if (topic && topic.id && topic.id === selectedItem.id) {
                        return topic; // If you want to return the matching topic
                    }
                }
            }
            return null;
        },

        getWatchTime(selectedItem) {
            const watchData = this.findSubjectById(selectedItem);
            return watchData ? watchData.totalWatchTime : 0;
        },

        getTotalTime(selectedItem) {
            const subject = this.findSubjectById(selectedItem);
            return subject ? parseFloat(subject.totalTimeVideo) : 0;
        },
    }
}
</script>

<style scoped>
.pk{
    position: relative;
    bottom: 60px;
}
progress {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 200px !important;
    height: 20px;
    border-radius: 20px;

}

progress::-webkit-progress-bar {
    background: #CCCCCC;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0) inset;
    border-radius: 6px;
    height: 4px;
    width: 170px;
}

progress::-webkit-progress-value {
    background-image: linear-gradient(120deg, #ffd173 0, #18cc00 55%);
    border-radius: 20px;
}

.progress-container {
    position: relative;
    width: 30px;
    width: 30px;
    height: 30px;
    margin: 5px;
    background-image: url('../assets/images/Group1318@2x.png');
    /* Replace 'your-image.jpg' with your image URL */
    background-size: cover;
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

.radio-item {
    display: inline-block;
    margin: 5px;
    cursor: pointer;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    /* Default color for inactive items */
    border: 1px solid #FF9900;
}

.active .dot {
    background-color: #FF9900;
    /* Color for active item */
}

/* Style your radio buttons as needed */
.learning_block {
    padding-top: 0px;
}

.purple_block {
    background: transparent url('../assets/images/Untitled.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;
    padding: 15px;
    color: white;
    border-radius: 10px;
    height: 193px;
    mix-blend-mode: normal;

}

.academic_head_text {
    color: #006acd;
    /* padding-left: 20px; */
    font-size: 16px;

}

#aca_text {
    color: #006acd;
    font-weight: bold;
}

.inner_block {

    /* box-shadow: 0px 0px 6px #000000CC; */
    border-radius: 47px 10px 10px 10px;
    padding: 15px;
    margin: 10px;
    height: 86px;
    background: radial-gradient(circle at 18.7% 37.8%, rgb(225, 234, 250) 0%, rgb(225, 234, 238) 90%);

}

#course_button {
    width: 139px;
    height: 32px;
    background: #0066CC 0% 0% no-repeat padding-box;
    border: 1px solid #3AC2FD;
    border-radius: 16px;
    opacity: 1;
    font-size: 12px;
    text-transform: uppercase;
    position: absolute;
  
    right: 12px;
    color: White;
}

#course_button i {
    padding-left: 10px;

} 

 #tab_section {
    margin-top: 25px;
}

#tab-first {
    background: transparent linear-gradient(180deg, #EEF4FB 0%, #AED4FF 100%) 0% 0% no-repeat padding-box !important;
}

#asset_image img {
    width: 30px;
    height: 55px;
}

.left_block {
    text-align: right;

}

#subject_text {
    font-size: 20px;
    font-weight: 500;
}

#span_text {
    padding-left: 20px;
}

#new_text {
    position: relative;
    /* left: -5px;
    top: -12px; */
}

.el-tabs__nav .is-top {
    background: #EEF4FB !important;
    background: linear-gradient(to top, #EEF4FB 0%, #AED4FF 84%) !important;

}

#asset_image {
    text-align: center;
}

#text_two {
    font-size: 12px;
    margin-bottom: 0px;
}

.text_three {
    font-size: 12px;
    position: relative;
    top: 11px;
    right: 141px;
}

#text_three {
    font-size: 12px;
    position: relative;
    bottom: 8px;

}

#text_one {
    color: #0066CC;
    font-weight: bold;
}

.notify_block {
    background: #FFEAD5;
    height: 54px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin: 20px 0px 20px 0px;
}

.notify_block p {
    font-size: 13px;
    margin-top: 0;
    margin-bottom: 0;
    color: #3B3B3B;
}

#course_list_button {

    border: 1px solid #0177FB;
    border-radius: 10px;
    opacity: 1;
    font-size: 9px;
    float: right;
    background: transparent;
    color: #0177FB;
    white-space: nowrap;
}

.el-tabs__item {
    font-weight: bold !important;
}

.notify_block i {
    font-size: 30px;
    padding-right: 20px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    background: transparent linear-gradient(180deg, #EEF4FB 0%, #AED4FF 100%) 0% 0% no-repeat padding-box !important;
    border: none;
    color: #0066CC !important;
    font-weight: 600;
}

.nav-tabs .nav-link {
    color: #474747 !important;
    ;
}

@media (max-width: 767.98px) {
    .purple_block {
        height: 100%;
    }

    .right_block p {
        font-size: 15px !important;
    }

    .left_block p {
        font-size: 15px !important;
        margin-bottom: 35px;

    }

    .left_block {
        text-align: left !important;
    }

    #course_button {
        /* bottom: 0; */
        position: absolute;
        /* bottom: -6px; */
        /* right: 12px; */
        color: White;
        left: 10px;
    }

    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
        font-size: 12px;
        padding: 9px;
    }

    .nav-tabs .nav-link {
        font-size: 12px;
    }

    .academic_head_text,
    #see_text {
        font-size: 14px !important;
    }

    .notify_block[data-v-82375fac] {
        padding: 15px !important;
        height: auto;
    }

    .notify_block p {
        font-size: 11px;
    }

    .notify_block i {
        padding-right: 10px !important;

    }

    #text_one,
    #text_two {
        font-size: 12px;
        color: #000000;
        font-weight: 400;
    }

    #text_three {
        font-size: 12px;
        position: relative;
        bottom: 8px !important;
        right: 20px !important;
    }

    .text_three {
        font-size: 12px;
        position: relative;
        bottom: 13px !important;
        left: 106px !important;
    }

    .inner_block {
        height: 90px;

    }

}

@media (min-width: 768px) and (max-width: 1024px) {
    .left_block {
        text-align: right;
    }

    .inner_block {
        height: 90px;
    }
}

/* .bt {
    background-color: #0177FB;
    color: white;
    position: relative;
    left: 407px;
    bottom: 30px;
    font-size: 12px;
} */

input[type="radio"] {
    appearance: none;
    /* Hide the default radio button */
    width: 12px;
    /* Adjust size as needed */
    height: 12px;
    border-radius: 50%;
    /* Make it circular */
    border: 2px solid #FF9900;
    /* Border color (blue in this example) */
    margin-right: 5px;
    /* Add spacing between the button and label */
    background: #FF9900 0% 0% no-repeat padding-box;
    opacity: 1;
    cursor: pointer;
}

input[type="radio"]:checked {
    background-color: white;
    /* Background color when selected */
}

.text_line {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 21px/28px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/28px Segoe UI;
    letter-spacing: 0px;
    color: #444444;
    opacity: 1;

}

.info {
    font-size: 13px;
    color: #666666;
    /* margin-top: -14px; */
}

.info1 {
    font-size: 11px;
    color: #666666;
    /* margin-top: -14px; */

}

.info2 {
    font-size: 11px;
    color: #666666;
    /* margin-top: -14px; */
}

@media (max-width:520px) {
    .info1 {
        font-size: 11px;
        color: #666666;
        margin-top: 11px;
        position: relative;
        right: 144px;
    }

    .info2 {
        font-size: 11px;
        color: #666666;
        margin-top: 8px;
        position: relative;
        right: 4px;
        top: 2px;
    }

    .pp {
        position: relative;
        top: 10px;
        width: 100%;
    }

    progress::-webkit-progress-bar {
        background: #CCCCCC;
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0) inset;
        border-radius: 6px;
        height: 4px !important;
        width: 50% !important;
    }

    #text_three {
        font-size: 12px;
        position: relative;
        bottom: 8px !important;
        right: 20px !important;
    }

    .text_three {
        font-size: 12px;
        position: relative;
        bottom: 13px !important;
        left: 106px !important;
        top: 0px !important
    }

    .line {
        position: relative !important;
        left: 110px !important;
        bottom: 15px !important;
    }

    /* .jk {
        padding-bottom: 45px !important;
        padding-top: 20px;
    } */

    .inner_block {
        height: 90px;
        padding: 10px;
        margin: 0px;
    }

    #asset_image img {
        width: 40px;
        height: 70px;
    }

    .text {
        position: relative;
        right: 23px !important;
    }

    progress {
        vertical-align: baseline;
        width: 100%;
    }

    .text {
        position: relative;
        right: 23px !important;
    }

}

@media(min-width: 1280px) {
    .pt {
        position: relative;
        right: 300px;
    }

    .video_block {
        width: 100% !important;
        position: relative;
        left: 199px;
    }
}

.line {
    position: relative;
    left: 90px;
    bottom: 15px;
}

/* .prog{
    position: relative;
    left: 90px;
    bottom: 10px;
} */
.time {
    position: relative;
    bottom: 20px;
}

.text {
    position: relative;
    right: 160px;
}

.comp {
    height: 500px;
}

@media only screen and (min-width:280px) and (max-width:1280px)
{
    .inner_block{
        margin-bottom:15px;
    }
}
</style>
