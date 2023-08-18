<template>
    <div class="container jk">

        <div class="error_parent_block">
            <div class="row">
                <div class="col-lg-12">
                    <h2 id="top_text"> 404 </h2>
                </div>
                <div class="col-lg-12">
                    <h2 id="below_text">Page Not Found</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="error_image_block">
                        <img src="../assets/images/error1.png" class="img-fluid">
                        <div class="button_block">
                            <router-link to="/"><button class="btn btn-primary">Back to Homepage</button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script scoped>

</script>

<style scoped>
#below_text {

    font-size: 30px;
    text-align: center;
    color: #0177FB;


}

#top_text {
    color: #0177FB;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
}

.error_parent_block {
    margin-top: 150px;
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