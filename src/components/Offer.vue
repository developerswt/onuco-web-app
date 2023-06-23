<template>
    <div class="container-fluid jk">
        <h4>Refer and learn free</h4>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="box">
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
</template>


<script>

export default {
    name: 'OfferView',
}
</script>


<style scoped>
.jk {
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}
.box {
    padding: 15px 20px 0px;
    background-color: #FF9900;
    margin-bottom: 3%;
    background: #FF9900 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    width: 675px;
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
        padding: 15px 20px 0px;
        background-color: #FF9900;
        margin-bottom: 3%;
        background: #FF9900 0% 0% no-repeat padding-box;
        border-radius: 6px;
        opacity: 1;
        width: 100%;
        top: 1274px;
        left: 118px;
        height: 146px;
        text-align: left;
        color: white;
    }
    .box p {
        font: normal normal normal 16px/21px Segoe UI;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 0.8;
    }
    .box .col-md-4 p {
        font-size: 14px;
        width: 35%;
        float: left;
    }
    .box .col-md-8 {
        float: right;
        width: 65%;
        position: relative;
        top: -53px;
        left: 38%;
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
h2 {
    font-size: 17px;
}
</style>