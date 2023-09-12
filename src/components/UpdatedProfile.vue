<template>
    <div class="container-fluid">
        <div class="updated_Profile">
            <h2>Updated Profile</h2>
        </div>
        <div class="col-sm-12">
            <div class="card">
                <img src="../assets/images/MaskGroup1.png" class="card-img-top rounded-circle" style="width: 40%; height: 40%; padding-top: 3%;" alt={elonMusk} />
                <div class="card-body">
                    <h5>Vijayakumar</h5>
                    <h5>Male</h5>
                    <h5>09/11/2023</h5>
                    <h5>vijaya.kumar@quantumberg.com</h5>
                    <h5>Bannergatta Road</h5>
                </div>
            </div>
        </div>    
    </div>    
</template>

<script>

export default {
    name: 'UpdatedProfile'
}
</script>

<style scoped>
.updated_Profile {
    margin-top: 5%;
}
.updated_Profile h2 {
    padding-top: 2%;
    font-size: 20px;
    text-align: center;
}
.card {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 35%;
    margin-top: 3%;
    margin-bottom: 10%;
}
h5 {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>