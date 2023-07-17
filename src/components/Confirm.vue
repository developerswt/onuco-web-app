<template>
    <div class="login-box center-align pt-5" style="margin-top: 10%;">
      <h4>Confirm Signup</h4>
      <div class="card-panel red darken-2" v-if="error != null">
        <span class="white-text">{{ error.message }}</span>
      </div>
      <p>Enter the verification code you should have recieved via email</p>
      <form @submit.prevent="login">
        <label for="username">Username</label>
        <div class="input-field">
          <input
            id="username"
            type="text"
            class="validate"
            v-model="username"
            required
          />
        </div>
        <label for="confirmcode">Confirmation Code</label>
        <div class="input-field">
          <input
            id="confirmcode"
            type="text"
            class="validate"
            v-model="confirmcode"
            required
          />
        </div>
        <div class="center-align">
          <button class="btn btn-default btn-large">Verify Now</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
//import CognitoAuth from '../cognito/cognito'

    export default {
      name: "ConfirmView",
      data() {
        return {
  //        cognitoAuth: new CognitoAuth(),
          username: "",
          confirmcode: "",
          error: null,
    //      loading: false
        };
      },
      methods: {
        login() {
          let config = {
                region: "ap-south-1",
                IdentityPoolId:"ap-south-1_qKCtKeFRz", 
                UserPoolId: "ap-south-1:51e1baa7-14e4-457b-a492-9bbf99abb706",
                ClientId: "1jpk9cqb31k6p3flhljucf9j7g"
            }
        // this.cognitoAuth.configure(config)
        //   this.loading = true;
        //   this.cognitoAuth.confirmRegistration(
        //     this.username,
        //     this.confirmcode,
        //     (err, result) => {
        //       console.log(err);
        //       if (result == "SUCCESS") {
        //         console.log("Successfully Verified");
        //         this.$router.replace("/Login");
        //       } else {
        //         this.error = err;
        //       }
        //     }
        //   );
        }
      }
    };
    //confirmcode
  </script>
  
  <style scoped>
    h4 {
      text-align: center;
      margin: 0;
      padding: 0;
      font-weight: 800;
      font-size: 18px;
    }
    p {
      text-align: center;
      font-size: 14px;
      padding-bottom: 10px;
    }
    .login-box {
      width: 400px;
      height: auto;
      background-color: white;
      margin-top: 60px;
      border-radius: 5px;
      padding: 40px;
      margin: auto;
      border: 1px solid #e4e6e7;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
      margin-bottom: 5%;
    }
    button {
      margin: auto;
      background-color: #fa3254;
      margin-top: 3%;
      width: 100%;
      padding: 3px 40px;
    }
  
    button i {
      font-size: 18px;

    }
    label {
      width: 100%;
    }
    input[type=text] {
      width: 100%;
    }
  </style>