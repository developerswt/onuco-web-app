<template>
    <div class="container-fluid jk">
        <Breadcrumbs class="container" />
        <div class="container" v-if="this.branches.length > 0 || this.academia.length > 0">
            <h2 id="available_text"><b>Available</b> {{ this.academia.name }} Courses ({{ branches.length }})</h2>
        <div class="parent_blocks">
            <div class="row pt-4">
                <div class="box" v-for="branch in branches" :key="branch.id">
                    <router-link v-bind:to="{ name:'Universities', params:{name: branch.branchName}}"  style="cursor: pointer; color: white; text-decoration: none;">
                        <div class="row">
                            <div class="col-md-3 col-3 col-sm-3" style="color: white; position: relative;left: 17px;">
                                <img src="../assets/images/book1.png" style="height: 65px;">
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
        <div class="" v-else>
            <h2 style="text-align: center;margin-bottom: 10%; margin-top: 10%;">Comming Soon ...</h2>
        </div>
     
    </div>            


    <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
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
        height: 98px !important;
    width: 359px !important;
    padding: 15px  !important;
 
    }
    #available_text{
        font-size: 16px !important;
    }
    .jk{
        padding-top:65px;
    }
    #available_text{
        margin-top: 30px;
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
    height:90px;
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