<template>
    <div class="container-fluid jk">
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
                <div class="row mb-3">
                    <div class="col-sm-12 justify-content-center">
                        <div class="radio_checkbox" style="text-align: center;">
                            <input type="radio" checked="checked" id="myRadio" name="radio">&nbsp;
                            <input type="radio" name="radio">
                        </div>    
                    </div>
                    <div class="col-sm-12">
                        <div class="User_Name">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="icon_bg_color">
                                        <i class="fa-solid fa-user-astronaut" style="color: #fff;"></i>
                                    </div>    
                                    <div class="User_details">
                                        <h2>Welcome</h2>
                                        <h3>User Name !!!</h3>
                                    </div>
                                </div>
                                <!-- <div class="col-sm-3 User_details">
                                    <h2>Welcome</h2>
                                    <h3>User Name !!!</h3>
                                </div>      -->
                            </div>    
                        </div>
                        <div class="esdit_profile">
                            <button class="button button1">Edit Profile</button>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-sm-6 user">
                        <div class="card user_profile_details">
                            <div class="card-body">
                                <h2>User details</h2>
                                <h3>Email address</h3>
                                <p>userName@email.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card notification_details">
                            <div class="card-body">
                                <h2>Notifications</h2>
                                <p>Item 1</p>
                                <p>Item 2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-sm-6 user">
                        <div class="card course_details">
                            <div class="card-body">
                                <h2>Course details</h2>
                                <p>Semester I > Maths</p>
                                <p>Semester II > Maths</p>
                                <p>Semester III > Maths</p>
                                <p>Semester II > Some course</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card login_details">
                            <div class="card-body">
                                <h2>Login details</h2>
                                <p>Last access to application</p>
                                <p>Wednesday, 6 September 2023, 11:46 PM (now)</p>
                                <p>Tuesday, 5 September 2023, 09:46 PM &nbsp;<router-link to="" style="text-decoration: underline;">View all</router-link></p>
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
    name: 'UpdatedProfile'
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
    margin-bottom: 2%;

}
.button {
  color: blue;
  padding: 6px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 18px 0px;
  cursor: pointer;
}

.button1 {
    border: 1px solid var(--unnamed-color-0177fb);
    border: 1px solid #0177FB;
    border-radius: 4px;
    opacity: 1;
}
.icon_bg_color {
    width: 58px;
    height: 58px;
    background: #0066CC 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
}
.icon_bg_color i {
    float: left;
    width: 10%;
    padding-top: 12px;
    padding-left: 15px;
    font-size: 32px;
}
 .User_details {
    position: absolute;
    top: 8px;
    left: 87px;
    width: 40%;
}
.User_details h2 {
    
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    /* text-align: left; */
    font: normal normal normal 14px/19px Segoe UI;
    /* letter-spacing: 0px; */
    color: #FF9924;
    opacity: 1;
}
.User_details h3 {
    font-size: 16px;
    letter-spacing: var(--unnamed-character-spacing-0);
    /* text-align: left; */
    letter-spacing: 0px;
    color: #0066CC;
    opacity: 1;
}
.User_Name {
    float: left;
    width: 88%;
}
.edit_profile {
    float: right;
}

input[type="radio"] {
   appearance: none; /* Hide the default radio button */
    width: 12px; /* Adjust size as needed */
    height: 12px;
    border-radius: 50%; /* Make it circular */
    border: 2px solid #FF9900; /* Border color (blue in this example) */
    margin-right: 5px; /* Add spacing between the button and label */
    background: #FF9900 0% 0% no-repeat padding-box;
    opacity: 1;
    cursor: pointer;
}

input[type="radio"]:checked {
  background-color: white; /* Background color when selected */
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
.user_profile_details {
    width: 100%;
    height: 100%;
    margin-bottom: 2%;
}
.notification_details {
    width: 100%;
    height: 100%;
    margin-bottom: 2%;
}
.course_details {
    height: 100%;
    width: 100%;
    margin-bottom: 2%;
}
.login_details {
    height: 100%;
    width: 100%;
    margin-bottom: 2%;
}
.user_profile_details h2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) 18px/24px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.user_profile_details h3 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: left;
    font: normal normal normal 14px/19px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
}
.user_profile_details p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 14px/19px Segoe UI;
    letter-spacing: 0px;
    margin: 0px;
    color: #0066CC;
    opacity: 1;
}
.notification_details h2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) 18px/24px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.notification_details p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 14px/19px Segoe UI;
    letter-spacing: 0px;
    margin: 0px;
    color: #0066CC;
    opacity: 1;
}
.course_details h2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) 18px/24px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.course_details p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 14px/19px Segoe UI;
    letter-spacing: 0px;
    margin: 0px;
    color: #0066CC;
    opacity: 1;
}
.login_details h2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) 18px/24px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.login_details p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: left;
    font: normal normal 600 14px/19px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
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
}

@media (min-width: 768px) and (max-width: 1024px){
    .left_block{
        text-align: right;
    }

}
@media screen and (min-width: 200px) and (max-width: 540px) {
    .user {
        margin-bottom: 2%;
    }
}
@media screen  and (max-width: 1024px) {
    .User_Name {
        float: left;
        width: 86%;
    }
}
@media only screen and (max-width: 540px) {
    .User_Name {
        float: left;
        width: 73%;
    }
}
@media screen  and (min-width: 750px) and (max-width: 912px) {
    .User_Name {
        float: left;
        width: 81%;
    }
}

</style>