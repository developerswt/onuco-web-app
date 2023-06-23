<template>
    <div class="container-fluid jk">
        <h3>InformationTechnology</h3>
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/Rajivi.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Rajiv Gandhi University of Health Sciences</h5>
                            <span>Public university in Bengaluru, Karnataka</span><br>
                            <router-link to="/CollegeDetails" style="text-decoration: none;" ><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/vtu.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Visvesvaraya Technological University (VTU)</h5>
                            <span>Public university in Belgaum, Karnataka</span><br>
                            <router-link to="/CollegeDetails" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/reva.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Christ University</h5>
                            <span>Deemed university in Bengaluru, Karnataka</span><br>
                            <router-link to="/CollegeDetails" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/chirst.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Manipal Academy of Higher Education (MAHE)</h5>
                            <span>Private university in Manipal, Karnataka</span><br>
                            <router-link to="/CollegeDetails" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/indian.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Indian Institute of Science</h5>
                            <span>Public university in Bengaluru, Karnataka</span><br>
                            <router-link to="/CollegeDetails" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InformationTechnology'
}
</script>


<style scoped>
.jk {
    padding-top: 5%;
}
@media only screen and (max-width: 600px) and (min-width: 100px) {
    .jk {
        padding-top: 22%;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 650px) {
    .jk {
        padding-top: 10%;
    }
}
@keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(10px, 0);
  }
}
.arrow1 {
  animation: slide1 1s ease-in-out infinite;
  margin-left: 9px;
}

.kl {
  border-radius: 25px;
  background: #0d4b7e;
  color: #fff;
  font-weight: normal;
  margin-top: 10%;
}

.kl:hover  {
  color: black;
  background-color: white;
}
</style>