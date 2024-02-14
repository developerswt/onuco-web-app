<template>
    <div class="container-fluid jk">
        <!-- <Breadcrumbs class="container" /> -->
        <div class="container">
            <p v-if="!academia.readMore" class="professor-details_text">{{academia && academia.description ? academia.description.slice(0, 136) : '' }}
                <span class="read" @click="toggleReadMore">...<span style="color:blue;cursor: pointer;">Read more</span></span>
            </p>
            <p v-if="academia.readMore" class="professor-details_text">{{ academia.description }}
                <span @click="toggleReadMore"><span style="color:blue;cursor: pointer;">Read less</span></span>
            </p>
        </div>
        <div v-if="branches.length > 0 || academia.length > 0" class="container pb-3">
            <h2 id="available_text" style="margin-top: -25px;"><b>Available</b> {{ academia.name }} Courses ({{ branches.length }})</h2>
            <div class="parent_blocks">
                <div class="row ">
                    <div v-for="branch in branches" :key="branch.id" class="box">
                        <router-link :to="{ name: 'Universities', params: { name: branch.branchName } }"
                            style="cursor: pointer; color: white; text-decoration: none;">
                            <div class="row">
                                <div class="col-md-3 col-3 col-sm-3" style="color: white; position: relative;left: 17px;">
                                    <div class="course_block ">
                                        <img class="cb" src="../assets/images/book1.png">
                                    </div>
                                </div>
                                <div class="col-md-7 col-7 col-sm-7" style="position: relative;right: 10px;">
                                    <div class="course_block_one mt-2">
                                        <h5 :title="(branch.name)">{{ shortenText(branch.name, 18) }}</h5>
                                        <p style="margin-top: -8px;" :title="(branch.description)">{{ shortenText(branch.description, 20) }}</p>
                                    </div>
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
                <h2 style="text-align: center;margin-bottom: 10%; margin-top: 10%;">Comming Soon ...</h2>
            </div>
        </div>
    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    <Offer />
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import Offer from './Offer.vue'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Breadcrumbs from './Breadcrumbs.vue';

export default {
    name: 'BranchesView',
    components: {
        Offer,
        Loading,
        Breadcrumbs
    },
    data() {
        return {
            isLoading: false,
            branches: [],
            academia: {
            name: '',
            description: '',
            readMore: false,  
        },
        }
    },
    async created() {
        this.isLoading = true;
        try {
            const res = await AxiosInstance.get(`/Academia/GetAcademiaByName/` + this.$route.params.name);
            this.academia = res.data;


            const result = await AxiosInstance.get(`/Branches/GetBranchListByName/` + this.$route.params.name);
            this.branches = result.data;

        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
    methods: {
    toggleReadMore() {
        this.academia.readMore = !this.academia.readMore;
    },
    shortenText(text, maxLength) {
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    },
},
}
</script>

<style scoped>
.jk {
    padding-top: 0px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

@media only screen and (max-width: 768px) and (min-width: 100px) {

    .parent_blocks {
        justify-content: center !important;

    }

    .box {
        height: 98px !important;
        width: 359px !important;
        padding: 15px !important;

    }

    #available_text {
        font-size: 18px !important;
    }

    .jk {
        padding-top: 65px;
    }

    #available_text {
        margin-top: 30px;
    }

}

@media only screen and (max-width: 1024px) and (min-width: 650px) {

    #available_text {
        font-size: 20px;
    }

    .box {
        width: 300px !important;
    }
}

.box {
    height: 90px;
    width: 360px;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 10px;
    padding: 9px;
    background: url('../assets/images/Path 4814@2x.png');
    background-position: center;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    border-radius: 16%;
}

@media screen and (max-width: 600px) {
    .box {
        margin-right: 0px;
        margin-left: 0px;
    }
}

.parent_block {
    max-width: 1300px;
    margin: 0 auto;
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

.parent_blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

#available_text {
    font-size: 20px;
}

.col-md-3 {
    padding-left: 12px;

}

.col-md-9 {
    /* padding-right: 5px; */
    padding-left: 1px;
}
.professor-details_text{
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-15)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal normal 15px/21px Segoe UI;
letter-spacing: 0px;
color: #828282;
opacity: 1;
    position: relative;
    bottom: 18px;
    right: 25px;

}
.cb1 {
  display: none;
}

@media (max-width: 520px) {
  .cb1 {
    height: 22px;
    position: relative;
    top: 20px;
    display: block;
  }
}
.cb {
  height: 60px !important;
}
</style>