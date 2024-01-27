<template>
    <div class="container-fluid jk">
        <Breadcrumbs class="container" />
        <div v-if="semester.length > 0" class="container">
            <h4 class="academic_head_text mt-4">
                <span id="aca_text"><b>Available</b></span>Semesters ({{ semester.length }})
            <router-link to="/Announcement"> <button class="bt">BUY NOW</button></router-link>
            </h4>

            <p class="desc" style="color: #777777;" v-html="university[0]?.description"></p>
            <div v-if="showShareButton"  class="overlay">
                <ShareButton :url="currentRoute" @close="closeShareOption"  />
            </div>
            <div class="pt-2">
                <div v-for="(sem, index) in semester" :key="index" class="row">
                    <div id="main_card" class="card">
                        <h5 class="card-header">
                            <div id="heading-example" :class="index == 0 ? 'd-block kj' : 'collapsed d-block kj'"
                                data-toggle="collapse" :href="'#collapse-example' + index" aria-expanded="true"
                                aria-controls="collapse-example">
                                <span class="action"><i id="sem_icon" class="fa fa-chevron-right rotate-icon"></i></span>
                                <h4 id="sem_text">{{ sem.name }} </h4>
                                <p id="sem_description">{{ sem.description }}</p>
                            </div>
                        </h5>
                        <div v-if="filteredCourses(sem.id).length > 0" :id="'collapse-example' + index"
                            :class="index == 0 ? 'collapse show' : 'collapse'" aria-labelledby="heading-collapse">
                            <div class="card-body pt-0">
                                <div class="">
                                    <div class="row kl">
                                        <div v-for="cou in filteredCourses(sem.id)" :key="cou.id" class="col-md-4 mb-2">
                                            <div id="sem_card" class="card mt-3">
                                                <div class="card-title">
                                                    <div class="row">
                                                        <div class="col-lg-12 mn">
                                                            <div class="row">
                                                                <div class="col-lg-8 col-9 col-sm-9 col-md-9">
                                                                    <router-link :to="{ name: 'CourseDetails', params: { name: cou.courseName } }" style="color: white; text-decoration: none;">
                                                                        <div class="row">
                                                                            <div class="col-lg-12 col-9 col-sm-9 col-md-9">
                                                                                <p id="sub_text" class="mb-0"
                                                                                    data-placement="top" :title="cou.name">
                                                                                    {{ cou.name.slice(0, 18) }}...</p>

                                                                            </div>
                                                                            <div class="col-lg-12 col-9 col-sm-9 col-md-9">
                                                                                <p id="code_text" style=" color: #6A4343;">
                                                                                    <small>18CS81 &nbsp;240 hrs</small>
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                    </router-link>
                                                                </div>
                                                                <div class="col-lg-4 col-3 col-sm-3 col-md-3">
                                                                    <img @click.stop="showShareOption(cou.courseName)" src="../assets/images/Union193.png"
                                                                        style="width: 16px; height: 20px;" class="icon">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <router-link :to="{ name: 'CourseDetails', params: { name: cou.courseName } }" style="color: white; text-decoration: none;">
                                                        <div class="row">
                                                            <div class="col-lg-12 mn">
                                                                <div class="row">
                                                                    <div class="col-lg-9 col-9 col-sm-9 col-md-9">
                                                                        <p id="desc_text" style="padding-top:10px;"
                                                                            v-html="cou.description.slice(0, 49)"></p>
                                                                    </div>
                                                                    <div class="col-lg-3 col-3 col-sm-3 col-md-3">
                                                                        <img src="../assets/images/Path4025.png"
                                                                            style="width: 30px; height:30px;" class="video">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-lg-12 mn1">
                                                                <div class="row aa">
                                                                    <div class="col-lg-7 col-6 col-sm-6 col-md-6">
                                                                        <StarRatings :rating="cou.starRating || 0"
                                                                            :max-rating="5" />
                                                                    </div>
                                                                    <div class="col-lg-5 col-6 col-sm-6 col-md-6">
                                                                        <p id="review_text" style="color: #828282;">({{
                                                                                cou.ratingCount || 0 }} reviews)</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </router-link>    
                                                </div>
                                            </div>
                                            <!-- </router-link> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else :id="'collapse-example' + index" :class="index == 0 ? 'collapse show' : 'collapse'"
                            aria-labelledby="heading-collapse" style="background-color: #EFF5FC;">
                            <div v-if="!isLoading" class="">
                                <h2 class="comming_soons">Comming Soon ...</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="">
            <div v-if="!isLoading" class="">
                <h2 class="comming_soon">Comming Soon ...</h2>
            </div>
        </div>
    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    <Offer />
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import Offer from './Offer.vue'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Breadcrumbs from './Breadcrumbs.vue';
import StarRatings from './StarRatings.vue';
import ShareButton from './ShareButton.vue';

