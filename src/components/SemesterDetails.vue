<template>
    <div class="container-fluid jk">
        <h3>1st semester</h3>
        <div class="pt-3" style="padding: 0px 10px 0px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="card" style="width: 100%;">
                        <video style="width: 100%;" class="card-image-top" controls><source src="../assets/images/preview.mp4" type="video/mp4"></video>
                    </div>               
                </div>
                <div class="col-md-6">
                    <h2>How to Create an Online Course: The Official Online Course</h2>
                    <p>Use our recommended best practices to plan, produce, and publish a well-designed, high quality Online course</p>
                    <div class="card mn">
                        <div class="row">
                            <div class="col-md-6">
                                <p>Math 1 (NEP Series) <br> Dr. Ashoka P R</p>
                                            
                                <div class="">
                                    <el-rate v-model="value"  clearable /><br>
                                    <span>(23 Reviews)</span>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div class="">
                        <img src="../assets/images/video1.png" style="width: 20px; height: 20px;">&nbsp;
                        <span><span>1hr 28min</span> of on-demand video</span>
                        <p>8 Modules</p>
                    </div>
                    <div class="">
                        <button class="btn btn-dark w-100">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-4 topic-card">
            <el-tabs class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="Chapters" name="first" class="rt">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <h5 class="card-header">
                                    <div data-toggle="collapse" href="#collapse-example1" aria-expanded="true" aria-controls="collapse-example" id="heading-example" class="d-block kj">
                                        <span class="action"><i class="fa fa-angle-down rotate-icon"></i></span>
                                        Topic 1
                                    </div>
                                </h5>
                                <div id="collapse-example1" class="collapse show" aria-labelledby="heading-example">
                                    <div class="card-body">
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 01. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Introduction of subject<br>03:13 min</p>
                                                            
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 02. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Basic Details<br>22:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 03. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Advanced methods<br>45:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
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
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <h5 class="card-header">
                                    <div data-toggle="collapse" href="#collapse-example2" aria-expanded="true" aria-controls="collapse-example" id="heading-example" class="d-block kj">
                                        <span class="action"><i class="fa fa-angle-down rotate-icon"></i></span>
                                        Topic 2
                                    </div>
                                </h5>
                                <div id="collapse-example2" class="collapse show" aria-labelledby="heading-example">
                                    <div class="card-body">
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 01. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Introduction of subject<br>03:13 min</p>
                                                            
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 02. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Basic Details<br>22:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 03. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Advanced methods<br>45:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
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
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <h5 class="card-header">
                                    <div data-toggle="collapse" href="#collapse-example3" aria-expanded="true" aria-controls="collapse-example" id="heading-example" class="d-block kj">
                                        <span class="action"><i class="fa fa-angle-down rotate-icon"></i></span>
                                        Topic 3
                                    </div>
                                </h5>
                                <div id="collapse-example3" class="collapse show" aria-labelledby="heading-example">
                                    <div class="card-body">
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 01. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Introduction of subject<br>03:13 min</p>
                                                            
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 02. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Basic Details<br>22:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 03. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Advanced methods<br>45:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
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
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <h5 class="card-header">
                                    <div data-toggle="collapse" href="#collapse-example4" aria-expanded="true" aria-controls="collapse-example" id="heading-example" class="d-block kj">
                                        <span class="action"><i class="fa fa-angle-down rotate-icon"></i></span>
                                        Topic 4
                                    </div>
                                </h5>
                                <div id="collapse-example4" class="collapse show" aria-labelledby="heading-example">
                                    <div class="card-body">
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 01. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Introduction of subject<br>03:13 min</p>
                                                            
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 02. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Basic Details<br>22:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        <div class="row kl">
                                            <div class="col-sm-12">
                                                <div class="card">
                                                    <div class="row">
                                                        <div class="col-sm-2">
                                                            <p> 03. </p>
                                                        </div>
                                                        <div class="col-sm-7">
                                                            <p>Advanced methods<br>45:13 min</p>
                                                        </div>
                                                        <div class="col-sm-3">
                                                            <img src="../assets/images/video.png" class="video">
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
                </el-tab-pane>
                <el-tab-pane label="Description " name="second">
                    <ul>
                        <li>How to create an online course using Udemy’s recommended course creation process</li>
                        <li>How to access and use tools and resources available to you as an Udemy instructor</li>
                        <li>Use the Marketplace Insights tool to identify in-demand topics to validate or refine your course topic</li>
                        <li>Learn how to define your ideal learners for your course</li>
                        <li>Determine and write clear learning objectives</li>
                        <li>Create practical activities and assessments to drive an engaging and high-quality course</li>
                        <li>Create a well-structured course outline</li>
                        <li>Produce your course content following best practices for recording and editing your videos</li>
                        <li>Write a compelling course landing page that attracts the right learners to your course</li>
                        <li>Launch your course successfully</li>
                        <li>Use your instructor dashboard to manage and evolve your course, and to grow your audience on Udemy</li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="Question Bank" name="third">
                    <ul>
                        <li>You’ve signed up or are interested in signing up to become a Udemy instructor</li>
                        <li>You have an idea of the course topic you’re interested in teaching</li>
                        <li>You’re passionate and excited about sharing your knowledge with others</li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="Quiz" name="fourth">Example Quiz</el-tab-pane>
            </el-tabs>
        </div>
        <div class="pt-5 related-topic">
            <h3>Related topic</h3>
            <div class="row pt-3 mb-4">
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Artificial Intelligence</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                                                    
                                        
                                    <p>Dr. Ashoka P R</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>UX Designer</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                                                 
                                        
                                    <p>Dr. Ashoka P A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Web Development</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                               
                                        
                                    <p>Dr. Ashoka P R</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-title">
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Math 1 (NEP Series)</b><br><small>18CS81&nbsp;&nbsp;&nbsp;&nbsp;240 hrs</small></p>
                                    <img src="../assets/images/share.png" class="icon">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn1">
                                    <p><b>Subject Description</b></p>
                                    <img src="../assets/images/video.png" class="video">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 mn2">
                                    <el-rate v-model="value"  clearable />                                                                   
                                        
                                    <p>Dr. Ashoka P R</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SemesterDetails',
    

}
</script>

