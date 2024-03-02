<template>
    <div>
        <section id="search_block">
            <div class="container">
                <div class="search_text mb-3">
                    <h4 class="academic_head_text">

                        <span id="aca_text">Search</span>Results for "{{ searchQuery }}"

                    </h4>
                </div>

                <el-autocomplete
v-model="searchQuery" :fetch-suggestions="querySearch" :trigger-on-focus="false"
                    value-key="title" size="large" class="inline-input w-100" placeholder="Search..."
                    @keyup.enter="performSearch" @select="handleSelect">
                    <template #prefix>
                        <el-icon
                            style="vertical-align: middle;float: right; width: 1rem; height: 2rem; cursor: pointer; color: blue; font-weight: bold;">
                            <Search />
                        </el-icon>
                    </template>
                    <template #suffix>

                        <el-icon
v-if="searchQuery !== ''" style="position: relative;right: 5px; cursor: pointer"
                            @click="clearInput()">
                            <CircleClose />
                        </el-icon>
                        <el-button class="btn1" @click="search()">
                            <span style="font-size: 14px;"> SEARCH </span>
                        </el-button>

                    </template>



                </el-autocomplete>
                <!-- </div>
                
                </div> -->


                <div class="tab_block">
                    <section id="tab_block">
                        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                            <el-tab-pane label="All results" name="first">


                                <div class="row">
                                    <div class="col-lg-8 col-12 col-sm-12 col-md-8">
                                        <p id="tab_text">Mathematics and its formulas: Courses, trainings, and advanced
                                            techniques...</p>
                                    </div>
                                    <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                        <div class="select_block">
                                            <label id="sort_label" for="label-select"> Sort by:</label>

                                            <select
id="label-select" class="form-select"
                                                aria-label="Default select example">
                                                <option selected>Popular</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <div v-if="searchResults.length > 0" class="">
                                    <div v-for="result in searchResults" :key="result.id" class="tab_inner_block">
                                        <div class="row no-gutters">
                                            <div class="col-lg-3 col-md-3">
                                                <img
id="sub_image" src="../assets/images/java.jpg"
                                                    style="width: 100%; height: auto;" class="img-fluid" />
                                            </div>
                                            <div class="col-lg-9 col-md-9">
                                                <div class="results_inner_block">
                                                    <router-link
                                                        :to="{ name: 'CourseDetails', params: { name: result.courseRouteName } }"
                                                        style="text-decoration: none;">
                                                        <div class="row">
                                                            <div class="col-lg-8 col-12 col-sm-12 col-md-8">
                                                                <p id="title_text" class="mb-1">{{ result.title }}</p>
                                                                <p id="sub_text" class="mb-1"></p>
                                                                <div class="inner_child">
                                                                    <div class="row">
                                                                        <div class="col-lg-5 col-md-5">
                                                                            <p id="prof_text" class="mb-2">{{
                                                                                result.instructorName[0].name }}</p>
                                                                        </div>
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <p id="duration_text" class="mb-2"><img
                                                                                    src="../assets/images/Iconionic-ios-timer@2x.png">{{
                                                                                        result.videoDemand }}</p>
                                                                        </div>
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <p id="module_text" class="mb-2"><img
                                                                                    src="../assets/images/Iconmap-school@2x.png">{{
                                                                                        result.modules }}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p id="desc_text">
                                                                    <span
class="desc"
                                                                        v-html="result.description.slice(0, 58)"></span>
                                                                </p>
                                                            </div>
                                                            <div class="col-lg-4 text-right col-12 col-sm-12 col-md-4">
                                                                <div class="right_block">
                                                                    <p id="amount_text"><span id="strike_text"> &#8377;{{
                                                                        result.actualPrice }}</span>
                                                                        &#8377;{{ result.discountedPrice }}</p>
                                                                        <button v-if="isLoggedIn" id="buy_button" @click.prevent="makePayment(result.discountedPrice)">Buy
                                                                            now</button>
                                                                        <a v-else href="#"><button id="buy_button" @click.prevent="redirectToLogin">Buy
                                                                            now</button></a>
                                                                    <div class="icon_blck">
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>

                                        <div
v-for="instruct in result.instructorName" :key="instruct.id"
                                            class="row mb-2 pt-4">
                                            <div class="col-sm-12">
                                                <router-link
                                                    :to="{ name: 'Instructor', params: { name: instruct.facultyDyanamicRouting } }"
                                                    style="cursor: pointer; text-decoration: none;">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-sm-8 user_details">

                                                                    <img
