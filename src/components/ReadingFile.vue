<template>
    <div class="login-box pt-5" style="margin-top: 5%;">
      <h4>LOGIN</h4>
      <div class="card-panel red darken-2" v-if="error != null">
        <span class="white-text">{{ error.message }}</span>
      </div>
      <p>Login to upload your own images to the site!</p>
      <form @submit.prevent="login">
        <div class="input-field">
          <input
            id="username"
            type="text"
            class="validate"
            v-model="username"
            required
          />
          <label for="username">Username</label>
        </div>
        <div class="input-field">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="pass"
            required
          />
          <label for="password">Password</label>
        </div>
        <div class="center-align">
          <button class="btn btn-default btn-large">login</button>
          <br />
          <p>
            Don't have an account? -
            <router-link to="Register">Register Now</router-link>
          </p>
        </div>
      </form>
    </div>

    <div>
      <button @click="clickButton()">Click</button>
    </div>
  </template>
  <script>
  import CognitoAuth from "../cognito/cognito";
  import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

export default {
  name: "ReadingFile",
  
  // let  cognitoAuth = new cognitoAuth;
  data() {
    return {
      s3Credential: {
        accessKeyId: "AKIAWTYHL72QB7Z2NM4X",
        secretAccessKey: "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",
      },
      cognitoAuth: new CognitoAuth(),
      client : new S3Client({
        region: "us-east-1",
        credentials: this.s3Credential,
        // sessionToken: "SessionToken"
      }),
      username: "",
      pass: "",
      error: null,
      loading: false
    };
  },
  methods: { 
    login() {
      let config = {
          region: "us-east-1",
          IdentityPoolId: "us-east-1_ZisZEaT7F",
          UserPoolId: "us-east-1:5dd60135-9878-41af-9d77-0757ca6dd06f",
          ClientId: "4gbnl5irgm33pb9i34d7o11kgg"
      }
      this.cognitoAuth.configure(config)
      this.loading = true;
      this.cognitoAuth.authenticate(
        this.username,
        this.pass,
        (err, result) => {
          if (err.statusCode !== 200) {
            console.log(err);
            console.log(result);
                this.error = err;
            } else {
                this.$router.replace("/profile");
            }
            }
        );
        },
        async clickButton(){
          console.log("Hi");
          const command = new GetObjectCommand({
            Bucket: "onuco-s3",
            Key: "cognito.txt"
          });
          try {
            console.log(this.client);
            const response = this.client.send(command);
            console.log(response);
          // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
            const str = response.Body.transformToString();
            console.log(str);
          } catch (err) {
            console.error(err);
          }
        }
    }
    
    };
</script>
<style>
    /* h4 {
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
    }
    button {
    margin: auto;
    background-color: #fa3254;
    margin: 0;
    padding: 0px 40px;
    }

    button i {
    font-size: 18px;
    } */
</style>