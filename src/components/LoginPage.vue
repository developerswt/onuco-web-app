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
    <div class="login_class">
    <authenticator class="custom-sign-in" :theme=theme :style="buttonStyle" :login-mechanisms="['username']" :form-fields="formFields" :social-providers="['facebook', 'google']"  style="background-color: none;">
        
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