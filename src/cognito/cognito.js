import { Config, CognitoIdentityCredentials } from "aws-sdk";
import {
  CognitoUser,
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUserAttribute
} from "amazon-cognito-identity-js";

export default class CognitoAuth {
    constructor() {
        this.userSession = null;
    }
    isAuthenticated (cb) {
        let cognitoUser = this.getCurrentUser()
        if (cognitoUser != null) {
            cognitoUser.getSession((err, session) => {
                if (err) {
                    return cb(err, false)
                }
                return cb(null, true)
            })
        } else {
            cb(null, false)
        }
    }
    configure (config) {
    if (typeof config !== 'object' || Array.isArray(config)) {
        throw new Error('[CognitoAuth error] valid option object required')
    }
    this.userPool = new CognitoUserPool({
        UserPoolId: config.IdentityPoolId,
        ClientId: config.ClientId
    })
    Config.region = config.region
    Config.credentials = new CognitoIdentityCredentials({
        IdentityPoolId: config.IdentityPoolId
    })
    this.options = config
}  
signup(username, pass, name, file, email, gender, birthdate, phone_number, address, cb) {
    let attributeList = [
        new CognitoUserAttribute({
            Name: 'name',
            Value: name,
        }),
        new CognitoUserAttribute({    
            Name: 'picture',
            Value: file,
        }),
        new CognitoUserAttribute({    
            Name: 'email',
            Value: email,
        }),
        new CognitoUserAttribute({
            Name: 'gender',
            Value: gender,
        }),
        new CognitoUserAttribute({
            Name: 'birthdate',
            Value: birthdate,
        }),
        new CognitoUserAttribute({
            Name : 'phone_number',
            Value : phone_number
        }),
        new CognitoUserAttribute({
            Name: 'address',
            Value: address,
        }),
    ]
    this.userPool.signUp(username, pass, attributeList, null, cb)
}
authenticate (username, pass) {
    var authenticationData = {Username : username, Password : pass};
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    // var poolData = { UserPoolId : this.UserPoolId,
    //     ClientId : this.ClientId
    // };
    // var userPool = new CognitoUserPool(poolData);
    var userData = {
        Username : username,
        Pool : this.userPool
    };
    var cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();
            console.log(accessToken);
            
            var idToken = result.idToken.jwtToken;
            console.log(idToken);
        },

        onFailure: function(err) {
            alert(err);
        },

});
    
}
getCurrentUser () {
    return this.userPool.getCurrentUser()
}

confirmRegistration (username, code, cb) {
    let cognitoUser = new CognitoUser({
        Username: username,
        Pool: this.userPool
    })
    cognitoUser.confirmRegistration(code, true, cb)
}

/**
  * Logout of your cognito session.
  */
logout () {
    this.getCurrentUser().signOut()
    this.onChange(false)
}

/**
* Resolves the current token based on a user session. If there
* is no session it returns null.
* @param {*} cb callback
*/
getIdToken (cb) {
    if (this.getCurrentUser() == null) {
        return cb(null, null)
    }
    this.getCurrentUser().getSession((err, session) => {
        if (err) return cb(err)
        if (session.isValid()) {
        return cb(null, session.getIdToken().getJwtToken())
        }
        cb(Error('Session is invalid'))
    })
}
}