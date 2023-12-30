<template>
  <div class="container-fluid mt-5 carousel_header">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>
      <div class=" carousel-inner" style="margin-top: -33px; border-radius: none;">
        <!-- Slide 1 -->
        <div class=" carousel-item active ">
          <div class=" carousel-card" style="height: 260px;">
            <div class=" container">

              <div class="right_carousel_block">
                <!-- <h4>One App Many Benifits</h4>
                  <p>An Affordable learning platform <br>for better academic results</p> -->
                <div class="image_class">
                  <img src="../assets/images/Artboard4.png" class="img-fluid1">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="carousel-card" style="height: 260px; ">
            <div class="image_class">
              <img src="../assets/images/Artboard5.png" class="img-fluid2">
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="carousel-card" style="height: 260px;">
            <div class="image_class">
              <img src="../assets/images/Artboard6.png" class="img-fluid3">
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-card" style="height: 260px;">
            <div class="slider_3">
              <div class="image_class">
                <img src="../assets/images/Artboard10.png" class="img-fluid4">
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-card" style="height: 260px;">
            <div class="slider_3">
              <div class="image_class">
                <img src="../assets/images/Artboard13.png" class="img-fluid5">
              </div>
            </div>
          </div>
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
.carousel-card {
  top: 150px;
  width: 100%;
  height: 202px;
  border-radius: 8px;
  opacity: 1;

}

.carousel_header {
  padding-top: 4%;
}

#carousel_input {
  width: 50%;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px 0px 0px 10px;

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

#carousel_button {
  height: 43px;
  padding: -1px 50px 0px 50px;
  background: white;
  color: #0066CC;
  border-radius: 22px;
  float: right;
}

.merged_block {
  border: 1px solid white;
  border-radius: 30px;
  padding: 0px;
  margin-top: -98px;
  width: 570px;
  height: 44px;


}

#carousel_input::placeholder {
  color: white !important;
}

.right_carousel_block {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

@media screen and (min-width: 100px) and (max-width: 912px) {
  .img-fluid {
    display: none;
  }
}

@media screen and (min-width: 560px) and (max-width: 912px) {
  .search_box {
    margin-top: 20px;
    margin-left: 70px;
    margin-right: 50px;
  }

  .merged_block {
    border: 1px solid white;
    border-radius: 30px;

    margin-top: 70px;
  }

  .right_carousel_block h4 {
    font-size: 25px;
    text-align: left;
    position: relative;
    left: 75px;
    top: 60px;
  }

  .right_carousel_block p {
    font-size: 14px;
    text-align: left;
    position: relative;
    left: 75px;
    top: 70px;
  }

  .slider_2 h3 {
    font-size: 25px;
    color: white;
    text-align: center;
    position: relative;
    top: 105px;
  }

  .carousel-item {
    border-radius: 0;
  }

  .slider_3 h3 {
    font-size: 25px;
    color: white;
    text-align: center;
    position: relative;
    top: 105px;
  }
}

@media screen and (min-width: 300px) and (max-width: 540px) {
  .search_box {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 30px;
  }

  .merged_block {
    border: 1px solid white;
    border-radius: 30px;
    font-size: 13px;
    margin-top: 60px;
    width: 116%;
  }

  .right_carousel_block h4 {
    font-size: 18px;
    text-align: left;
    position: relative;
    left: 35px;
    top: 60px;
    margin-left: -199px;
  }

  .right_carousel_block p {
    font-size: 16px;
    text-align: left;
    position: relative;
    left: 35px;
    top: 70px;
    margin-left: -199px;
  }

  #carousel_button {
    height: 35px;
    padding: 10px 8px 30px 8px;
    background: white;
    color: #0066CC;
    border-radius: 22px;
    float: right;
  }

  .slider_2 h3 {
    font-size: 25px;
    color: white;
    text-align: center;
    position: relative;
    top: 105px;
  }

  .slider_3 h3 {
    font-size: 25px;
    color: white;
    text-align: center;
    position: relative;
    top: 105px;
  }

  #carousel_input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px 0px 0px 10px;
    margin-right: 66px;
  }
}

