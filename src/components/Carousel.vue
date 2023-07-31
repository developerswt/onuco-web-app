<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">

        <img class="img-fluid" src="../assets/images/1.png" alt="First slide">


      </div>
      <div class="carousel-item">
        <img class="img-fluid" src="../assets/images/2.png" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="img-fluid" src="../assets/images/3.jpg" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CarouselView'
}
</script>

<style scoped>
.el-carousel__item img {
  /* color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center; */
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 600px) {
  .el-carousel {
    height: 300px;
    width: 100%;
  }

  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item {
    height: 300px;
    width: 100%;
  }
}
@media (min-width : 768px) and (min-width : 991.92px)  {
  .carousel-item img{
    width: 100%;
    height: 350px;
  }
  .carousel-item{
    height: auto !important;
  }
  
}

.carousel {
  margin-top: 90px;

}

.carousel-item img {
  width: 100%;
  height: 350px;
  object-fit: contain;
  padding: 20px;

}

@media screen and (max-width: 768px) {
  .carousel-item img {
    width: 100%;
    height: 300px;
  }

  .carousel-item {
    height: auto !important;
  }
}

.carousel-item {

  height: 350px;
  width: 100%;
  background: white;

}</style>