export default {
    name: 'CollegeDetails',
    components: {
        Offer,
        Loading,
        Breadcrumbs,
        StarRatings,
        ShareButton
    },
    data() {
        return {
            currentRoute: "",
            showShareButton: false,
            ratingCount: '',
            isLoading: false,
            semester: [],
            course: {},
            university: [],
        }
    },
    async created() {
        this.isLoading = true;
        try {
            const universe = await AxiosInstance.get(`/University/GetUniversityGroupByName/` + this.$route.params.name);
            this.university = universe.data;
            console.log(this.university)
            const res = await AxiosInstance.get(`/Semester/GetSemesterListByName/` + this.$route.params.name);
            this.semester = res.data;
            console.log(this.semester);
            const result = await AxiosInstance.get(`/Course`);
            this.course = result.data;
            console.log(this.course)
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
    methods: {
        showShareOption(courseName) {
            console.log(courseName);
            this.showShareButton = true;
            this.currentRoute = `https://dev.skillmeridiandev.tech/CourseDetails/${courseName}`;
        },
        closeShareOption() {
            this.showShareButton = false;
            this.currentCourseIndex = null;
        },        
        async getByRatings(courseId) {
            try {
                const result = await AxiosInstance.get(`/Ratings?id=${courseId}&objectTypeId=5`);
                return result.data;
            } catch (error) {
                console.error(error);
                return 0; // or handle error accordingly
            }
        },
        filteredCourses(semesterId) {
            const coursesArray = Array.isArray(this.course.courses) ? this.course.courses : [];
            const filteredCourses = coursesArray.filter(c => c.semesterId === semesterId);
            this.updateStarRatings(filteredCourses);
            return filteredCourses;
        },

        async updateStarRatings(filteredCourses) {
            for (const course of filteredCourses) {
                const res = await this.getByRatings(course.id);
                course.starRating = res.averageRating;
                console.log(course.starRating);
                course.ratingCount = res.ratingCount;
                console.log(course.ratingCount);
            }
        },
    }
}

// $(document).ready(function () {
//     $('[data-toggle="tooltip"]').tooltip();
// });
</script>

<style scoped>
.comming_soon {
    font: normal normal 600 22px/30px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    text-align: center;
    margin-bottom: 10%;
    margin-top: 10%;
}

.comming_soons {
    font: normal normal 600 22px/30px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    text-align: center;
    margin-bottom: 5%;
    margin-top: 5%;
}

.academic_head_text {
    color: #006acd;
    font-size: 20px;

}

.parent_blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.parent_block {
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 5%;
}

#main_card {
    margin: 8px;
}

#sem_text {
    color: #707070;
    margin: 14px -2px;
}

#sem_description {
    color: #777777;
    font-size: 13px;
    margin-top: -11px;
}

#sem_icon {
    color: #0077FF;
}

#aca_text {
    color: #006acd;
    font-weight: bold;

}

.kj .action {
    float: right;
    font-size: 30px;
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



.kj:not(.collapsed) .rotate-icon {
    transform: rotate(90deg);
}

.kj1 .action {
    float: right;
    font-size: 30px;
    width: 1.2em;
    color: darkblue;
    opacity: 1;

}



.jk {
    padding-top: 70px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

#sem_text {
    font-size: 16px;
    font-weight: bold;
}

#sem_description {
    font-size: 12px;
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    #sem_text {
        font-size: 13px;
        margin: 4px -2px 11px;
    }

    #sem_description {
        font-size: 11px;
    }

    #sub_text {
        font-size: 11px;
    }

    #code_text {
        font-size: 11px;
        color: black;
    }

    #desc_text {
        font-size: 11px;
    }

    #review_text {
        font-size: 13px;
    }

    .academic_head_text {
        font-size: 16px !important;
        padding: 0 !important;

    }

    .jk {
        padding-top: 65px !important;
    }

    .kj .action[data-v-723afcf3] {
        float: right;
        font-size: 29px;
        width: 0.2em;
        color: darkblue;
        opacity: 1;
        position: relative;
        bottom: -11px;
    }

    #sem_card {
        height: 160px;
        opacity: 1;
        padding: 8%;
    }

    #review_text {
        margin: -3px -2px;
        color: #828282;
    }
}