v-if="instruct.imageUrl != ''"
                                                                        :src="instruct.imageUrl" class="user-icon">
                                                                    <img
v-else src="../assets/images/Image21.png"
                                                                        class="user-icon">
                                                                    <div class="user_details_name">
                                                                        <h2>{{ instruct.name }}</h2>
                                                                        <p id="desc_text">
                                                                            <span
class="desc"
                                                                                v-html="instruct.description.slice(0, 55)"></span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-4 author_reviews">
                                                                    <p class="oo">13 Following <br> 1200 Following</p>
                                                                    <div class="reviews_details">
                                                                        <p>(23 reviews) <br></p>
                                                                        <div class="icon">
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="no_result_found">
                                    <h4>No Results Found</h4>
                                </div>

                            </el-tab-pane>
                            <el-tab-pane label="Course" name="second">
                                <div class="row">
                                    <div class="col-lg-8 col-12 col-sm-12 col-md-8">
                                        <p id="tab_text">Mathematics and its formulas: Courses, trainings, and advanced
                                            techniques...</p>
                                    </div>
                                    <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                        <div class="select_block">
                                            <label id="sort_label" for="label-select"> Sort by:</label>

                                            <select
id="label-select" class="form-select"
                                                aria-label="Default select example">
                                                <option selected>Popular</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <div v-if="searchResults.length > 0" class="">
                                    <div v-for="result in searchResults" :key="result.id" class="tab_inner_block">
                                        <div class="row no-gutters">
                                            <div class="col-lg-3 col-md-3">
                                                <img
id="sub_image" src="../assets/images/java.jpg"
                                                    style="width: 100%; height: auto;" class="img-fluid" />
                                            </div>
                                            <div class="col-lg-9 col-md-9">
                                                <div class="results_inner_block">
                                                    <router-link
                                                        :to="{ name: 'CourseDetails', params: { name: result.courseRouteName } }"
                                                        style="text-decoration: none;">
                                                        <div class="row">
                                                            <div class="col-lg-8 col-12 col-sm-12 col-md-8">
                                                                <p id="title_text" class="mb-1">{{ result.title }}</p>
                                                                <p id="sub_text" class="mb-1"></p>
                                                                <div class="inner_child">
                                                                    <div class="row">
                                                                        <div class="col-lg-5 col-md-5">
                                                                            <p id="prof_text" class="mb-2">{{
                                                                                result.instructorName[0].name }}</p>
                                                                        </div>
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <p id="duration_text" class="mb-2"><img
                                                                                    src="../assets/images/Iconionic-ios-timer@2x.png">{{
                                                                                        result.videoDemand }}</p>
                                                                        </div>
                                                                        <div class="col-lg-3 col-md-3">
                                                                            <p id="module_text" class="mb-2"><img
                                                                                    src="../assets/images/Iconmap-school@2x.png">{{
                                                                                        result.modules }}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p id="desc_text">
                                                                    <span
class="desc"
                                                                        v-html="result.description.slice(0, 58)"></span>
                                                                </p>
                                                            </div>
                                                            <div class="col-lg-4 text-right col-12 col-sm-12 col-md-4">
                                                                <div class="right_block">
                                                                    <p id="amount_text"><span id="strike_text"> &#8377;{{
                                                                        result.actualPrice }}</span>
                                                                        &#8377;{{ result.discountedPrice }}</p>
                                                                    <button v-if="isLoggedIn" id="buy_button" @click.prevent="makePayment(result.discountedPrice)">Buy
                                                                            now</button>
                                                                        <a v-else href="#"><button id="buy_button" @click.prevent="redirectToLogin">Buy
                                                                            now</button></a>
                                                                    <div class="icon_blck">
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                        <i
class="fa-solid fa-star"
                                                                            style="color: #ff9900;"></i>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="no_result_found">
                                    <h4>No Results Found</h4>
                                </div>
                            </el-tab-pane>
                            <!-- <el-tab-pane label="Course" name="second">Config</el-tab-pane> -->
                            <el-tab-pane label="Professor" name="third">

                                <div class="row">
                                    <div class="col-lg-8 col-12 col-sm-12 col-md-8">
                                        <p id="tab_text">Mathematics and its formulas: Courses, trainings, and advanced
                                            techniques...</p>
                                    </div>
                                    <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                                        <div class="select_block">
                                            <label id="sort_label" for="label-select"> Sort by:</label>

                                            <select
