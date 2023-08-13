<template>
    <div class="container-fluid jk">
        <div class="parent_block pt-4">
            <h4 class="academic_head_text">
            <span id="aca_text"><b>Available</b></span> Semesters ({{ semester.length }})
        </h4>
        <p>{{ university.description }}</p>
        <div class="pt-3">
            <div class="row" v-for="sem in semester" :key="sem.id" >
                <div class="card" id="main_card">
                    <h5 class="card-header">
                        <div class="collapsed d-block kj" data-toggle="collapse" :href="'#collapse-example' + sem.id" aria-expanded="true" aria-controls="collapse-example" id="heading-example" >
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
                    <div :id="'collapse-example' + sem.id" class="collapse" aria-labelledby="heading-collapsed">
                        <div class="card-body">
                            <div class="">
                            <div class="row kl">
                                <div class="col-md-4" v-for="cou in course" :key="cou.id">
                                    <router-link v-bind:to="'/SemesterDetails?id='+ cou.id">
                                    <div class="card" v-if="sem.id === cou.semesterId" id="sem_card">
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
        try {
            const universe = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/University/GetUniversityGroupByName/` + this.$route.params.name);
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
.academic_head_text {
    color: #006acd;
    padding: 0px 60px 0px 0px;


}

.parent_blocks{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
}
.parent_block {
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 5%;
}
#main_card{
    margin:20px;
}
#sem_text{
    color:#707070;
    
}
#sem_description{
    color:#777777;
    
}
#sem_icon{
    color:#0077FF;
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
.jk {
    padding-top:100px ;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
#sem_text{
        font-size: 15px;
        font-weight: bold;
    }
    #sem_description{
        font-size: 11px;
    }
@media only screen and (max-width: 600px) and (min-width: 100px) {
    #sem_text{
        font-size: 18px;
    }
    #sem_description{
        font-size: 15px;
    }
  
    
}
@media only screen and (max-width: 1024px) and (min-width: 600px) {
    #sem_text{
        font-size: 18px;
    }
    #sem_description{
        font-size: 15px;
    }
  
    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;


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

#sem_card{
/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=fbaebb&c2=b6def5&gt=r&gd=dtl
*/
background: #FBAEBB;
background: radial-gradient(at left top, #FBAEBB, #B6DEF5);
box-shadow: 0px 0px 9px #000000A1;
border: 1px solid #FFFFFF;

}
.card-header,.card-body{
    background: #EFF5FC;
}
.card-header{
    height:65px;
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
    padding: 25px 0px 2px 0px;


}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;

}

</style>