.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}

#carousel_input {
  margin-right: 170px;
}

@media screen and (min-width: 100px) and (max-width: 300px) {
  .search_box {
    margin-top: 0px;
    margin-left: 38px;
    margin-right: 5px;
  }

  .merged_block {
    border: 1px solid white;
    border-radius: 30px;
    font-size: 10px;
    margin-top: 60px;
    width: 116%;
    height: 35px;
  }

  .right_carousel_block h4 {
    font-size: 18px;
    text-align: left;
    position: relative;
    left: 35px;
    top: 60px;
    margin-left: -199px;
  }

  .right_carousel_block p {
    font-size: 16px;
    text-align: left;
    position: relative;
    left: 35px;
    top: 70px;
    margin-left: -199px;
  }

  #carousel_button {
    height: 35px;
    padding: 1px 8px 30px 8px;
    background: white;
    color: #0066CC;
    border-radius: 22px;
    float: right;
    font-size: 12px;
  }

  .slider_2 h3 {
    font-size: 25px;
    color: white;
    text-align: center;
    position: relative;
    top: 105px;
  }

  .slider_3 h3 {
    font-size: 25px;
    color: white;
    text-align: center;
    position: relative;
    top: 105px;
  }

  #carousel_input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 10px 0px 0px 10px;
    margin-right: 66px;
  }

  .cc {
    margin-top: 5px;
    font-size: 11px;

  }
}

.img-fluid1 {
  /* width: 153%; */
  width: 100%;
  height: 633px;
  opacity: 1;
  position: relative;
  bottom: 174px;
  /* right: 284px; */
}

.img-fluid2 {
  width: 125%;
  height: 625px;
  opacity: 1;
  position: relative;
  bottom: 175px;
  right: 200px;
}

.img-fluid3 {
  width: 125%;
  height: 633px;
  opacity: 1;
  position: relative;
  bottom: 187px;
  right: 163px;
}

.img-fluid4 {
  width: 125%;
  height: 636px;
  opacity: 1;
  position: relative;
  bottom: 174px;
  right: 163px;
}

.img-fluid5 {
  width: 125%;
  height: 633px;
  opacity: 1;
  position: relative;
  bottom: 169px;
  right: 160px;
}

@media (max-width:520px) {
  .img-fluid1 {
    width: 134%;
    height: 534px;
    opacity: 1;
    position: relative;
    bottom: 105px;
    right: 56px;
  }

  .img-fluid2 {
    width: 133%;
    height: 534px;
    opacity: 1;
    position: relative;
    bottom: 109px;
    right: 54px;
  }

  .img-fluid3 {
    width: 133%;
    height: 534px;
    opacity: 1;
    position: relative;
    bottom: 115px;
    right: 54px;
  }

  .img-fluid4 {
    width: 123%;
    height: 636px;
    opacity: 1;
    position: relative;
    bottom: 174px;
    right: 44px;
  }

  .img-fluid5 {
    width: 123%;
    height: 633px;
    opacity: 1;
    position: relative;
    bottom: 169px;
    right: 42px;
  }
}

@media (min-width:540px) and (max-width:912px) {

  .img-fluid1 {
    width: 144%;
    height: 633px;
    opacity: 1;
    position: relative;
    bottom: 174px;
    right: 140px;
  }

  .img-fluid2 {
    width: 123%;
    height: 625px;
    opacity: 1;
    position: relative;
    bottom: 175px;
    right: 109px;
  }

  .img-fluid3 {
    width: 123%;
    height: 633px;
    opacity: 1;
    position: relative;
    bottom: 187px;
    right: 86px;
  }

  .img-fluid4 {
    width: 123%;
    height: 636px;
    opacity: 1;
    position: relative;
    bottom: 174px;
    right: 88px;
  }

  .img-fluid5 {
    width: 124%;
    height: 633px;
    opacity: 1;
    position: relative;
    bottom: 169px;
    right: 90px;
  }
}
</style> 