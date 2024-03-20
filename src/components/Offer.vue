<template>
    <div id="offer_block" class="container-fluid">
        <div v-if="showShareButton">
            <ShareButton :url="currentRoute" @close="closeShareOption"  />
        </div>
        <div  class="container-fluid cont">
            <div class="container">
                <h4 class="academic_head_text">
                    <span id="aca_text">Refer</span>and learn free
                </h4>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-lg-7 design">
                        <div class="box mt-3">
                            <h2>Refer A Friend</h2>
                            <p>Get 20% OFF on all Courses</p>
                            <div class="offer_inside_block">
                                <p>Offers Ends on<br>June 30 2023</p>
                                <button class="btn btn-primary" @click="showShareOption">Refer now</button>
                            </div>
                        </div>
                    </div>

                    <div class=" container col-md-5">
                        <div class="add">
                            <img src="../assets/images/add2.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
import ShareButton from './ShareButton.vue'

export default {
    name: 'OfferView',
    components: {
        ShareButton
    },
    data() {
        return {
            showShareButton: false,
        }
    },
    methods: {
        showShareOption() {
            const referPath = this.$route.path;
            this.showShareButton = true;
            this.currentRoute = `https://dev.skillmeridiandev.tech${referPath}`;
        },
        closeShareOption() {
            this.showShareButton = false;
        },
    }
}
</script>


<style scoped>
.container-fluid {
    background: transparent url('../assets/images/Group 246.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;

}

.box {

    background-color: #FF9900;
    margin-bottom: 3%;
    background: #FF9900 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;

    padding: 15px;
    text-align: left;
    color: white;
}

.box h2 {
    font: normal normal normal 22px/30px Segoe UI;
    letter-spacing: 0px;
    opacity: 1;
}

.box p {
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 0.8;
}

.box .col-md-4 p {
    font-size: 14px;
}

.box .col-md-8 {
    text-align: right;
}


@media screen and (max-width: 512px) {
    .box {

        /* padding: 10px !important; */
        background-color: #FF9900;
        /* margin-bottom: 3%; */
        background: #FF9900 0% 0% no-repeat padding-box;
        border-radius: 6px;
        opacity: 1;
        width: 100%;
        height: auto;
        text-align: left;
        color: white;

    }
    .design{
        position: relative;
    width: 100%;
    padding-right: 30px !important;
    padding-left: 30px !important;
    }

    .box p {
        font: normal normal normal 16px/21px Segoe UI;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 0.8;
        font-size: 15px;
    }

    .academic_head_text {
        font-size: 16px !important;
    }

    .offer_block {
        padding: 20px 20px 20px 20px !important;
    }

    .box h2 {
        font-size: 18px;
    }

    .container-fluid {
        background: none !important;

    }
}

.add img {
    position: relative;


}

@media screen and (max-width: 912px) {
    .add {
        text-align: center !important;
    }
}

@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text {
        font-size: 20px;
    }

    .offer_block {
        padding: 20px 0px 20px 20px !important;
    }
}

h2 {
    font-size: 17px;
}

.academic_head_text {
    color: #006acd;
    font-size: 20px;
    padding-left: 15px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

#offer_block {

    padding: 20px 0px 20px 15px;

}

.add {

    text-align: right;
}

.offer_inside_block {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (max-width: 600px) {
    #offer_block {
        padding: 20px 0px 33px 15px;
    }

}

@media (max-width: 1024px) {
    #offer_block {
        padding: 20px 0px 40px 0px;
    }


}

@media screen and (max-width: 280px) {
    .add img {
        position: relative;
        right: 9px;

    }
}

@media (max-width:520px) {
    .add {
        padding-bottom: 70px !important;
        display: none;
    }

    #offer_block {
        border: 1px solid #00000029;
        border-radius: 4%;
        /* margin-top: -43px !IMPORTANT; */
        margin-bottom: 85px;
        background: #EEEAE4 !important;
        background: radial-gradient(at left top, #EEEAE4 30%, #D3E4F6 80%) !important;
        /* position: relative;
        top: 42px; */

    }

   #offer_block {
        padding: 0px !important;
    }

    .box {
        z-index: 999;
    }

    .academic_head_text {
        margin-top: 20px !important;
    }
}
.container{
    padding : 0px;
}
</style>