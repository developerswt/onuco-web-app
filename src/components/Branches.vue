<template>
    <div class="container-fluid jk">
        <div class="container pt-4">
            <h2 id="available_text"><b>Available</b> {{ this.academia.name }} Courses ({{ branches.length }})</h2>
        <div class="parent_blocks">
            <div class="row pt-4">
                <div class="box" v-for="branch in branches" :key="branch.id">
                    <router-link v-bind:to="{ name:'Universities', params:{name: branch.branchName}}" style="color: white;">
                        <div class="row">
                            <div class="col-md-3 col-3 col-sm-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 col-9 col-sm-9 pt-2">
                                <h5>{{ branch.name }}</h5>
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
    name: 'BranchesView',
    components: {

Offer
},
    data() {
        return {
            branches: [],
            academia: [],
            isuser: localStorage.getItem("username") 
        }
    },
    computer: {
        authorizationHeader() {
            if (this.isLoggedIn) {
                return `Bearer ${this.isuser}`;
            } else {
                return ''; // Set your dummy value here
            }
        },
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
    },
    async created() {
        const headers = { 'Authorization':  this.authorizationHeader };  
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Academia/GetAcademiaByName/` + this.$route.params.name,  { headers } );
            this.academia = res.data;
            console.log(this.academia);
            const result = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Branches/GetBranchListByName/` + this.$route.params.name, { headers } );
            this.branches = result.data;
            console.log(this.branches);
        } catch (error) {
            console.log(error);
        }
    }
}    


</script>

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
<style scoped>
.jk {
    padding-top:100px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 768px) and (min-width: 100px) {

    .parent_blocks{
        justify-content: center !important;

    }
    .box{
        width:100% !important;
    }
    #available_text{
        font-size: 16px !important;
    }
    .jk{
        padding-top:65px;
    }
    
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
  
    #available_text{
        font-size: 20px;
    }
    .box{
        width:300px !important;
    }
}

.box {
    
    height: 105px;
    width: 300px;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 80px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 20px;
    padding:15px;

    
}
.parent_block {
    max-width: 1300px;
    margin: 0 auto;
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
.parent_blocks{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
}
#available_text{
font-size: 20px;
}
</style>