<style scoped>

.jk {
    padding-top: 5%;
}
@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }
}
.mn {
    border: none;
}
.mn p {
    float: left;
}
.mn .el-rate {
    float: right;
}
.mn span {
    float: right;
}
.gh {
    width: 2rem;
    height: 2rem;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Times New Roman', Times, serif;
}
.demo-tabs {
  padding-left: 11px;
  
}
.el-tab-pane {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
}

.topic-card .card {
    border: 1px solid black;
    margin-top: 2%;
    width: 100%;

}
.kj .action {
  float: right;
  font-size: 20px;  
  width: 1.2em;
  color: black;
}
.kj{
  cursor: pointer;
  border-bottom: none;
  color: black;
}



.kj:not(.collapsed) .rotate-icon {
  transform: rotate(180deg);
}
.video {
    width: 40px;
    height: 40px;
}
.kl .card {
    padding: 10px 10px 0px;
}
.kl .col-sm-7 {
    text-align: center;
}
.kl .col-sm-3 {
    text-align: right;
}
@media screen and (max-width: 600px) {
    .kl .col-sm-2 {
        float: left;
        width: 19%;
    }
    .kl .col-sm-3 {
        float: right;
        width: 20%;
    }
    .kl .col-sm-7 {
        text-align: left;
        width: 61%;
        font-size: 16px;
    }
}
.related-topic {
    padding-left: 11px;
}
.related-topic .card{
    padding: 10px 10px 0px;
    /* background-color: #8B8989; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    color: black;
    cursor: pointer;
}
.mn1 p {
    float: left;
}
.mn1 img {
    float: right;
}
.mn2 .el-rate {
    float: right;
}
.mn2 p {
    float: left;
}
.icon {
    width: 25px;
    height: 25px;
    margin-left: 55px;
}
</style>
