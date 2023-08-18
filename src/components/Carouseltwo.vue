<template>
  <div>
    <section id="slider">
      <input type="radio" name="sliderImg" id="s1">
      <input type="radio" name="sliderImg" id="s2">
      <input type="radio" name="sliderImg" id="s3" checked>
      <input type="radio" name="sliderImg" id="s4">
      <input type="radio" name="sliderImg" id="s5">
      <label for="s1" id="slide1">
        <div class="div_one" style="height:100%;width:100%;">
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

      </label>
      <label for="s2" id="slide2">
        <div class="div_one" style="height:100%;width:100%;">
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
      </label>
      <label for="s3" id="slide3">
        <div class="div_one" style="height:100%;width:100%;">
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
      </label>
      <label for="s4" id="slide4">
        <div class="div_one" style="height:100%;width:100%;">
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
      </label>
      <label for="s5" id="slide5">
        <div class="div_one">
          <div class="child_class_one">
            <div class="right_carousel_block">
              <h4>Refer a Friend</h4>
            </div>
          </div>
        </div>
        
      </label>
      

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
      currentIndex: 0
    };
  },
  methods: {
    showSlide(index) {
      this.slides[index].checked = true;
    },
    autoScroll() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.showSlide(this.currentIndex);
    }
  },
  mounted() {
    this.slides = this.$el.querySelectorAll('[type="radio"]');
    setInterval(this.autoScroll, 3000);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  font-size: 42px;
  font-family: monospace;
  margin: 30px;
}

[type=radio] {
  display: none;
}

#slider {
  height: 35vw;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  margin-top:40px;
}

#slider label {
  margin: auto;
  width: 60%;
  height: 100%;
  border-radius: 4px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
}

#s1:checked~#slide1,
#s2:checked~#slide2,
#s3:checked~#slide3,
#s4:checked~#slide4,
#s5:checked~#slide5 {
  /* box-shadow: 0 13px 25px 0 rgba(0, 0, 0, .3), 0 11px 7px 0 rgba(0, 0, 0, .19); */
  transform: translate3d(0, 0, 0);
}

#s1:checked~#slide2,
#s2:checked~#slide3,
#s3:checked~#slide4,
#s4:checked~#slide5,
#s5:checked~#slide1 {
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .3), 0 2px 2px 0 rgba(0, 0, 0, .2); */
  transform: translate3d(15%, 0, -100px);
}

#s1:checked~#slide3,
#s2:checked~#slide4,
#s3:checked~#slide5,
#s4:checked~#slide1,
#s5:checked~#slide2 {
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .37); */
  transform: translate3d(30%, 0, -200px);
}


#s1:checked~#slide4,
#s2:checked~#slide5,
#s3:checked~#slide1,
#s4:checked~#slide2,
#s5:checked~#slide3 {
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .37); */
  transform: translate3d(-30%, 0, -200px);
}

#s1:checked~#slide5,
#s2:checked~#slide1,
#s3:checked~#slide2,
#s4:checked~#slide3,
#s5:checked~#slide4 {
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .3), 0 2px 2px 0 rgba(0, 0, 0, .2); */
  transform: translate3d(-15%, 0, -100px);
}




.child_class {
  padding: 20px;
  margin: 0 auto;
  background: transparent linear-gradient(180deg, #E6BAFF 0%, #5E69FF 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  height: 235px;
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

.div_one {
  height: 100%;
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-top:30px;
}
.child_class_one {
  padding: 20px;
  margin: 0 auto;
  background: transparent linear-gradient(180deg, #E6BAFF 0%, #5E69FF 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  height: 235px;
  width:100%;
  display: flex;
    align-items: center;
    justify-content: center;
 
}
.image_class img {
  width: 100%;
  height: 350px;
  object-fit: contain;
  padding: 10px;
  margin-top: -124px;
}
#carousel_input::placeholder {
  color: white !important;
}

@media (max-width: 600px) {
 
  #slider{
    display: none;

  }
}

@media only screen and (min-width: 1024px) and (max-width: 1400px) {
  #slider{
    margin-top:40px;

  }
}


</style>