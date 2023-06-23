<template>
    <div class="container-fluid jk">
        <h3>Masters</h3>
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%">
                        <img src="../assets/images/mba.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">MBA</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/economic.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Economics</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/Architec.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Architecture</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/biochemistry.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Biochemistry</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/biomedical.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Biomedical science</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/chemicalengineering.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Chemical Engineering</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Masters'
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