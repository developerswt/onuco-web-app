<template>
    <div class="container-fluid jk">
        <h3>Engineering</h3>
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/computer.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Computer Science</h5>
                            <router-link to="/ComputerScience" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/E&C.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">E&C</h5>
                            <router-link to="/Ece" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/Information.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Information Science</h5>
                            <router-link to="/InformationTechnology" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/mech.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Mech</h5>
                            <router-link to="/Mech" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/cvil.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Cvil</h5>
                            <router-link to="/Cvil" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EngineeringView'
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
  margin-top: 2%;
}

.kl:hover  {
  color: black;
  background-color: white;
}
</style>