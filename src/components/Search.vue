<template>
    <div>
        <section id="search_block">
            <div class="container">
                <div class="search_text mb-3">
                    <h4 class="academic_head_text">

                        <span id="aca_text">Search</span>Results for "{{ searchQuery }}"

                    </h4>
                </div>

                <!-- <form class="search-bar" @submit.prevent="search">
                    <div class="row">
                        <div class="col-lg-6 col-8 col-sm-8 col-md-9">
                            <div class="child_class">
                                <i class="fa-solid fa-magnifying-glass" style="color: #0066cc;"></i>
                                <input class="text" type="search" v-model="searchQuery" placeholder="Search">
                            </div>

                        </div>
                        <div class="col-lg-6 col-4 col-sm-4 col-md-3">
                            <button id="search_button" type="submit">Search</button>
                        </div>
                    </div>

                    <button class="" type="submit"><i class="fa fa-search"></i></button>


                </form> -->

                <el-autocomplete
                    v-model="searchQuery"
                    :fetch-suggestions="querySearch"
                    :trigger-on-focus="false"
                    value-key="title"
                    size="large"
                    class="inline-input w-100"
                    
                    @select="handleSelect"
                    placeholder="Search..."
                >
                    <template #prefix>
                        <el-icon style="vertical-align: middle;float: right; width: 1rem; height: 2rem; cursor: pointer; color: blue; font-weight: bold;">
                            <Search />
                        </el-icon>
                    </template>
                    <template #suffix>
                                              
                        <el-icon v-if="searchQuery !== ''" style="position: absolute;right: 143px; cursor: pointer" @click="clearInput"><CircleClose /></el-icon>
                            
                        <el-button style="height: 36px; background: #0177FB 0% 0% no-repeat padding-box; color: white; cursor: pointer; width: 130px; float: right; position: absolute; right: 2px;" @click="search()">
                            <span style="font-size: 16px;"> SEARCH </span>
                        </el-button>
                    </template>
                </el-autocomplete>

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
                                            <label for="label-select" id="sort_label"> Sort by:</label>

                                            <select class="form-select" aria-label="Default select example"
                                                id="label-select">
                                                <option selected>Popular</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <div class="" v-if="searchResults.length > 0">
                                <div class="tab_inner_block"  v-for="result in searchResults" :key="result.id">
                                    <div class="row no-gutters" >
                                        <div class="col-lg-3 col-md-3" >
                                            <img src="../assets/images/java.jpg" style="width: 100%; height: auto;" class="img-fluid" id="sub_image" />
                                        </div>
                                        <div class="col-lg-9 col-md-9">
                                            <div class="results_inner_block">
                                                <router-link v-bind:to="'/CourseDetails?id='+ result.id" style="text-decoration: none;">
                                                <div class="row">
                                                    <div class="col-lg-8 col-12 col-sm-12 col-md-8">
                                                        <p id="title_text" class="mb-1">{{ result.title }}</p>
                                                        <p id="sub_text" class="mb-1"></p>
                                                        <div class="inner_child">
                                                            <div class="row">
                                                                <div class="col-lg-5 col-md-5">
                                                                    <p id="prof_text" class="mb-2">{{ result.instructorName[0].name }}</p>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <p id="duration_text" class="mb-2"><img
                                                                            src="../assets/images/Iconionic-ios-timer@2x.png">{{ result.videoDemand }}</p>
                                                                </div>
                                                                <div class="col-lg-3 col-md-3">
                                                                    <p id="module_text" class="mb-2"><img
                                                                            src="../assets/images/Iconmap-school@2x.png">{{ result.modules }}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p id="desc_text" >
                                                            <span class="desc" v-html="result.description.slice(0,58)"></span></p>
                                                    </div>
                                                    <div class="col-lg-4 text-right col-12 col-sm-12 col-md-4">
                                                        <div class="right_block">
                                                            <p id="amount_text"><span id="strike_text"> &#8377;{{ result.actualPrice }}</span>
                                                            &#8377;{{ result.discountedPrice }}</p>
                                                        <button id="buy_button">Buy now</button>
                                                        <div class="icon_blck">
                                                            <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                                            <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                                            <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                                            <i class="fa-solid fa-star" style="color: #ff9900;"></i>
                                                            <i class="fa-solid fa-star" style="color: #ff9900;"></i>
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
                               
                                <div class="no_result_found" v-else>
                                    <h4>No Results Found</h4>
                                </div>
                                
                            </el-tab-pane>
                            <el-tab-pane label="Course" name="second">Config</el-tab-pane>
                            <el-tab-pane label="Author" name="third">Role</el-tab-pane>
                            <el-tab-pane label="Other" name="fourth">Task</el-tab-pane>


                        </el-tabs>
                    </section>
                </div>
            </div>
        </section>

    </div>
    <Offer />
