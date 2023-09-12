<template>
    <div class="container-fluid jk">
        <div class="container">
            <div class="learning_block">

                <div class="row">
                    <div class="col-lg-12">
                        <div>
                            <div class="purple_block">

                                <div class="row">
                                    <div class="col-lg-6">
                                        <p>Math 1(NEP Series)</p>
                                        <p>123 Hrs Video Course</p>
                                        <p>2 Quiz and 3 Question Banks</p>
                                    </div>
                                    <div class="col-lg-6 text-right">
                                        <p>5 Modules <span>32 Topics</span></p>

                                        <button id="course_button">Start Course <i class="fa-solid fa-play"
                                                style="color: #ffffff;"></i></button>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>

                <section id="tab_section">
                    <div class="pt-4 topic-card">
                        <el-tabs class="demo-tabs" v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="MY COURSES " name="first" class="rt">



                                <div class="">
                                    <div class="" data-toggle="collapse" :href="'#collapse-example' + index"
                                        aria-expanded="true" aria-controls="collapse-example" id="heading-example">

                                    </div>

                                    <div aria-labelledby="heading-collapsed">
                                        <div class="">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <h4 class="academic_head_text">

                                                        <span id="aca_text">interested</span> Courses

                                                    </h4>
                                                </div>
                                                <div class="col-lg-6 text-right">
                                                    <router-link to="#">See all</router-link>
                                                </div>
                                            </div>


                                            <div class="inner_block">
                                                <div class="row">
                                                    <div class="col-lg-1">
                                                        <div id="asset_image">
                                                            <img src="../assets/images/book1.png" class="img-fluid">
                                                        </div>

                                                    </div>
                                                    <div class="col-lg-8">
                                                        <p class="mb-0 mt-3">Computer Science</p>
                                                        <p>stacks</p>
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <div class="progress_block">
                                                                    <div class="progress">
                                                                        <div class="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <p>22h 33m left</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                
                                            <div class="inner_block">
                                                <div class="row">
                                                    <div class="col-lg-1">
                                                        <div id="asset_image">
                                                            <img src="../assets/images/book1.png" class="img-fluid">
                                                        </div>

                                                    </div>
                                                    <div class="col-lg-8">
                                                        <p class="mb-0 mt-3">Computer Science</p>
                                                        <p>stacks</p>
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <div class="progress_block">
                                                                    <div class="progress">
                                                                        <div class="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <p>22h 33m left</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                
                                            <div class="inner_block">
                                                <div class="row">
                                                    <div class="col-lg-1">
                                                        <div id="asset_image">
                                                            <img src="../assets/images/book1.png" class="img-fluid">
                                                        </div>

                                                    </div>
                                                    <div class="col-lg-8">
                                                        <p class="mb-0 mt-3">Computer Science</p>
                                                        <p>stacks</p>
                                                        <div class="row">
                                                            <div class="col-lg-4">
                                                                <div class="progress_block">
                                                                    <div class="progress">
                                                                        <div class="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <p>22h 33m left</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </el-tab-pane>
                            <el-tab-pane label="LIVE" name="second">
                                <div class="rt"></div>
                            </el-tab-pane>
                            <el-tab-pane label="COMPLETED" name="third">
                                <div class="rt"></div>
                            </el-tab-pane>

                        </el-tabs>
                    </div>
                </section>
            </div>
        </div>




    </div>
</template>

<script>
export default {
    name: 'Mylearnings',
    data() {
        return {
            activeName: 'first',
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
    }
}
</script>

<style scoped>
.learning_block {
    padding-top: 100px;
}

.purple_block {
    background: #ff00cc;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #333399, #ff00cc);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #333399, #ff00cc);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 15px;
    color: white;
    border-radius: 10px;

}

/* #group_image {
    background: transparent url('../assets/images/Group 246.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;
    padding-bottom: 20px;
} */

.academic_head_text {
    color: #006acd;
    /* padding-left: 20px; */
    font-size: 16px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
}

.inner_block {

    box-shadow: 0px 0px 6px #000000CC;
    border-radius: 47px 10px 10px 10px;
    padding: 15px;
    margin: 10px;


}


#course_button {
    width: 139px;
    height: 32px;
    background: #00C0E8 0% 0% no-repeat padding-box;
    border: 1px solid #3AC2FD;
    border-radius: 16px;
    opacity: 1;
    font-size: 12px;
    text-transform: uppercase;
    /* bottom: 0; */
    position: absolute;
    bottom: 0;
    right: 12px;
}

#course_button i {
    padding-left: 10px;

}

#tab_section {
    margin-top: 40px;
}

#tab-first {
    background: transparent linear-gradient(180deg, #EEF4FB 0%, #AED4FF 100%) 0% 0% no-repeat padding-box !important;
}

.progress {
    height: 5px;
    margin-top: 7px;
    background: #FF9900;
}

#asset_image {
    padding: 20px 10px 10px 10px;
}</style>