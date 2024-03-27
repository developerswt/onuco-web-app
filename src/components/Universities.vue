<template>
    <div class="container jk">
        <div class="container">
            <p class="desc" style="color: #777777;" v-html="branches[0]?.description"></p>
            </div>
        <div v-if="university.length > 0" class="parent_block">
            <h4 class="academic_head_text">
                <span id="aca_text"><b>Offering</b></span> Universities ({{ university.length }})
            </h4> 
            
            <div class=" parent_blocks">
                <div class="row ml-3 ">
                    <div v-for="college in university" :key="college.id" class="box mb-4">
                                                <router-link :to="{ name: 'Semester', params: { name: college.universityName } }"
                            style="text-decoration: none;">
                            <div class="row">
                                <div class="col-md-3 col-3 col-sm-3" style="color: white; position: relative;" pl-4>
                                    <img class="cb" src="../assets/images/university.png">
                                </div>
                                <div class="col-md-7 col-7 col-sm-7" style="position: relative;right: 12px;">
                                    <h5 data-placement="top" :title="college.name">{{ college.name }}</h5>
                                    <p
 :title="college.description"
                                        v-html="college.description.slice(0, 60)"></p>
                                </div>
                                <div class="col-md-2 col-2 col-sm-2">
                                    <div class="course_block ">
                                        <img class="cb1" src="../assets/images/Path4024.png">
                                    </div>
                                </div>
                            </div>
                        </router-link>
                   
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="">
            <div v-if="!isLoading" class="">
                <h2 class="comming_soon">Comming Soon ...</h2>
            </div>
        </div>

    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    <Offer />
</template>

<script>
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Offer from './Offer.vue'
import AxiosInstance from '../config/axiosInstance'

export default {
    name: 'UniversitiesView',
    components: {
        Offer,
        Loading,
    },
    data() {
        return {
            isLoading: false,
            university: [],
            branches:[],
        }
    },
    async created() {
        this.isLoading = true;
        try {
            const result = await AxiosInstance.get(`/University/GetBranchListByName/` + this.$route.params.name);
            this.university = result.data;
        
            const res = await AxiosInstance.get(`/Branches/GetBranchByName/` + this.$route.params.name);
            this.branches = res.data;
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
}


</script>

<style scoped>
.comming_soon {
    font: normal normal 600 22px/30px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    text-align: center;
    margin-bottom: 10%;
    margin-top: 10%;
}

.jk {
    padding-top: 0px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

@media only screen and (max-width: 800px) and (min-width: 530px) {
    .academic_head_text {
        font-size: 16px !important;
        padding: 0 !important;

    }

    .parent_blocks {
        justify-content: center !important;

    }

    .box {

        height: 100px !important;
        width: 370px !important;

        margin-bottom: 5%;

    }

    .box h5,
    .box p {
        padding-left: 10px;
    }

    .jk {
        /* padding-top: 90px !important; */
    }
}

@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .box {
        width: 300px !important;
        margin-bottom: 5%;

    }

    .academic_head_text {
        font-size: 18px;

    }

    .box {
        width: 250px !important;
        margin-bottom: 5%;

    }

    .box h5,
    .box p {
        padding-left:10px;
    }
}


.box {
    height: 100px;
    width: 360px;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 10px;
    padding: 15px 0px 0px 15px;
    background: url('../assets/images/Path 4814@2x.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;


}

.box img {
    padding: 0px 0px 0px 15px;

}


.box h5 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) 16px/24px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 16px/24px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.box p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-15)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: left;
    font: normal normal normal 15px/21px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}



@media only screen and (min-width: 600px) and (max-width: 912px) {
    .box {
        width: 300px !important;
        margin-bottom: 3%;
    }
}

@media only screen and (min-width: 950px) and (max-width: 1024px) {
    .box {
        width: 300px !important;
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
    max-width: 100%;
    /* margin-top: 30px; */

}

.parent_blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

@media screen and (min-width: 100px) and (max-width: 280px) {
    .academic_head_text {
        font-size: 16px !important;
        padding: 0 !important;

    }

    .parent_blocks {
        justify-content: center !important;

    }

    .box {
        height: 90px !important;
        width: 100% !important;
        /* padding: 15px !important; */

    }

    .box h5 {
        font: normal normal 600 12px/24px Segoe UI;
    }

    .box p {
        font-size: 10px;
    }

}

.cb1 {
    display: none;
}

@media (max-width:520px) {
    .cb1 {
        width: 22px;
        display: block;
        position: relative;
        top: 13px;
    }

    .box {
        margin: 1px 0px 5px 0px !important;
    }
    .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;

}

}
.desc{
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-15)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 15px/21px Segoe UI;
letter-spacing: 0px;
color: #828282;
opacity: 1;
    position: relative;
    bottom: 10px;
    right: 12px;    
}
.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

@media only screen and (min-width:280px) and (max-width:1280px)
{
    .cb1{
        display:none;
    }

}
</style>