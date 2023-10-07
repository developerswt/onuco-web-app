<template>
  
  <!-- <div class="" style="padding-top: 2%;">
    <div class="container mt-1">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
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
                        <div class="col-lg-8 col-6 col-sm-6">
                          <input type="text" id="carousel_input" placeholder="Your@email address">
                        </div>
                        <div class="col-lg-4 col-6 col-sm-6">
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
              <div class="child_class">
                <div class="row">
                  <div class="col-sm-12">
                      <div class="refers_friend">
                          <h2>Refers A Friend</h2>
                      </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
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
                        <div class="col-lg-8 col-6 col-sm-6">
                          <input type="text" id="carousel_input" placeholder="Your@email address">
                        </div>
                        <div class="col-lg-4 col-6 col-sm-6">
                          <button id="carousel_button">Free Sign up</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div> 
  </div>  -->
  <div class="container-fluid mt-5 carousel_header">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators (optional) -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      
      <div class=" carousel-inner" style="margin-top: -33px; border-radius: none;">
        <!-- Slide 1 -->
        <div class=" carousel-item active ">
          <div class=" carousel-card" style="height: 260px;">
            <div class=" container row">
              <div class="col-lg-8">
                <div class="right_carousel_block">
                  <h4>One App Many Benifits</h4>
                  <p>An Affordable learning platform <br>for better academic results</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="image_class">
                  <img src="../assets/images/g.png" class="img-fluid">
                </div>
              </div>
              <div class="col-lg-9 search_box">
                <div class="merged_block">
                  <div class="row">
                    <div class="col-lg-8 col-6 col-sm-6">
                      <input type="text" id="carousel_input" placeholder="Your@email address">
                    </div>
                    <div class="col-lg-4 col-6 col-sm-6">
                      <button id="carousel_button">Free Sign up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
        
        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="carousel-card" style="height: 260px;">
            <div class="slider_2">
              <h3>Refer A Friend</h3>
            </div>  
          </div>
        </div>
        
        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="carousel-card" style="height: 260px;">
            <div class="slider_3">
              <h3>Contact Us</h3>
            </div>  
          </div>
        </div>
      </div>
      
      <!-- Controls (optional) -->
      <!-- <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> -->
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
  /* background: transparent linear-gradient(180deg, #E6BAFF 0%, #5E69FF 100%) 0% 0% no-repeat padding-box;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 57px;
  text-align: center; */
  top: 150px;
  left: 381px;
  width: 100%;
  height: 202px;
  /* UI Properties */
  /* background: transparent linear-gradient(180deg, #E6BAFF 0%, #5E69FF 100%) 0% 0% no-repeat padding-box; */
  background-image: url('../assets/images/bg.jpg');
  border-radius: 8px;
  opacity: 1;

}
.carousel_header {
  padding-top: 4%;
}

.search_box {
  margin-top: 15px; 
  margin-left: 280px;
}
/* .slider_1 h2 {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) 25px/33px var(--unnamed-font-family-segoe-ui);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal 600 25px/33px Segoe UI;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
.slider_1 p {
  color: white;
  opacity: 1;
  font-size: 16px;
} */
.img-fluid {
  /* background-image: url('../assets/images/mg25.png');
  opacity: 1;
  background-repeat: no-repeat; */
  top: 100px;
  left: 773px;
  width: 185px;
  height: 251px;
  padding-left: 10px;
  margin-left: 100px;
/* UI Properties */
  /* background: transparent url('../assets/images/mg25.png') 0% 0% no-repeat padding-box; */
  opacity: 1;
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
.carousel-indicators .active{
  width: 20px;
height: 10px;
/* UI Properties */
background: #FF9924 0% 0% no-repeat padding-box;

border-radius: 65px;
opacity: 1;
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
.right_carousel_block {
  text-align: center;
  color: white;
  margin-left: 200px;
  margin-bottom: 20px;
}
.right_carousel_block h4 {
  font-size: 25px;
  text-align: left;
  position: relative;
  left: 80px;
  top: 37px;

}
.right_carousel_block p {
  font-size: 18px;
  text-align: left;
  position: relative;
  left: 83px;
  top: 42px;
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
    padding: 4px;
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
@media screen and (min-width: 200px) and (max-width: 540px) {
  .search_box {
    margin-top: 20px; 
    margin-left: 30px;
    margin-right: 30px;
  }
  .merged_block {
    border: 1px solid white;
    border-radius: 30px;
    padding: 4px;
    margin-top: 60px;
  }
  .right_carousel_block h4 {
    font-size: 18px;
    text-align: left;
    position: relative;
    left: 35px;
    top: 60px;
  }
  .right_carousel_block p {
    font-size: 16px;
    text-align: left;
    position: relative;
    left: 35px;
    top: 70px;
  }
  #carousel_button {
    height: 35px;
    padding: 10px 8px 43px 8px;
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
}
/* @media only screen and (min-width: 200) and (max-width: 320px) {
  #carousel_button {
    height: 35px;
    padding: 10px 8px 65px 8px;
    background: white;
    color: #0066CC;
    border-radius: 22px;
    float: right;
  }
} */
.container-fluid{
  padding-left: 0px;
  padding-right: 0px;
}
</style> 