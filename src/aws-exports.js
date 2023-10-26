/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_B1E7wRotL",
    "aws_user_pools_web_client_id": "5v5s5cpgi58obounk00n2md9ab",
    "oauth": {
        "domain": "skillmeridiandev.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "email",
            "openid",
            "phone"
        ],
        "redirectSignIn": "http://localhost:5173/",
        "redirectSignOut": "http://localhost:5173/Login",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "FACEBOOK",
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "NAME"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": [
            "REQUIRES_LOWERCASE",
            "REQUIRES_UPPERCASE",
            "REQUIRES_NUMBERS",
            "REQUIRES_SYMBOLS"
        ]
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL",
        "PHONE_NUMBER"
    ]
};


export default awsmobile;
