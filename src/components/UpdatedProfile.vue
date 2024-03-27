<template>
    <div v-if="isLoggedIn" class="container-fluid jk">
        <div class="container">
            <div class="learning_block pb-4" >
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
                                            <button id="course_button">Start Course <i class="fa-solid fa-play" style="color: #ffffff;"></i></button>
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
                            <input id="myRadio" type="radio" checked="checked" name="radio">&nbsp;
                            <input type="radio" name="radio">
                        </div>
                    </div>
                    <div class="col-sm-12 users">
                        <div v-if="!editing" class="User_Name">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div v-if="!editing" class="icon_bg_color">
                                        <img :src="updatedAttribute.picture">
                                    </div>
                                    <div class="User_details pl-2">
                                        <h2>Welcome</h2>
                                        <h3>{{ updatedAttribute.name }}</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div v-else class="editing_users_details">
                            <div class="row pt-4">
                                <!-- <div class="col-sm-12"> -->
                                <div class="col-sm-4">
                                    <div class="edit_user">
                                        <input v-model="userName" placeholder="User Name" type="text" class="un">
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="col-sm-2">
                                        <div class="choose_file">
                                            <div class="icon_bg_colors">
                                                <i class="fa-solid fa-user-astronaut" style="color: #fff;"></i>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <input id="input_file" type="file" class="input_file" @change="handleFileChange">
                                        </div>
                                    </div>
                                    <!-- </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="esdit_profile">
                            <!-- <button class="button button1">Edit Profile</button> -->
                            <button v-if="!editing" class="button button1" @click="editProfile">EDIT PROFILE</button>
                            <button v-else class="buttons button2" @click="saveProfile">SAVE</button>

                        </div>
                        <div class="pt-4">
                            <router-link to="/Deactivation"><button class="delete_profile_request">Delete Profile Request</button></router-link>
                        </div>

                    </div>
                </div>
                <div class="row mb-2  mm">
                    <div class="col-sm-6 user">
                        <div class="card user_profile_details">
                            <div class="card-body">
                                <h2>User details</h2>
                                <h3>Email address</h3>
                                <!-- <p>userName@email.com</p> -->
                                <p v-if="!editing">{{ updatedAttribute.email }}</p>
                                <input v-else v-model="userEmail" placeholder="userName@email.com" type="text"
                                    style="border: 1px solid #DEDEDE;font-size: 14px;color: #707070;">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 not1">
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
                    <div class="col-sm-6 not2">
                        <div class="card notification_details">
                            <div class="card-body">
                                <h2>Notifications</h2>
                                <p>Item 1</p>
                                <p>Item 2</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-1">
                        <div class="card login_details">
                            <div class="card-body">
                                <h2>Login details</h2>
                                <p>Last access to application</p>
                                <div v-for="(login, index) in visibleLoginDetails" :key="index">
                                    <p>{{ formatCreationDate(login.creationDate) }}</p>
                                </div>
                                <p v-if="shouldShowViewAll">
                                    <router-link class="va" to="" style="text-decoration: underline;" @click="toggleViewAll"> View all </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!isLoggedIn">
        <p style="margin:auto;text-align:center;color:#0177FB;" class="msz mb-4">Please log in to access and update your profile</p>

        <img src="../assets/images/error1.png" class="img-fluid  mx-auto d-block mb-4">
        <div class="button_block mx-auto text-center">
            <router-link to="/Login"> <button class="btn btn-primary mb-4" style=" width: 80px;padding: 10px;">Login</button></router-link>
        </div>
    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
</template>

<script>
import moment from 'moment';
import axiosInstance from '../config/axiosInstance'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';


