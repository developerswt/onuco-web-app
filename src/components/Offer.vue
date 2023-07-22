<template>
    <div class="container-fluid jk">
        <div class="offer_block">
            <h4 class="academic_head_text">

                <span id="aca_text">Refer</span>And Learn Free

            </h4>
            <div class="">
                <div class="row">
                    <div class="col-md-10 col-lg-7">
                        <div class="box mt-3">
                            <h2>Refer A Friend</h2>
                            <p>Get 20% OFF on all Courses</p>
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Offers Ends on<br>June 30 2023</p>
                                </div>
                                <div class="col-md-8">
                                    <button class="btn btn-primary">Refer now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
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

export default {
    name: 'OfferView',
}
</script>


<style scoped>

 .container-fluid {
    background: transparent url('../assets/images/Group 246.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;

} 

.box {
    padding: 15px 20px 0px;
    background-color: #FF9900;
    margin-bottom: 3%;
    background: #FF9900 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    /* width: 675px; */
    top: 1274px;
    left: 118px;
    height: 146px;
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

@media screen and (max-width: 600px) {
    .box {
       
        padding:10px !important;
        background-color: #FF9900;
        margin-bottom: 3%;
        background: #FF9900 0% 0% no-repeat padding-box;
        border-radius: 6px;
        opacity: 1;
        width: 100%;
        height: 146px;
        text-align: left;
        color: white;
      
    }

    .box p {
        font: normal normal normal 16px/21px Segoe UI;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 0.8;
        font-size: 15px;
    }

    .box .col-md-4 p {
        font-size: 14px;
        /* width: 35%; */
        float: left;
    }

    .box .col-md-8 {
      
        position: relative;
        top: -53px;
        
    }
    .academic_head_text{
        font-size: 18px;
        padding-left:0 !important;

    }
    .offer_block{
        padding:0 !important;
    }
    .box h2{
        font-size: 18px;
    }   
    .container-fluid{
        background: none !important;

    }
}

.add img {
    position: relative;
    bottom: 30px;
    left: 60px;
}

@media screen and (max-width: 912px) {
    .add img {
        display: none;
    }
}
@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text{
        font-size: 20px ;
    }
    .offer_block{
        padding:20px 0px 20px 20px !important;
    }
}
h2 {
    font-size: 17px;
}

.academic_head_text {
    color: #006acd;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

.offer_block {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0px 0px 150px 15px;
   
}
.add{
    margin-top:30px;
}
</style>