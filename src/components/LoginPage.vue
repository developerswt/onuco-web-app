<script>
import { Authenticator } from '@aws-amplify/ui-vue';
import { Auth } from 'aws-amplify';
import { I18n } from 'aws-amplify';

I18n.putVocabulariesForLanguage('en', {
  'Sign In': 'Login', // Tab header
  'Sign in': 'Log in', // Button label,
  'Create Account': 'Register', // Tab header
  'Create a new account': 'New User', // Header text
  'Sign in to your account': 'Welcome Back!',
  Username: 'Enter your username', // Username label
  Password: '', // Password label
  'Forgot your password?': 'Reset Password',
});

export default {
  components: {
      Authenticator,
  },
  data() {
      return {
        authState: 'signUp',
        theme: {
            name: 'pretty-princess',
            tokens: {
                colors: {
                    background: {
                        primary: { value: 'hotpink'}
                    }
                }
            }
        },
          formFields: {
              signIn: {
                  username: {
                      placeholder: 'Email or Phone_number (Include +91)',
                      isRequired: true,
                      label: 'Username:',
                      pattern: ''
                  },
              },
              signUp: {
                  username: {
                      placeholder: 'Email or Phone_number (Include +91)',
                      required: true,
                      label: 'Username:',
                      order: 1,
                      custom: true,
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
  setAuthState(state) {
      this.authState = state;
    },
    customSignUpValidation(username) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phonePattern = /^(?:\+\d{1,2}\s?)?\d{10}$/;

      if (emailPattern.test(username) || phonePattern.test(username)) {
        return true;
      } else {
        return 'Invalid username. Please enter a valid email or phone number.';
      }
    },
}
  
};
</script>



<template>
    <div class="login_class">
    <authenticator class="custom-sign-in" :authState="authState" :theme=theme :style="buttonStyle" :login-mechanisms="['username']" :form-fields="formFields" :sign-up-attributes="['name',]" :social-providers="['facebook', 'google']">
        
      <template v-slot:icon-facebook>
        <div style="padding: var(--amplify-space-large);">
      <img src="../assets/images/Icon awesome-facebook.png" alt="Facebook" />
    </div>
    </template>
   

        <template v-slot:header>
        <div style="padding: var(--amplify-space-large); text-align: center">
          <!-- <img
            class="amplify-image pt-5"
            alt="Amplify logo"
            src="../assets/images/logo.png"
          /> -->
        </div>
      </template>
        
        <template v-slot="{ user, signOut }">
            <h1>Hello {{ user.username }}!</h1>
            <button @click="signOut">Sign Out</button>
        </template>
  
    </authenticator>
    </div>
    <div class="container-fluid"></div>
  </template>
  

<style scoped>


.amplify-button[data-variation='primary'] {
  background: linear-gradient(
    to right,
    var(var(--amplify-colors-background-tertiary)),
    
  );
  
}
.amplify-card {
  /* background-color: var(--amplify-colors-background-secondary); */
  box-shadow: 0px 3px 6px #00000029;
  border: none;
}

.amplify-heading--6 {
  color: var(--amplify-colors-brand-secondary-80);
}
.amplify-text {
  color: var(--amplify-colors-neutral-80);
}
.amplify-tabs-item {
    color: #0066CC !important;
}
.authenticator {
    --background-color: lightblue;
}
[data-amplify-authenticator] {
  --amplify-colors-background-primary: var(--amplify-colors-neutral-90);
  --amplify-colors-background-secondary: var(--amplify-colors-neutral-100);
  --amplify-colors-brand-primary-10: var(--amplify-colors-teal-100);
  --amplify-colors-brand-primary-80: var(--amplify-colors-teal-40);
  --amplify-colors-brand-primary-90: var(--amplify-colors-teal-20);
  --amplify-colors-brand-primary-100: var(--amplify-colors-teal-10);
  --amplify-colors-font-interactive: var(--amplify-colors-white);
  --amplify-components-tabs-item-active-color: var(--amplify-colors-white);
  --amplify-components-tabs-item-focus-color: var(--amplify-colors-white);
  --amplify-components-tabs-item-hover-color: var(--amplify-colors-orange);
}
.amplify-divider--label:after {
    content: attr(data-label);
    position: absolute;
    transform: translateY(-50%);
    font-size: var(--amplify-components-divider-label-font-size);
    padding-inline: var(--amplify-components-divider-label-padding-inline);
    /* background-color: var(--amplify-components-divider-label-background-color); */
    color: black;
}
.amplify-input .amplify-field-group__control {
    background-color: gray !important;
}
.login_class {
    padding-top: 4%;
    z-index: 1;
}
@media screen and (max-width: 600px) {
    .login_class {
        padding: 15px;
    }
}
.container-fluid {
    width: 100%;
    height: 272px;
    background-image: url('../assets/images/Group 246.png');

}

</style>