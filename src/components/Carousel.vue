<template>
<!--     
  <el-carousel :interval="4000" type="card" height="300px" class="mt-5 pt-5">
    <el-carousel-item>
      <img src="../assets/images/onlineteaching1.jpeg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/images/onlineteaching2.jpeg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/images/onlineteaching3.jpeg">
    </el-carousel-item>
    <el-carousel-item>
      <img src="../assets/images/onlineteaching4.webp">
    </el-carousel-item>
  </el-carousel> -->
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block" src="../assets/images/1.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block" src="../assets/images/2.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block" src="../assets/images/3.jpg" alt="Third slide">
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
.carousel {
  padding-top: 55px;
}
.carousel-item img {
  width: 100%;
  height: 450px;
}
@media screen and (max-width: 600px) {
  .carousel-item img {
      width: 100%;
      height: 300px;
  }
}
</style>