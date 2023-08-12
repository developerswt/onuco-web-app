<template>
    <div class=" container-fluid jk">
        <div class=" parent_block  pt-4">

            <h4 class="academic_head_text">
                <span id="aca_text">Available</span>Semesters ({{ semester.length }})
            </h4>
            <h3>{{ this.university.name }}</h3>
            <p>{{ this.university.description }}</p>



            <div class="container-fluid pt-4">
                <div class="pt-4">
                    <div class="row" v-for="sem in semester" :key="sem.id">
                        <div class="col-lg-12">
                            <div class="card">
                                <h5 class="card-header">
                        <div class="collapsed d-block kj" data-toggle="collapse" :href="'#collapse-example' + sem.id" aria-expanded="true" aria-controls="collapse-example" id="heading-example" >
                            <span class="action"><i class="fa fa-chevron-right rotate-icon"></i></span>
                                {{ sem.name }}
                                <!-- <p style="font-size: 14px;">{{ sem.description }}</p> -->
                        </div>
                    </h5>
                                <div :id="'collapse-example' + sem.id" class="collapse" aria-labelledby="heading-collapsed">
                        <div class="card-body">
                            <div class="row kl">
                                <div class="col-md-4" v-for="cou in course" :key="cou.id">
                                    <router-link v-bind:to="'/SemesterDetails?id='+ cou.id">
                                    <div class="card" v-if="sem.id === cou.semesterId">
                                        <div class="card-title">
                                            <div class="row">
                                                <div class="col-md-12 mn">
                                                    <p><b>Math 1 (NEP Series)</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                                
                                                    <img src="../assets/images/share.png" class="icon">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 mn">
                                                    <p><b>{{ cou.description }}</b></p>
                                                    <p>{{ cou.actualPrice }}</p>
                                                    <p>{{ cou.discountedPrice }}</p>
                                                    <img src="../assets/images/video.png" class="video">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 mn1">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-full"></i>
                                                    <i class="fa fa-star-o"></i>
                                                    <p>(23 reviews)</p>
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
        </div>

        <Offer />
</template>

<script>
import axios from 'axios'
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
            university: []
        }
    },
    // { 'headers': { 'Authorization': JWT tokern }}
    async created() {
        const headers = {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Custom-Header': 'Custom-Value'
        };
        try {
            const universe = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/University/GetUniversityGroupByName/` + this.$route.params.name, { headers });
            this.university = universe.data;
            console.log(this.university)
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Semester/GetSemesterListByName/` + this.$route.params.name);
            this.semester = res.data;
            console.log(this.semester);
            const result = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Course`);
            this.course = result.data;
            console.log(this.course)
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style scoped>
.kj .action {
    float: right;
    font-size: 20px;
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

.jk {
    padding-top: 5%;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }

    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;


    }

    .container-fluid {
        padding: 100px 20px 20px 20px;
    }
}

@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }
}

.card {
    border: 1px solid black;
    /* background: rgb(2,0,36);
    background: linear-gradient(180deg,lightblue 5%, blue, 20%, darkblue 100%);  */
    margin-bottom: 4%;
    margin-top: 2%;
    width: 100%;
    background: transparent radial-gradient(closest-side at 77% 22%, #FFFFFF 0%, #FAFAFA 0%, #F6F6F6 0%, lightgray 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 6px #000000CC;
    mix-blend-mode: luminosity;
    border-radius: 10px;
}

.icon {
    width: 25px;
    height: 25px;
    margin-left: 55px;
    color: white;
}

.video {
    width: 70px;
    height: 70px;

}

.kl .card {
    padding: 10px 10px 0px;
    /* background-color: #8B8989; */

    color: black;
    cursor: pointer;
    /* background: radial-gradient(to right, darkblue, lightgray, blue); */
    box-shadow: 0px 0px 9px #000000A1;
    border: 1px solid #FFFFFF;

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
    padding: 25px 0px 25px 0px;


}
</style>