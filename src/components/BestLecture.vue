<template>
    <div class="category-test mt-4 ">
        <h4 class="academic_head_text">

<span id="aca_text">Best</span>Lecturers
<router-link to="#">See all</router-link>
</h4>
    </div>   
    <div class="container-fluid">
        <div class="row pt-5">
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
                        <div class="card-text">Data Management Systems & Visualization software development..</div>
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
                        <div class="card-text">Data Management Systems & Visualization software development..</div>
                        <div class="mn">
                            <p>(23 Reviews)</p>
                            <el-rate v-model="value2" :colors="colors" ></el-rate>
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
                        <div class="card-text">Data Management Systems & Visualization software development..</div>
                        <div class="mn">
                            <p>(23 Reviews)</p>
                            <el-rate v-model="value2" :colors="colors" ></el-rate>
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
                        <div class="card-text">Data Management Systems & Visualization software development..</div>
                        <div class="mn">
                            <p>(23 Reviews)</p>
                            <el-rate v-model="value2" :colors="colors" ></el-rate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BestLecture'
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
    font-size: 12px;
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
    margin-bottom: 12%;
}

.academic_head_text {
    color: #006acd;
    padding-left:20px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

@media (max-width: 600px) {
    .academic_head_text{
        font-size: 18px;
        padding-left:0 !important;

    }
    
}
@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text{
        font-size: 20px ;
    }
    .card{
        margin-bottom:50px;
    }
   
}
</style>