export default {
    name: 'UpdatedProfile',
    components: {
        Loading
    },
    data() {
        return {
            showViewAll: false,
            isLoading: false,
            updatedAttribute: [],
            loginHistorys: [],
            editing: false,
            userName: '',
            userEmail: '',
            selectedFile: null,
            
            // isuser: localStorage.getItem("username"),
        }
    },
    computed: {
        authorizationHeader() {
            if (this.isLoggedIn) {
                return `Bearer ${this.isuser}`;
            } else {
                return ''; // Set your dummy value here
            }
        },
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },
        isuser() {
            return this.$store.state.user.signInUserSession.idToken;
        },
        visibleLoginDetails() {
            // Show the first two login details by default or all details if showViewAll is true
            return this.showViewAll ? this.loginHistorys : this.loginHistorys.slice(0, 2);
        },
        shouldShowViewAll() {
            return this.loginHistorys.length > 2 && !this.showViewAll;
        },
    },
    async created() {
        this.update();
        this.loginHistory();
    },
    methods: {
        async deleteProfile() {
            try {
                const response = await axiosInstance.post('/DeleteProfile');
                console.log(response);
            } catch (error) {
                console.error('Error:', error);
            }
        },
        editProfile() {
            this.editing = true;
        },
        saveProfile() {
            this.uploadImage();
            this.editing = false;

        },
        toggleViewAll() {
            this.showViewAll = !this.showViewAll;
        },
        handleFileChange(event) {
            if (event && event.target && event.target.files.length > 0) {
                this.selectedFile = event.target.files[0];
            }
            // this.selectedFile = event.target.files[0];
        },
        async uploadImage() {
            const headers = {
                // Authorization:  this.authorizationHeader,
                'Content-Type': 'multipart/form-data'
            };
            console.log(this.userEmail);
            const formData = new FormData();
            
            formData.append('Email', this.userEmail);
            formData.append('Name', this.userName);
            formData.append('file', this.selectedFile);
            console.log(this.userEmail);
            console.log(formData.Email);

            try {
                const response = await axiosInstance.post('/UploadS3Files/upload', formData, {
                    headers
                });
                console.log(response);

                // Handle the API response as needed
                await this.update();
                this.userEmail = '';
                this.userName = '';
                this.selectedFile = null;
                // this.$refs.fileInput.value = ''; 

            } catch (error) {
                // Handle errors
                console.error('Error:', error);
            }
        },
        async update() {
            this.isLoading = true;
            try {
                const res = await axiosInstance.get('/UploadS3Files/profile');
                this.updatedAttribute = res.data;
            } catch (error) {
                console.log(error);
                this.isLoading = false;
            } finally {
                this.isLoading = false;
            }
        },
        async loginHistory() {
            this.isLoading = true;
            try {
                const res = await axiosInstance.get('/UserLoginHistory/history');
                this.loginHistorys = res.data;
            } catch (error) {
                console.log(error);
                this.isLoading = false;
            } finally {
                this.isLoading = false;
            }
        },
        formatCreationDate(creationDate) {
            const formattedDate = moment(creationDate).utcOffset('+05:30').format('dddd, D MMMM YYYY, h:mm A');
            const currentDate = moment();

            if (moment(creationDate).isSame(currentDate, 'minute')) {
                return `${formattedDate} (Now)`;
            } else {
                return formattedDate;
            }
        },
    }


}
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
    margin-bottom: 2%;

}

.button {
    color: blue;
    padding: 6px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 18px 0px;
    cursor: pointer;
}

.buttons {
    color: blue;
    padding: 6px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 18px 0px;
    cursor: pointer;
}

.users .esdit_profile .buttons {
    float: right;
    position: relative;
    bottom: 63px;
}

.button1 {
    /* border: 1px solid var(--unnamed-color-0177fb); */
    border: 1px solid #0177FB;
    border-radius: 4px;
    opacity: 1;
    margin-left: 16px;
    background-color: white;
}
.delete_profile_request {
    border: 1px solid #0177FB;
    border-radius: 4px;
    opacity: 1;
    margin-left: 16px;
    background-color: white;
}
.delete_profile_request {
    color: blue;
    padding: 6px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 18px 0px;
    cursor: pointer;
}
.button2 {
    /* border: 1px solid var(--unnamed-color-0177fb); */
    border: 1px solid #0177FB;
    border-radius: 4px;
    opacity: 1;
    /* margin-top: -26px; */
    background-color: white;

}
.icon_bg_colors {
    float: right;
    width: 36px;
    height: 36px;
    background: #0066CC 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 50%;
    position: relative;
    right: 83px;
    bottom: 6px;
}

.icon_bg_color img {
    width: 70px;
    height: 70px;
    border: 0.5px solid #0066CC;
    opacity: 1;
    border-radius: 50%;
}

.icon_bg_colors i {
    float: left;
    width: 10%;
    padding-top: 8px;
    padding-left: 9px;
    font-size: 20px;
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
    appearance: none;
    /* Hide the default radio button */
    width: 12px;
    /* Adjust size as needed */
    height: 12px;
    border-radius: 50%;
    /* Make it circular */
    border: 2px solid #FF9900;
    /* Border color (blue in this example) */
    margin-right: 5px;
    /* Add spacing between the button and label */
    background: #FF9900 0% 0% no-repeat padding-box;
    opacity: 1;
    cursor: pointer;
}

input[type="radio"]:checked {
    background-color: white;
    /* Background color when selected */
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
    /* bottom: -11px; */
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
    /* left: -5px;
    top: -12px; */
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
        /* bottom: -6px; */
        /* right: 12px; */
        color: White;
        left: 10px;
    }
}

@media only screen and (max-width: 1280px) {
    .choose_file {
        padding-left: 12px;
    }

}

