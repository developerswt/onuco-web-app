<template>
    <div>
        <div id="search_container" class="container-fluid jk">
            <div class="first_block">
                <div class="container">
                    <div class="search_inner_block">
                        <div class="row">
                            <div class="col-lg-12">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a href="#">VTU</a></li>
                                        <li class="breadcrumb-item"><a href="#">Maths</a></li>
                                        <li class="breadcrumb-item"><a href="#">Semester 2</a></li>

                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="search_right_block">
                                    <h4 class="academic_head_text">

                                        <span id="aca_text">Math1 </span>(NEP series)

                                    </h4>
                                    <p id="professor_text">Dr. VijayKumar B.P</p>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3">
                                            <p id="duration_text" class="mb-2"><img
                                                    src="../assets/images/Iconionic-ios-timer@2x.png">3h
                                                32min</p>
                                        </div>
                                        <div class="col-lg-4 col-md-3">
                                            <p id="module_text" class="mb-2"><img
                                                    src="../assets/images/Iconmap-school@2x.png">8
                                                modules</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">


                                <div class="icon_blck">
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                    <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                </div>
                                <p id="review_text">(23 Reviews)</p>
                                <p id="amount_text"><span id="strike_text"> &#8377;1999</span>
                                    &#8377;947 <router-link to="/login"> <button id="search_button">buy now</button></router-link></p>

                            </div>
                        </div>

                    </div>


                </div>


            </div>
            <div id="search_container" class="container">
                <h4 class="academic_head_text_one">
                    <span id="aca_text">Course </span>Description
                </h4>
                <p id="course_text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                    Latin professor at Hampden-Sydney College in Virginia,</p>


                <div class="row">
                    <div class="col-lg-12">
                        <section id="tab_block">
                            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" >
                                <el-tab-pane label="Subject" name="first" >
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <div id="accordion" >
                                                <div class="card">
                                                    <div
id="headingOne" class="card-header" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <button class="btn btn-link">
                                                                    Module 1

                                                                </button>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="action"><i
                                                                        id="sem_icon"
                                                                        class="fa fa-chevron-right rotate-icon"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                                        data-parent="#accordion">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-lg-6">
                                                                    <div class="accordion_block_one">
                                                                        <i
class="fa-solid fa-check"
                                                                            style="color: #08ab44;"></i>
                                                                        <p id="check_text"> Chapter-1</p>
                                                                    </div>

                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="accordion_block_two">
                                                                        <p id="duration_text">40m 13s</p>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="chapters_block">
                                                                <div class="row">
                                                                    <div class="col-lg-1">
                                                                        <i
class="fa-solid fa-check"
                                                                            style="color: #08ab44;"></i>
                                                                    </div>
                                                                    <div class="col-lg-7">
                                                                        <p id="intro_text">Introduction of Subject</p>
                                                                        <div class="row">
                                                                            <div class="col-lg-6">
                                                                                <p id="duration_text_one">01:02 / 03:05</p>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="progress_block">
                                                                                    <div class="progress">
                                                                                    <div
class="progress-bar"
                                                                                        role="progressbar" aria-valuenow="0"
                                                                                        aria-valuemin="0"
                                                                                        aria-valuemax="100"></div>
                                                                                </div>
                                                                                </div>
                                                                               
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-4">
                                                                        <div class="inside_block">
                                                                         
                                                                                <img src="../assets/images/Group1318@2x.png" class="img-fluid">
                                                                        
                                                                           
                                                                                <img src="../assets/images/Iconionic-ios-bookmark@2x.png" class="img-fluid">
                                                                          
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="chapters_block">
                                                                <div class="row">
                                                                    <div class="col-lg-1">
                                                                        <i
class="fa-solid fa-check"
                                                                            style="color: #08ab44;"></i>
                                                                    </div>
                                                                    <div class="col-lg-7">
                                                                        <p id="intro_text">Introduction of Subject</p>
                                                                        <div class="row">
                                                                            <div class="col-lg-6">
                                                                                <p id="duration_text_one">01:02 / 03:05</p>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="progress_block">
                                                                                    <div class="progress">
                                                                                    <div
class="progress-bar"
                                                                                        role="progressbar" aria-valuenow="0"
                                                                                        aria-valuemin="0"
                                                                                        aria-valuemax="100"></div>
                                                                                </div>
                                                                                </div>
                                                                               
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-4">
                                                                        <div class="inside_block">
                                                                         
                                                                                <img src="../assets/images/Group1318@2x.png" class="img-fluid">
                                                                        
                                                                           
                                                                                <img src="../assets/images/Iconionic-ios-bookmark@2x.png" class="img-fluid">
                                                                          
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div
id="headingTwo" class="card-header" data-toggle="collapse"
                                                        data-target="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <button class="btn btn-link">
                                                                    Module 2

                                                                </button>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="action"><i
                                                                        id="sem_icon"
                                                                        class="fa fa-chevron-right rotate-icon"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                                        data-parent="#accordion">
                                                        <div class="card-body">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                            accusamus
                                                            terry richardson ad squid. 3 wolf moon officia aute, non
                                                            cupidatat
                                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                            eiusmod.
                                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                            keffiyeh
                                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                            ea
                                                            proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                            occaecat craft
                                                            beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                            probably
                                                            haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div
