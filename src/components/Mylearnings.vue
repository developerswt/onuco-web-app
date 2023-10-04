<template>
    <div class="container-fluid jk">
        <Breadcrumbs />
        <div class="container">
            <div class="learning_block">

                <div class="row">
                    <div class="col-lg-12">
                        <div>
                            <div class="purple_block">
                                <p id="new_text">NEW</p>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="right_block">
                                            <p id="subject_text">Math 1(NEP Series)</p>
                                            <p class="mb-0">123 Hrs Video Course</p>
                                            <p>2 Quiz and 3 Question Banks</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="left_block">
                                            <p>5 Modules <span id="span_text">32 Topics</span></p>

                                            <button id="course_button">Start Course <i class="fa-solid fa-play"
                                                    style="color: #ffffff;"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <section id="tab_section">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                aria-controls="home" aria-selected="true">MY COURSES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                aria-controls="profile" aria-selected="false">LIVE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                                aria-controls="contact" aria-selected="false">COMPLETED</a>
                        </li>
                    </ul> -->
                
                           
            <div class="tab_block mt-3">
               <section id="tab_block">
                        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                            <el-tab-pane label="MY COURSES" name="first">

                           <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="">
                                <div class="row mt-3">
                                    <div class="col-lg-6 col-8 col-sm-8 col-md-6">
                                        <h4 class="academic_head_text">

                                            <span id="aca_text">interested</span> Courses

                                        </h4>
                                    </div>
                                    <div class="col-lg-6 text-right col-4 col-sm-4 col-md-6">
                                        <router-link to="#" id="see_text">See all</router-link>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="notify_block">

                                            <p> <i class="fa-solid fa-triangle-exclamation"
                                                    style="color: #ff9900;"></i>Please
                                                subscribe the subjects to
                                                get more details...</p>
                                            <button id="course_list_button">Course List</button>
                                        </div>
                                    </div>
                                </div>
                                  <div class="inner_block">
                                    <div class="row">
                                        <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                            <div id="asset_image">
                                                <img src="../assets/images/book1.png" class="img-fluid">
                                            </div>

                                        </div> 
                                        <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <p class="mb-0" id="text_one">Computer Science</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="inner_block">
                                    <div class="row">
                                        <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                            <div id="asset_image">
                                                <img src="../assets/images/book1.png" class="img-fluid">
                                            </div>

                                        </div> 
                                        <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <p class="mb-0" id="text_one">Computer Science</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="inner_block">
                                    <div class="row">
                                        <div class="col-lg-1 col-4 col-sm-4 col-md-2">
                                            <div id="asset_image">
                                                <img src="../assets/images/book1.png" class="img-fluid">
                                            </div>

                                        </div> 
                                        <div class="col-lg-8 col-8 col-sm-8 col-md-8">
                                            <p class="mb-0" id="text_one">Computer Science</p>
                                            <p id="text_two">stacks</p>
                                            <div class="row">
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <div class="progress_block">
                                                        <div class="progress">
                                                            <div class="progress-bar" role="progressbar" aria-valuenow="0"
                                                                aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                                    <p id="text_three">22h 33m left</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>

                            </div>
                        </div>
                        </el-tab-pane>
                             
                             <el-tab-pane label="LIVE" name="third">Live content</el-tab-pane>
                             <el-tab-pane label="COMPLETED" name="fourth">completed</el-tab-pane>
                        <!-- <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p>Live content</p>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <p>completed</p>
                        </div> -->
                   
                </el-tabs>
            </section>
         </div>
    </div>
</div>



    </div>
</template>

<script>
import Breadcrumbs from './Breadcrumbs.vue';

export default {
    name: 'Mylearnings',
    components: {
        Breadcrumbs
    },
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
    background: transparent url('../assets/images/Untitled.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;
    padding: 15px;
    color: white;
    border-radius: 10px;
    height: 193px;
    mix-blend-mode: normal;

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
    height: 80px;
    background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);

}


#course_button {
    width: 139px;
    height: 32px;
    background: #0066CC 0% 0% no-repeat padding-box;
    border: 1px solid #3AC2FD;
    border-radius: 16px;
    opacity: 1;
    font-size: 12px;
    text-transform: uppercase;
    /* bottom: 0; */
    position: absolute;
    bottom: -11px;
    right: 12px;
    color: White;
}

#course_button i {
    padding-left: 10px;

}

#tab_section {
    margin-top: 25px;
}

#tab-first {
    background: transparent linear-gradient(180deg, #EEF4FB 0%, #AED4FF 100%) 0% 0% no-repeat padding-box !important;
}

.progress {
    height: 5px;
    background: #FF9900;
    margin-top: 7px;
}

#asset_image img {
    width: 30px;
}


.left_block {
    text-align: right;

}

#subject_text {
    font-size: 20px;
    font-weight: 500;
}

#span_text {
    padding-left: 20px;
}

#new_text {
    position: relative;
    left: -5px;
    top: -12px;
}

.el-tabs__nav .is-top {
    background: #EEF4FB !important;
    background: linear-gradient(to top, #EEF4FB 0%, #AED4FF 84%) !important;

}

#asset_image {
    text-align: center;
}

#text_two,
#text_three {
    font-size: 12px;
    margin-bottom: 0;
}

#text_one {
    color: #0066CC;
    font-weight: bold;
}

.notify_block {
    background: #FFEAD5;
    height: 54px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    margin: 20px 0px 20px 0px;
}

.notify_block p {
    font-size: 13px;
    margin-top: 0;
    margin-bottom: 0;
    color: #3B3B3B;
}

#course_list_button {

    border: 1px solid #0177FB;
    border-radius: 10px;
    opacity: 1;
    font-size: 12px;
    float: right;
    background: transparent;
    color: #0177FB;
}

.el-tabs__item {
    font-weight: bold !important;
}

.notify_block i {
    font-size: 30px;
    padding-right: 20px;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    background: transparent linear-gradient(180deg, #EEF4FB 0%, #AED4FF 100%) 0% 0% no-repeat padding-box !important;
    border: none;
    color: #0066CC !important;
    font-weight: 600;
}

.nav-tabs .nav-link {
    color: #474747 !important;
    ;
}

@media (max-width: 767.98px) {
    .purple_block {
        height: 100%;
    }

    .right_block p {
        font-size: 15px !important;
    }

    .left_block p {
        font-size: 15px !important;
        margin-bottom: 35px;

    }

    .left_block {
        text-align: left !important;
    }

    #course_button {
        /* bottom: 0; */
        position: absolute;
        bottom: -6px;
        /* right: 12px; */
        color: White;
        left: 10px;
    }

    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
        font-size: 12px;
        padding: 9px;
    }

    .nav-tabs .nav-link {
        font-size: 12px;
    }
    .academic_head_text,#see_text{
        font-size: 14px !important;
    }
    .notify_block[data-v-82375fac]{
        padding:15px !important;
        height:auto;
    }
    .notify_block p{
        font-size: 11px;
    }
    .notify_block i{
        padding-right:10px !important;

    }
    #text_one, #text_two, #text_three{
        font-size: 12px;
    }
    .inner_block{
        height:auto;
    }

}

@media (min-width: 768px) and (max-width: 1024px){
.left_block{
    text-align: right;
}
.inner_block{
    height: auto;
}
}

</style>