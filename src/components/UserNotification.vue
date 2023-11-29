<template>
    <div class="container-fluid header_padding">
        <p>Home>Profile>Notification</p>
        <h2 class="pp"><b>Maths 1</b> (NEP Series)</h2>
        <h4>Dr. Ashoka P R</h4>
        <div class="row">
            <div class="col-sm-8">
                <p>Course Description Course Description Course...</p>
                <p style="color: #8A8A8A;"><img src="../assets/images/Iconionic-ios-timer@2x.png" class="icon">&nbsp; 03h 32min &nbsp;&nbsp;<img src="../assets/images/Iconmap-school@2x.png" class="icon">&nbsp; 8 Modules</p>
            </div>
            <div class="col-sm-4">
                <div class="review_details">
                    <p style="color: #AEAEAE;">2 min ago<br>
                    <el-rate v-model="value2" :colors="colors" />(23 reviews)</p>
                </div>
            </div>
        </div>
        <hr>
        <h3><b>Course</b> Details</h3>
        <p>Course is expiring in 2 days Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p>Course is expiring in 2 days Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <hr>
        <div class="row mb-5">
            <div class="col-sm-12">
                <div class="card">
                    <div class="summary_details">
                        <div class="cancel_details">
                            <p>Renew Discount (75%) </p>
                            <button class="button button1">CANCEL</button>
                        </div>
                        <div class="renew_details">
                            <p><span><del>₹1,999</del></span><b> ₹499</b></p>
                            <button class="btn">RENEW</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>    
    <div class="container-fluid background_img"></div>    
</template>

<script>

export default {
    name: 'UserNotification'
}
</script>

<style scoped>
.header_padding {
    padding-top: 7%;
    padding-left: 10%;
    padding-right: 10%;
}
h2 {
    font-size: 22px;
    color: #0066CC;
}
h4 {
    font-size: 16px;
    color: #707070;
}
p {
    font-size: 16px;
    color: #707070;
}
.icon {
    width: 17px;
    height: 17px;
}
.review_details {
    text-align: right;
}
h3 {
    font-size: 21px;
    color: #0066CC;
}
.button {
  color: #707070;
  padding: 6px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 18px 0px;
  margin-top: 2px;
  cursor: pointer;
}

.button1 {
    border: 1px solid var(--unnamed-color-0177fb);
    border: 1px solid #949494;
    border-radius: 4px;
    opacity: 1;
}
.cancel_details p {
    font-size: 16px;
    color: #777777;
}
.actual_amount p{
    font-size: 18px;
    color: #777777;
}
.dicounted_amount h6{
    font-size: 27px;
    color: #101010;
    padding-top: -10px;
}
.btn {
    background-color: #0177FB;
    color: white;
    padding: 6px 43px;
    font-size: 14px;
    margin-top: 3px;
}
.summary_details {
    float: right;
    padding-left: 20%;
}
.summary_details .dicounted_amount {
    padding-left: 20%;
}
.container-fluid .background_img{
    width: 100%;
    height: 292px;
    background-image: url('../assets/images/Group 246.png');

}
/* .renew_text {
    margin-left: 0%;
} */
.summary_details .cancel_details {
    float: left;
    width: 22%;
    margin-left: 60%;
}
.summary_details .review_details {
    float: right;
    padding-left: 40%;
}
.card {
    border: none;
    background-color: #EFF5FC;
}
@media screen and (min-width: 1000px) and (max-width: 1024px) {
    .summary_details .cancel_details {
        float: left;
        width: 29%;
        margin-left: 47%;
    }
    .summary_details .review_details {
        float: right;
        padding-left: 40%;
    }
}
@media screen and (min-width: 400px) and (max-width: 500px) {
    .summary_details .cancel_details {
        float: left;
        width: 70%;
        margin-left: -22%;
    }
    .summary_details .review_details {
        float: right;
        padding-left: 65%;
    }
}
@media screen and (min-width: 300px) and (max-width: 399px) {
    .summary_details .cancel_details {
        float: left;
        width: 70%;
        margin-left: -29%;
    }
    .summary_details .review_details {
        float: right;
        padding-left: 40%;
    }
}
@media screen and (min-width: 100px) and (max-width: 299px) {
    .summary_details .cancel_details {
        margin-left: -27%;
        width: 130%;
    }
    .summary_details .review_details {
        
        padding-left: 0%;
    }
}
@media screen and (min-width: 510px) and (max-width: 590px) {
    .summary_details .cancel_details {
        float: left;
        width: 70%;
        margin-left: -25%;
    }
    .summary_details .review_details {
        float: right;
        padding-left: 40%;
    }
}
@media screen and (min-width: 760px) and (max-width: 830px) {
    .summary_details .cancel_details {
        float: left;
        width: 70%;
        padding-left: 30%;
        margin-left: -3%;
    }
    .summary_details .review_details {
        float: right;
        padding-left: 10%;
    }
}
@media screen and (min-width: 900px) and (max-width: 912px) {
    .summary_details .cancel_details {
        float: left;
        width: 70%;
        padding-left: 30%;
        margin-left: 4%;
    }
    .summary_details .review_details {
        float: right;
        padding-left: 10%;
    }
}
@media screen and(min-width:300)and (max-width:520px){
    .card{
        padding-bottom: 80px !important;
    }
    .renew_details{
        position: relative;
    left: 20px;
    }
    .pp .h2{
    padding-top: 35px !important;
  
}
}

@media (max-width:520px) {
    .pp{
    padding-top: 35px !important;
}
.card{
        padding-bottom: 70px !important;
    }
}

@media (max-width:280px) {
    .renew_details{
        position: relative;
    right: 50px !important;
    }
    .card{
        padding-bottom: 70px !important;
    }
}
</style>