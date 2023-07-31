<template>
    <div class="container-fluid jk">
        
        <div class="parent_block  pt-4">
            <h4 class="academic_head_text">
                <span id="aca_text">Offering</span>Universities ({{ universitydata.length }})
            </h4>
            <div class="row">
                <div v-for="item in universitydata" :key="item.id">
                    <div class="box">
                        <router-link v-bind:to="'/Semester?university_id=' + item.id + '&branches_Name=' + item.name"
                            style="text-decoration: none;">
                        
                            <div data-v-76cacf1f="" class="row">
                                <div data-v-76cacf1f="" class="col-md-3 col-3 col-sm-3"><img data-v-76cacf1f=""
                                        src="/src/assets/images/university.png">
                                </div>
                                <div data-v-76cacf1f="" class="col-md-9 col-9 col-sm-9">
                                    <h5>{{ item.name }}</h5>
                                    <p>{{ item.description }}</p>
                                
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
    name: 'ComputerScience',
    components: {
      
        Offer
    },
    data() {
        return {
            universitydata: [],
        }

    },
    mounted() {
        this.getdata();
        this.academyName = this.$route.query.branches_Name;
        console.log(this.academyName);
    },
    methods: {
        getdata() {
            axios.get('https://localhost:7233/api/University/University/' + this.$route.query.branches_id) // Replace with your API endpoint
                .then(response => {
                    this.universitydata = response.data;
                    console.log(this.universitydata)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>


<style scoped>
.jk {
    padding-top: 5%;
}

@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }
    .academic_head_text{
        font-size: 18px;
        padding:0 !important;
    }
    .box{
        width:280px !important;
        padding-left:0 !important;
    }
    .container-fluid {
        padding: 100px 20px 20px 20px;
    }
}

@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }
    .academic_head_text{
        font-size: 18px;
    }
    .box{
        width:280px !important;
        padding-left:0 !important;
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
    margin-top: 10%;
}

.kl:hover {
    color: black;
    background-color: white;
}

.box {
    
    height: 95px;
    width: 400px;
    box-shadow: 0px 0px 6px #000000;
    border-radius: 40px 40px 80px 40px;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 20px;
    padding-left:15px;
   
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
    line-height: 1.2;
    text-align: left;
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.49;
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
.parent_block {
    max-width: 1300px;
    margin: 0 auto;
}
</style>