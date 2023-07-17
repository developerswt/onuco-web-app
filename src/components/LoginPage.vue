<template>
    <div class="container-fluid">
        <div class="container pt-5">
            <div class="card">
                <div class="card-body">
                    <h3 style="font-size: 20px;">Log in and start learning</h3>
                    <div class="card-panel red darken-2" v-if="error != null">
                        <span class="white-text">{{ error.message }}</span>
                    </div>
                    <form  class="pt-3" @submit.prevent="login">
                        <label for="fname">Name</label>
                        <input type="text" id="fname" v-model="username" name="firstname" placeholder="Your name..">
    
                        <div class="password-container">
                            <label for="password">Password</label>
                            <input v-bind:type="[showPassword ? 'text' : 'password']" v-model="pass" class="" placeholder="Password">
                            <div class="">
                                <span class="hj" @click="showPassword = !showPassword">
                                    <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <div class="center-align">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                        <div class="forget-password">
                            Or &nbsp;
                            <a href="#" style="text-decoration:none;">Forget Password</a>
                        </div>
                        <div class="social-media">
                            <button type="button" class="btn btn-outline-dark"><img src="../assets/images/google.png">Continue with Google</button>
                        </div> 
                        <div class="social-media">
                            <button type="button" class="btn btn-outline-dark"><img src="../assets/images/facebook.png">Continue with Facebook</button>
                        </div>
                        <div class="social-media">
                            <button type="button" class="btn btn-outline-dark"><img src="../assets/images/twitter.png">Continue with Twitter</button>
                        </div> 
                        <hr style="background-color: blue;">
                        <div class="signup-page">
                            <p>Don't have an account? <a href="/Signup">Sign up</a></p>
                        </div>  
                    </form>
                </div>
            </div>
        </div>
    </div>        
</template>

<script>
//import CognitoAuth from '../cognito/cognito'

export default {
    name: 'LoginPage',
    data() {
        return {
            //cognitoAuth: new CognitoAuth(),
            showPassword: false,
            username: '',
            pass: '',
            error: null
        }
    },
    methods: {
        login() {
        let config = {
          region: "ap-south-1",
          IdentityPoolId: "ap-south-1_qKCtKeFRz",
          UserPoolId: "ap-south-1:51e1baa7-14e4-457b-a492-9bbf99abb706",
          ClientId: "1jpk9cqb31k6p3flhljucf9j7g"
      }
    //   this.cognitoAuth.configure(config)
      
    //   this.cognitoAuth.authenticate(
    //     this.username,
    //     this.pass,
    //     (err, result) => {
    //       if (err.statusCode !== 200) {
    //         console.log(err);
    //         this.error = err;
    //       } else {
    //         this.$router.replace("/profile");
    //       }
    //     }
    //   );
    }
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
input[type=text] {
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
button {
    
    width: 100%;
    padding: 0px 40px;
}


</style>