id="label-select" class="form-select"
                                                aria-label="Default select example">
                                                <option selected>Popular</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <div v-if="searchResults.length > 0" class="">
                                    <div v-for="result in searchResults" :key="result.id" class="">
                                        <div v-for="person in result.instructorName" :key="person.id" class="row mb-2">
                                            <div class="col-sm-12">
                                                <router-link
                                                    :to="{ name: 'Instructor', params: { name: person.facultyDyanamicRouting } }"
                                                    style="cursor: pointer; text-decoration: none;">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-sm-8 user_details">

                                                                    <img
v-if="person.imageUrl != ''" :src="person.imageUrl"
                                                                        class="user-icon">
                                                                    <img
v-else src="../assets/images/Image21.png"
                                                                        class="user-icon">
                                                                    <div class="user_details_name">
                                                                        <h2>{{ person.name }}</h2>
                                                                        <p id="desc_text">
                                                                            <span
class="desc"
                                                                                v-html="person.description.slice(0, 55)"></span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-4 author_reviews">
                                                                    <p>13 Following <br> 1200 Following</p>
                                                                    <div class="reviews_details">
                                                                        <p>(23 reviews) <br></p>
                                                                        <div class="icon">
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                            <i
class="fa-solid fa-star"
                                                                                style="color: #ff9900;"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div v-else class="no_result_found">
                                    <h4>No Results Found</h4>
                                </div>

                            </el-tab-pane>
                        </el-tabs>
                    </section>
                </div>
            </div>
        </section>

    </div>
    <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
    <Offer />
</template>

<script>
import sha256 from "crypto-js/sha256";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import axiosInstance from '../config/axiosInstance'
import Offer from './Offer.vue';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';



export default {
    name: 'SearchView',
    components: {
        Offer,
        Loading
    },
    data() {
        return {
            isLoading: false,
            searchQuery: this.$route.query.data,
            searchResults: [],
            activeName: 'first',

        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.IsLoggedIn;
        },

    },

    async created() {
        this.isLoading = true;
        try {
            const response = await fetch(`https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api/GlobalSearch?searchTerm=${this.searchQuery}`);
            const data = await response.json();
            this.searchResults = data;
        } catch (error) {
            console.error('Error fetching search results:', error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
    methods: {
        redirectToLogin() {
            // Programmatically navigate to the /Login route
            this.$router.push('/Login');
        },

        performSearch() {
            this.isLoading = true;
            this.search().then(() => {
                this.isLoading = false;
            });
        },



        handleClick(tab, event) {
            console.log(tab, event);
        },
        async search() {
            this.isLoading = true;
            try {
                const response = await fetch(`https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api/GlobalSearch?searchTerm=${this.searchQuery}`);
                const data = await response.json();

                // Assuming your API returns an array of objects with a "name" property
                this.searchResults = data;
            } catch (error) {
                console.error('Error fetching search results:', error);
                this.isLoading = false;
            }
            finally {
                this.isLoading = false;
            }
        },

        handleSelect(item) {
            console.log(item);
            // this.$router.push({path:'/GlobalSearchPage',query:{Search:item}});

        },

        querySearch(queryString, cb) {
            let results = queryString ? this.createFilter(queryString) : this.dataarray;
             cb(results);
        },
        createFilter(queryString) {
            console.log(queryString);
            axiosInstance.get(`/GlobalSearch?searchTerm=${this.searchQuery}`)
                .then((res) => (this.dataarray = res.data));
            return this.dataarray;

        },
        clearInput() {
            this.searchQuery = '';
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
                redirectUrl: `https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api/PhonePayRespons`,
                redirectMode: "POST",
                callbackUrl: `https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api/PhonePayRespons`,
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
    },
}
</script>

<style scoped>
#search_block {
    margin-top: 0px;
}

.academic_head_text {
    color: #006acd;
    font-size: 22px;

}


#aca_text {
    color: #006acd;
    font-weight: bold;
    padding-right: 10px;
}

#search_button {
    width: 130px;
    height: 38px;
    background: #0177FB 0% 0% no-repeat padding-box;
    border-radius: 0px 4px 4px 0px;
    opacity: 1;
    color: white;
    float: right;
    padding: 0;
    text-transform: uppercase;
}

.search-bar {
    background: #FFFFFF7D 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    margin-top: 20px;
}

.search-bar input {
    background: transparent;
    border: 0;
    outline: none;
    font-size: 14px;
    color: black;
    padding-left: 15px;
}

.child_class {
    padding: 5px 0px 0px 15px;
}

.tab_block {
    margin-top: 20px;
}

.form-select {
    width: 86px;
    float: right;
}

.select_block {
    display: flex;
    align-items: center;
    justify-content: end;
}

#sort_label {
    padding: 5px 10px 0px 0px;
}

