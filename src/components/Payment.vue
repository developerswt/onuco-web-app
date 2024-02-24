<template>
    <div class="ll">
        <div class="container cont">
            <div class="kk">
                <p class="clr" style="color: #0066CC;"><b>Course</b> Payment</p>
                <div class="card" style="margin-top: 20px;">
                    <div class="card-body" style="font-size: 12px;">
                        <label style="color: #AEAEAE;">Your Active Mobile/Email ID <lable style="color: #FF0000;">*</lable>
                        </label><br>
                        <input
style="width: 100%; height: 30px; color: #AEAEAE;  border:1px solid #FF0000" type="text"
                            placeholder="9089098765" />
                        <p style="color:#FF0000">Invalid mobile number / email id</p>
                        <div class="row" style=" border-top: 1px solid #E9EDF5;">
                            <div class="col-md-9">
                                <p style="color: #AEAEAE;">UPI/BHIM</p>
                            </div>
                            <div class="col-md-3">
                                <p style="color: #AEAEAE;">Change</p>
                            </div>
                        </div>
                        <p style="color: #AEAEAE;">Select your UPI app</p>
                        <div class="">
                            <input
style="width: 100%;  height: 30px; border:1px solid #E9EDF5;" type="text"
                                placeholder="" />
                        </div>
                        <div class="row">
                            <div class="col-md-7">
                                <p style="color: #AEAEAE;">Enter your UPI ID</p>
                            </div>
                            <div class="col-md-5">
                                <p style="color: #AEAEAE;">How to find UPI ID ?</p>
                            </div>
                        </div>
                        <input
style="width: 85%; height: 30px; color: #AEAEAE;  border:1px solid #E9EDF5;" type="text"
                            placeholder=" abc" />
                        <input
style="width: 15%; height: 30px; color: #AEAEAE;  border:1px solid #E9EDF5;" type="text"
                            placeholder=" @upi" />
                        <button class="btn mt-3" style="width: 100%;">Verify & Pay</button>
                        <p style="color: #AEAEAE;">How to pay using UPI ?</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid"></div>
    </div>
</template>
<script>
export default {
    name: 'PaymentView',
}
</script>
<style scoped>
.card {
    width: 400px;
    height: 400px;
}

.ll {
    padding-top: 8%;
}

@media (min-width: 768px) and (max-width: 1024px) {}

@media (min-width: 100px) and (max-width: 700px) {
    .card[data-v-b75befe0] {
        width: auto !important;
        margin-top: 20%;
    }

    .cont {
        margin-top: 65px;
    }
}

.container-fluid {
    width: 100%;
    height: 120px;
    background-image: url('../assets/images/Group 246.png');
}

.btn {
    color: white;
    background-color: #0177FB;
}
</style>
