<template>
    <div class="container-fluid">
        <div class="container pt-5">
            <div class="card">
                <div class="card-body">
                    <h3 style="font-size: 20px;">Sign up and start learning</h3>
                    <form @submit.prevent="authenticate" class="pt-3">
                        <label for="fname">UserName (should be Email or Phone)</label>
                        <input type="text" id="fname" name="firstname" v-model="username" placeholder="Your name.." required>
                        <div class="">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="firstname" v-model="name" placeholder="Your name.." required>
                        </div>
                        <div class="">
                            <label for="picture">Picture:</label>
                            <input type="file" id="myFile" name="filename">
                        </div>    
                        <div class="">
                            <label for="birthday">Birth Date:</label>
                            <input type="date" v-model="birthdate" />
                        </div>    
                        <div class="">
                            <label for="email">Email</label>
                            <input type="text" id="email" name="email" v-model="email" placeholder="Your Email" required>
                        </div>
                        <div class="">
                            <label for="phone">Phone</label>
                            <input type="text" id="phone" name="phone" v-model="phone_number" placeholder="Your Phone" required>
                        </div>
                        <div class="">
                            <label for="gender">Gender</label>
                            <select name="gender" id="gender" v-model="gender" required>
                                <option disabled value="">select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div class="">
                            <label for="address">Address</label>
                            <textarea name="address" id="address" v-model="address" required></textarea>
                        </div>
                        <div class="password-container">
                            <label for="password">Password</label>
                            <input v-bind:type="[showPassword ? 'text' : 'password']" v-model="pass" class="" placeholder="Password" required>
                            <div class="">
                                <span class="hj" @click="showPassword = !showPassword">
                                    <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <div class="center-align">
                            <button class="btn btn-default btn-large">Register</button>
                        </div>
                        <hr style="background-color: blue;">
                        <div class="signup-page">
                            <p>Already have an account? <a href="/Login">Log in</a></p>
                        </div>  
                    </form>
                    <div class="card-panel red darken-2" v-if="error != null">
                        <span class="white-text">{{ error.message }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>        
</template>


<script>
import CognitoAuth from '../cognito/cognito'

export default {
    name: 'SignUpPage',
    data() {
        return {
            cognitoAuth: new CognitoAuth(),
            showPassword: false,
            username: '',
            pass: '',
            gender: '',
            phone_number: '',
            email: '',
            address: '',
            name: '',
            picture: '05.jpeg',
            birthdate: '',
            error: null
        }
    },
    methods: {
        authenticate() {
            // const file = document.querySelector('input[type=file]').files[0];
            //     this.picture = file;
                // console.log(file);
            let config = {
                region: "ap-south-1",
                IdentityPoolId:"ap-south-1_qKCtKeFRz", 
                UserPoolId: "ap-south-1:51e1baa7-14e4-457b-a492-9bbf99abb706",
                ClientId: "1jpk9cqb31k6p3flhljucf9j7g"
            }
            this.cognitoAuth.configure(config)
                this.cognitoAuth.signup(
                    this.username,
                    this.pass,
                    this.name,
                    this.picture,
                    this.email,
                    this.gender,
                    this.birthdate,
                    this.phone_number,
                    this.address,
                    (err, result) => {
                        if (err) {
                            this.error = err;
                        } else {
                            this.$router.replace({ path: "/Confirm" });
                        }
                    }
                );
            },
            
        }
    }
</script>



<style scoped>
.card {
    width: 100%;
    height: 100%;
    margin-top: 1%;
    align-items: center;
    border: none;
}
input[type=text],[type="file"],[type="date"], select, textarea {
  width: 100%;
  padding: 0.375rem 0.75rem;
  margin: 0 0 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 100%;
  background-color: #A435F0;
  color: white;
  padding: 0.375rem 0.75rem;;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: white;
  color: black;
}

.password-container{
  width: 100%;
  position: relative;
}
.password-container input[type="password"],
.password-container input[type="text"]{
  width: 100%;
  padding: 0.375rem 0.75rem;
  /* padding: 12px 36px 12px 12px; */
  box-sizing: border-box;
  margin: 0 0 8px 0;
}
.hj{
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
.social-media button{
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
.signup-page a{
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
    margin: auto;
    background-color: #fa3254;
    margin: 0;
    width: 100%;
    padding: 0px 40px;
  }

  button i {
    font-size: 18px;
  }
</style>