<template>
    <div class="container-fluid jk">

        <div class="error_parent_block">
            <div class="row">
                <div class="col-lg-12">
                    <h2 id="top_text"> Get Support </h2>
                </div>
                <div class="col-lg-12">
                    <h2 id="below_text">For any support request regards you subscription or <br />queries please feel to
                        speak with us at below. </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div id="group_image" class="container-fluid">
                        <div class="error_image_block">
                            <img src="../assets/images/Contactus.png" class="img-fluid">
                            <div class="button_block">
                                <!-- <p class="mb-0">Call Us - +91 9845xxxxxx</p>
                                <p>Mail Us - somename@Onuco.com</p> -->

                                <div class="card contact-box mb-4" style="width:100%;">
                    <div class="row swap">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="card contact-info" style="border-right:2px soild black;" >
                                <h4 class="contact mt-4 ml-4" style="color:#0177FB;"><b>Contact Information</b></h4><br><br>

                            <div class="contact-information">
                                <div class="row">
                                    <div class="col-6">
                                    <p  class="contact ml-4" style="Color:#0177FB;">Call Us
                                        <!-- <img src="../assets/bxs_phone-call.png" alt="phone"> -->
                                    </p>
                                    </div>
                                    <div class="col-6">
                                        <a href="tel:+919998887776" style="text-decoration: none;">
                                        <p class="contact1" style="text-align: left;">+91 9998887776</p>
                                    </a>
                                    </div>
                                </div>
                            
                                <div class="row">
                                    <div class="col-6">
                                    <p class="contact ml-4" style="color:#0177FB;">Mail Us
                                        <!-- <img src="../assets/ic_sharp-email.png" alt="phone"> -->
                                    </p>
                                    </div>
                                    <div class="col-6">
                                        <a href="mailto:example@onuco.com" class="contact " style="text-decoration: none;">
                                        <p class="contact1" style="text-align:left">example@onuco.com</p>
                                        </a>
                                    </div>
                                </div>
                            <br>
                     
                    </div>
                  
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 ">
                <div class="card get-in-touch p-3 mb-4" style="border:none;" >
                    <h4 style="color:#0177FB;"><b>Get In Touch</b></h4>
                    <!-- <p style="color:#7855A5">We're always excited to explore new opportunities and challenges. Whether you're a startup or an established enterprise, we'd love to hear from you. Contact us to discuss how we can help you achieve your digital goals.</p> -->
                    <form @submit.prevent="sendMsz" style="margin-top: 60px;">
                        <input type="text" v-model="name"  class="input mb-2" placeholder="Name"  required>
                        <!-- <p v-if="nameError" class="error">{{ nameError }}</p> -->

                        <input type="text" v-model="email" class="input mb-2" placeholder="Email" required>
                        <!-- <p v-if="emailError" class="error">{{ emailError }}</p> -->

                        <input type="tel" v-model="number" class="input mb-2" placeholder="Phone number">
                        <!-- <p v-if="phoneError" class="error">{{ phoneError }}</p> -->

                        <input type="text" v-model="how_found" class="input mb-2" placeholder="How did you find us?">
                        <div class="submit" >
                        <button class="btn btn-outline-info mb-4" type="submit">Send Message</button>
                        </div>                       
                        <p v-if="isSentMsz" style="color:green;margin:auto;">Message sent successfully</p>
                    </form>
                  </div>
                </div>
            </div>
         </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <!-- <div class="container-fluid cf"></div> -->
</template>

<script>
// import Breadcrumbs from './Breadcrumbs.vue';

export default {
    name: 'GetSupport',

}
</script>

<style scoped>
#below_text {

    font-size: 22px;
    text-align: center;
    color: #0177FB;


}

.img-fluid {
    height: 200px;
}

#top_text {
    color: #0177FB;
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
}

.error_parent_block {
    padding-top: 100px;
}

@media screen and (max-width: 1024px) {
    .error_parent_block {
        padding-top: 90px;
    }
}

#group_image {
    background: transparent url('../assets/images/Group 246.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;
    padding-bottom: 20px;
}

.error_image_block {
    text-align: center;
    margin: 70px;
}

.button_block {
    margin: 40px;
}

.button_block .btn {

    padding: 10px;
}

@media (min-width: 320px) and (max-width: 575.98px) {

    #top_text,
    #below_text {
        font-size: 20px;
    }

    .button_block {
        margin: 0;
        margin-top: 35px;
        padding: 0;
        margin-bottom: 30px;
    }

    .button_block .btn {
        width: 100%;
    }

    .error_image_block {
        margin: 20px;
    }
}


@media (min-width: 576px) and (max-width: 767.98px) {

    #top_text,
    #below_text {
        font-size: 20px;
    }

    .button_block {
        margin: 0;
        margin-top: 35px;
        padding: 0;
        margin-bottom: 30px;
    }

    .button_block .btn {
        width: 50%;
    }

    .error_image_block {
        margin: 20px;
    }
}

@media (min-width: 768px) and (max-width: 992px) {

    #top_text,
    #below_text {
        font-size: 25px;
    }

    .button_block {
        margin: 0;
        margin-top: 35px;
        padding: 0;
        margin-bottom: 30px;
    }

    .button_block .btn {
        width: 50%;
    }

    .error_image_block {
        margin: 20px;
    }
}

.cf {
    width: 100%;
    height: 520px;
    background-image: url('../assets/images/Group 246.png');
}



.contact-box {
   /* margin:30px; */
    padding: 0px;
    box-shadow: 0px 4px 27px 0px #71717140;
}
 h5, h2 {
    color:#000000;
 }

 .contact-info  {
/* padding-top:50px; */
height: 400px;
border-radius: 3px;
/* background: linear-gradient(to right, #61408D, #B64797); */
width:100%;
height: 500px;
 }
 .contact-information {
    padding:0;
    margin:0;
 

 }
.contact {
    color:rgb(0, 0, 0);
}
.contact1 {

    color:rgb(0, 0, 0);
}

 .get-in-touch {
    margin:0px;
    /* padding:20px; */
 }
.input {
    
    display: flex;
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    align-items: center;
    gap: 10px;
    /* margin-bottom: 2%; */

}

.submit {
    display:flex;
    justify-content: center;
}

.btn {
    padding:12px 30px;
    border-radius:10px;
    background-color:white;
    border-color:#000000;
    color:#000000
    
}
.btn:hover {
   
    /* background: linear-gradient(to right, #61408D, #B64797); */
    background-color:#0177FB;
    color:white;

}
@media screen and (max-width: 600px) {
  .swap {
    padding: 0rem;
    margin: 0rem;
    display: flex;
    flex-direction: column-reverse;

   }
}
@media screen and (max-width: 600px) {
   
    .contact {
        width:100%;
        margin-left:50px;
    }
    .contact1 {
        margin-left:50px;
    }
}
</style>