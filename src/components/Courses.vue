<template>
    <div class="container-fluid jk">
        <h2>Academics</h2>
        <div class="container">
            <div class="mb container">
                <div class="row pt-3">
                    <div class="box1">
                        <router-link to="/Engineering" style="text-decoration: none;">
                            <div class="box">
                                <div class="card-img-top dot">
                                    <span class="wr">05</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                            <p class="ty">Engineering</p>
                        </router-link>
                    </div>
                    <div class="box1">
                        <router-link to="/Engineering" style="text-decoration: none;">
                            <div class="box">
                                <div class="card-img-top dot">
                                    <span class="wr">05</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                            <p class="ty">Engineering</p>
                        </router-link>
                    </div>
                    <div class="box1">
                        <router-link to="/Science" style="text-decoration: none;">
                            <div class="box">
                                <div class="card-img-top dot">
                                    <span class="wr">99</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                            <p class="ty">Science(Bsc)</p>
                        </router-link>
                    </div>
                    <div class="box1">
                        <router-link to="/Diploma" style="text-decoration: none;">
                            <div class="box">
                                <div class="card-img-top dot">
                                    <span class="wr">08</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                            <p class="ty">Diploma</p>
                        </router-link>
                    </div>
                    <div class="box1">
                        <router-link to="/Masters" style="text-decoration: none;">
                            <div class="box">
                                <div class="card-img-top dot">
                                    <span class="wr">03</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                            <p class="ty">Masters</p>
                        </router-link>
                    </div>
                    <div class="box1">
                        <router-link to="/Science" style="text-decoration: none;">
                            <div class="box">
                                <div class="card-img-top dot">
                                    <span class="wr">08</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                            <p class="ty">Science(Bsc)</p>
                        </router-link>
                    </div>
                    <div class="box1">
                        <router-link to="/Masters" style="text-decoration: none;">
                            <div class="box">
                                <div class="card-img-top dot">
                                    <span class="wr">03</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                            <p class="ty">Masters</p>
                        </router-link>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoursesView'
}
</script>

<style scoped>
.jk {
    padding-top: 5%;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }
}
.btn-warning {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #eea236;
}
.btn {
    position: relative;
    left: 15%;
}
.mb h2 {
    font-family: serif;
}
/* .mb .box {
    width: 13%;
    cursor: pointer;
    height: auto; 
    border: 1px solid #ccc;
    border-radius: 25px;
    margin-bottom: 10px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg,lightblue 20%, blue, 20%, darkblue 100%);
    transition: 0.3s;
} */

.mb .box1 {
    margin-top: 3%;
    width: 30%;
    cursor: pointer;
    height: auto; 
    border: 1px solid #ccc;
    border-radius: 25px;
    margin-bottom: 10px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg,lightblue 20%, blue, 20%, darkblue 100%);
    transition: 0.3s;
}

.mb .card-title {
    text-align: center;
    font-size: 20px;
    color: white;
    font-family: cursive-serif;
}
.mb .box1:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}
.mb .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
}
.card {
    width: 28rem;
    height: 28rem;
}
@media screen and (max-width: 1000px) {
    .mb .box1 {
        width: 48%;
        margin-bottom: 55px;
    }
}
@media screen and (max-width: 620px) {
    .mb .box1 {
        width: 48%;
        margin-bottom: 55px;
    }
}
@media only screen and (max-width: 912px) {
    .card {
        width: 21rem;
        height: 28rem;
        border: none;
    }
}
.dot {
  height: 35px;
  width: 35px;
  color: white;
  background-color: orange;
  border-radius: 50%;
  display: inline-block;
}
.wr {
    position: relative;
    left: 9px;
    top: 5px;
}
.ty {
    margin-top: 10px;
    font-size: 14px;
    color: black;
    position: relative;
    /* left: 35px; */
    top: 43px;
    text-align: center;
} 
.ty1 {
    margin-top: 10px;
    font-size: 14px;
    color: white;
    position: relative;
    top: 15px;
    text-align: center;
}      
router-link {
    text-decoration: none;
}

</style>