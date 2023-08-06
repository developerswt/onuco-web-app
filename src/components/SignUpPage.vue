<template>
    <div class="jk">
        <div class=" pt-5">
            <div class="form_class">
                <div class="">
                    <h3 style="font-size: 20px;color:#006acd;">Sign up and start learning</h3>
                    <form @submit.prevent="authenticate" class="pt-3">
                        <label for="fname">UserName (should be Email or Phone)</label>
                        <input type="text" id="fname" name="username" v-model="username" placeholder="Your name.."
                            :style="errors.username ? 'border-color:red' : null" @blur="required" @input="required">

                        <span v-if="errors.username" style="color:red;" class="error">{{ errors.username }}</span>

                        <div class="">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" v-model="name" placeholder="Your name.."
                                :style="errors.username ? 'border-color:red' : null" @blur="required" @input="required">


                            <span v-if="errors.name" style="color:red;" class="error">{{ errors.name }}</span>
                        </div>
                        <div class="">
                            <label for="picture">Picture:</label>
                            <input type="file" id="myFile" name="picture"
                                :style="errors.picture ? 'border-color:red' : null" @blur="required" @input="required">
                            <span v-if="errors.picture" style="color:red;" class="error">{{ errors.picture }}</span>

                        </div>
                        <div class="">
                            <label for="birthday">Birth Date:</label>
                            <input type="date" v-model="birthdate" :style="errors.birthdate ? 'border-color:red;' : null"
                                @blur="required" @input="required">
                            <span v-if="errors.birthdate" style="color:red;" class="error">{{ errors.birthdate }}</span>
                        </div>
                        <div class="">
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" v-model="email" placeholder="Your Email"
                                :style="errors.email ? 'border-color:red;' : null" @blur="required" @input="required">
                            <span v-if="errors.email" style="color:red;" class="error">{{ errors.email }}</span>
                        </div>
                        <div class="">
                            <label for="phone">Phone</label>
                            <input type="text" id="phone" name="phone" v-model="phone_number" placeholder="Your Phone"
                                :style="errors.phone_number ? 'border-color:red;' : null" @blur="required"
                                @input="required">

                            <span v-if="errors.phone_number" style="color:red;" class="error">{{ errors.phone_number
                            }}</span>
                        </div>
                        <div class="">
                            <label for="gender">Gender</label>
                            <select name="gender" id="gender" v-model="gender"
                                :style="errors.gender ? 'border-color:red' : null" @blur="required" @input="required">
                                <option disabled value="">select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            <span v-if="errors.gender" style="color:red;" class="error">{{ errors.gender }}</span>
                        </div>
                        <div class="">
                            <label for="address">Address</label>
                            <textarea name="address" id="address" v-model="address"
                                :style="errors.address ? 'border-color:red' : null" @blur="required"
                                @input="required"></textarea>
                            <span v-if="errors.address" style="color:red;" class="error">{{ errors.address }}</span>
                        </div>
                        <div class="password-container">
                            <label for="password">Password</label>
                            <input v-bind:type="[showPassword ? 'text' : 'password']" v-model="pass" class=""
                                name="password" placeholder="Password" :style="errors.pass ? 'border-color:red' : null"
                                @blur="required" @input="required">
                            <span v-if="errors.pass" style="color:red;" class="error">{{ errors.pass }}</span>

                            <div class="">
                                <span class="hj" @click="showPassword = !showPassword">
                                    <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']"
                                        aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <div class="center-align">
                            <button class="btn btn-default btn-large">Register</button>
                        </div>
                        <hr style="background-color: blue; height:2px;">
                        <div class="signup-page">
                            <p>Already have an account? <a href="/Login">Log in</a></p>
                        </div>
                    </form>
                    <div class="card-panel red darken-2" v-if="errors != null">
                        <span class="white-text">{{ errors.message }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
//mport CognitoAuth from '../cognito/cognito'

export default {
    name: 'SignUpPage',
    data() {
        return {
  //          cognitoAuth: new CognitoAuth(),
            showPassword: false,
            username: '',
            pass: '',
            gender: '',
            phone_number: '',
            email: '',
            address: '',
            name: '',
            picture: '05.jpg',
            birthdate: '',
            errors: {},


        };
    },
    methods: {
        // authenticate() {
        //     // const file = document.querySelector('input[type=file]').files[0];
        //     //     this.picture = file;
        //         // console.log(file);
        //     let config = {
        //         region: "ap-south-1",
        //         IdentityPoolId:"ap-south-1_qKCtKeFRz", 
        //         UserPoolId: "ap-south-1:51e1baa7-14e4-457b-a492-9bbf99abb706",
        //         ClientId: "1jpk9cqb31k6p3flhljucf9j7g"
        //     }
        //     this.cognitoAuth.configure(config)
        //         this.cognitoAuth.signup(
        //             this.username,
        //             this.pass,
        //             this.name,
        //             this.picture,
        //             this.email,
        //             this.gender,
        //             this.birthdate,
        //             this.phone_number,
        //             this.address,
        //             (err, result) => {
        //                 if (err) {
        //                     this.error = err;
        //                 } else {
        //                     this.$router.replace({ path: "/Confirm" });
        //                 }
        //             }
        //         );
        //     },
            
        }
    }
</script>



<style scoped>
.error {
    border-color: red;
}

.card {
    width: 100%;
    height: 100%;
    margin-top: 1%;
    align-items: center;
    border: none;
}

input[type=text],
[type="file"],
[type="date"],
select,
textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    margin: 0 0 8px 0;
    display: inline-block;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #A435F0;
    color: white;
    padding: 0.375rem 0.75rem;
    ;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: white;
    color: black;
}

.password-container {
    width: 100%;
    position: relative;
}

.password-container input[type="password"],
.password-container input[type="text"] {
    width: 100%;
    padding: 0.375rem 0.75rem;
    /* padding: 12px 36px 12px 12px; */
    box-sizing: border-box;
    margin: 0 0 8px 0;
}

.hj {
    position: absolute;
    top: 47%;
    right: 3%;
    cursor: pointer;
    color: black;
}

.forget-password {
    text-align: center;
}

.forget-password a {
    text-decoration: none;
    margin-bottom: -16px;
}

.social-media button {
    width: 100%;
    margin-top: 2%;
}

.social-media img {
    width: 25px;
    height: 25px;
    position: relative;
    left: -20px;
    top: -2px;
}

.signup-page {
    text-align: center;
}

.signup-page a {
    text-decoration: none;
}

@media screen and (max-width: 430px) {
    .social-media img {
        width: 25px;
        height: 25px;
        position: relative;
        left: -8px;
        top: -2px;
    }
}

@media screen and (max-width: 600px) {
    .card {
        width: 100%;
        height: 100%;

        margin-top: 1%;

    }
}

button {
   
    background-color: #fa3254;
    margin:10px 0px 10px 0px;
    width: 100%;

}

button i {
    font-size: 18px;
}

.jk {
    margin-top: 90px;
    margin-bottom: 50px;
}

.form_class {
    max-width: 550px;
    margin: 0 auto;
    padding: 20px;
    background: white;
}

@media  (max-width: 768px) {
 

   .jk{
    margin-top:65px !important;
    margin:10px;
   }

}
@media (min-width: 769px) and (max-width: 992px) {
    .jk{
            margin: 70px 0px 30px 0px;
    }
}
</style>