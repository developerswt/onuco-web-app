<template>
    <div class="container-fluid jk">
        <div class="parent_block pt-4">
            <h4 class="academic_head_text">
                <span id="aca_text">Available</span>{{ this.academia.name }} Courses ({{ branches.length }})
            </h4>

            <div class="row">
                <div v-for="branch in branches" :key="branch.id">
                    <div class="box">
                        <router-link v-bind:to="{ name:'Universities', params:{name: branch.branchName}}" style="color: white;">

                            <div data-v-76cacf1f="" class="row">
                                <div data-v-76cacf1f="" class="col-md-3 col-3 col-sm-3"><img data-v-76cacf1f=""
                                        src="/src/assets/images/book1.png">
                                </div>
                                <div data-v-76cacf1f="" class="col-md-9 col-9 col-sm-9 pt-2">
                                    <h5 data-v-76cacf1f="">{{ branch.name }}</h5>
                                     <p>{{ branch.description }}</p>
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
import router from '../router';
import Offer from './Offer.vue'

export default {
    name: 'EngineeringView',
    data() {
        return {
            branches: [],
            academia: [],
        }
    },
    components: {
        Offer
    },
    computed: {
        isuser() {
            console.log(this.$store.state.user);
            return this.$store.state.user;
        }
    },
    async created() {
        // console.log(this.isuser.signInUserSession.idToken);
        //let tokenvalue = this.isuser.signInUserSession.idToken;
        // const headers = {
        //     'Authorization': 'Bearer ' + this.isuser.signInUserSession.idToken.jwtToken,
        //     'Custom-Header': 'Custom-Value'
        // };
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Academia/GetAcademiaByName/` + this.$route.params.name);
            this.academia = res.data;
            console.log(this.academia);
            const result = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Branches/GetBranchListByName/` + this.$route.params.name);
            this.branches = result.data;
            console.log(this.branches);
        } catch (error) {
            console.log(error);
        }
    }
}
</script>


<style scoped>
.jk {
    padding-top: 5%;
}

@media only screen and (max-width: 768px) {
    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;

    }

    .container-fluid {
        padding: 100px 20px 20px 20px;
    }

    .box {
        width: 250px !important;
    }
}


@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 11%;
    }

    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;

    }
}

@keyframes slide1 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(10px, 0);
    }
}

.arrow1 {
    animation: slide1 1s ease-in-out infinite;
    margin-left: 9px;
}

.kl {
    border-radius: 25px;
    background: #0d4b7e;
    color: #fff;
    font-weight: normal;
    margin-top: 2%;
}

.kl:hover {
    color: black;
    background-color: white;
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

}



.box {

    height: 95px;
    width: 300px;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 80px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 20px;
    padding-left: 15px;

}

.box h5 {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}

.box p {
    font-size: 14px;
    line-height: 35%;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.49;
}</style>

<!-- <template>
    <div class="container-fluid jk">
        <h2><b>Available</b> {{ this.academia.name }} Courses ({{ branches.length }})</h2>
        <div class="mb">
            <div class="row pt-4">
                <div class="box" v-for="branch in branches" :key="branch.id">
                    <router-link v-bind:to="{ name:'Universities', params:{name: branch.branchName}}" style="color: white;">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 pt-2">
                                <h5>{{ branch.name }}</h5>
                                <p>{{ branch.description }}</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
            </div>
        </div>
    </div>            


    
    <Offer />
</template>

<script>
import Offer from './Offer.vue'
import axios from 'axios';

export default {
    name: 'BranchesView',
    data() {
        return {
            branches: [],
            academia: []
        }
    },
    components: {
        Offer
    },
    async created() {
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Academia/GetAcademiaByName/` + this.$route.params.name);
            this.academia = res.data;
            console.log(this.academia);
            const result = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Branches/GetBranchListByName/` + this.$route.params.name);
            this.branches = result.data;
            console.log(this.branches);
        } catch (error) {
            console.log(error);
        }
    }
}    

</script> -->
<!-- <style scoped>
.jk {
    padding: 7% 0% 6% 12%;
}

@media only screen and (max-width: 768px) {
    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;

    }

    .container-fluid {
        padding: 100px 20px 20px 20px;
    }

    .box {
        width: 250px !important;
    }
}


@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 11%;
    }

    .academic_head_text {
        font-size: 18px;
        padding: 0 !important;

    }
}

@keyframes slide1 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(10px, 0);
    }
}

.arrow1 {
    animation: slide1 1s ease-in-out infinite;
    margin-left: 9px;
}

.kl {
    border-radius: 25px;
    background: #0d4b7e;
    color: #fff;
    font-weight: normal;
    margin-top: 2%;
}

.kl:hover {
    color: black;
    background-color: white;
}

.parent_block {
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 5%;
}



.academic_head_text {
    color: #006acd;
    padding: 0px 60px 0px 0px;


}


#aca_text {
    color: #006acd;
    font-weight: bold;

}



.box {

    height: 95px;
    width: 305px;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 80px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 20px;
    padding-left: 15px;

}

.box h5 {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}

.box p {
    font-size: 14px;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.49;
}
</style> -->
<!-- <style scoped>
.jk {
    padding: 8% 10% 5% 11%;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding: 27% 2% 0% 2%;
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
    left: 697px;
    height: 120px;
    /* UI Properties */
    width: 33%;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 80px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    margin-bottom: 1%;
    
}
.box .row {
    padding: 12px 10px;
}


.box h5 {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}
.box p {
    font-size: 14px;
    
    text-align: left;
    
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.49;
}
@media screen and (max-width: 600px) {
    .box .col-md-3 {
        float: left;
        width: 25%;
    }
    .box .col-md-9 {
        float: right;
        width: 75%;
    }
    .box {
        width: 100%;
        margin-bottom: 5%;
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
h2 {
    font: normal normal 600 22px/30px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
}
.academic_head_text {
    color: #006acd;
    padding: 0px 60px 0px 0px;


}


#aca_text {
    color: #006acd;
    font-weight: bold;

}
</style> -->
