<template>
    <div class="container-fluid jk">
        <div class="container jk">
            <div class="learning_block">
                <Breadcrumbs />
                <div class="row">
                    <div class="col-lg-12">
                        <div>
                            <div class="purple_block">
                                <p id="new_text">NEW</p>
                                <div class="row" v-if="selectedItem !== null">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="right_block">
                                            <p id="subject_text">{{ selectedItem.title }}</p>
                                            <p class="mb-0">{{ selectedItem.videoDemand }} Video Course</p>
                                            <p>2 Quiz and 3 Question Banks</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="left_block">
                                            <p>{{ selectedItem.modules }} <span id="span_text">32 Topics</span></p>

                                            <button id="course_button">Start Course <i class="fa-solid fa-play"
                                                    style="color: #ffffff;"></i></button>
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
                            <div class="radio-item" v-for="item in myLearning" :key="item.id" :class="{ 'active': item === selectedItem }">
                                <div class="dot" @click="handleItemChange(item)"></div>
                                    <!-- <label :for="'radio' + item.id">{{ item.title }}</label> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <!-- <div class="row mb-3">
                    <div class="col-sm-12 justify-content-center">
                        <div class="radio_checkbox" style="text-align: center;">
                            <form>
                                <div class="radio-item" v-for="item in myLearning" :key="item.id">
                                    <input type="radio" @click="handleItemChange(item)" :value="item.id" name="radio" v-model="selectedItem">
                                     <label :for="'radio' + item.id">{{ item.title }}</label> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div> -->
                <!-- <section id="tab_section">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                aria-controls="home" aria-selected="true">MY COURSES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                aria-controls="profile" aria-selected="false">LIVE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                aria-controls="contact" aria-selected="false">COMPLETED</a>
                        </li>
                    </ul> -->
                
                           
            <div class="tab_block mt-3">
               <section id="tab_block">
                        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                            <el-tab-pane label="MY COURSES" name="first">

                           <div class="tab-content" id="myTabContent" v-if="selectedItem !== null">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="">
                                <div class="row mt-3">
                                    <div class="col-lg-6 col-8 col-sm-8 col-md-6">
                                        <h4 class="academic_head_text">

                                            <span id="aca_text">interested</span> Courses

                                        </h4>
                                    </div>
                                    <div class="col-lg-6 text-right col-4 col-sm-4 col-md-6">
                                        <router-link to="#" id="see_text">See all</router-link>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="notify_block">

                                            <i class="fa-solid fa-triangle-exclamation"
                                                    style="color: #ff9900;"></i><p class="pt"> Please
                                                subscribe the subjects to
                                                get more details</p>
                                            <button id="course_list_button">Course List</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="" v-for="subject in selectedItem.subject" :key="subject.id">
                                    <div class="" v-for="chapter in subject.values" :key="chapter.id">
                                        <div class="" v-for="course in chapter.values" :key="course.id">
                                            <div class="inner_block">
                                                <div class="row">
                                                    <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                                        <div id="asset_image">
                                                            <img src="../assets/images/book1.png" class="img-fluid">
                                                        </div>

                                                    </div> 
                                                    <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                                        <p class="mb-0" id="text_one">{{ course.lession }}</p>
                                                        <p id="text_two">stacks</p>
                                                        <div class="row">
                                                            <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                                <div class="progress_block">
                                                                    <div class="progress">
                                                                        <!-- <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                        aria-valuemin="0" aria-valuemax="100"></div> -->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                                <p id="text_three">22h 33m left</p>
                                                            </div>
                                                            <button class="bt">BUY NOW</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>            
                                <!-- <div class="inner_block">
                                    <div class="row">
                                        <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                            <div id="asset_image">
                                                <img src="../assets/images/book1.png" class="img-fluid">
                                            </div>

                                        </div> 
                                        <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <p class="mb-0" id="text_one">Computer Science</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                                <button class="bt">BUY NOW</button>
                                            </div>
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
                                            <p class="mb-0" id="text_one">Computer Science</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                                <button class="bt">BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                             
                            </div>

                            </div>
                        </div>
                        </el-tab-pane>
                        <div class="row mb-3">
                    <div class="col-sm-12 justify-content-center">
                        <div class="radio_checkbox" style="text-align: center;">
                            <div class="radio-item" v-for="product in Learning" :key="product.id" :class="{ 'active': product === selectedproduct }">
                                <div class="dot" @click="handleProductChange(product)"></div>
                                    <!-- <label :for="'radio' + item.id">{{ item.title }}</label> -->
                                </div>
                            </div>
                        </div>
                    </div>
                             
                             <el-tab-pane label="LIVE" name="third">
                                <div class="tab-content" id="myTabContent"  v-if="selectedproduct !== null">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <span id="aca_text">Live</span> Courses
                                   <div class="row mt-4 ">
                                    <div class="col-lg-6 text-left  col-sm-12 col-md-6 ">
                                        <h6 style="color:#B4B4B4;margin-top: -5px;">{{ selectedproduct.university }}</h6>
                                        <p class="text_line">{{ selectedproduct.title }}</p>
                                        <div class="row ml-0">
                                            <div class=" info">
                                                <p>{{ selectedproduct.instructorName }}</p>
                                            </div>
                                            <div class="asset_image info1">
                                                <img src="../assets/images/Iconionic-ios-timer@2x.png" class="img-fluid ml-2" style="width: 17px; height: 17px;"
                                                id="text_three">{{ calculateTime(selectedproduct).timeInMinutes }}:{{ calculateTime(selectedproduct).remainingSeconds }}
                                            </div>
                                            <div class="asset_image info2">
                                                <img src="../assets/images/Iconmap-school@2x.png" class="img-fluid ml-2" style="width: 17px; height: 18px;">
                                                {{ selectedproduct.modules }}<br>
                                            </div>
                                            <p class="pp" style="color: #666666; font-size: 12px; float: left;">{{ selectedproduct.courseDescription }}</p>
 
                                        </div>
                                    </div>
                                    <!-- <div class="col-lg-6 col-4 col-sm-4 col-md-6">
                                        <div id="asset_image">
                                            <img src="../assets/images/Group1303@2x.png" class="img-fluid" style="width: 300px; height: 151px; margin-bottom: 20px; float:right;">
                                        </div>
                                    </div> -->
                                    <div class="col-sm-6">
                                                <div class="video_block mb-4" v-if="videoOptions.sources.length>0">
                                                    <video-player :options="videoOptions" :isSubscribed="userIsSubscribed" ref="videoPlayerRef" />
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
                                            <p class="mb-0" id="text_one">{{ selectedproduct.title }}</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div v-if="selectedproduct !== null">
                                                            <progress :value="calculatePercentage(selectedproduct)" max="100">{{ getWatchTime(selectedproduct) }}</progress>
                                                        </div>
                                                        <div v-else>
                                                            <progress value="10" max="100">0</progress>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">{{ remainingTimes(selectedproduct) }} left</p>
                                                </div>
                                                <button class="bt">BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="inner_block">
                                    <div class="row">
                                        <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                            <div id="asset_image">
                                                <img src="../assets/images/book1.png" class="img-fluid">
                                            </div>

                                        </div> 
                                        <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <p class="mb-0" id="text_one">Computer Science</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                                <button class="bt">BUY NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                               
                                </div>
                                </div>
                               
                             </el-tab-pane>
                             <!-- <el-tab-pane label="COMPLETED" name="fourth">completed</el-tab-pane> -->
              
                            <el-tab-pane label="COMPLETED" name="fourth">

                           <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="">
                                <div class="row mt-3">
                                    <div class="col-lg-6 col-8 col-sm-8 col-md-6">
                                        <h4 class="academic_head_text">

                                            <span id="aca_text">interested</span> Courses

                                        </h4>
                                    </div>
                                    <div class="col-lg-6 text-right col-4 col-sm-4 col-md-6">
                                        <router-link to="#" id="see_text">See all</router-link>
                                    </div>
                                </div>


                                <!-- <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="notify_block">

                                            <p> <i class="fa-solid fa-triangle-exclamation"
                                                    style="color: #ff9900;"></i>Please
                                                subscribe the subjects to
                                                get more details...</p>
                                            <button id="course_list_button">Course List</button>
                                        </div>
                                    </div>
                                </div> -->
                                  <div class="inner_block">
                                    <div class="row">
                                        <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                            <div id="asset_image">
                                                <img src="../assets/images/book1.png" class="img-fluid">
                                            </div>

                                        </div> 
                                        <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <p class="mb-0" id="text_one">Computer Science</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                                <button class="bt">BUY NOW</button>
                                            </div>
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
                                            <p class="mb-0" id="text_one">E & C</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                                <button class="bt">BUY NOW</button>
                                            </div>
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
                                            <p class="mb-0" id="text_one">Mech</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                                <button class="bt">BUY NOW</button>
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
<Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="'100px'" :height="'100px'"></Loading>


    
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
import AxiosInstance  from '../config/axiosInstance';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VideoPlayer from './VideoPlayer.vue';


