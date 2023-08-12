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
                        placeholder: 'Email Or Phone_number (+91 Include)',
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
                    // name: {
                    //     placeholder: 'Enter Your Name Here',
                    //     isRequired: true,
                    //     label: 'Name:',
                    //     required: true,
                    //     custom: true,
                    //     validate: this.customSignUpValidation
                    // },
                    // birthdate: {
                    //     isRequired: true,
                    //     label: 'Birth Date:',
                    //     required: true,
                    //     custom: true,
                    //     validate: this.customSignUpValidation
                    // },
                    phone_number: {
                        placeholder: 'Enter Your Phone_Number Here',
                        isRequired: true,
                        label: 'Phone Number:',
                        required: true,
                        dialCode: '+91',
                        custom: true,
                        validate: this.customSignUpValidation
                    },
                    // address: {
                    //     placeholder: 'Enter Your Address Here',
                    //     isRequired: true,
                    //     label: 'Address:',
                    //     required: true,
                    //     custom: true,
                    //     validate: this.customSignUpValidation
                    // },
                    // gender: {
                    //     placeholder: 'Enter Your Gender Here',
                    //     label: 'Gender',
                    //     type: 'text',
                    //     required: true,
                    //     custom: true,
                    //     validate: this.customSignUpValidation
                    // },
                    // picture: {
                    //     placeholder: 'Enter Your Picture Here',
                    //     label: 'Picture',
                    //     type: 'text',
                    //     required: true,
                    //     custom: true,
                    //     validate: this.customSignUpValidation
                    // },
                },
            },    
            // authConfig: {
            //   signUpConfig: {
            //     validate: this.customSignUpValidation,
            //   },
            // },
        }
    },
}  

</script>

<template>
    <authenticator :login-mechanisms="['username']" :sign-up-attributes="[]" :form-fields="formFields" :social-providers="['facebook', 'google']" class="pt-3" style="margin-bottom: 6%;">
      <template v-slot:header>
        <div style="padding: var(--amplify-space-large); text-align: center">
          <img
            class="amplify-image" style="margin-top: 18%;"
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