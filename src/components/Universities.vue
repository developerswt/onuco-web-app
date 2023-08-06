<template>
    <div class="container-fluid jk">
        <h4 class="academic_head_text">
            <span id="aca_text"><b>Offering</b></span> Universities ({{ university.length }})
        </h4>
        <div class="mb">
            <div class="row pt-4">
                <div class="box" v-for="college in university" :key="college.id">
                    <router-link v-bind:to="{ name:'CollegeDetails', params:{name: college.universityName}}" style="color: white;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>{{ college.name }}</h5>
                                <p>{{ college.description.slice(0,75) }}</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
            </div>
        </div>
        <Offer />
    </div>
    
</template>

<script>
import Offer from './Offer.vue'
import axios from 'axios';

export default {
    name: 'Universities',
    components: {
        Offer
    },
    data() {
        return {
            university: []
        }
    },
    async created() {
        try {
            const result = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/University/GetBranchListByName/` + this.$route.params.name);
            this.university = result.data;
            console.log(this.university);
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style scoped>
.jk {
    padding: 8% 10% 5% 11%;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding: 27% 3% 0% 2%;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding: 14% 2% 0% 2%;
    }
}

.mb .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
}
.box {
    top: 168px;
    left: 122px;
    width: 352px;
    height: 109px;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 70px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    margin-bottom: 3%;
    
}
.box .row {
    padding: 12px 5px;
}
.box img {
    padding: 5px 0px 75px 10px;

}


.box h5 {
    
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}
.box p {
    font: normal normal 300 12px/14px Segoe UI;
    
    text-align: left;
    
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.49;
}
.box .col-md-9 {
    padding: 0% 6% 33% 0%;
}
.box .col-md-9 p {
    padding: 0% 0% 12% 0%;
}
.box .col-md-3 {
    float: left;
}
@media screen and (max-width: 600px) {
    .box .col-md-3 {
        float: left;
        width: 20%;
    }
    .box .col-md-9 {
        float: right;
        width: 80%;
        padding: 0% 0% 0% 2%;
    }
    .box {
        width: 100%;
        margin-bottom: 5%;
        height: 130px;
    }
}
@media only screen and (min-width: 600px) and (max-width: 912px) {
    .box {
        width: 47%;
        margin-bottom: 3%;
    }
}
@media only screen and (min-width: 950px) and (max-width: 1024px) {
    .box {
        width: 45%;
        margin-bottom: 3%;
    }
}
.academic_head_text {
    color: #006acd;
    padding: 0px 60px 0px 0px;


}


#aca_text {
    color: #006acd;
    font-weight: bold;

}
</style>