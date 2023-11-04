<template>
    <div class="container-fluid jk">
      <!-- <Breadcrumbs class="brm" /> -->
      <div class="container" v-for="academi in academia" :key="academi.id">
        <!-- Use v-if to conditionally render the <div> when bCount is greater than zero -->
        <div>
          <h2 id="available_text"  style="margin-top: 20px;font-size: 18px;"><b>Available</b> {{ academi.academia.name }} Courses ({{ academi.bCount }})</h2>
          {{ academi.id }}
          <div class="parent_blocks">
            <div class="row pt-2">
              <div class="" v-for="branch in branches" :key="branch.id">
                <div class="box" v-if="academi.academia.id == branch.academiaId">
                  <router-link v-bind:to="{ name: 'Universities', params: { name: branch.branchName } }"
                    style="color: white;text-decoration: none;">
                    <div class="row">
                      <div class="col-md-3 col-3 col-sm-3" style="color: white; position: relative;left: 17px;">
                        <div class="course_block ">
                          <img class="cb" src="../assets/images/book1.png" >
                        </div>
                      </div>
                      <div class="col-md-9 col-9 col-sm-9" style="position: relative;right: 10px;">
                        <div class="course_block_one">
                          <h5 :title="branch.name">{{ branch.name.slice(0,20) }}...</h5>
                          <p style="margin-top: -8px;">{{ branch.description }}</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="'100px'" :height="'100px'"></Loading>
    <Offer />
  </template>
  


<script>
import Offer from './Offer.vue'
import axiosInstance from '../config/axiosInstance'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Breadcrumbs from './Breadcrumbs.vue'

export default {
    name: 'CoursesPage',
    components: {
        Offer,
        Loading,
        Breadcrumbs
    },
    data() {
        return {
            isLoading: false,
            academia: [],
            branches: [],
        }
    },
    async created() {
        this.isLoading = true;
        try {
            const academiaResponse = await axiosInstance.get(`/Academia`);
            const allAcademia = academiaResponse.data;

            // Filter academia based on the condition that bCount > 0
            this.academia = allAcademia.filter(academi => academi.bCount > 0);

            const branchesResponse = await axiosInstance.get(`/Branches`);
            this.branches = branchesResponse.data;

            console.log(this.academia);
            console.log(this.branches);
        } catch (error) {
            console.log(error);
        } finally {
            this.isLoading = false;
        }
    },

    // mounted() {
    //     this.$gtm.trackView('MyScreenName3', this.$route.path);
    // },
    methods: {
        getSecondArrayLength(id) {
            const filteredItems = this.branches.filter(item => item.academyId === id);
            return filteredItems.length;
        }
    }
}
</script>


<style scoped>
  .cb{
  height: 65px !important;
}

.jk {
    padding-top: 70px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

@media only screen and (max-width: 768px) and (min-width: 300px) {

    .parent_blocks {
        justify-content: center !important;

    }

    .box{
        height: 98px !important;
    width: 359px !important;
    padding: 15px  !important;
 
    }

    #available_text {
        font-size: 18px !important;
    }

    .jk {
        padding-top: 65px !important;
    }

}

@media only screen and (max-width: 1024px) and (min-width: 650px) {

    #available_text {
        font-size: 20px;
    }
}

.box {
  height: 85px;
    width: 360px;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 10px;
    padding: 12px;

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
    font-size: 14px;
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
    color:black;
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

.parent_blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

#available_text {
    font-size: 20px;
}

.brm{
  padding-left: 110px;
}

@media only screen and (max-width: 768px) and (min-width: 100px) {
  .brm{
    padding-left: 20px;
  }
}
@media screen and (min-width: 100px) and (max-width: 280px) {
   .box{
    height: 78px !important;
    width: 230px !important;
    padding: 15px !important;
    
}

.cb{
  height: 45px !important;
  position: relative;
    right: 16px;
}
.box h5{
  font: normal normal 600 12px/24px Segoe UI;
}
.box p{
  font-size: 10px;
}

}

</style>




