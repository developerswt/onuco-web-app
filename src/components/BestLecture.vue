<template>
    <div class="category-test pt-3">
        <div class="container">
            <h4 class="academic_head_text">

<span id="aca_text">Best</span>Lecturers
<router-link to="#">See all</router-link>
</h4>
        </div>
    
    </div>

        <div class="container-fluid">
            <div class="row pt-5">
                <div class="col-md-6 col-lg-3" v-for="facult in faculty" :key="facult.id">
                    <router-link v-bind:to="{ name: 'Instructor', params: { name: facult.facultyDyanamicRouting } }" style="cursor: pointer; text-decoration: none;">
                    <div class="card">
                        <div class="user-follower">
                            <img src="../assets/images/user.png" class="user-icon">
                        </div>
                        <div class="user-following">
                            <p class="text-right"><small>13 Following</small></p>
                            <p class="text-right"><small>1200 Followers</small></p>
                        </div>
                        <div class="card-body" style="margin-top: -7%;">
                            <div class="card-title">{{ facult.name }}</div>
                            <div class="card-text">{{ facult.description.slice(0,45) }} ....</div>
                            <div class="mn">
                                <p>(23 Reviews)</p>
                                <el-rate v-model="value2" :colors="colors" />
                            </div>
                        </div>
                    </div>
                    </router-link>
                </div>
                <!-- <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <div class="user-follower">
                            <img src="../assets/images/user.png" class="user-icon">
                        </div>
                        <div class="user-following">
                            <p class="text-right"><small>13 Following</small></p>
                            <p class="text-right"><small>1200 Followers</small></p>
                        </div>
                        <div class="card-body" style="margin-top: -7%;">
                            <div class="card-title">Dr. Adhyan San</div>
                            <div class="card-text"><router-link to="/Instructor" style="cursor: pointer; color: black; text-decoration: none;">Lorem ipsum ....</router-link></div>
                            <div class="mn">
                                <p>(23 Reviews)</p>
                                <el-rate v-model="value2" :colors="colors" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <div class="user-follower">
                            <img src="../assets/images/user.png" class="user-icon">
                        </div>
                        <div class="user-following">
                            <p class="text-right"><small>13 Following</small></p>
                            <p class="text-right"><small>1200 Followers</small></p>
                        </div>
                        <div class="card-body" style="margin-top: -7%;">
                            <div class="card-title">Dr. Adhyan San</div>
                            <div class="card-text"><router-link to="/Instructor" style="cursor: pointer; color: black; text-decoration: none;">Lorem ipsum ....</router-link></div>
                            <div class="mn">
                                <p>(23 Reviews)</p>
                                <el-rate v-model="value2" :colors="colors" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card">
                        <div class="user-follower">
                            <img src="../assets/images/user.png" class="user-icon">
                        </div>
                        <div class="user-following">
                            <p class="text-right"><small>13 Following</small></p>
                            <p class="text-right"><small>1200 Followers</small></p>
                        </div>
                        <div class="card-body" style="margin-top: -7%;">
                            <div class="card-title">Dr. Adhyan San</div>
                            <div class="card-text"><router-link to="/Instructor" style="cursor: pointer; color: black; text-decoration: none;">Lorem ipsum ....</router-link></div>
                            <div class="mn">
                                <p>(23 Reviews)</p>
                                <el-rate v-model="value2" :colors="colors" />
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
 
</template>

<script>
import axios from 'axios'

export default {
    name: 'BestLecture',
    data() {
        return {
            faculty: []
        }
    },
    async created() {   
        try {
            const res = await axios.get(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Faculty/`);
            this.faculty = res.data;
            console.log(this.faculty);
        } catch (error) {
            console.log(error);
        }
    }
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
    position: relative;
    top: -35px;
}
.follower {
    position: relative;
    top: -110px;
    line-height: 90%;
}
.follower span {
    font-size: 14px;
} */
.user-follower img {
    width: 100%;
    height: 100%;
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
}

.card-title {
    color: black;

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
    float: left;
    font-size: 14px;
}

.mn .el-rate {
    float: right;
    margin-top: -3%;
}

.col-md-3 {
    margin-bottom: 3%;
}

.card {
    margin-bottom: 20%;
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
    overflow-y: scroll;
    height:75px;
    color: black;
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
</style>