@media (min-width: 768px) and (max-width: 920px) {
    .choose_file {
        padding-top: 13px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .left_block {
        text-align: right;
    }

}

@media screen and (min-width: 200px) and (max-width: 540px) {
    .user {
        margin-bottom: 2%;
    }
}

@media only screen and (max-width: 1024px) {
    .User_Name {
        float: left;
        width: 86%;
    }

    .choose_file {
        /* float: right; */
        padding-left: 13px;
    }


}

@media only screen and (max-width: 540px) {
    .User_Name {
        float: left;
        width: 73%;
    }

    .choose_file {
        /* float: right;
        margin-right: 116px; */
        padding-top: 12px;
    }
    .delete_profile_request {
    color: blue;
    padding: 6px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 18px 3px;
    cursor: pointer;
    position: relative;
    bottom: 76px;
}

}

@media screen and (min-width: 750px) and (max-width: 912px) {
    .User_Name {
        float: left;
        width: 81%;
    }

    .input_file {
        /* margin-top: -34px; */
        margin-left: 53px;
    }
}

@media screen and (min-width: 100px) and (max-width: 500px) {
    .button1 {
        position: relative;
        left: 170px;
        bottom: 78px;
    }

    .input_file {
        position: relative;
        top: 39px;
        right: 26px;
    }
}

@media screen and (min-width: 400px) and (max-width: 500px) {
    .choose_file {
        float: right;
        margin-right: 2px;
        padding-top: 12px;
    }

    .users .editing_users_details {
        /* float: left; */
        width: 100%;
    }

    .users .esdit_profile .buttons {
        float: none;
        margin-top: 12px;
    }

}

@media screen and (min-width: 380px) and (max-width: 400px) {
    .choose_file {
        /* float: right;
        margin-right: 2px; */
        padding-top: 12px;
    }


    .users .editing_users_details {
        /* float: left; */
        width: 100%;
    }

    .users .esdit_profile .buttons {
        float: none;
        margin-top: 12px;
    }

    .un [data-v-36fde92e] {
        position: relative;
        top: 0px;
    }

}

@media screen and (min-width: 360px) and (max-width: 379px) {
    .choose_file {
        /* float: right;
        margin-right: 2px; */
        padding-top: 12px;
    }

    .users .editing_users_details {
        /* float: left; */
        width: 100%;
    }

    .users .esdit_profile .buttons {
        float: none;
        margin-top: 12px;
    }


    .un[data-v-36fde92e] {
        position: relative;
        top: 0px;
        right: 11px;
    }
}

@media only screen and (max-width: 360px) {

    .users .editing_users_details {
        /* float: left; */
        width: 100%;
    }

    .users .esdit_profile .buttons {
        float: none;
        margin-top: 12px;
    }
}

@media screen and (min-width: 100px) and (max-width: 360px) {
    .choose_file {
        /* float: right;
        margin-right: 2px; */
        padding-top: 12px;
    }

    .users .editing_users_details {
        /* float: left; */
        width: 100%;
    }

    .users .esdit_profile .buttons {
        float: none;
        margin-top: 12px;
    }

    .un {
        position: relative;
        top: 0px;
    }
}

@media only screen and (max-width: 280px) {
    .choose_file {
        float: none;
        margin-right: 0x;
        padding-top: 12px;
    }

    .users .editing_users_details {
        /* float: left; */
        width: 100%;
    }

    .users .esdit_profile .buttons {
        float: none;
        margin-top: 12px;
    }

    .un {
        position: relative;
        top: 0px;
    }
}

.hidden {
    display: none;
}

/* Style the label as an icon or button */
.file-icon {
    display: inline-block;
    padding: 0px 0px;
    color: #fff;
    /* Button text color */
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

/* Change button color on hover */
input[type="text"] {
    width: 211px;
    height: 32px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DEDEDE;
    border-radius: 4px;
    opacity: 1;
}

::placeholder {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-19) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: left;
    font: normal normal normal 14px/19px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    padding-left: 10px;
}

.input_file {
    background: #FFFFFF;
    color: #707070;
    border-radius: 4px 0px 0px 4px;
    outline: none;
    width: 312px;
}

::-webkit-file-upload-button {
    color: #707070;
    background: #DEDEDE 0% 0% no-repeat padding-box;
    border-radius: 4px 0px 0px 4px;
    opacity: 1;
    border: none;
}

@media (max-width:520px) {
    /* .learning_block {
        padding-bottom: 100px;
    } */

    /* .mm {
        margin-top: -74px;
    } */

    /* .learning_block {
        padding-top: 70px;
    } */

    .va {
        display: none;
    }

    .not1 {
        display: none;
    }

    .not2 {
        display: block !important;
    }

    .users .esdit_profile .buttons {
        float: right;
        position: relative;
        position: relative;
        bottom: 160px;
    }
    .icon_bg_colors {
        position: relative;
        right: 263px;
        top: 10px;
    }

    .input_file {
        position: relative;
        /* top: -22px; */
        width: 273px;
        left: 40px;
    }
}

.not2 {
    display: none;
}
</style>