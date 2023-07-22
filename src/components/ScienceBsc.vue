<template>
    <div class="container-fluid jk">
        <h3>Science(Bsc)</h3>
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%">
                        <img src="../assets/images/computer.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Bachelor of Computer Science</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/physics.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Physics</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/chemistry.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Chemistry</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/maths.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Mathematics</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/biology.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Biotechnology</h5>
                            <router-link to="" style="text-decoration: none;"><button class="btn kl">Learn More&nbsp;<i class="fa fa-arrow-right arrow1" aria-hidden="true"></i></button></router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 100%; height: 100%;">
                        <img src="../assets/images/Agriculture.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Agriculture</h5>
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
    name: 'BachelorofScience'
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