</template>

<script>
import Offer from './Offer.vue';
import axios from 'axios';


export default {
    name: 'SearchView',
    components: {
        Offer,
    },
    data() {
        return {
            searchQuery: this.$route.query.data,
            searchResults: [],
            activeName: 'first',
        }    
    },
    // created() {
    //     const queryValue = this.$route.query.data;
    //     if (queryValue) {
    //         this.searchQuery = queryValue;
    //     }
    // },    
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        async search() {
            try {
                const response = await fetch(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Coursedetails/search?semester=${this.searchQuery}`);
                const data = await response.json();
                
                // Assuming your API returns an array of objects with a "name" property
                this.searchResults = data;
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        },
        handleSelect (item){
            console.log(item);
        // this.$router.push({path:'/GlobalSearchPage',query:{Search:item}});
            
        },
        querySearch(queryString,cb) {
            console.log(queryString)
            let results = queryString ? this.createFilter(queryString) : this.dataarray;
            console.log(results);
            cb(results);
        },
        createFilter(queryString) {
                console.log("queryString",queryString)
                axios.get("https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Coursedetails/search?semester=" + this.searchQuery)
		.then((res) => (this.dataarray = res.data));
                console.log(this.dataarray);
                return this.dataarray;
            
        },
        clearInput() {
            this.searchQuery = '';
        }
    },
    async created() {
        try {
            const response = await fetch(`https://56qv8e2whb.ap-southeast-1.awsapprunner.com/api/Coursedetails/search?semester=${this.searchQuery}`);
            const data = await response.json();

                // Assuming your API returns an array of objects with a "name" property
            this.searchResults = data;
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    },    
}
</script>

<style scoped>
#search_block {
    margin-top: 70px;
}

.academic_head_text {
    color: #006acd;
    padding-top: 40px;
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
    color: #B4B4B4;
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
::v-deep .desc ul li{
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
    .academic_head_text{
        
    padding-top: 25px;
    font-size: 15px;
    }
    .child_class{
        display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px;
    }
    #search_button{
        width:100%;
        height: 100%;
        font-size: 15px;
    }
    .select_block{
        justify-content: flex-start !important;
    }

    .right_block{
        text-align: left;
    }
    #sub_text{
        font-size: 18px;

    }
    .icon_blck{
        margin-top:15px;

    }
    .icon_blck i{
        margin:5px;
    }
}

@media (max-width: 1024px) {
    .academic_head_text{
        
    padding-top: 25px;
    font-size: 15px;
    }
    .child_class{
        display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px;
    }
    #search_button{
        width:100%;
        height: 100%;
        font-size: 15px;
    }
   
    #sub_text{
        font-size: 16px;
    }
    .icon_blck{
        margin-top:15px;

    }    .icon_blck i{
        margin:5px;
    }
    #buy_button{
        width: 100px;
    height: 40px;
    font-size: 15px;
    padding: 0;
    }
    #desc_text{
        font-size: 14px;
    }
    #prof_text{
        font-size: 14px;
    }
    #sub_image{
        height:100% !important;
        width:100% !important;
        object-fit: cover;
    }
}
.no_result_found {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
}

</style>