<template>
    <div class="container jk">
        <div class="parent_block pt-4">
            <h4 class="academic_head_text">
            <span id="aca_text"><b>Offering</b></span> Universities ({{ university.length }})
        </h4>
        <div class="parent_blocks">
            <div class="row pt-4">
                <div class="box" v-for="college in university" :key="college.id">
                    <router-link v-bind:to="{ name:'CollegeDetails', params:{name: college.universityName}}" style="color: white;">
                        <div class="row">
                            <div class="col-md-3 col-3 col-sm-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 col-9 col-sm-9">
                                <h5>{{ college.name }}</h5>
                                <p>{{ college.description.slice(0,75) }}</p>
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
import Offer from './Offer.vue'
import axios from 'axios';

export default {
    name: 'Universities',
    components: {
        Offer
    },
    data() {
        return {
            university: [],
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
            const result = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/University/GetBranchListByName/` + this.$route.params.name, { headers } );
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
    padding-top:100px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 768px) and (min-width: 100px) {
    .academic_head_text{
        font-size: 18px;

    }
    .parent_blocks{
        justify-content: center !important;

    }
    .box {
        width: 250px !important; 
        margin-bottom: 5%;
      
    }
    .box h5,.box p{
        padding-left:10px;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .box {
        width: 250px !important; 
        margin-bottom: 5%;
      
    }
    .academic_head_text{
        font-size: 18px;

    }
    .box {
        width: 250px !important; 
        margin-bottom: 5%;
      
    }
    .box h5,.box p{
        padding-left:10px;
    }
}


.box {
    
    width: 350px;
    height: 109px;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 70px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
  margin:15px;
  padding:15px;
    
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
    font-size: 20px;


}


#aca_text {
    color: #006acd;
    font-weight: bold;

}
.parent_block {
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 5%;
}

.parent_blocks{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
}
</style>