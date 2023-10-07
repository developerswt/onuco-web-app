<template>
    <!-- <Breadcrumbs /> -->
    <div class="container-fluid jk">

<div class="error_parent_block">
    <div class="row">
        <div class="col-lg-12">
            <h2 id="top_text"> Get Support </h2>
        </div>
        <div class="col-lg-12">
            <h2 id="below_text">For any support request regards you subscription or <br/>queries please feel to speak with us at below. </h2>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div class="container-fluid" id="group_image">
                <div class="error_image_block">
                <img src="../assets/images/Contactus.png" class="img-fluid">
                <div class="button_block">
             <p class="mb-0">Call Us - +91 9845xxxxxx</p>
             <p >Mail Us - somename@unocu.com</p>
                </div>
            </div>
            </div>

          
        </div>
    </div>
</div>

</div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';
    export default {
        name: 'GetSupport',
        components: {
            Breadcrumbs
        }
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
    /* UI Properties */
    }

#top_text {
    color: #0177FB;
    font-size: 32px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
}

.error_parent_block {
    padding-top: 150px;
}
@media screen and (max-width: 1024px) {
    .error_parent_block {
        padding-top: 90px;
    }
}
#group_image {
    background: transparent url('../assets/images/Group 246.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;
    padding-bottom:20px;
}
.error_image_block{
    text-align: center;
    margin:70px;
}
.button_block{
    margin:40px;
}
.button_block .btn{
   
  padding:10px;
}

@media (min-width: 320px) and (max-width: 575.98px){
    #top_text,#below_text{
        font-size:20px;
    }
    .button_block{
        margin:0;
        margin-top: 35px;
        padding:0;
        margin-bottom:30px;
    }
    .button_block .btn{
        width:100%;
    }
    .error_image_block{
        margin:20px;
    }
}


@media (min-width: 576px) and (max-width: 767.98px){
    #top_text,#below_text{
        font-size:20px;
    }
    .button_block{
        margin:0;
        margin-top: 35px;
        padding:0;
        margin-bottom:30px;
    }
    .button_block .btn{
        width:50%;
    }
    .error_image_block{
        margin:20px;
    }
}
@media (min-width: 768px) and (max-width: 992px){
    #top_text,#below_text{
        font-size:25px;
    }
    .button_block{
        margin:0;
        margin-top: 35px;
        padding:0;
        margin-bottom:30px;
    }
    .button_block .btn{
        width:50%;
    }
    .error_image_block{
        margin:20px;
    }
}
</style>