<!-- <template>

</template>
<div>Faculty profile update</div>
<script>
</script>
<style scoped>

</style> -->


<template>
    <div class="container-fluid jk mt-5">
        <div class="container">
            <div class="learning_block">

                <div class="row">
                    <div class="col-lg-12">
                        <div>
                          
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-12 users">
                        <div v-if="!editing" class="User_Name">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div v-if="!editing" class="icon_bg_color">
                                        <img :src="updatedAttribute.picture">
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
                                            <input id="input_file" type="file" class="input_file"
                                                @change="handleFileChange">
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
                    </div>
                </div>
        


            </div>
        </div>



    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
</template>

<script>
import axiosInstance from '../config/axiosInstance'
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';


export default {
    name: 'UpdatedProfile',
    components: {
        Loading,
       
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
            console.log(this.isuser);
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
            console.log(this.$store.state.user);
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
        this.getData();
    },
    methods: {
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
            const formData = new FormData();

            formData.append('Email', this.userEmail);
            formData.append('Name', this.userName);
            formData.append('file', this.selectedFile);

            try {
                const response = await axiosInstance.post('/UploadS3Files/upload', formData, {
                    headers
                });

                // Handle the API response as needed
                console.log('Response from API:', response.data);
                await this.update();
                this.userEmail = '';
                this.userName = '';
                this.selectedFile = null;
                this.$refs.fileInput.value = ''; // Clear the file input

            } catch (error) {
                // Handle errors
                console.error('Error:', error);
            }
        },
        async getData() {
        this.isLoading = true;
        try {
            const res = await axiosInstance.get(`/ImageUrl/get-by-key?key=`+'manjunath.jpg');
            this.updatedAttribute = res.data;
            console.log(this.updatedAttribute);    
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        } finally {
            this.isLoading = false;
        }
    },
        // async update() {
        //     this.isLoading = true;
        //     try {
        //         const res = await axiosInstance.get('/UploadS3Files/profile');
        //         this.updatedAttribute = res.data;
        //         console.log(this.updatedAttribute);    
        //     } catch (error) {
        //         console.log(error);
        //         this.isLoading = false;
        //     } finally {
        //         this.isLoading = false;
        //     }
        // },
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
    border: 1px solid #0177FB;
    border-radius: 4px;
    opacity: 1;
    margin-left: 16px;
    background-color: white;
}
.button2 {
    border: 1px solid #0177FB;
    border-radius: 4px;
    opacity: 1;
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
    font: normal normal normal 14px/19px Segoe UI;
    color: #FF9924;
    opacity: 1;
}
.User_details h3 {
    font-size: 16px;
    letter-spacing: var(--unnamed-character-spacing-0);
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
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #FF9900;
    margin-right: 5px;
    background: #FF9900 0% 0% no-repeat padding-box;
    opacity: 1;
    cursor: pointer;
}

input[type="radio"]:checked {
    background-color: white;
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

    /* .choose_file {
        float: right;
        margin-right: 330px;
    } */

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

}

@media screen and (min-width: 750px) and (max-width: 912px) {
    .User_Name {
        float: left;
        width: 81%;
    }

    .input_file {
        margin-top: -34px;
        margin-left: 53px;
    }
}

@media screen and (min-width: 100px) and (max-width: 500px) {
    .button1 {
        position: relative;
        left: 170px;
        bottom: 78px;
    }

    /* .button2 {
        margin-left: 0px;
    margin-right: 16px;
    position: relative;
    bottom: 132px;
    left: 250px;
    } */
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

    /* .choose_file .icon_bg_colors {
        float: left;
    } */
    /* .choose_file .input_file {
        float: right;
        margin-right: -14px;
        margin-top: -36px;
    } */
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

    /* .choose_file .icon_bg_colors {
        float: left;
        margin-left: -6px;
    } */
    /* .choose_file .input_file {
        float: right;
        margin-right: -32px;
        margin-top: -36px;
    } */
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

    /* .choose_file .icon_bg_colors {
        float: left;
        margin-left: -8%;
    } */
    /* .choose_file .input_file {
        float: right;
        
        margin-right: -54px;
        margin-top: -36px;
    } */
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

    /* .choose_file {
        float: right;
        margin-right: 2px;
        padding-top: 12px;
    } */
    /* .choose_file .icon_bg_colors {
        float: left;
        margin-left: -35px;
    } */
    /* .choose_file .input_file {
        float: right;
        
        margin-right: -33px;
        margin-top: -36px;
    } */
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

    /* .choose_file .icon_bg_colors {
        float: left;
        margin-left: -6%;
    } */
    /* .choose_file .input_file {
        float: right;
        
        margin-top: -36px;
    } */
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

    /* .choose_file .icon_bg_colors {
        float: left;
        margin-left: -35px;
    } */
    /* .choose_file .input_file {
        float: right;
        
        margin-right: -33px;
        margin-top: -36px;
    } */
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
    /* Adjust the padding as needed */
    /* background-color: #0074d9; */
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

/* .un{
position: relative;
    top: 36px;
} */
@media (max-width:520px) {
    .learning_block {
        padding-bottom: 100px;
    }

    .mm {
        margin-top: -54px;
    }

    .learning_block {
        padding-top: 70px;
    }

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
        /* bottom: 63px; */
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
        top: -22px;
        width: 273px;
        left: 40px;
    }
}

.not2 {
    display: none;
}</style>