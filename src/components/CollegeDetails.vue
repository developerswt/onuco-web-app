<template>
    <div class="container-fluid jk">
        <div class="container pt-4">
            <h4 class="academic_head_text">
            <span id="aca_text"><b>Available</b></span> Semesters ({{ semester.length }})
        </h4>
        <p>{{ university.description }}</p>
        <div class="pt-3">
            <div class="row" v-for="sem in semester" :key="sem.id" >
                <div class="card" id="main_card">
                    <h5 class="card-header">
                        <div class="d-block kj" data-toggle="collapse" href="#collapse-example1" aria-expanded="true" aria-controls="collapse-example" id="heading-example" v-if="sem.id==1">
                            <span class="action"><i class="fa fa-chevron-right rotate-icon" id="sem_icon"></i></span>
                                <h4 id="sem_text">{{ sem.name }}</h4>
                                <p style="font-size: 14px;" id="sem_description">{{ sem.description }}</p>
                        </div>
                        <div v-else class="collapsed d-block kj" data-toggle="collapse" :href="'#collapse-example' + sem.id" aria-expanded="true" aria-controls="collapse-example" id="heading-example" >
                            <span class="action"><i class="fa fa-chevron-right rotate-icon" id="sem_icon"></i></span>
                                <h4 id="sem_text">{{ sem.name }}</h4>
                                <p style="font-size: 14px;" id="sem_description">{{ sem.description }}</p>
                        </div>
                    </h5>
                    <!-- <h5 class="card-header">
                        <a class="collapsed d-block" style="text-decoration: none;" data-toggle="collapse" href="#collapse-collapsed" aria-expanded="true" aria-controls="collapse-collapsed" id="heading-collapsed">
                            <span class="action"><i class="fa fa-chevron-right rotate-icon"></i></span>
                                <h4>{{ sem.name }}</h4>
                                <p style="font-size: 14px;">{{ sem.description }}</p>
                        </a>
                    </h5> -->
                    <div v-if="sem.id==1" id="collapse-example1" class="collapse show" aria-labelledby="heading-collapse">
                        <div class="card-body">
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
                    </div>
                    <div v-else :id="'collapse-example' + sem.id" class="collapse" aria-labelledby="heading-collapsed">
                        <div class="card-body">
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
                                                                    <p id="sub_text" class="mb-0"><b>{{ cou.name }}</b></p>
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
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>


    <Offer />
</template>

<script>
import AxiosInstance  from '../config/axiosInstance';
import Offer from './Offer.vue'

export default {
    name: 'CollegeDetails',
    components: {
        Offer,
    },
    data() {
        return {
            semester: [],
            course: [],
            university: [],
        }
    },
    async created() {
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
        }
    },
}
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
    margin: 20px;
}

#sem_text {
    color: #707070;

}

#sem_description {
    color: #777777;

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
    font-size: 15px;
    font-weight: bold;
}

#sem_description {
    font-size: 11px;
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    #sem_text {
        font-size: 18px;
    }

    #sem_description {
        font-size: 15px;
    }

    #sub_text,
    #code_text {
        font-size: 13px;
        color: black;
    }

    #desc_text {
        font-size: 13px;
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

}

@media only screen and (max-width: 1024px) and (min-width: 600px) {
    #sem_text {
        font-size: 18px;
    }

    #sem_description {
        font-size: 15px;
    }

    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;


    }

    #sub_text,
    #code_text {
        font-size: 13px;
        color: black;
    }

    #desc_text {
        font-size: 13px;
    }

    #review_text {
        font-size: 12px;
    }

}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;


    }

}

.card {
    margin-bottom: 4%;
    margin-top: 2%;
    width: 100%;
    border-radius: 10px;
}

#sem_card {
    /*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=fbaebb&c2=b6def5&gt=r&gd=dtl
*/
    background: #FBAEBB;
    background: radial-gradient(at left top, #FBAEBB, #B6DEF5);
    box-shadow: 0px 0px 9px #000000A1;
    border: 1px solid #FFFFFF;



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

}</style>
