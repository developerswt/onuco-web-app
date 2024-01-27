<template>
  <div class="container-fluid carousel_header">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000">
      <ol class="carousel-indicators">
        <li v-for="(img, index) in bannerImg" :key="index" :data-target="'#myCarousel'" :data-slide-to="index" :class="{ 'active': index === 0 }"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(img, index) in bannerImg" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
          <img :src="img" :alt="'Banner ' + (index + 1)" class="d-block w-100 img-fluid">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselView',
  data() {
    return {
      bannerImg: [
        'https://dev.skillmeridiandev.tech/assets/images/B_1.png',
        'https://dev.skillmeridiandev.tech/assets/images/B_2.png',
        'https://dev.skillmeridiandev.tech/assets/images/B_3.png',
        'https://dev.skillmeridiandev.tech/assets/images/B_4.png',
        'https://dev.skillmeridiandev.tech/assets/images/B_5.png',
      ]
    }
  }
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
.img-fluid {
  height: 250px;
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