export default {
    name: 'Mylearnings',
    components: {
        Breadcrumbs,
        Loading,
        VideoPlayer
    },
    data() {
        return {
            isLoading: false,
            userIsSubscribed: false,
           activeName: 'first',
           myLearning: [],
           selectedItem: null,
           Learning: [],
           selectedproduct: null,
          
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
            return this.$store.state.user.signInUserSession.idToken.payload;
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
        },
        istoken() {
            return this.$store.state.token;
        },
        user() {
            return this.$store.state.id;
        },
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleItemChange(item) {
            // Update your component's state to display the selected item's details
            this.selectedItem = item;
            console.log(this.selectedItem);
        },
        calculateTime(selectedproduct) {
            const totalTime = this.getTotalTime(selectedproduct);
        
            if (totalTime) {
                const timeInHours = Math.floor(totalTime / 3600);
                const timeInMinutes = Math.floor((totalTime % 3600) / 60);
                const remainingSeconds = Math.floor((totalTime % 3600) % 60);
                // const timeInMinutes = totalTime % 60;
                // const timeInHours = Math.floor(watchTime / 3600);
                //   const remainingSeconds = watchTime % 3600;
                //   const timeInMinutes = Math.floor(remainingSeconds / 60);
                //   const timeInSeconds = remainingSeconds % 60;


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
            // Ensure both totalTime and watchTime are valid numbers
            if (typeof totalTime !== 'number' || typeof watchTime !== 'number') {
                throw new Error('Invalid input. Please provide valid numbers for totalTime and watchTime.');
            }

            // Ensure totalTime and watchTime are positive numbers
            if (totalTime < 0 || watchTime < 0) {
                throw new Error('Invalid input. Please provide non-negative numbers for totalTime and watchTime.');
            }

            // Calculate remaining time
            const remainingTime = totalTime - watchTime;

            // Format the remaining time (assuming totalTime and watchTime are in seconds)
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = Math.floor((totalTime % 3600) % 60);
            //const secondsString = seconds.toString().padStart(2, '0');
            // Return the formatted remaining time
            return `${hours}:${minutes}:${seconds}`;
        },

        // Example usage
            // const totalTime = 3600; // 1 hour in seconds
            // const watchTime = 1800; // 30 minutes in seconds
        remainingTimes(selectedproduct) {
            const totalTime = this.getTotalTime(selectedproduct);
            const watchTime = this.getWatchTime(selectedproduct); 
            return this.calculateRemainingTime(totalTime, watchTime);
            console.log(this.calculateRemainingTime);
        },
        //     const remainingTime = calculateRemainingTime(totalTime, watchTime);
        //     console.log(`Remaining time: ${remainingTime}`);

        // },
        calculateTime(selectedproduct) {
            const totalTime = this.getTotalTime(selectedproduct);
        
            if (totalTime) {
                const timeInHours = Math.floor(totalTime / 3600);
                const timeInMinutes = Math.floor((totalTime % 3600) / 60);
                const remainingSeconds = Math.floor((totalTime % 3600) % 60);
                // const timeInMinutes = totalTime % 60;
                // const timeInHours = Math.floor(watchTime / 3600);
                //   const remainingSeconds = watchTime % 3600;
                //   const timeInMinutes = Math.floor(remainingSeconds / 60);
                //   const timeInSeconds = remainingSeconds % 60;


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
        calculatePercentage(selectedproduct) {
            const totalTime = this.getTotalTime(selectedproduct);
            const watchTime = this.getWatchTime(selectedproduct);

            if (totalTime && watchTime) {
                console.log((watchTime / totalTime) * 100);
                return (watchTime / totalTime) * 100;
            } else {
                return 0;
            }
        },

        // calculateTime(selectedproductid) {
        //     const totalTime = this.getTotalTime(selectedproductid);
        
        //     if (totalTime) {
        //         const timeInHours = Math.floor(totalTime / 3600);
        //         const timeInMinutes = Math.floor((totalTime % 3600) / 60);
        //         const remainingSeconds = Math.floor((totalTime % 3600) % 60);
        //         return {
        //             timeInHours,
        //             timeInMinutes,
        //             remainingSeconds
        //         };
              
        //     } else {
        //         return {
        //             timeInHours: 0,
        //             timeInMinutes: 0,
        //             remainingSeconds: 0
        //         };
        //     }
        // },
        findSubjectById(selectedproduct) {
            for (const topic of Object.values(this.Learning)) {
                if (topic.title === selectedproduct.title) {
                    return topic;  // If you want to return the matching topic
                }
            }
            return null;  // Return null if no match is found
        },
        findSubjectByMyCourseId(selectedItem) {
            // Implement a method to find a subject by its ID
            // You can replace this with your actual implementation
            for (const topic of Object.values(this.myLearning.subject)) {
                for (const lessons of topic.values) {
                    for (const subject of lessons.values) {
                        if (subject.id === selectedItem) {
                            return subject;
                        }
                    }
                }
            }    
            return null;
        },
        getWatchTime(selectedproduct) {
            const watchData = this.findSubjectById(selectedproduct);
            return watchData ? watchData.minTimeStateMangement : 0;
        },

        getTotalTime(selectedproduct) {
                // Implement a method to get the total time for a specific subjectId
                // For example, you might have a data property storing total times
                // You can replace this with your actual implementation
            const subject = this.findSubjectById(selectedproduct);
            return subject ? parseFloat(subject.totalTimeCourse) : 0;
        },

        handleProductChange(product) {
            // Update your component's state to display the selected item's details
            this.selectedproduct = product;
            if (this.$refs.videoPlayerRef.player) {
                    const player = this.$refs.videoPlayerRef.player;

                    this.videoOptions.sources = [
                    {
                        src: this.selectedproduct.videoUrl,
                        type: this.videoType,
                        withCredentials: false,
                    }
                ]
                    player.src(this.videoOptions.sources);
                    player.one('loadedmetadata', async () => {
                    // Play the new video
                        await player.pause();
                    });

                        // Preload the new video source
                        player.load();
            }        

            console.log(this.videoOptions);
            console.log(this.selectedproduct);
        },
        
    },
    async created() {
        console.log(this.isuser.sub)
    this.isLoading = true;
    try {
        const res = await AxiosInstance.get(`/MyLearnings?CognitoId=` + this.isuser.sub);
        this.myLearning = res.data;
        console.log(this.myLearning);
        if (this.myLearning.length > 0) {
            // Set the default selected item to the first item in myLearning
            this.selectedItem = this.myLearning[0];
        }
        const result = await AxiosInstance.get(`/MyLearnings/Live?CognitoId=` + this.isuser.sub);
        this.Learning = result.data;
        console.log(this.Learning);
        if (this.Learning.length > 0) {
            // Set the default selected item to the first item in myLearning
            this.selectedproduct = this.Learning[0];
            console.log(this.selectedproduct);
        }
        this.videoOptions.sources = [
            {
                src: this.selectedproduct.videoUrl,
                type: this.videoType,
                withCredentials: false,
            }
        ];
            console.log(this.Learning);
            console.log(this.videoOptions);
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
.radio-item {
    display: inline-block;
    margin: 5px;
    cursor: pointer;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff; /* Default color for inactive items */
    border: 1px solid #FF9900;
}

.active .dot {
    background-color: #FF9900; /* Color for active item */
}


/* Style your radio buttons as needed */
.learning_block {
    padding-top: 80px;
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

/* #group_image {
    background: transparent url('../assets/images/Group 246.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;
    padding-bottom: 20px;
} */

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
    /* bottom: 0; */
    position: absolute;
    bottom: -11px;
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

.progress {
    height: 5px;
    background: #FF9900;
    margin-top: 7px;
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
    left: -5px;
    top: -12px;
}

.el-tabs__nav .is-top {
    background: #EEF4FB !important;
    background: linear-gradient(to top, #EEF4FB 0%, #AED4FF 84%) !important;

}

#asset_image {
    text-align: center;
}

#text_two,
#text_three {
    font-size: 12px;
    margin-bottom: 0;
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
    font-size: 12px;
    float: right;
    background: transparent;
    color: #0177FB;
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
        bottom: -6px;
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
    .academic_head_text,#see_text{
        font-size: 14px !important;
    }
    .notify_block[data-v-82375fac]{
        padding:15px !important;
        height:auto;
    }
    .notify_block p{
        font-size: 11px;
    }
    .notify_block i{
        padding-right:10px !important;

    }
    #text_one, #text_two, #text_three{
        font-size: 12px;
    }
    .inner_block{
        height:90px;
    }

}

@media (min-width: 768px) and (max-width: 1024px){
.left_block{
    text-align: right;
}
.inner_block{
    height: 90px;
}
}
.bt{
    background-color: #0177FB;
    color: white;
    position: relative;
    left: 407px;
    bottom: 30px;
    font-size: 12px;
}
input[type="radio"] {
   appearance: none; /* Hide the default radio button */
    width: 12px; /* Adjust size as needed */
    height: 12px;
    border-radius: 50%; /* Make it circular */
    border: 2px solid #FF9900; /* Border color (blue in this example) */
    margin-right: 5px; /* Add spacing between the button and label */
    background: #FF9900 0% 0% no-repeat padding-box;
    opacity: 1;
    cursor: pointer;
}

input[type="radio"]:checked {
  background-color: white; /* Background color when selected */
}

.text_line{
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 21px/28px var(--unnamed-font-family-segoe-ui);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 16px/28px Segoe UI;
letter-spacing: 0px;
color: #444444;
opacity: 1;
margin-top: -7px;
}
.info{
    font-size: 13px;
    color: #666666;
    margin-top: -14px;
}
.info1{
    font-size: 11px;
    color: #666666;
    margin-top: -14px;
    
}
.info2{
    font-size: 11px;
    color: #666666;
    margin-top: -14px;
}

@media (max-width:520px) {
    .info1{
    font-size: 11px;
    color: #666666;
    margin-top: 11px;
    position: relative;
    right:111px;
}
.info2{
    font-size: 11px;
    color: #666666;
    margin-top: 8px;
    position: relative;
    right: 109px;
    top: 2px;
}
  .pp{
    position: relative;
    top: 10px;
  }  
}
/* .container-fluid {
    background: transparent url('../assets/images/Group 246.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;

} 
body {
  margin: 0;
  font-family: 'Noto Sans', sans-serif;
  background: #EFF5FC 0% 0% no-repeat padding-box;
  opacity: 1;
 
} */
/* .pp{
    margin-top: -12px; 
}
@media  (min-width: 100px)and(max-width: 600px){
   .pp{
    margin-top: 10px;
}
   
} */
@media (max-width:520px) {
    .jk{
        padding-bottom: 45px !important;
        padding-top: 20px;
    }
    .inner_block{
    height: 108px;
    } 
    #asset_image img{
    width: 47px;
    height: 76px;
} 
}
@media(min-width: 1280px) {
    .pt{
        position: relative;
        right: 300px;
    }
    .video_block{
        width: 328px !important;
        position: relative;
        left: 199px;
}
}
progress {
    color: #FF9924;
}

progress {
    border: none;
    width: 171px;
    height: 4px;
    /* background: #fff; */

}
progress {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 200px;
    height: 4px;
    border-radius: 20px;
}
progress {
    vertical-align: baseline;
}
</style>