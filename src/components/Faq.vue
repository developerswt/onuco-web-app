<template>
    <div class="container-fluid jk">
        <div class="container">
            <img src="../assets/images/FAQs-amico.png" class="img-fluid">


        </div>
        <div class="accordion_block">

            <div class="">
                <div class="card">
                    <h5 class="card-header">
                        <div data-toggle="collapse" href="#collapse-example2" aria-expanded="true"
                            aria-controls="collapse-example" id="heading-example" class="d-block kj">

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
                <div class="card">
                    <h5 class="card-header">
                        <div data-toggle="collapse" href="#collapse-example" aria-expanded="false"
                            aria-controls="collapse-example" id="heading-example" class="d-block kj">

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
</template>

<script>
export default {
    name: 'Faq',

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
}

.action {
    float: right;
}
</style>