<template>
    <div class="category-test pt-3">
        <div class="container" style="margin-top: 70px;">
            <Breadcrumbs />
            <h4 class="academic_head_text pt-4">
                <span id="aca_text">Top</span>Rated Courses
            </h4>
        </div>
    </div>
    <section id="Course_section">
        <div class="container mb">
            <carousel :settings="settings" :breakpoints="breakpoints">
                <slide v-for="course in courses" :key="course.id">

                    <div class="box">
                        <router-link :to="{ name: 'CourseDetails', params: { name: course.courseName } }"
                            style="text-decoration: none;">
                            <div class="wer">
                                <!-- <img class="card-img-top offer1" src="../assets/images/java.jpg" alt="Card image cap" style="height: 155px !important;-->
                                <div class="card-img-top offer1" style="height: 155px !important; background-color: rgb(75, 130, 146); color: white;">
                                    <br>
                                    <p  style="position: absolute; left: 20px;"> {{ course.name}}</p>
                                </div>
                                <div class="offer">
                                    <img class="card-img-top" src="../assets/images/offer.png">
                                </div>
                                <div class="offer-details">
                                    <span class="card-image-top"><b>{{ calculateDiscountPercentage(course.actualPrice, course.discountPrice) }}% OFF</b></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <p class="card-text">{{ course.description.slice(0, 65) }}...</p>
                                <div class="text-left price" style="float: right;">
                                    <p style=" color:#707070 !important;">&#8377;<del style="margin-right: 5px;">{{
                                        course.actualPrice }}</del><b style="margin-right: 2px; color:black">&#8377;{{ course.discountPrice }}</b></p>

                                </div> <br>
                                <div class="row">
                                    <div class="col-sm-6  star">
                                        <StarRatings :rating="course.starRating || 0" :max-rating="5" />
                                    </div>
                                    <div class="col-sm-6">
                                        <a href="#" class="btn btn-primary" @click="makePayment(course.discountPrice)">Buy Now</a>
                                    </div>
                                </div>
                            </div>


                        </router-link>
                    </div>
                 </slide>
                <template #addons>
                    <navigation>
                    </navigation>

                </template>
            </carousel>
        </div>


    </section>
    <div class="container mb ">
        <h4 class="academic_head_text pt-4">
                <span id="aca_text">All</span>Courses
            </h4>
        <div class="row align" >
        <div v-for="person in allCourses.courses" :key="person.id" class="col-sm-4">
            <div class="box ">
                <router-link :to="{ name: 'CourseDetails', params: { name: person.courseName } }" style="text-decoration: none;">
                    <div class="wer">
                        <div class="card-img-top offer1" :style="{ 'background-image': person.imageUrl ? 'url(' + person.imageUrl + ')' : 'none', height: '155px', color: 'black', 'background-size': 'cover','background-position': 'center','background-repeat': 'no-repeat', backgroundColor: person.imageUrl ? 'transparent' : 'rgb(75, 130, 146)' }">
                            <br>
                            <p data-placement="top" :title="person.name" style="position: relative; left: 20px;">{{ person.name}}</p>
                        </div>
                        <div class="offer">
                            <img class="card-img-top" src="../assets/images/offer.png">
                        </div>
                        <div class="offer-details">
                            <span class="card-image-top"><b>{{ calculateDiscountPercentage(person.actualPrice, person.discountPrice) }}% OFF</b></span>
                        </div>
                    </div>
        

                    <div class="card-body" >
                        <p class="card-text">{{ person.description.slice(0, 65) }}...</p>
                        <div class="text-left price" style="float: right;">
                            <p style=" color:#707070 !important;">&#8377;<del style="margin-right: 5px;">{{person.actualPrice}}</del><b
                                    style="margin-right: 2px; color:black">&#8377;{{ person.discountPrice}}</b></p>
                        </div> <br>
                        <!-- <div class="row">
                            <div class="col-sm-6  star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="col-sm-6">
                                <a href="#" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div> -->
                        <div class="row">
                                    <div class="col-sm-6  star">
                                        <StarRatings :rating="person.starRating || 0" :max-rating="5" />
                                    </div>
                                    <div class="col-sm-6">
                                        <a href="#" class="btn btn-primary" @click="makePayment(person.discountPrice)">Buy Now</a>
                                    </div>
                                </div>
                    </div>
                 </router-link>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import sha256 from "crypto-js/sha256";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Breadcrumbs from './Breadcrumbs.vue'
import AxiosInstance from '../config/axiosInstance';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import StarRatings from './StarRatings.vue';

