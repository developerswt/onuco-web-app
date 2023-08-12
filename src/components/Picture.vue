<template>
    <div class="container-fluid padding_top">
        <!-- <h4>Upload Image</h4> -->
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="row change_column">
                        <div class="col-sm-6">
                            <h3>Upload Image</h3>
                            <div class="box">
                                <div class="contents">
                                    <p>Click button to choose file</p>
                                    <!-- <input type="file" id="myfile" name="myfile" style="margin-left: -8%;"><br><br>
                                    <button type="button" class="btn-success">Upload File</button> -->
                                    <form @submit.prevent="uploadFile">
                                        <input type="file" ref="fileInput" /><br><br>
                                        <button class="btns" type="submit">Upload File</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <img src="../assets/images/picture.webp" style="width: 50%; height: 100%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PictureView',
    methods: {
        async uploadFile() {
            const fileInput = this.$refs.fileInput;

            if (!fileInput.files.length) {
                return;
            }

            const file = fileInput.files[0];

            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await axios.post('https://localhost:7078/api/UploadFiles/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
        
                console.log('File uploaded successfully!', response);
            } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
  }
}
</script>

<style scoped>
.padding_top {
    margin-top: 5%; 
    padding-top: 3%;
    margin-bottom: 30%;
}
h4 {
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h3 {
    padding: 36px 30px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 26px;
    font-weight: bold;
}
/* .box {
  background-color: #EFF5FC;
  width: 450px;
  border: 2px dashed green;
  padding: 50px;
  margin: 30px;
} */
.contents p {
    padding: 20px 69px;
}
.contents form {
    padding: 0px 40px;
}
.btns {
    margin-left: 40px;
    background-color: green;
    color: white;
}
.change_column {
    padding: 0;
    margin: 0;
}
@media screen and (max-width: 912px) {
    .padding_top {
        margin-top: 25%; 
        padding-top: 3%;
        margin-bottom: 30%;
    }
    .change_column {
        display: flex;
        flex-direction: column-reverse;
    }
}
</style>