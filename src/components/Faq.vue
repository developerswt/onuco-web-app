<template>
    <div class="container-fluid jk">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="faq_image_block">
                        <img src="../assets/images/FAQs-amico.png" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion_block">
            <div class="">
                <div id="faq_card" class="card">
                    <h5 id="faq_card_header" class="card-header">
                        <div id="heading-example" data-toggle="collapse" href="#collapse-example2" aria-expanded="true"
                            aria-controls="collapse-example" class="d-block kj">

                            Your Agreement <span class="action"><i class="fa fa-chevron-right rotate-icon"></i></span>
                        </div>
                    </h5>
                    <div id="collapse-example2" class="collapse show" aria-labelledby="heading-example">
                        <div class="card-body">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div id="faq_card" class="card">
                    <h5 id="faq_card_header" class="card-header">
                        <div id="heading-example" data-toggle="collapse" href="#collapse-example" aria-expanded="false"
                            aria-controls="collapse-example" class="d-block kj">

                            Your Agreement <span class="action"><i class="fa fa-chevron-right rotate-icon"></i></span>
                        </div>
                    </h5>
                    <div id="collapse-example" class="collapse show" aria-labelledby="heading-example">
                        <div class="card-body">
                            <p>hello world</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid cf"></div>
</template>

<script>
export default {
    name: 'FaqView',

}
</script>

<style  scoped>
.parent_block {
    margin-top: 100px;
    text-align: center;
    padding: 50px;
}

.accordion_block {
    padding: 20px;
    margin: 0 auto;
    max-width: 1000px;
    position: relative;
    top: 128px;
}

.action {
    float: right;
}

.faq_image_block {
    text-align: center;
    margin-bottom: 50px;
    position: relative;
    top: 162px;
}

#faq_card {
    margin: 20px;
}

#faq_card_header {
    background: #EFF5FC;
}

.cf {
    width: 100%;
    height: 220px;
    background-image: url('../assets/images/Group 246.png');
}
</style>