export default {
    name: 'TopRatedCourse',
    components: {

Carousel,
Slide,
StarRatings,
Navigation,
Breadcrumbs
},
data() {
        return {
            ratings: [],
            allCourses: [],
            isLoading: false,
            courses: [],
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },

            breakpoints: {

                900: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                820: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                768: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                600: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                375: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                360: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                540: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                280: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                }

            },
        }
    },


    async created() {
        try {
            const res = await AxiosInstance.get(`/TopRatedCourses`);
            this.courses = res.data;
            console.log(this.courses);
            for (const course of this.courses) {
                const res = await this.getByRatings(course.id);
                course.starRating = res.averageRating;
            }
            const result = await AxiosInstance.get(`/Course`);
            this.allCourses = result.data;
            console.log(this.allCourses);
            for (const allcourse of this.allCourses.courses) {
                const resu = await this.getByRatings(allcourse.id);
                allcourse.starRating = resu.averageRating;
            }

        } catch (error) {
            console.log(error);
        }
    },
    methods: {
    async getByRatings(courseId) {
            try {
                const result = await AxiosInstance.get(`/Ratings?id=${courseId}&objectTypeId=5`);
                return result.data;
            } catch (error) {
                console.error(error);
                return 0; // or handle error accordingly
            }
        },
        calculateDiscountPercentage(actualPrice, discountPrice) {
      if (actualPrice === 0) {
        return 0;
      }

      const discountPercentage = ((actualPrice - discountPrice) / actualPrice) * 100;
      return Math.round(discountPercentage);
    },
    generateUUID() {
            return uuidv4().toString(36).slice(-6);
        },
        async makePayment(amount) {
            const transactionId = "Tr-" + this.generateUUID();
            const merchantId = "PGTESTPAYUAT";

            const payload = {
                merchantId: merchantId,
                merchantTransactionId: transactionId,
                merchantUserId: 'MUID-' + this.generateUUID(),
                amount: amount * 100,
                redirectUrl: `https://localhost:7007/api/Payment`,
                redirectMode: "POST",
                callbackUrl: `https://localhost:7007/api/Payment`,
                mobileNumber: '9999999999',
                paymentInstrument: {
                    type: "PAY_PAGE"
                },
                message: "Introduction Computer Sciensce",
                shortName: "Vijay",
                instrumentType: 'web'
            };

            const dataPayload = JSON.stringify(payload);
            const dataBase64 = btoa(dataPayload);
            console.log("Request Payload:", dataBase64);

            const fullURL = "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
            const dataSha256 = sha256(dataBase64 + fullURL);
            const checksum = dataSha256 + "###" + "1";
            const UAT_PAY_API_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

            try {
                const response = await axios.post(UAT_PAY_API_URL, { request: dataBase64 }, {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                        "X-VERIFY": checksum,
                    },
                });

                const redirectURL = response.data.data.instrumentResponse.redirectInfo.url;
                window.location.href = redirectURL;

            } catch (error) {
                console.error("Error making payment:", error);
                // Handle payment processing errors here
            }
        },
    }

};
</script>


<style scoped>
.category-test a {
    text-decoration: none;
}

.card-image-top {
    font-weight: bold;
}

.category-test h4 a {
    float: right;
    color: #0d4b7e;
    font-size: 17px;
    font-family: 'Noto Sans', sans-serif;

}

.box .star {
    color: orange;
    position: relative;
    top: 8px;
    left: -29px;
    letter-spacing: 2px;
    display: flex;
}

.mb .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    /* margin-left: 0px;
    margin-right: 0px; */
}

.box {

    height: 310px;
    width: 321px;
    cursor: pointer;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    opacity: 1;
    margin-bottom: 3%;
    margin-top: 20px;

}

.box .row {
    padding: 12px 30px;
}

@media screen and (max-width: 400px) {

    .box {
        width: 100%;
        margin-bottom: 35px;
        height: 360px;
    }
}

@media screen and (max-width: 600px) {
    .box {
        width: 100%;
        margin-bottom: 35px;
        height: 370px;
    }

    .box .offer {
        position: absolute;
        top: -13px;
    }

    .offer-details {
        position: relative;
        top: -200px;
    }

    .academic_head_text {
        font-size: 15px !important;
        padding-left: 0 !important;

    }

    .category-test h4 a {
        padding-right: 0;
        font-size: 15px !important;
    }
}

@media only screen and (min-width: 600px) and (max-width: 912px) {
    .box {
        width: 47%;
        margin-bottom: 35px;
        height: 380px;
    }
}

@media only screen and (min-width: 950px) and (max-width: 1024px) {
    .box {
        width: 30%;
        margin-bottom: 3%;
        height: 380px;
    }
}

@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text {
        font-size: 20px;
    }

}

.price p {
    color: black;
    float: left;
    width: 35%;
    position: relative;
    right: 15px;
}

.price a {
    width: 60%;
    float: right;

}

.offer {
    position: absolute;
    width: 90px;
    height: 10px;
    top: -12px;
    left: -5px;

}

.offer-details {
    position: absolute;
    top: -10px;
    left: 5px;
    color: white;
    font-size: 14px;
}

.wer {
    position: relative;
}

.academic_head_text {
    color: #006acd;
    padding-left: 0px;
    font-size: 20px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

.box .card-text {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
}

.box .card-title {
    margin-top: -20px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
}

.btn {
    width: 110px;
    height: 37px;
    margin-left: 45px;
}

.card-body {
    padding: 1rem;
}

@media screen and(max-width: 1024px) {
    .btn {

        margin-left: 115px;
        margin-top: 0px;
    }

    .box {
        height: auto;
    }
}

@media only screen and (min-width: 300px) and (max-width: 700px) {
    .btn {
        margin-left: 118px;
        margin-top: -30px;


    }
}

@media screen and (min-width: 100px) and (max-width: 300px) {

    .btn[data-v-3344e108] {
        margin-left: 75px;
        margin-top: -30px;
        width: 93px;
        font-size: 15px;
    }

    .box {
        width: 100%;
        margin-bottom: 35px;
        height: 320px;
    }
}

@media(max-width:520px) {
    .box {
        width: 86%;
        margin-bottom: 24px;
        height: 335px;
    }

    .btn {
        margin-left: 90px;
        margin-top: -30px;
    }

    .fa {
        font-size: 16px;
    }

}

.fa {
    font-size: 16px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin: -15px; /* Adjust margin based on your design */
  }

  .col-sm-4 {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 15px; /* Adjust padding based on your design */
  }

  /* Adjust media queries as needed */
  @media screen and (max-width: 768px) {
    .col-sm-4 {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 18px 0 25px 25px;
    }
  }

  .align{
    padding-left: 20px;
    margin: -14px;
  }
</style>