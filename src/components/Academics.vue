<template>
    <div class="container" id="academy_container">
        <div class="category-test pt-3 ">
            

            <h4 class="academic_head_text">

                <span id="aca_text">Available</span>Academics
                <router-link to="/AcademiNew">See all</router-link>
            </h4>

        </div>
        <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="item in academia" :key="item.id">
                <div class="box1">
                    <router-link v-bind:to="{ name: 'Branches', params: { name: item.academia.academiaName } }"
                    style="color: white;text-decoration: none;">
                        <div class="box">
                            <img src="../assets/images/book.png" class="icon">
                            <div class="top">
                                <span class="wr">0{{ item.bCount }}</span>
                            </div>
                            <div class="card-body">
                                <div class="card-title">
                                    <p class="ty1">COURSES</p>
                                </div>
                            </div>
                        </div>
                        <p class="ty">{{ item.academia.name }}</p>
                        
                    </router-link>
                </div>
            </slide>
                    

            <template #addons>
                        
                <navigation />
                        
            </template>
        </carousel>

    </div>
    <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>

    
</template>


<script>
import { defineComponent } from 'vue'
import axiosInstance from '../config/axiosInstance'
import router from '../router';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default defineComponent ({
    name: 'AcademicsView',
    components: {
        Carousel,
        Slide,
        Loading,
        Navigation,
    },
    data: () => ({
        academia: [],
        isLoading: false,
   
        settings: {
            itemsToShow: 3,
            snapAlign: 'start',
        },
   
        breakpoints: {
   
            900: {
                itemsToShow: 4,
                snapAlign: 'start',
            },
            820: {
                itemsToShow: 4,
                snapAlign: 'start',
            },
            768:{
                itemsToShow: 4,
                snapAlign: 'start',
            },
            1024: {
                itemsToShow: 7,
                snapAlign: 'start',
            },
            
            600: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
            540: {
                itemsToShow: 3,
                snapAlign: 'start', 
            },
            414: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            375: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            390: {
                itemsToShow: 2,
                snapAlign: 'start',
            },
            360: {
                itemsToShow: 2,
                snapAlign: 'start',
            }

        },
    }),
    async created() {
        this.isLoading = true;    
        try {
            const res = await axiosInstance.get(`/Academia`);
            this.academia = res.data;
            console.log(this.academia);
            // const result = await axiosInstance.get(`Branches/GetBranchesByAcademiaCount?academyId=1`);
            // this.branches = result.data;
            // console.log(this.branches);
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },

}) 
</script>

<style scoped>
.category-test a {
    text-decoration: none;
}

.category-test h4 a {
    float: right;
    color: #0d4b7e;
    font-size: 17px;
    font-family: 'Noto Sans', sans-serif;
    padding-right:20px;
    padding-left: 0px;
}

.kkj img {
    width: 30%;
    height: auto;
    position: relative;
    left: 36%;

}

.btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
}

.btn {
    position: relative;
    left: 15%;
}

/* .mb h2 {
    font-family: serif;
} */

/* .mb .box {
    width: 13%;
    cursor: pointer;
    height: auto; 
    border: 1px solid #ccc;
    border-radius: 25px;
    margin-bottom: 10px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg,lightblue 20%, blue, 20%, darkblue 100%);
    transition: 0.3s;
} */

.box1 {
    /* width: 122px; */
    width: 118px;
    cursor: pointer;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 25px;
    border-top-left-radius: 160px 130px;
    /* margin: 20px; */
    margin-bottom: 30px;
    margin-top: 30px;
    /* background: rgb(2,0,36); */
    background: #F6F6F6;
    background: #F6F6F6;
    background: radial-gradient(ellipse farthest-corner at top right, #F6F6F6 5%, #0077FF 67%);
    transition: 0.3s;
    
    
}

.mb .card-title {
    text-align: center;
    font-size: 20px;
    color: white;
    font-family: cursive-serif;
}

.box1:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}

.mb .row {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
}

.card {
    width: 28rem;
    height: 28rem;
}

@media screen and (max-width: 1000px) {
    .box1 {
        /* width:48%; */
        margin-bottom: 55px;
    }
  
}
@media screen and (max-width: 100px) and (max-width: 414px) {
    .box1 {
        width: 70%;
        margin: 30px 0px 30px 0px;
    }
}
@media screen and (min-width: 450px) and (max-width: 500px) {
    .box1 {
        width: 40%;
        margin: 30px 0px 30px 0px;
    }
}
@media screen and (min-width: 540px) and (max-width: 600px) {
    .box1 {
        width: 70%;
        margin: 30px 0px 30px 0px;
    }
    .wr {
        position: relative;
        left: -8px;
        top: -87px;
    }
}    
@media only screen and (max-width: 598.98px) {
    /* .box1 {
        width: 40%;
        margin: 30px 0px 30px 0px;
    } */

    .academic_head_text {
        font-size: 15px !important;
        padding-left: 0 !important;

    }

    .category-test h4 a{
        padding-right:0;
        font-size: 15px !important;
    }
  
    .ty{
        margin-top: -78px;
  
    }
    

}

@media only screen and (max-width: 912px) {
    .card {
        width: 21rem;
        height: 28rem;
        border: none;
    }
}

@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text {
        font-size: 20px;
    }
  

}

@media (min-width: 600px) and (max-width: 768px) {
    .academic_head_text {
        font-size: 18px !important;
        padding-left:0 !important;
    }
   
    #home_container{
        margin-top:0 ;

    }

}

.dot {
    height: 70px;
    width: 70px;
    color: white;
    background-color: orange;
    border-radius: 50%;
    display: inline-block;
}

.wr {
    position: relative;
    left: -7%;
    top: -92px;
    /* font-size: 24px;
    color: white; */
    text-align: left;
    font: normal normal normal 41px/54px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}

.ty {
    margin-top: -94px;
    font-size: 14px;
    color: black;
    text-align: center;
}

.ty1 {
    margin-top: 0px;
    font-size: 14px;
    color: white;
    position: relative;
    top: -76px;
    text-align: center;
}

router-link {
    text-decoration: none;
}

.icon {
    position: relative;
    left: -8%;
    top: -24px;
}

@media screen and (min-width: 100px) and (max-width: 450px) {
    .wr {
        position: relative;

        top: -87px;
    }
}

@media screen and (min-width: 650px) and (max-width: 912px) {
    .wr {
        position: relative;

        top: -87px;
    }
}

/* @media screen and (min-width: 450px) and (max-width: 650px) {
    .wr {
        position: relative;
        left: 30px;
        top: -87px;
    }
} */

.academic_head_text {
    color: #006acd;
    padding-left: 0px;

    font-size: 20px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

.parent_blocks {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    margin: 30px 0px 30px 0px;
}

#academy_container{
    padding:0px 0px 0px 0px;
}

/* .carousel{
    padding: 19px;
} */

</style>



