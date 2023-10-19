<template>
    <div class="container math" >
  <div class="purple_block">
                                <p id="new_text">NEW</p>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="right_block">
                                            <p id="subject_text">Math 1 (NPE Series)</p>
                                            <p class="mb-0"> Video Course</p>
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
                        <div class="row mt-5">
                             <div class="col-sm-6">
                                <p style="color: #FF9924;">Welcome</p>
                                <p style="color: #0066CC;">User Name !!!</p>
                             </div>
                             <div class="col-sm-6 view">
                                <button style="color: #0177FB; border-color: #0177FB;">Edit Profile</button>
                             </div>
                        </div>
                        <div class="row ">
                             <div class="col-sm-6">
                            <div class="card st" >
                                <div class="card body">
                                    <p class="hed">User details</p>
                                    <p class="sub_hed" style="color: #0066CC;">Email address<br>
                                    userName@email.com</p>
                                </div>
                            </div>
                            <div class="card mt-4 st">
                                <div class="card body">
                                  <p class="hed">Course details</p>
                                  <p class="sub_hed" style="color: #0066CC;">Semester I > Maths<br> 
                                    Semester II > Maths<br>
                                    Semester II > Maths<br>
                                    Semester II > Maths
                                  </p> 
                                </div>
                            </div>
                             </div>
                             <div class="col-sm-6">
                                <div class="card st">
                                <div class="card body">
                                    <p class="hed">Notifications</p>
                                    <p class="sub_hed " style="color: #0066CC;">Maths 1 (NEP Series)<br>
                                        Item 2</p>
                                </div>
                            </div>
                            <div class="card mt-4 st">
                                <div class="card body">
                                  <p class="hed">Login details</p>
                                  <p class="sub_hed">Last access to application</p>
                                   <p class="sub_hed" style="margin-top: -6px;"> Wednesday, 6 September 2023, 11:46 PM (now)</p>
                                   <p class="sub_hed" style="margin-top: -7px;"> Tuesday, 5 September 2023, 09:46 PM
                                   <router-link to="">View all</router-link>
                                  </p> 
                                </div>
                            </div>  
                             </div>
                        </div>
                        </div>  
</template>
<script>

</script>
<style scoped>

.purple_block {
    background: transparent url('../assets/images/Untitled.png') 30% 0% no-repeat padding-box !important;
    background-size: cover !important;
    padding: 15px;
    color: white;
    border-radius: 10px;
    height: 193px;
    mix-blend-mode: normal;

}
.right_block p {
        font-size: 15px !important;
    }

    .left_block {
    text-align: right;

}
.math[data-v-377a2de5] {
    position: relative;
    top: 100px;
    padding-bottom: 135px;
}
.hed{
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) 18px/24px var(--unnamed-font-family-segoe-ui);
letter-spacing: var(--unnamed-character-spacing-0);
text-align: left;
font: normal normal 600 18px/24px Segoe UI;
letter-spacing: 0px;
color: #000000;
opacity: 1;
}

.sub_hed{
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-707070);
text-align: left;
font: normal normal normal 14px/19px Segoe UI;
letter-spacing: 0px;
color: #707070;
opacity: 1;
}
.st{
    padding: 15px 15px 5px;
}
.card{
    border: none;
}

.view{
    text-align: right;
}

@media (min-width: 768px) and (max-width: 1024px){
.card{
    margin-top: 24px;
}
.purple_block{
    height: 258px;
}
.left_block {
    text-align: left;
}
.view{
    text-align: left; 
}
}
@media (min-width: 100px) and (max-width: 700px){
    .card{
    margin-top: 24px;
}
.purple_block{
    height: 258px;
} 
.left_block {
    text-align: left;
}
.view{
    text-align: left; 
} 
}
</style>