id="headingThree" class="card-header" data-toggle="collapse"
                                                        data-target="#collapseThree" aria-expanded="false"
                                                        aria-controls="collapseThree">
                                                        <div class="row">
                                                            <div class="col-lg-6">
                                                                <button class="btn btn-link">
                                                                    Module 3

                                                                </button>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div class="action"><i
                                                                        id="sem_icon"
                                                                        class="fa fa-chevron-right rotate-icon"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                                        data-parent="#accordion">
                                                        <div class="card-body">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                            accusamus
                                                            terry richardson ad squid. 3 wolf moon officia aute, non
                                                            cupidatat
                                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                                            eiusmod.
                                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                                            keffiyeh
                                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                                            ea
                                                            proident. Ad vegan excepteur butcher vice lomo. Leggings
                                                            occaecat craft
                                                            beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                            probably
                                                            haven't heard of them accusamus labore sustainable VHS.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                          <img src="../assets/images/Group1303@2x.png" class="img-fluid">
                                        </div>
                                    </div>
                                    









                                </el-tab-pane>
                                <el-tab-pane label="Description" name="second">Description</el-tab-pane>
                                <el-tab-pane label="Question Bank" name="third">Question Bank</el-tab-pane>
                                <el-tab-pane label="Quiz" name="fourth">Quiz</el-tab-pane>


                            </el-tabs>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <Offer />
    </div>
</template>

<script>
import Offer from './Offer.vue'
export default {
    name: 'SearchresultsView',
    components: {

Offer
},
}
</script>

<style scoped>
.jk {
    padding-top: 68px;
    background: #EFF5FC 0% 0% no-repeat padding-box;
    opacity: 1;
}

.first_block {
    background: #E5EFF9 0% 0% no-repeat padding-box;
    color: #0066CC;
}



.breadcrumb {
    background: transparent;
}

.breadcrumb-item a {
    color: #0066CC;
}

.breadcrumb-item+.breadcrumb-item::before {
    content: ">";
    color: #0066CC;
}

#duration_text img {
    width: 27px;
    margin-right: 7px;
}

#module_text img {
    width: 27px;
    margin-right: 7px;
}

.icon_blck i {
    margin: 10px;
}

.search_right_block {
    padding-left: 14px;
}

.academic_head_text {
    color: #006acd;
    font-size: 22px;

}

.academic_head_text_one {
    color: #006acd;
    font-size: 22px;
    margin-top: 20px;
}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

#professor_text {
    color: #0066CC;
    font-size: 18px;
}

#duration_text,
#module_text {
    color: #707070;
    font-size: 16px;
}

.icon_blck {
    text-align: right;
}

#review_text {
    text-align: right;
}

#strike_text {
    font-size: 18px;
    text-decoration: line-through;
    color: #707070;
    padding-right: 15px;
}

#amount_text {
    font-size: 22px;
    color: #0066CC;
    text-align: right;
    font-weight: 500;

}

#search_button {
    height: 30px;
    width: 90px;
    background: transparent;
    font-size: 12px;
    color: #0066CC;
    border: 1px solid #0066CC;
    border-radius: 4px;
    padding: 0;
    margin-left: 20px;
    text-transform: uppercase;

}

#search_container {
    background: #EFF5FC 0% 0% no-repeat padding-box;
    padding-left:32px;
}

.search_inner_block {
    padding: 10px 10px 20px 10px;
}

#course_text {
    color: #777777;
    font-size: 16px;
    font-weight: lighter;
}

.action {
    text-align: right;
    padding-top: 5px;
}

.action i {
    color: #0066CC;
}

.card-header:not(.collapsed) .action i {
    transform: rotate(90deg);
}

#check_text {
    font-size: 16px;
    padding-left: 10px;
    margin-bottom: 0 !important;
    color: #0066CC;
}

.accordion_block_one {
    display: flex;
    align-items: center;
    padding: 10px;
}

.accordion_block_two {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: end;
}



.card-body {
    padding: 5px;
}

.chapters_block{
    padding-left:20px;
    padding-right:20px;
   
}

#duration_text_one{
    font-size: 12px;
    color:#9E9E9E;
}

#intro_text{
    margin-bottom: 0;
    font-size: 16px;
    color:#0066CC;
}
.progress{
    height:5px;
    margin-top:7px;
    background: #FF9900;
}
.inside_block{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: 54px;
}
.inside_block img{

    height: 30px;
    margin:5px;
}
.card-body{
    background: #E5EFF9;
}
#accordion{
    margin-bottom:40px;
}
</style>