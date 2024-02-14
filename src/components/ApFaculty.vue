<template>
    <div class="container">
        <p> > Lecturers </p>
        <div class="container" style="margin-top: 72px;">
            <div class="table-responsive">
                <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Subject Name</th>
                            <th>Total Amount Collected</th>
                            <th>Total Subscribed Students</th>
                        </tr>
                    </thead>
                    <tbody v-for="products in product" :key="products.id">
                        <tr>
                            <td>{{ products.id }}</td>
                            <td>{{ products.courseName }}</td>
                            <td>{{ products.totalAmountCollected }}</td>
                            <td>{{ products.totalSubscribedStudents }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- <Loading v-model:active="isLoading"></Loading> -->
    </div>
</template>
<script>
import AxiosInstance from '../config/axiosInstance';
//   import Loading from 'vue3-loading-overlay';
//   import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
export default {

    name: "ApFaculty",

    data() {
        return {
            product: [],


        }
    },

    computed: {
        isuser() {
            return this.$store.state.user.signInUserSession.idToken.payload;
        }
    },
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            this.isLoading = true;
            try {
                const res = await AxiosInstance.get(`/UserCourseSubscription/facultyTotalAmountCollectedPerSubject?UcognitoId=` + this.isuser.sub);
                this.product = res.data;
            } catch (error) {
                this.isLoading = false;
                console.log(error);
            }
            finally {
                this.isLoading = false;
            }
        },
    },
}


</script>
<style scoped></style>
