<template>
    <div class="container-fluid jk">
        <!-- <Breadcrumbs /> -->
        <div class="container pt-4">
            <h2 id="available_text"><b>Available</b> {{ this.academia.name }} Courses ({{ branches.length }})</h2>
        <div class="parent_blocks">
            <div class="row pt-4">
                <div class="box" v-for="branch in branches" :key="branch.id">
                    <router-link v-bind:to="{ name:'Universities', params:{name: branch.branchName}}" style="color: white; text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3 col-3 col-sm-3" style="color: white; position: relative;left: 17px;">
                                <img src="../assets/images/book1.png" style="height: 60px;">
                            </div>
                            <div class="col-md-9 col-9 col-sm-9 " style="position: relative;right: 0px;">
                                <h5  data-placement="top" :title="branch.name" >{{ branch.name }}</h5>
                                <p style="margin-top: -8px;">{{ branch.description }}</p>
                               
                            </div>
                        </div>
                    </router-link>    
                </div>
            </div>
        </div>
        </div>
     
    </div>            


    <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="'100px'" :height="'100px'"></Loading>
    <Offer />
</template>

<script>
import AxiosInstance  from '../config/axiosInstance';
import router from '../router';
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
            academia: [],
        }
    },
    async created() {
        this.isLoading = true;
        try {
            const res = await AxiosInstance.get(`/Academia/GetAcademiaByName/` + this.$route.params.name);
            this.academia = res.data;
            console.log(this.academia);
        
            const result = await AxiosInstance.get(`/Branches/GetBranchListByName/` + this.$route.params.name);
            this.branches = result.data;
            console.log(this.branches);
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    }
}
    
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

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
    padding-top:70px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 768px) and (min-width: 100px) {

    .parent_blocks{
        justify-content: center !important;

    }
    .box{
        height: 109px !important;
    width: 307px !important;
    background-size: contain !important;
 
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
    height:83px;
    width:360px;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 10px;
    padding:9px;
    background: url('../assets/images/Path 4814@2x.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 16%;  
}
.parent_block {
    max-width: 1300px;
    margin: 0 auto;
}


.box h5 {
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font: normal normal 600 17px/24px Segoe UI;
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
.col-md-3{
    padding-left: 12px;
   
}
.col-md-9{
    padding-right: 5px;
    padding-left: 1px;
}
</style>