#tab_text {
    color: #707070;
    font-size: 14px;
}

.tab_inner_block {
    margin-top: 20px;
    margin-bottom: 30px;
}

#title_text {
    color: #444444;
    font-size: 16px;
}

#sub_text {
    color: #444444;
    font-size: 21px;
}

#prof_text {
    color: #666666;
    font-size: 15px;
}

#duration_text {
    color: #8A8A8A;
    font-size: 12px;
}

#module_text {
    color: #8A8A8A;
    font-size: 12px;
}

#duration_text img {
    width: 17px;
    margin-right: 7px;
}

#module_text img {
    width: 17px;
    margin-right: 7px;
}

::v-deep #desc_text {
    font-size: 16px;
    color: #666666;
    list-style-type: none;
}

::v-deep .desc ul li {
    list-style-type: none;
    margin-left: -40px;
}

#strike_text {
    text-decoration: line-through;
    color: lightgray;
    margin-right: 10px;
}

#amount_text {
    font-weight: bold;
}

#buy_button {
    color: white;
    background: #0177FB 0% 0% no-repeat padding-box;
    padding: 5px 20px 5px 20px;
}

.icon_blck {
    margin-top: 30px;
}

.icon_blck i {
    margin: 10px;
}

.results_inner_block {
    padding: 16px;
    background: white;

}

.tab_inner_block {
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
}

@media (max-width: 768px) {
    .academic_head_text {

        padding-top: 25px;
        font-size: 15px;
    }

    .child_class {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 5px;
    }

    #search_button {
        width: 100%;
        height: 100%;
        font-size: 15px;
    }

    .select_block {
        justify-content: flex-start !important;
    }

    .right_block {
        text-align: left;
    }

    #sub_text {
        font-size: 18px;

    }

    .icon_blck {
        margin-top: 15px;

    }

    .icon_blck i {
        margin: 5px;
    }
}

@media (max-width: 1024px) {
    .academic_head_text {

        padding-top: 25px;
        font-size: 15px;
    }

    .child_class {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 5px;
    }

    #search_button {
        width: 100%;
        height: 100%;
        font-size: 15px;
    }

    #sub_text {
        font-size: 16px;
    }

    .icon_blck {
        margin-top: 15px;

    }

    .icon_blck i {
        margin: 5px;
    }

    #buy_button {
        width: 100px;
        height: 40px;
        font-size: 15px;
        padding: 0;
    }

    #desc_text {
        font-size: 14px;
    }

    #prof_text {
        font-size: 14px;
    }

    #sub_image {
        height: 100% !important;
        width: 100% !important;
        object-fit: cover;
    }
}

.no_result_found {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
}

.author_img {
    width: 105px;
    height: 105px;
    /* UI Properties */
    /* background: transparent url('../assets/images/Author.png') 0% 0% no-repeat padding-box; */
    box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #FFFFFF;
    border-radius: 63px;
    opacity: 1;


}

.author_reviews .reviews_details p {
    padding-top: 10px;
    padding-bottom: 0px;
}

.author_details {
    text-align: left;
    margin-left: 0px;
    margin-top: 4%;
}

.author_details h2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 21px/28px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 21px/28px Segoe UI;
    letter-spacing: 0px;
    color: #444444;
    opacity: 1;
}

.author_details p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
}

.author_reviews {
    text-align: right;
}

.author_reviews p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/18px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: right;
    font: normal normal normal 16px/18px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
}

.author_reviews .reviews_details p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/18px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-707070);
    text-align: right;
    font: normal normal normal 16px/18px Segoe UI;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
}

