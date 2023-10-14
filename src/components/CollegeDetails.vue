<template>
    <div class="container-fluid jk">
        <div class="container pt-4">
            <Breadcrumbs />
            <h4 class="academic_head_text">
            <span id="aca_text"><b>Available</b></span> Semesters ({{ semester.length }})
            <button class="bt">BUY NOW</button>
        </h4> 
       
        <p v-html="this.university[0].description"></p>
        <!-- <div class="container pt-4">
            <h4 class="academic_head_text">
            <span id="aca_text"><b>Available</b></span> Semesters (0)
        </h4>
        <p>yufutfyufi</p> -->
        <div class="pt-2">
            <div class="row" v-for="(sem, index) in semester" :key="index" >
                <div class="card" id="main_card">
                    <h5 class="card-header">
                        <div :class="index == 0 ? 'd-block kj' : 'collapsed d-block kj'" data-toggle="collapse" :href="'#collapse-example' + index" aria-expanded="true" aria-controls="collapse-example" id="heading-example">
                            <span class="action"><i class="fa fa-chevron-right rotate-icon" id="sem_icon"></i></span>
                                <h4 id="sem_text">{{ sem.name }}</h4>
                                <p  id="sem_description">{{ sem.description }}</p>
                        </div>
                        <!-- <div v-else class="collapsed d-block kj" data-toggle="collapse" :href="'#collapse-example' + sem.id" aria-expanded="true" aria-controls="collapse-example" id="heading-example" >
                            <span class="action"><i class="fa fa-chevron-right rotate-icon" id="sem_icon"></i></span>
                                <h4 id="sem_text">{{ sem.name }}</h4>
                                <p style="font-size: 14px;" id="sem_description">{{ sem.description }}</p>
                        </div> -->
                    </h5>
                    <!-- <h5 class="card-header">
                        <a class="collapsed d-block" style="text-decoration: none;" data-toggle="collapse" href="#collapse-collapsed" aria-expanded="true" aria-controls="collapse-collapsed" id="heading-collapsed">
                            <span class="action"><i class="fa fa-chevron-right rotate-icon"></i></span>
                                <h4>{{ sem.name }}</h4>
                                <p style="font-size: 14px;">{{ sem.description }}</p>
                        </a>
                    </h5> -->
                    <div  :id="'collapse-example' + index" :class="index==0 ? 'collapse show' : 'collapse'" aria-labelledby="heading-collapse">
                        <div class="card-body pt-0">
                            <div class="">
                            <div class="row kl">
                                <div class="col-md-4 mb-2" v-for="cou in course" :key="cou.id">
                                    <router-link v-bind:to="{ name:'CourseDetails', params:{name: cou.courseName}}" style="color: white; text-decoration: none;">
                                    <div class="card mt-3" v-if="sem.id === cou.semesterId" id="sem_card">
                                        <div class="card-title">
                                            <div class="row">
                                                <div class="col-lg-12 mn">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-9 col-sm-9 col-md-9">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-9 col-sm-9 col-md-9">
                                                                    <p  id="sub_text" class="mb-0"  data-placement="top" :title="cou.name">{{cou.name.slice(0,20)}}...</p>

                                                                </div>
                                                                <div class="col-lg-12 col-9 col-sm-9 col-md-9">
                                                                    <p id="code_text" style=" color: #6A4343;"><small>18CS81 &nbsp;240 hrs</small></p>
                                                                </div>
                                                            </div>
                                                          
                                                   
                                                        </div>
                                                        <div class="col-lg-4 col-3 col-sm-3 col-md-3">
                                                            <img src="../assets/images/share.png" class="icon">
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 mn">
                                                    <div class="row">
                                                        <div class="col-lg-9 col-9 col-sm-9 col-md-9">
                                                            <p style="padding-top:10px;" id="desc_text" v-html="cou.description.slice(0,35)"></p>
                                                        </div>
                                                        <div class="col-lg-3 col-3 col-sm-3 col-md-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 mn1">
                                                    <div class="row aa">
                                                        <div class="col-lg-7 col-6 col-sm-6 col-md-6">
                                                            <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-full"></i>
                                                    <i class="fa fa-star-o"></i>
                                                        </div>
                                                        <div class="col-lg-5 col-6 col-sm-6 col-md-6">
                                                            <p id="review_text" style="">(23 reviews)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div v-else :id="'collapse-example' + sem.id" class="collapse" aria-labelledby="heading-collapsed">
                        <div class="card-body pt-0">
                            <div class="">
                            <div class="row kl">
                                <div class="col-md-4" v-for="cou in course" :key="cou.id">
                                    <router-link v-bind:to="'/CourseDetails?id='+ cou.id">
                                    <div class="card" v-if="sem.id === cou.semesterId" id="sem_card">
                                        <div class="card-title">
                                            <div class="row">
                                                <div class="col-lg-12 mn">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-9 col-sm-9 col-md-9">
                                                            <div class="row">
                                                                <div class="col-lg-12 col-9 col-sm-9 col-md-9">
                                                                    <p id="sub_text" class="mb-0"><b>Math 1 (NEP Series)</b></p>
                                                                </div>
                                                                <div class="col-lg-12 col-9 col-sm-9 col-md-9">
                                                                    <p id="code_text"><small>18CS81&nbsp;240 hrs</small></p>
                                                                </div>
                                                            </div>
                                                          
                                                   
                                                        </div>
                                                        <div class="col-lg-4 col-3 col-sm-3 col-md-3">
                                                            <img src="../assets/images/share.png" class="icon">
                                                        </div>
                                                    </div>  
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 mn">
                                                    <div class="row">
                                                        <div class="col-lg-9 col-9 col-sm-9 col-md-9">
                                                            <p style="padding-top:10px;" id="desc_text"><b>{{ cou.description }}</b></p>
                                                        </div>
                                                        <div class="col-lg-3 col-3 col-sm-3 col-md-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 mn1">
                                                    <div class="row">
                                                        <div class="col-lg-7 col-6 col-sm-6 col-md-6">
                                                            <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-full"></i>
                                                    <i class="fa fa-star-o"></i>
                                                        </div>
                                                        <div class="col-lg-5 col-6 col-sm-6 col-md-6">
                                                            <p id="review_text">(23 reviews)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
        </div>

    </div>

    <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="'100px'" :height="'100px'"></Loading>
    <Offer />
