<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="parent_class">
          <div class="child_class">
            <div class="row">
              <div class="col-lg-8">
                <div class="right_carousel_block">
                  <h4>One App Many Benifits</h4>
                  <p>An Affordable learning platform <br> for better academic results</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="image_class">
                  <img src="../assets/images/mg25.png" class="img-fluid">
                </div>
              </div>
              <div class="col-lg-12">
                <div class="merged_block">
                  <div class="row">
                    <div class="col-lg-8">
                      <input type="text" id="carousel_input" placeholder="Your@email address">
                    </div>
                    <div class="col-lg-4">
                      <button id="carousel_button">Free Sign up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="parent_class">
          <div class="child_class_one">
            <div class="right_carousel_block">
              <h4>Refer a Friend</h4>
            </div>
          </div>
        </div>
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

@media (min-width : 768px) and (min-width : 991.92px) {
  .carousel-item img {
    width: 100%;
    height: 350px;
  }

  .carousel-item {
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
  padding: 10px;
  margin-top: -112px;
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


}

.parent_class {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 50px;
}

.child_class {
  padding: 20px;
  margin: 0 auto;
  background: transparent linear-gradient(180deg, #E6BAFF 0%, #5E69FF 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  height: 227px;
}

.child_class_one {
  padding: 20px;
  margin: 0 auto;
  background: transparent linear-gradient(180deg, #E6BAFF 0%, #5E69FF 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  height: 227px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right_carousel_block {
  padding: 10px;
  color: white;
}

#carousel_input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px 0px 0px 10px;

}

#carousel_button {
  height: 45px;
  padding: 0px 50px 0px 50px;
  background: white;
  color: #0066CC;
  border-radius: 22px;
  float: right;
}

.merged_block {
  border: 1px solid white;
  border-radius: 30px;
  padding: 4px;
  margin-top: -118px;
}

#carousel_input::placeholder {
  color: white !important;
}

.carousel-control-prev-icon {
  background: url('../assets/images/left-arrow.png');
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;
}

.carousel-control-next-icon {
  background: url('../assets/images/right-arrow.png');
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;

}

</style>