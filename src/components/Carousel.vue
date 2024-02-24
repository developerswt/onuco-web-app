<template>
  <div class="container-fluid carousel_header">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000">
      <ol class="carousel-indicators">
        <li v-for="(item, index) in getLinks()" :key="index" :data-target="'#myCarousel'" :data-slide-to="index" :class="{ 'active': index === 0 }"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(item, index) in getLinks()" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
          <img 
            v-if="item.hyperlink" 
            :src="item.bannerlink" 
            :alt="'Banner ' + (index + 1)"
            class="d-block w-100 img-fluid"
            @click="redirectToLink(item.hyperlink)"
          >
          <img 
            v-else 
            :src="item.bannerlink" 
            :alt="'Banner ' + (index + 1)"
            class="d-block w-100 img-fluid1"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from '../config/axiosInstance'

export default {
  name: 'CarouselView',
  data() {
    return {
      bannerImg: []
    }
  },
  async created() {
    try {
      const res = await axiosInstance.get(`/Bannerimages`);
      this.bannerImg = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    getLinks() {
      return this.bannerImg[0] && this.bannerImg[0].links || [];
    },
    redirectToLink(link) {
      window.location.href = link;
    }
  },
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
  cursor: pointer;
}
.img-fluid1 {
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