</template>

<script>
import AxiosInstance  from '../config/axiosInstance';
import Offer from './Offer.vue'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Breadcrumbs from './Breadcrumbs.vue';

export default {
    name: 'CollegeDetails',
    components: {
        Offer,
        Loading,
        Breadcrumbs
    },
    data() {
        return {
            isLoading: false,
            semester: [],
            course: [],
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
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
</script>

<style scoped>
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

    #sub_text{
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
    .academic_head_text{
        font-size: 16px !important;
        padding:0 !important;

    }
    .jk{
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
#sem_card{
    height: 200px;
    opacity: 1;
    padding: 8%;  
}
#review_text{
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

    #sub_text{
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
#review_text{
    margin: -3px -2px;
     color: #828282;
}
 .row .aa{
    margin-top: -20px;
}
#sem_card[data-v-723afcf3] {
    width: 102%;
}
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    .academic_head_text {
        font-size: 14px;
        padding: 0 !important;


    }
    @media only screen and (max-width: 600px) and (min-width: 100px){
#sem_card[data-v-723afcf3] {
    height: 172px;
    opacity: 1;
    padding: 6%;
} 
.aa .row{
    margin-top: -20px;
}
}

}

.card {
    /* margin-bottom: 4%;
    margin-top: 2%; */
    width: 100%;
    border-radius: 10px;
}

#sem_card {
    /*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=fbaebb&c2=b6def5&gt=r&gd=dtl
*/
background: #EEEAE4;
    background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%);
    /* box-shadow: 0px 0px 9px #000000A1; */
    border: 1px solid #F0F6FC;
    /* background: transparent radial-gradient(closest-side at 6% 11%, #EEEAE4 20%, #D3E4F6 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 9px #00000005; 
    border: 1px solid #F0F6FC; */
    width: 100%;
    height: 179px;
    opacity: 1;
    padding: 6%;


}

#review_text{
    margin: -5px -2px;
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
    border-bottom:none;
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

#desc_text{
    font-size: 12px;
}
#sub_text{
    font-size: 12.5px;  
}

.fa{
    color:orange ;
}
.bt{
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
    #sem_card[data-v-723afcf3] {
    width: 340%;
    height: 179px;
    opacity: 1;
    padding: 23%;
    margin: -23px;
    }
    .card-header[data-v-723afcf3] {
    width: 210px;
    height: 65px;
    border-bottom: none;
    padding-left: 15px;
    padding-top: 2px;
}
}
</style>
