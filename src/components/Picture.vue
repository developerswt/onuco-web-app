<template>
    <div class="container-fluid ">
        <div class="container">
            <div class="updated_Profile">
                <h2>Updated Profile</h2>
            </div>
            <div class="row mb-3">
                <div class="col-sm-5">
                    <div class="card hj">
                        <img src="../assets/images/user.png" class="card-img-top rounded-circle" style="width: 43%; height: 33%; margin-top: 5%; padding-left: 3%; border-color: black;" alt="profile not found" />
                        <div class="card-body" >
                            <h5>{{ isuser.attributes.name }}</h5>
                            <h5>{{ this.updatedAttribute.gender }}</h5>
                            <h5>{{ this.updatedAttribute.birthdate }}</h5>
                            <h5 v-if="isuser.attributes.email">{{ isuser.attributes.email }}</h5>
                            <h5 v-else>{{ isuser.attributes.phone_number }}</h5>
                            <h5>{{ this.updatedAttribute.address }}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card card_design">
                        <div class="card-body">
                            <form @submit.prevent="uploadImage">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group" v-if="isuser.attributes.email">
                                            <label for="email"><b>UserName:</b></label>
                                            <input type="email"  id="email" name="email" :value="isuser.attributes.email" readonly>
                                        </div>
                                        <div class="form-group" v-else>
                                            <label for="phone"><b>UserName:</b></label>
                                            <input type="text"  id="phone" name="phone" :value="isuser.attributes.phone_number" readonly>
                                        </div>
                                    </div>
                                    <!-- <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="phone">phone_number:</label>
                                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" :value="isuser.attributes.phone_number"  readonly>
                                        </div>    
                                    </div> -->
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <label for="fname"><b>Name:</b></label>
                                        <input type="text" id="fname" :value="isuser.attributes.name" name="firstname" placeholder="Your name.." readonly required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="gender"><b>Gender:</b></label>
                                        <select id="gender" v-model="gender" name="Gender" required>
                                            <option value="starter" selected>Select Option </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <label for="address"><b>Address:</b></label>
                                        <textarea rows="1" cols="30" v-model="address" id="address" name="comment" form="usrform" required></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <label for="birthday"><b>Birthday:</b></label>
                                        <input type="date" id="birthday" v-model="birthdate" name="birthday" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="myfile"><b>Profile Picture:</b></label>
                                        <input type="file" id="myfile" name="myfile" @change="handleFileChange" required>
                                    </div>    
                                </div>
                                <div class="row kl">
                                    <div class="col-sm-2">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                    <div class="col-sm-3">
                                        <button type="button" class="btn btn-secondary">Close</button>
                                    </div>
                                </div>
                            </form>    
                        </div>
                    </div>
                </div>
                
            </div>
        </div>   
    </div> 
</template>

<script>
//import axiosInstance from '../config/axiosInstance'
import UpdatedProfile from '../components/UpdatedProfile.vue'
import axios from 'axios'

export default {
    name: 'PictureView',
    components: {
        UpdatedProfile
    },
    data() {
        return {
            updatedAttribute: [],
            isuser: localStorage.getItem("username"),
            name: '',
            gender: '',
            birthdate: '',
            address: '',
            selectedFile: null,
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
            console.log(this.$store.state.user);
            return this.$store.state.user;
        },

    },
    async created() {
        const headers = { 
            Authorization:  this.authorizationHeader,
            'Content-Type': 'multipart/form-data'
        };
        try {
            const res = await axios.get('https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/UploadS3Files/profile', {
                headers });
            this.updatedAttribute = res.data;
            console.log(this.updatedAttribute);    
        } catch (error) {
            console.log(error);
        }    
    },
    methods: {
        async update() {
            const headers = { 
                Authorization:  this.authorizationHeader,
                'Content-Type': 'multipart/form-data'
            };
            try {
                const res = await axios.get('https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/UploadS3Files/profile', {
                    headers });
                this.updatedAttribute = res.data;
                console.log(this.updatedAttribute);    
            } catch (error) {
                console.log(error);
            }  
        },
        close() {
            this.gender = '';
            this.birthdate = '';
            this.address = '';
            this.selectedFile = null;
            this.$refs.fileInput.value = '';
        },
        // async uploadFile() {
        //     const headers = { 
        //         Authorization:  this.authorizationHeader,
        //         'Content-Type': 'multipart/form-data'
        //     };

        //     const fileInput = this.$refs.fileInput;

        //     if (!fileInput.files.length) {
        //         return;
        //     }

        //     const file = fileInput.files[0];
        
        //     const formData = new FormData();
        //     formData.append('file', file);

        //     try {
        //         const response = await axios.post('https://localhost:7078/api/UploadFiles/upload', formData, {
        //             headers
        //         });

        //         console.log('File uploaded successfully!', response);
        //     } catch (error) {
        //         console.error('Error uploading file:', error);
        //     }
        // },
        handleFileChange(event) {
            this.selectedFile = event.target.files[0];
        },
        async uploadImage() {
            const headers = { 
                Authorization:  this.authorizationHeader,
                'Content-Type': 'multipart/form-data'
            };
            const formData = new FormData();
            
            formData.append('Gender', this.gender);
            formData.append('Birthdate', this.birthdate);
            formData.append('Address', this.address);
            formData.append('File', this.selectedFile);

            try {
                const response = await axios.post('https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/UploadS3Files/upload', formData, {
                    headers 
                });

                // Handle the API response as needed
                console.log('Response from API:', response.data);
                await this.update();
                // Clear form fields or show success message
                // localStorage.setItem('updatedGender', this.gender);
                // localStorage.setItem('updatedBirthdate', this.birthdate);
                // localStorage.setItem('updatedAddress', this.address);
                this.gender = '';
                this.birthdate = '';
                this.address = '';
                this.selectedFile = null;
                this.$refs.fileInput.value = ''; // Clear the file input
                
            } catch (error) {
                // Handle errors
                console.error('Error:', error);
            }
        },
        
    }
}

</script>

<style scoped>
.padding_top {
    margin-top: 4%; 
    padding-top: 3%;
    margin-bottom: 30%;
}
.profile_heading h2 {
    margin-top: 1%;
    text-align: center;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
}
input[type=text],[type=email],[type=tel],[type=date],[type=file],textarea, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
.card_design {
    width: 100%;
    margin-top: 3%;
}
@media screen and (min-width: 550px) and (max-width: 912px) {
    .padding_top {
        padding-top: 3%;
        margin-bottom: 20%;
    }
    .hj {
        width: 100%;
    }
}
@media only screen and (max-width: 540px) {
    .padding_top {
        margin-top: 13%; 
        padding-top: 3%;
        margin-bottom: 20%;
    }
   
}
@media screen and (min-width: 200px) and (max-width: 530px){
    .padding_top {
        margin-top: 17%; 
        padding-top: 3%;
        margin-bottom: 20%;
    }
    
}
.updated_Profile {
    margin-top: 5%;
}
.updated_Profile h2 {
    padding-top: 2%;
    font-size: 20px;
    text-align: center;
}
.hj {
    width: 80%;
    height: 80%;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    float: right;
    margin-top: 3%;
    margin-bottom: 20%;
}
h5 {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.rounded-circle {
    border-color: black;
}
@media screen and (min-width: 200px) and (max-width: 912px) {
    .hj {
        width: 100%;
    }
}
.col-sm-2 {
    float: left;
}
.col-sm-3 {
    float: right;
}
</style>