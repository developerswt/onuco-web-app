<template>
    <Carousel />
    <!-- <Carouseltwo /> -->
   

    <!-- <div class="container-fluid jk "> -->
        <div class="container-fluid " id="first_container">
            <div class="container" id="home_container">
                <Academics />
            </div>
        </div>
        <div class="container-fluid" id="second_container">
            <div class="container">
                <TopRatedCourses />
            </div>
        </div>
        <div class="container-fluid" id="third_container" style="height: 290px;">
            <div class="container">
                <BestLecture />
            </div>
        </div>
    <!-- </div> -->

    
    <Offer />
    
    <div class="container-fluid content">
        <div class="container">
            <div class="Opt-in">
                <h4>Opt-in for Onuco Content</h4>
                <form>
                    <input type="text" placeholder="Email Address " name="search">
                    <input type="submit" value="Subscribe">
                </form>
                <p>By Submitting this form, I agree to Onuco's <a href="#">Privacy Policy</a></p>
            </div>
        </div>
    </div>
    <!-- <div class="text-center" >
        <img src="../assets/images/add.png" style="width: 80%; height: 100%;">
    </div> -->
    <div class="text-center ">
    <img :src="currentImage" class="banner">
  </div>
</template>

<script>
import Academics from './Academics.vue'
import Carousel from "./Carousel.vue"
import TopRatedCourses from "./TopRatedCourses.vue"
import BestLecture from "./BestLecture.vue"
import Offer from './Offer.vue'
import Carouseltwo from './Carouseltwo.vue'


export default {
    name: 'HomeView',
    components: {
        Carousel,
        Academics,
        TopRatedCourses,
        BestLecture,
        Offer,
        Carouseltwo,

    },
    data() {
    return {
      imageSources: [
         "../assets/images/foodadd.png",
        "../assets/images/acadd.jpg",
        "../assets/images/ac2.jpg",
        "../assets/images/ac4.jpg",
      ],
      currentIndex: 0,
      username: localStorage.getItem('username')
    };
  },
  computed: {
    currentImage() {
      return this.imageSources[this.currentIndex];
    },
    isLoggedIn() {
        return this.$store.state.IsLoggedIn;
    },
    isuser() {
        console.log(this.$store.state.user);
        return this.$store.state.user;
    },

  },
  created() {
    // Check if the currentIndex is stored in local storage
    const storedIndex = localStorage.getItem("currentIndex");
    if (storedIndex !== null) {
      this.currentIndex = parseInt(storedIndex);
    } else {
      // If it's not in local storage, set a random initial index
      this.currentIndex = Math.floor(Math.random() * this.imageSources.length);
    }
  },
  rotateImages() {
  setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.imageSources.length;
    // Store the currentIndex in local storage
    localStorage.setItem("currentIndex", this.currentIndex.toString());
  }, 5000); // Change image every 5 seconds
},
};



</script>

<style scoped>
.container-fluid {
    width: 100%;
    /* padding-right: 15px; */
    /* padding-left: 15px; */
    margin-right: auto;
    margin-left: auto;
}
.jk {
    background: white 0% 0% no-repeat padding-box;
    opacity: 1;
}


@media screen and (max-width: 600px) {
    .Opt-in input[type=text] {
        width: 55% !important;
        font-size: 15px !important;

    }

    .Opt-in input[type=submit] {
        width: auto !important;
        font-size: 15px !important;
    }

    #home_container {
        margin-top: 0 !important;

    }
    #first_container,#second_container,
#third_container{
    
    padding-left:0 !important;
    padding-right:0 !important;

}

 }
#first_container {
    background-color: white;
}
#second_container {
    background-color: #EFF5FC ;
}
#third_container {
    background-color: white;
}
.content {
    top: 1582px;
    left: 0px;
    width: 100%;
    height: 227px;
    background: #0066CC 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom: 2%;
}

.Opt-in h4 {
    text-align: center;
    font: normal normal normal 20px/20px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    padding: 58px 0px 0px;
}

.Opt-in form {
    text-align: center;
    margin-top: 2%;
}

.Opt-in input[type=text] {
    padding: 10px;
    width: 40%;
    margin-top: 3px;
    font-size: 17px;
    border: none;
}

.Opt-in input[type=submit] {
    padding: 10px;
    background: #F57200;
    font-size: 17px;
    border: none;
    cursor: pointer;
    color: #FFFFFF;
    text-transform: uppercase;
    opacity: 1;
    width: 150px;
}

.topnav .search-container button:hover {
    background: #ccc;
}

.Opt-in p {
    text-align: center;
    margin-top: 2%;
    font: normal normal normal 12px/20px Segoe UI;
    letter-spacing: 0px;
    color: #FFFFFF;
}

.Opt-in a {
    color: #FFFFFF;
    cursor: pointer;
}

/* .add img {
    position: relative;
    bottom: 30px;
    left: 60px;
}
@media screen and (max-width: 912px) {
    .add img {
        display: none;
    }
} */

.acdemic_block {
    max-width: 1300px;
    margin: 0 auto;
}

#home_container {
    margin-top: 0px;
}

@media (max-width: 1024px) {
    #home_container {
        margin-top: 0 !important;

    }

    .jk {
        padding-top: 0 !important;
    }
}

/* #first_container{
    background: #DDEDFB;
   
} */



/* #third_container

{
    background:#DDEDFB;
} */

.banner{
    width: 80%;
    height: 180px;
    padding-bottom: 25px;
    
    text-align: center;


}

@media screen and (max-width: 912px) {

.banner{
     margin-top: -6px;
     height: 250px;
    }

}

@media ( min-width: 100px) and (max-width: 600px){
    .content{
        margin-bottom: 9%;
        margin-top: -29px;
    }
}
    


</style>