@media only screen and (max-width: 400px) and (min-width: 100px) {
    .row .aa {
        margin-top: -18px;
    }

}

@media only screen and (max-width: 1024px) and (min-width: 600px) {
    #sem_text {
        font-size: 13px;
        margin: 4px -2px 11px;
    }

    #sem_description {
        font-size: 11px;
    }

    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;


    }

    #sub_text {
        font-size: 11px;
    }

    #code_text {
        font-size: 11px;
        color: black;
    }

    #desc_text {
        font-size: 11px;
    }

    #review_text {
        font-size: 13px;
    }

    .kj .action[data-v-723afcf3] {
        float: right;
        font-size: 29px;
        width: 0.2em;
        color: darkblue;
        opacity: 1;
        position: relative;
        bottom: -11px;
    }

    #review_text {
        margin: -3px -2px;
        color: #828282;
    }

    .row .aa {
        margin-top: -20px;
    }

    #sem_card[data-v-723afcf3] {
        width: auto;
    }
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    .academic_head_text {
        font-size: 14px;
        padding: 0 !important;


    }

    @media only screen and (max-width: 600px) and (min-width: 100px) {
        #sem_card[data-v-723afcf3] {
            height: 155px;
            opacity: 1;
            padding: 5%;
            width: auto;
        }

        .aa .row {
            margin-top: -20px;
        }
    }

}

.card {
    width: 100%;
    /* border-radius: 10px; */
}

#sem_card {
    /*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=fbaebb&c2=b6def5&gt=r&gd=dtl
*/
    background: #EEEAE4;
    background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%);
    border: 1px solid #F0F6FC;
    /* background: transparent radial-gradient(closest-side at 6% 11%, #EEEAE4 20%, #D3E4F6 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 9px #00000005; 
    border: 1px solid #F0F6FC; */
    width: auto;
    height: 179px;
    opacity: 1;
    padding: 6%;


}

#review_text {
    margin: 5px -2px;
    color: #828282;
}

#sem_card p {
    color: black;
}

.card-header,
.card-body {
    background: #EFF5FC;
}

.card-header {
    height: 65px;
    border-bottom: none;
    padding-left: 15px;
    padding-top: 2px;
}

.icon {
    width: 25px;
    height: 25px;
    margin-left: 55px;
    color: white;
}

.video {
    width: 50px;
}

.kl .card {
    padding: 10px 10px 0px;
    /* background-color: #8B8989; */

    color: black;
    cursor: pointer;
    /* background: radial-gradient(to right, darkblue, lightgray, blue); */
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

.parent_block {
    max-width: 1300px;
    margin: 0 auto;
}

.academic_head_text {
    color: #006acd;
}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;

}

#desc_text {
    font-size: 12px;
    text-align: left;
}

#sub_text {
    font-size: 12.5px;
}

.fa {
    color: orange;
}

.bt {
    background-color: #0177FB;
    color: white;
    position: relative;
    float: right;
    bottom: 0px;
    padding: 7px;
    width: 100px;
    border-radius: -1%;
    font-size: 12px;
}



@media only screen and (max-width: 280px) {

    #sem_card[data-v-723afcf3][data-v-723afcf3] {
        width: 228px;
        height: 180px;
        opacity: 1;
        padding: 7%;
        margin: -17px;
    }

    .card-header[data-v-723afcf3] {
        width: 232px;
        height: 75px;
        border-bottom: none;
        padding-left: 15px;
        padding-top: 2px;
    }

    .star-rating span {
        margin-right: 0px;
        color: gold;
    }
}

.star-rating span {
    margin-right: 0px !important;
    color: gold;
}

.desc {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #777777;
    opacity: 1;
}

@media (max-width:520px) {
    #sem_icon {
        font-size: 25px;
    }
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