.user_details img {
    float: left;
    width: 125px;
    height: 125px;
    /* UI Properties */
    /* background: transparent url('../assets/images/Author.png') 0% 0% no-repeat padding-box; */
    opacity: 1;

}

.user_details .user_details_name {
    float: right;
    text-align: left;
    margin-left: -20px;
    padding-top: 22px;
    padding-right: 135px;
}

.user_details_name p {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: #666666;
}

.user_details_name h2 {
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 21px/28px var(--unnamed-font-family-segoe-ui);
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 21px/28px Segoe UI;
    letter-spacing: 0px;
    color: #444444;
    opacity: 1;
}

@media screen and (min-width: 500px) and (max-width: 600px) {
    .user_details .user_details_name {
        float: right;
        width: 75%;
        text-align: left;
        padding-top: 15px;
        padding-right: 0px;
        padding-left: 10px;
    }

    .user_details img {
        float: left;
        width: 105px;
        height: 105px;
        /* UI Properties */
        /* background: transparent url('../assets/images/Author.png') 0% 0% no-repeat padding-box; */
        opacity: 1;

    }

    .author_reviews {
        padding-top: 15px;
    }

    .author_reviews p {
        float: left;
        width: 50%;
        padding-top: 2px;
        padding-right: 30px;
    }

    .author_reviews .reviews_details p {
        float: right;
        width: 50%;
        padding-left: 10%;
    }
}

@media screen and (min-width: 400px) and (max-width: 500px) {
    .user_details .user_details_name {
        float: right;
        width: 65%;
        text-align: left;
        padding-top: 15px;
        padding-right: 0px;
        padding-left: 10px;
    }

    .user_details img {
        float: left;
        width: 105px;
        height: 105px;
        opacity: 1;

    }

    .author_reviews {
        padding-top: 15px;

    }

    .author_reviews p {
        float: left;
        width: 40%;

    }

    .author_reviews .reviews_details p {
        float: right;
        width: 60%;
        padding-left: 0px;
        padding-right: 0px;
    }

}

@media screen and (min-width: 300px) and (max-width: 400px) {
    .user_details .user_details_name {
        float: right;
        width: 60%;
        text-align: left;
        padding-top: 10px;
        padding-right: 0px;
        padding-left: 10px;
    }

    .user_details img {
        float: left;
        width: 105px;
        height: 105px;
        opacity: 1;

    }

    .author_reviews {
        padding-top: 15px;
    }

    .author_reviews p {
        float: left;
        width: 40%;
    }

    .author_reviews .reviews_details p {
        float: right;
        padding-left: 20px;
        width: 60%;
    }
}

@media(max-width: 300px) {
    .user_details .user_details_name {
        float: right;
        width: 100%;
        text-align: left;
        padding-top: 10px;
        padding-right: 0px;
        padding-left: 10px;
    }

    .user_details img {
        float: left;
        width: 105px;
        height: 105px;
        opacity: 1;

    }

    .author_reviews {
        padding-top: 15px;
    }

    .author_reviews p {
        float: left;
        width: 45%;
    }

    .author_reviews .reviews_details p {
        float: right;
        padding-left: 20px;
        width: 55%;
    }

    .btn1 {
        position: absolute;
        right: 8px;
        bottom: 0px;
        height: 36px !important;
        width: 70px !important;
    }
}

@media screen and (min-width: 1000px) and (max-width: 1024px) {
    .user_details .user_details_name {
        float: right;
        width: 75%;
        text-align: left;
        padding-top: 15px;
        padding-right: 0px;
        padding-left: 10px;
    }

    .user_details img {
        float: left;
        width: 105px;
        height: 105px;
        opacity: 1;

    }

}

@media screen and (min-width: 750px) and (max-width: 950px) {
    .user_details .user_details_name {
        float: right;
        width: 70%;
        text-align: left;
        padding-top: 15px;
        padding-right: 0px;
        padding-left: 10px;
    }

    .user_details img {
        float: left;
        width: 105px;
        height: 105px;
        opacity: 1;

    }

}

.icon {
    letter-spacing: 14px;
    position: relative;
    left: 17px;
    bottom: 11px;
}

.btn1 {
    height: 39px;
    background: #0177FB 0% 0% no-repeat padding-box;
    color: white;
    cursor: pointer;
    width: 130px;
    position: relative;
    /* right: 31px; */
    left: 15px;
}
</style>