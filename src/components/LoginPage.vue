<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
 
const formFields = {
  signUp: {
    phone_number: {
      dialCode: '+91'
    },
    gender: {
      placeholder: 'Enter Your Gender Here',
      isRequired: true,
      label: 'Gender:',
      type: "string"
    },
    address: {
      placeholder: 'Enter Your Address Here',
      isRequired: true,
      label: 'Address:',
      type: 'string'
    },
    picture: {
      placeholder: 'Choose Your File Here',
      isRequired: true,
      type: 'string',
      label: 'Picture:',
    },
  },
}


</script>

<template>
    <authenticator :login-mechanisms="['username']" :form-fields="formFields" :social-providers="['facebook', 'google']" class="pt-3" style="margin-bottom: 6%;">
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