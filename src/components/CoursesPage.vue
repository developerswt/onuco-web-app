<template>
    <div class="container-fluid jk">
        <div class="container pt-4" v-for="academi in academia" :key="academi.id">
            <h2 id="available_text" v-if="getSecondArrayLength(academi.id) != 0"><b>Available</b> {{ academi.name }} Courses ({{ getSecondArrayLength(academi.id) }})</h2>
            
        <div class="parent_blocks">
            {{ this.branches.name }}
            <div class="row pt-4">
                <div class="" v-for="branch in branches" :key="branch.id">
                <div class="box" v-if="academi.id == branch.academyId">
                    <router-link v-bind:to="{ name:'Universities', params:{name: branch.branchName}}" style="color: white;">
                        <div class="row">
                            <div class="col-md-3 col-3 col-sm-3">
                                <img src="../assets/images/book1.png">
                            </div>
                            <div class="col-md-9 col-9 col-sm-9 pt-2">
                                <h5>{{ branch.name }}</h5>
                                <p>{{ branch.description }}</p>
                            </div>
                        </div>
                    </router-link>    
                </div>
                </div>
            </div>
        </div>
        </div>
     
    </div>            
    <Offer />
    
</template>

<script>
import Offer from './Offer.vue'
import axios from 'axios'

export default {
    name: 'CoursesPage',
    components: {
        Offer
    },
    data() {
        return {
            academia: [],
            branches: [],
            isuser: localStorage.getItem("username") 
        }
    },
    computer: {
        authorizationHeader() {
            if (this.isLoggedIn) {
                return `Bearer ${this.isuser}`;
            } else {
                return 'DummyValue'; // Set your dummy value here
            }
        },
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
    },
    async created() {
        const headers = { 'Authorization':  this.authorizationHeader };
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Academia`, { headers } );
            this.academia = res.data;
            console.log(this.academia);
            const result = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Branches`, { headers } );
            this.branches = result.data;
            console.log(this.branches);
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        getSecondArrayLength(id) {
            const filteredItems = this.branches.filter(item => item.academyId === id);
            return filteredItems.length;
        }
    }
}
</script>

<style scoped>
.jk {
    padding-top:100px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 768px) and (min-width: 100px) {

    .parent_blocks{
        justify-content: center !important;

    }
    .box{
        width:250px !important;
    }
    #available_text{
        font-size: 18px;
    }
    
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
  
    #available_text{
        font-size: 20px;
    }
}

.box {
    
    height:115px;
    width:360px;
    cursor: pointer;
    margin-bottom: 1%;
    margin: 10px;
    padding:20px;
    
    background: url('../assets/images/Path 4814@2x.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    
}
.parent_block {
    max-width: 1300px;
    margin: 0 auto;
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
</style>




