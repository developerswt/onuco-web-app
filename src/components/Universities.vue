<template>
    <div class="container jk">
        <Breadcrumbs class="container" />
        <div class="parent_block" v-if="this.university.length > 0">
            <h4 class="academic_head_text">
            <span id="aca_text"><b>Offering</b></span> Universities ({{ university.length }})
        </h4>
        <div class=" parent_blocks" >
            <div class="row pt-4"  >
                <div class="box" v-for="college in university" :key="college.id">
                    <router-link v-bind:to="{ name:'Semester', params:{name: college.universityName}}" style="text-decoration: none;" >
                        <div class="row">
                            <div class="col-md-3 col-3 col-sm-3" style="color: white; position: relative;right: 1px;">
                                <img  class="cb" src="../assets/images/university.png">
                            </div>
                            <div class="col-md-7 col-7 col-sm-7" style="position: relative;right: 12px;">
                                <h5  data-placement="top" :title="college.name" >{{ college.name }}</h5>
                                <p style="margin-top: -8px;" v-html="college.description.slice(0,60)"></p>
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
        <div class="" v-else>
            <h2 class="comming_soon">Comming Soon ...</h2>
        </div>
     
    </div>
    <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    <Offer />
</template>

<script>
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Offer from './Offer.vue'
import AxiosInstance from '../config/axiosInstance'
import Breadcrumbs from './Breadcrumbs.vue'

export default {
    name: 'Universities',
    components: {
        Offer,
        Loading,
        Breadcrumbs
    },
    data() {
        return {
            isLoading: false,
            university: [],
        }
    },
    async created() {
        this.isLoading = true;
        try {
            const result = await AxiosInstance.get(`/University/GetBranchListByName/` + this.$route.params.name);
            this.university = result.data;
            console.log(this.university);
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
    padding-top:70px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 768px) and (min-width: 530px) {
    .academic_head_text{
        font-size: 16px !important;
        padding:0 !important;

    }
    .parent_blocks{
        justify-content: center !important;

    }
    .box {
     
        height: 100px !important;
    width: 370px !important;
    
        margin-bottom: 5%;
      
    }
    .box h5,.box p{
        padding-left:10px;
    }
    .jk{
        padding-top: 65px !important;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .box {
        width: 300px !important; 
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
    height:100px;
    width:360px;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 10px;
    padding:18px;
    background: url('../assets/images/Path 4814@2x.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    
}

.box img {
    padding: 5px 0px 75px 10px;

}


.box h5 {
    
    font-family: 'Times New Roman', Times, serif;
    text-align: left;
    font: normal normal 600 17px/24px Segoe UI;
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}
.box p {
    font-size: 13px;
    
    text-align: left;
    
    letter-spacing: 0px;
    color: #000000;
    opacity: 0.49;
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
    max-width: 1300px;
    margin-top: 30px;
   
}

.parent_blocks{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
}
.col-md-3{
    padding-left: 12px;
   
}
.col-md-9{
    padding-right: 5px;
    padding-left: 1px;
}

@media screen and (min-width: 100px) and (max-width: 280px) {
    .academic_head_text{
        font-size: 16px !important;
        padding:0 !important;

    }
    .parent_blocks{
        justify-content: center !important;

    }
    
   .box{
    height: 90px !important;
    width: 265px !important;
    padding: 15px !important;
    
}
.box h5{
  font: normal normal 600 12px/24px Segoe UI;
}
.box p{
  font-size: 10px;
}
.col-md-9{
    padding-right: 0px !important;
    padding-left:0px !important;
}

}

.cb1{
    display: none;
}
@media (max-width:520px) {
    .cb1{
    width: 25px;
    display: block;
    position: relative;
    top: 13px;
} 
.box{
    margin: 1px 0px 5px 0px !important;
} 
.jk{
    margin-bottom: 61px;
}
}
</style>