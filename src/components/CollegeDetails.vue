<template>
    <div class=" container-fluid jk">
        <div class=" parent_block  pt-4">

            <h4 class="academic_head_text">
                <span id="aca_text">Available</span>Semesters ({{ semesterData.length }})
            </h4>
            <h3>{{ universityName }}</h3>
            <p>{{ universityName }} is one of the largest Technological Universities in India with 24 years of Tradition of
                excellence in
                Engineering & Technical Education, Research and Innovations. It came into existence in the year 1998 to
                cater the needs of Indian industries for trained technical manpower with practical experience and sound
                theoretical knowledge.</p>
     


        <div class="container-fluid pt-4">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <h5 class="card-header">
                            <div data-toggle="collapse" href="#collapse-example" aria-expanded="true"
                                aria-controls="collapse-example" id="heading-example" class="d-block kj">
                                <span class="action"><i class="fa fa-chevron-right rotate-icon"></i></span>
                                1st Semester

                            </div>
                        </h5>
                        <div id="collapse-example" class="collapse show" aria-labelledby="heading-example">
                            <div class="card-body">
                                <div class="row kl">
                                    <div class="col-md-4">
                                        <router-link to="/SemesterDetails">
                                            <div class="card">
                                                <div class="card-title">
                                                    <div class="row">
                                                        <div class="col-md-12 mn">
                                                            <p><b>Math 1 (NEP
                                                                    Series)</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240
                                                                    hrs</small></p>

                                                            <img src="../assets/images/share.png" class="icon">
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-12 mn">
                                                            <p><b>Subject Description</b></p>

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
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-title">
                                                <div class="row">
                                                    <div class="col-md-12 mn">
                                                        <p><b>Math 1 (NEP
                                                                Series)</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240
                                                                hrs</small></p>

                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 mn">
                                                        <p><b>Subject Description</b></p>

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
                                    </div>
                                    <div class="col-md-4">
                                        <div class="card">
                                            <div class="card-title">
                                                <div class="row">
                                                    <div class="col-md-12 mn">
                                                        <p><b>Math 1 (NEP
                                                                Series)</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240
                                                                hrs</small></p>

                                                        <img src="../assets/images/share.png" class="icon">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 mn">
                                                        <p><b>Subject Description</b></p>

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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div v-for="item in semesterData" :key="item.id">
                    <router-link to="" style="text-decoration: none;">
                        <div class="card m-2" style="width: 16rem;">
                            <div class="card-body">
                                <p class="ty">{{ item.name }}</p>
                                <p class="ty">{{ item.description }}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Offer />
</template>

<script>
import axios from 'axios';
import Offer from './Offer.vue'

export default {
    name: 'CollegeDetails',
    data() {
        return {
            semesterData: {
                name: '',
                description: ''
            },
            universityName: '',
        }
    },
    mounted() {

        this.getdata();
        this.universityName = this.$route.query.branches_Name;
        console.log(this.universityName);
    },
    methods: {
        getdata() {
            axios.get('https://localhost:7233/api/Semester/Semester/' + this.$route.query.university_id)
                .then(response => {
                    this.semesterData = response.data;
                    console.log(this.semesterData);

                })
                .catch(error => {
                    console.error(error);
                })
        }
    },
    components: {
        Offer
    }
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


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;

}</style>
