 <template>
     <div class="category-test pt-3">
        <div class="container" style="margin-top: 70px;">
            <!-- <Breadcrumbs /> -->
            <h4 class="academic_head_text pt-1">
                <span id="aca_text">Best</span>Lecturers</h4>
        </div>
    </div>

        <div class="container">
            <div class="row pt-3" style="margin-bottom: -38px;">
                <div class="col-md-6 col-lg-3" v-for="facult in faculty" :key="facult.id">
                    <router-link v-bind:to="{ name: 'Instructor', params: { name: facult.facultyDyanamicRouting } }" style="cursor: pointer; text-decoration: none;"> 
                    <div class="card mt-5">
                        <div class="user-follower">
                            <img :src="facult.imageUrl" class="user-icon" v-if="facult.imageUrl !== ''">
                            <img src="../assets/images/MaskGroup1.png" class="user-icon" v-else>
                        </div>
                        <div class="user-following">
                            <p class="text-right"><small>13 Following</small></p>
                            <p class="text-right"><small>1200 Followers</small></p>
                        </div>
                        <div class="card-body" style="margin-top: -7%;">
                            <div class="card-title">{{ facult.name }}</div>
                            <div class="card-text"> {{ facult.description.slice(0,50) }}...</div>
                            
                            <div class="mn text-left">
                                <p>
                                    (23 Reviews) 
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                </p>
                               
                
                            </div>
                        </div>
                    </div>
                    </router-link>
                </div>
            </div>
        </div>        
        <Loading v-model:active="isLoading"  loader="dots" :color="'#0066CC'" :width="'100px'" :height="'100px'"></Loading>        
        <!-- <img :src="this.faculty[1].imageUrl" style="border-radius: 50%; width: 50%; height: 50%;"> -->
</template>

<script>
import axios from 'axios'
import Breadcrumbs from './Breadcrumbs.vue'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';


export default {
    name: 'BestLecture',
    components: {
        Breadcrumbs,
        Loading
    },
    data() {
        return {
            faculty: [],
            isLoading: false,
        }
    },
    async created() {   
        this.isLoading = true;
        try {
            const res = await axios.get(`https://migzype4x8.ap-southeast-1.awsapprunner.com/api/Faculty`);
            this.faculty = res.data;
            console.log(this.faculty);
        } catch (error) {
            console.log(error);
            this.isLoading= false;
        } finally {
            this.isLoading = false;
        }
    },
  }


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
  
}

/* .user-icon {
    width: 30%;
    height: 30%;
   
    
} */
/* .follower {
    position: relative;
    top: -110px;
    line-height: 90%;
}
.follower span {
    font-size: 14px;
} */
.user-follower img {
    width: 60px;
    height: 60px;
    margin-left: 19%;
    padding-top: 2%;
    background-color:#fff;
    box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #FFFFFF;    
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
}

.user-follower {
    position: absolute;
    top: -35px;
}


.user-following p {
    position: relative;
    top: -30px;
    font-size: 14px;
    text-align: right;
    width: 100%;
    line-height: 2%;
    color: #707070;
}

.card-title {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;

}

.demo-rate-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
}

.demo-rate-block:last-child {
    border-right: none;
}

.demo-rate-block .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}

.mn {
    padding-top: 20px;
}

.mn p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/18px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    /* text-align: center; */
    font: normal normal normal 14px/18px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    margin: 0%;
    opacity: 1;
}
.mn  .fa{
    letter-spacing: 1px;
    
}
.mn .el-rate {
    float: right;
    margin-top: -14%;
    margin-left: 7%;
}

.col-md-3 {
    margin-bottom: 3%;
}

.card {
    margin-bottom: 20%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    opacity: 1;
}

.academic_head_text {
    color: #006acd;
    /* padding-left: 20px; */
    font-size: 20px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

@media (max-width: 768px) {
 
    .card-body
    {
        margin-top:0 !important;
    }
    .academic_head_text{
        font-size: 15px !important;
    padding-left: 0 !important;

    }
    .category-test h4 a{
        padding-right: 0;
    font-size: 15px !important;
    }

}

@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text {
        font-size: 20px;
    }

    .card {
        margin-bottom: 50px;
    }

}
.card-text{
    /* overflow-y: scroll; */
    /* height:75px; */
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-aeaeae);
    text-align: left;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #AEAEAE;
    opacity: 1;
}

::-webkit-scrollbar {
    width: 0.5em; /* Adjust this to change the width of the scrollbar track */
}

/* Firefox */
* {
    scrollbar-width: none; /* "thin" or "none" depending on your preference */
}

*::-webkit-scrollbar-thumb {
    background-color: transparent; /* Hide the thumb on webkit-based browsers */
}
.fa{
    color: orange;
}

@media only screen and (max-width: 1024px) {
.col-md-6{
    margin-bottom: -18px;
   
}
}
</style>


