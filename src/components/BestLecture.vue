<template>
    <div class="category-test pt-3">
        <div class="container">
            <h4 class="academic_head_text">
                <span id="aca_text">Best</span>Lecturers
                <router-link to="/BestFaculty">See all</router-link>
            </h4>
        </div>
    </div>
    <div class="container-fluid">
        <!-- <div class="row pt-5"> -->
        <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="facult in faculty" :key="facult.id">
                <router-link
:to="{ name: 'Instructor', params: { name: facult.facultyDynamicRouting } }"
                    style="cursor: pointer; text-decoration: none;">
                    <div class="card">
                        <div class="user-follower">

                            <img v-if="facult.image !== ''" :src="facult.image" class="user-icon">
                            <img v-else src="../assets/images/Image21.png" class="user-icon">
                            <!-- <img :src="facult.imageUrl" class="user-icon"> -->
                        </div>
                        <div class="user-following">
                            <p class="text-right"><small>13 Following</small></p>
                            <p class="text-right"><small>1200 Followers</small></p>
                        </div>
                        <div class="card-body " style="margin-top: -7%; ">
                            <div class="card-title">{{ facult.name }}</div>
                            <div class="card-text"> {{ facult.description.slice(0, 50) }}...</div>

                            <div class="mn text-left">
                                <p>
                                    ({{ facult.ratingCount || 0 }} Reviews)
                                    <StarRatings :rating="facult.starRating || 0" :max-rating="5" />
                                </p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </slide>


            <template #addons>

                <navigation>
                    <template #next>
                        <i class="fa fa-chevron-right" style="--fa-secondary-color: #0400e0;"></i>
                    </template>
                    <template #prev>
                        <i class="fa fa-chevron-left" style="--fa-secondary-color: #0400e0;"></i>
                    </template>
                </navigation>

            </template>
        </carousel>
    </div>
</template>


<script>
import axiosInstance from '../config/axiosInstance'
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import StarRatings from './StarRatings.vue'



export default defineComponent({
    name: 'BestLecture',
    components: {
        Carousel,
        Slide,
        StarRatings,
        Navigation,
    },
    data: () => ({
        faculty: [],
        // Ratings: [],
        ratingScore: '',
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
                itemsToShow: 4,
                snapAlign: 'start',
            },
            600: {
                itemsToShow: 1,
                snapAlign: 'center',
            },

        },
    }),
    async created() {
        try {
            const res = await axiosInstance.get(`/Bestfaculty`);
            this.faculty = res.data;
            for (const facult of this.faculty) {
                const res = await this.getByRatings(facult.facultyId);
                facult.starRating = res.averageRating;
                facult.ratingCount = res.ratingCount;

            }

        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async getByRatings(facultyId) {
            try {
                const result = await axiosInstance.get(`/Ratings?id=${facultyId}&objectTypeId=4`);
                return result.data;
            } catch (error) {
                console.error(error);
                return 0; // or handle error accordingly
            }
        },
    }
})
</script>



<style scoped>
.category-test a {
    text-decoration: none;
}

.category-test h4 a {
    float: right;
    color: #0d4b7e;
    font-size: 17px;
    font-family: 'Noto Sans', sans-serif;

}

.user-follower img {
    width: 60px;
    height: 60px;
    margin-left: 19%;
    padding-top: 2%;
    background-color: #fff;
    box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
}

.user-follower {
    position: absolute;
    top: -35px;
}

.user-following p {
    position: relative;
    top: -32px;
    font-size: 14px;
    text-align: right;
    width: 100%;
    line-height: 2%;
    color: #707070;
}

.card-title {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal 600 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;

}

.demo-rate-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
}

.demo-rate-block:last-child {
    border-right: none;
}

.demo-rate-block .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}

.mn {
    padding-top: 20px;
}

.mn p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/18px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: left;
    font: normal normal normal 14px/18px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    margin: 0%;
    opacity: 1;
}

.mn .star-rating {
    float: right;
    margin-top: 0%;
    margin-left: 4%;
}

.col-md-3 {
    margin-bottom: 3%;
}

.card {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    opacity: 1;
    width: 94%;
    padding: 0px;
    margin: 0px 9px 23px;
}

.academic_head_text {
    color: #006acd;
    padding-left: 0px;
    font-size: 20px;
}

.container {
    padding: 0%;
}

@media only screen and (min-width: 540px) and (max-width: 600px) {
    .card {
        width: 50%;
    }
}

#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

.mn .fa {
    color: orange;
}

@media (max-width: 768px) {
    .card-body {
        margin-top: 0 !important;
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

@media (min-width: 768px) and (max-width: 991.92px) {
    .academic_head_text {
        font-size: 20px;
    }

    .card {
        margin-bottom: 50px;
    }

    .mn .fa {
        color: orange;
    }

}

.card-text {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-aeaeae);
    text-align: left;
    font: normal normal normal 14px/21px Segoe UI;
    letter-spacing: 0px;
    color: #AEAEAE;
    opacity: 1;
}

::-webkit-scrollbar {
    width: 0.5em;
    /* Adjust this to change the width of the scrollbar track */
}

* {
    scrollbar-width: none;
    /* "thin" or "none" depending on your preference */
}

*::-webkit-scrollbar-thumb {
    background-color: transparent;
    /* Hide the thumb on webkit-based browsers */
}

.carousel-prev,
.carousel-next {
    border: none;
    /* Remove the border */
}

.fa-chevron-right {
    position: absolute;
    right: -3px;
    font-size: 14px;
    outline: none;
}

.fa-chevron-left {
    position: absolute;
    left: -1px;
    font-size: 14px;
    outline: none;
}

.carousel__slide {

    margin-top: 34px;
    margin-bottom: -22px;
    /* padding: 7px; */
}

.carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
}

.carousel__prev,
.carousel__next {
    margin-left: -20px;
    margin-right: -20px;
    box-sizing: content-box;
    border: 89px solid blue;
    outline: none !important;
}

.mn .fa {
    color: orange;
}

.mn {
    padding-top: 20px;
}

.mn p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-14)/18px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    /* text-align: center; */
    font: normal normal normal 14px/18px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    margin: 0%;
    opacity: 1;
}

.mn .fa {
    letter-spacing: 2px;

}

.mn .star-rating {
    float: right;
    margin-top: 0%;
    margin-left: 4%;
}

.text-right {
    position: relative;
    bottom: 11px;
}

@media only screen and (min-width: 280px) {
    .container-fluid {
        padding-left: 0px;
    }
}
</style>