<template>
    <div id="academy_container" class="container">
        <div class="category-test pt-4">
            <Breadcrumbs class="pt-5 pl-3" />
            <div class="container" style="margin-top: 10px;">
                <h4 class="academic_head_text">
                    <span id="aca_text">Available</span>Academics
                </h4>
            </div>
        </div>
        <div class="mb">
            <div class="parent_blocks">
                <div v-for="item in academia" :key="item.id">
                    <div class="box1">
                        <router-link :to="{ name: 'Branches', params: { name: item.academia.academiaName } }"
                            style="color: white;text-decoration: none;">
                            <div class="box">
                                <img src="../assets/images/book.png" class="icon">
                                <div class="top">
                                    <span class="wr">0{{ item.bCount }}</span>
                                </div>
                                <div class="card-body">
                                    <div class="card-title">
                                        <p class="ty1">COURSES</p>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                        <p class="ty">{{ item.academia.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    </div>
</template>
<script>
import axiosInstance from '../config/axiosInstance'
import Breadcrumbs from './Breadcrumbs.vue'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default {
    name: 'AcademiNewView',
    components: {
        Breadcrumbs,
        Loading
    },
    data() {
        return {
            academia: [],
            isLoading: false,
        }
    },
    async created() {
        this.isLoading = true;
        try {
            const res = await axiosInstance.get(`/Academia`);
            this.academia = res.data;
            console.log(this.academia);
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
.category-test a {
    text-decoration: none;
}
.category-test h4 a {
    float: right;
    color: #0d4b7e;
    font-size: 17px;
    font-family: 'Noto Sans', sans-serif;
    padding-right: 20px;
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
.mb .box1 {
    width: 118px;
    cursor: pointer;
    height: 108px;
    border: 1px solid #ccc;
    border-radius: 25px;
    border-top-left-radius: 160px 130px;
    margin: 11px;
    background: #F6F6F6;
    background: #F6F6F6;
    background: radial-gradient(ellipse farthest-corner at top right, #F6F6F6 5%, #0077FF 67%);
    margin-bottom: 35%;
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
        margin-bottom: 55px;
    }
}
@media screen and (max-width: 510px) {
    .mb .box1 {
        width: 90%;
        margin: 30px 0px 30px 0px;
    }
    .ty1 {
        margin-top: 0px;
        font-size: 12px;
    }
    .academic_head_text {
        font-size: 15px !important;
        padding-left: 39px !important;
        position: relative;
        left: -48px;
    }
    .category-test h4 a {
        padding-right: 0;
        font-size: 15px !important;
    }
    .ty {
        margin-top: -88px;
    }
}
@media only screen and (max-width: 912px) {
    .card {
        width: 21rem;
        height: 28rem;
        border: none;
    }
}
@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text {
        font-size: 20px;
    }
}
@media (min-width: 600px) and (max-width: 768px) {
    .academic_head_text {
        font-size: 18px !important;
        padding-left: 39px !important;
    }
    #home_container {
        margin-top: 0;
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
    text-align: left;
    font: normal normal normal 41px/54px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
.ty {
    margin-top: -108px;
    font-size: 12px;
    color: black;
    text-align: center;
}
.ty1 {
    margin-top: 0px;
    font-size: 14px;
    color: white;
    position: relative;
    top: -86px;
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
        top: -87px;
    }
}
@media screen and (min-width: 450px) and (max-width: 650px) {
    .wr {
        position: relative;
        left: 30px;
        top: -87px;
    }
}
.academic_head_text {
    color: #006acd;
    padding-left: 0px;
    font-size: 20px;
}
#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}
.parent_blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 0px 30px 0px;
}
.num {
    color: white;
    font-size: 35px;
    text-align: center;
    position: relative;
    bottom: 84px;
    margin-right: 20px;
}
</style>