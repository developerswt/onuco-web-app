<template>
    <div class="container">
        <div class="card box-design">
            <h2>Account Deactivation</h2>
            <hr>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="deactivate_input_box">
                            <h3>Deactivate ?</h3>
                            <p><input type="checkbox" v-model="isChecked"> &nbsp;Yes, I want to deactivate my account</p>
                            <button class="delete_profile_request" :style="{ opacity: isChecked ? 1 : 0.5 }" :disabled="!isChecked" @click="deleteProfile">Deactivate account</button>
                            <p v-if="showErrorMessage" class="error-message">
                                Services is not available.
                            </p>
                            <p v-if="showSuccessMessage" class="success-message">
                                Account will be deactivated in 24 hours
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="deactivate_paragraph">
                            <h3>Deactivating your account</h3>
                            <p>If you are sure that you want to deactivate your Onuco account, you may want to Return to your notes and delete any private notes, then Empty the Trash to permanently delete these notes. (Onuco does not automatically delete your notes.) Then, return to this page to complete the process.</p>
                            <p>When your account is deactivated, you will be logged out of Onuco, and this account will no longer be usable.You will not be able to create another Onuco account with your same email address. To change your email address, go to the Settings page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    

</template>


<script>
import axiosInstance from '../config/axiosInstance'

export default {
    name: 'DeactivationRequest',
    data() {
        return {
            isChecked: false,
            showErrorMessage: false,
            showSuccessMessage: false,
        }
    },    
    methods: {
        async deleteProfile() {
            try {
                const response = await axiosInstance.post('/DeleteProfile');
                if(response.status === 200) {
                    this.showSuccessMessage = true;
                    setTimeout(() => {
                        this.$router.push('/');
                    },2000)
                } else {
                    this.showErrorMessage = true;
                }
            } catch (error) {
                this.showErrorMessage = true;
                console.error('Error:', error);
            }
        },
    },    
}
</script>

<style scoped>
.box-design {
    padding: 20px 10px;
    margin-bottom: 2%;
}
.box-design h2 {
    font-size: 24px;
    padding-left: 2%;
    font-family: 'Times New Roman', Times, serif;
}
.delete_profile_request {
    border: 1px solid green;
    border-radius: 4px;
    opacity: 1;
    margin-left: 16px;
    background-color: green;
}
.delete_profile_request {
    color: #FFF;
    padding: 6px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 0px 0px;
    cursor: pointer;
}
.deactivate_input_box {
    margin-bottom: 5%;
}
.deactivate_input_box h3 {
    font-size: 22px;
    font-family: 'Times New Roman', Times, serif;
}
.deactivate_input_box p{
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
}
.deactivate_paragraph h3 {
    font-size: 22px;
    font-family: 'Times New Roman', Times, serif;
}
.deactivate_paragraph p{
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
}
.deactivate_paragraph {
    background-color: #D3D3D3;
    padding: 10px 20px;
}
.error-message {
    color: red;
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
}

.success-message {
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
    font-weight: normal;
    color: green;
}
</style>
