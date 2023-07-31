<template>
    <div class="category-test pt-5 ">
        <h4>
            Available Academics
            <router-link to="/Courses">View All</router-link>
        </h4>
    </div>   
    <div class="mb container">
        <div class="row pt-4">
            <div class="box1" v-for="item in academia" :key="item.id">
                <router-link v-bind:to="{ name:'Engineering', params:{name: item.academiaName}}" style="color: white;"> 
                <div class="box">
                    <img src="../assets/images/book.png" class="icon">
                    <div class="card-img-top">
                        <span class="wr">05</span>
                    </div>
                    <div class="card-body">
                        <div class="card-title">
                            <p class="ty1">COURSES</p>
                        </div>
                    </div>
                </div>
                <p class="ty">{{ item.name }}</p>
                </router-link>
            </div>
            <!-- <div class="box1">
                <router-link to="/Engineering" style="text-decoration: none;">
                <div class="box">
                    <img src="../assets/images/book.png" class="icon">
                    <div class="card-img-top">
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
                    <img src="../assets/images/book.png" class="icon">
                    <div class="card-img-top">
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
                    <img src="../assets/images/book.png" class="icon">
                    <div class="card-img-top">
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
                    <img src="../assets/images/book.png" class="icon">
                    <div class="card-img-top">
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
                    <img src="../assets/images/book.png" class="icon">
                    <div class="card-img-top">
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
                    <img src="../assets/images/book.png" class="icon">
                    <div class="card-img-top">
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
            </div>     -->
        </div>
    </div> 
</template>

<script>
import axios from 'axios';


export default {
    name: 'AcademicsView',
    data() {
        return {
            academia: []
        }
    },
    async created() {
        try {
            const res = await axios.get(`https://localhost:7233/api/Academia/`);
            this.academia = res.data;
            console.log(this.academia);
        } catch (error) {
            console.log(error);
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
    text-transform: uppercase;
}
.kkj img {
    width: 30%;
    height: auto;
    position: relative;
    left: 36%;
    
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
    width: 13%;
    top: 479px;
    left: 118px;
    width: 123px;
    height: 118px;
    cursor: pointer;
    height: 140px; 
    border: 1px solid #ccc;
    border-radius: 25px;
    border-top-left-radius: 160px 130px;
    margin-bottom: 10px;
    /* background: rgb(2,0,36); */
    background:  transparent radial-gradient(closest-side at 77% 22%, #FFFFFF 0%, #FAFAFA 0%, #F6F6F6 0%, #0077FF 100%) 0% 0% no-repeat padding-box;
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
  height: 70px;
  width: 70px;
  color: white;
  background-color: orange;
  border-radius: 50%;
  display: inline-block;
}
.wr {
    position: relative;
    left: 28px;
    top: -87px;
    /* font-size: 24px;
    color: white; */
    text-align: left;
    font: normal normal normal 41px/54px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
.ty {
    margin-top: -70px;
    font-size: 14px;
    color: black;
    text-align: center;
}  
.ty1 {
    margin-top: 0px;
    font-size: 14px;
    color: white;
    position: relative;
    top: -59px;
    text-align: center;
}    
router-link {
    text-decoration: none;
}
.icon {
    position: relative;
    left: 18%;
    top: -22px;
} 
@media screen and (min-width: 100px) and (max-width: 450px) {
    .wr {
        position: relative;
        left: 35px;
        top: -87px; 
    }
}
@media screen and (min-width: 650px) and (max-width: 912px) {
    .wr {
        position: relative;
        left: 63px;
        top: -87px; 
    }
} 
@media screen and (min-width: 450px) and (max-width: 650px) {
    .wr {
        position: relative;
        left: 48px;
        top: -87px; 
    }
} 

</style>

