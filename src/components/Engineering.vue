<template>
    <div class="container-fluid jk">
        <div class="parent_block pt-4">
            <h4 class="academic_head_text">
                <span id="aca_text">Available</span>{{ academyName }} Courses ({{ branchData.length }})
            </h4>

            <div class="row">
                <div v-for="item in branchData" :key="item.id">
                    <div class="box">
                        <router-link v-bind:to="'/University?branches_id=' + item.id + '&branches_Name=' + item.name"
                            style="text-decoration: none;">

                            <div data-v-76cacf1f="" class="row">
                                <div data-v-76cacf1f="" class="col-md-3 col-3 col-sm-3"><img data-v-76cacf1f=""
                                        src="/src/assets/images/book1.png">
                                </div>
                                <div data-v-76cacf1f="" class="col-md-9 col-9 col-sm-9 pt-2">
                                    <h5 data-v-76cacf1f="">{{ item.name }}</h5>

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
    components: {

        Offer
    },
    data() {
        return {
            branchData: [],
            academyName: '',

        };
    },
    mounted() {
        this.getdata();
        this.academyName = this.$route.query.academy_name;



    },
    methods: {
        getdata() {
            axios.get('https://localhost:7233/api/Branches/Branches/' + this.$route.query.academy_id) // Replace with your API endpoint
                .then(response => {
                    this.branchData = response.data;
                    console.log(this.branchData)
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