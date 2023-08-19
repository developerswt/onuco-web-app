<script>
import { Authenticator } from '@aws-amplify/ui-vue';
import { Auth } from 'aws-amplify';

export default {
  components: {
      Authenticator,
  },
  data() {
      return {
          formFields: {
              signIn: {
                  username: {
                      placeholder: 'Enter Your Username Here',
                      isRequired: true,
                      label: 'Username:'
                  },
              },
              signUp: {
                  username: {
                      placeholder: 'Email or Phone_number (Include +91)',
                      required: true,
                      label: 'Username:',
                      order: 1,
                      custom: true,
                      validate: this.customSignUpValidation
                  },
                  email: {
                      placeholder: 'Enter Your Email Here',
                      isRequired: true,
                      label: 'Email:',
                      required: true,
                      custom: true,
                      validate: this.customSignUpValidation
                  },
                  name: {
                      placeholder: 'Enter Your Name Here',
                      isRequired: true,
                      label: 'Name:',
                      required: true,
                      custom: true,
                      validate: this.customSignUpValidation
                  },
                  birthdate: {
                      isRequired: true,
                      label: 'Birth Date:',
                      required: true,
                      custom: true,
                      validate: this.customSignUpValidation
                  },
                  phone_number: {
                      placeholder: 'Enter Your Phone_Number Here',
                      isRequired: true,
                      label: 'Phone Number:',
                      required: true,
                      dialCode: '+91',
                      custom: true,
                      validate: this.customSignUpValidation
                  },
                  address: {
                      placeholder: 'Enter Your Address Here',
                      isRequired: true,
                      label: 'Address:',
                      required: true,
                      custom: true,
                      validate: this.customSignUpValidation
                  },
                  gender: {
                      placeholder: 'Enter Your Gender Here',
                      label: 'Gender',
                      type: 'text',
                      required: true,
                      custom: true,
                      validate: this.customSignUpValidation
                  },
                  picture: {
                      placeholder: 'Enter Your Picture Here',
                      label: 'Picture',
                      type: 'text',
                      required: true,
                      custom: true,
                      validate: this.customSignUpValidation
                  },
              },
          },    
          // authConfig: {
          //   signUpConfig: {
          //     validate: this.customSignUpValidation,
          //   },
          // },
      }
  },
  
  methods: {
     
    async customSignUpValidation(formData) {
          // Implement your custom validation logic here
          const errors = {};

          if (!formData.username) {
              errors.username = 'Username is required.';
          }
          
          if (!formData.name) {
              this.errors.name = 'First name is required';
          } else if (formData.name.length < 2) {
              this.errors.name = 'First name must be at least 2 characters long';
          } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
              this.errors.name = 'First name can only contain letters';
          }

          // Add more custom validation rules as needed

          if (Object.keys(errors).length === 0) {
              // If there are no errors, call the default Amplify signUp function
              await Auth.signUp({
                  username: formData.username,
                  password: formData.password,
                  name: formData.name,
                  // Other signUp attributes
              });
          }

          return errors;
      },
  },
};
</script>



<template>
    <authenticator :login-mechanisms="['username']" :form-fields="formFields" :social-providers="['facebook', 'google']" class="pt-3" style="margin-bottom: 6%;">
      <template v-slot:header>
        <div style="padding: var(--amplify-space-large); text-align: center">
          <img
            class="amplify-image pt-5"
            alt="Amplify logo"
            src="../assets/images/logo.png"
          />
        </div>
      </template>
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator>
  </template>
  

<style scoped>
.amplify-button[data-variation='primary'] {
  background: linear-gradient(
    to right,
    var(--amplify-colors-green-80),
    var(--amplify-colors-orange-40)
  );
  
}
</style>