<template>
  <div class="container-fluid  carousel_header">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <img src="../assets/images/B_1.png" alt="Banner 1" class="d-block w-100 img-fluid">
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <img src="../assets/images/B_2.png" alt="Banner 2" class="d-block w-100 img-fluid">
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <img src="../assets/images/B_3.png" alt="Banner 3" class="d-block w-100 img-fluid">
        </div>

        <!-- Slide 4 -->
        <div class="carousel-item">
          <img src="../assets/images/B_4.png" alt="Banner 4" class="d-block w-100 img-fluid">
        </div>

        <!-- Slide 5 -->
        <div class="carousel-item">
          <img src="../assets/images/B_5.png" alt="Banner 5" class="d-block w-100 img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselView',
}
</script>

<style scoped>
.carousel_header {
  padding-top: 4%;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  position: relative;
  top: 10%;
  border-radius: 100%;
}

.carousel-indicators .active {
  border-radius: 15px;
  width: 22px;
  height: 10px;
  background: #FF9924 0% 0% no-repeat padding-box;
}

@media (max-width: 540px) {
  .carousel_header {
    padding-top: 20%;
  }
  .img-fluid {
    height: 150px; /* Adjust the height as needed */
  }
}
</style>
