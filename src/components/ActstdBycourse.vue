<template>
    <div class="container">
        <p>Dashbord > Active Student By Course </p>
        <div class="container" style="margin-top: 72px;">
            <div class="table-responsive">
                <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FacultyCognitoId</th>
                            <th>CompleteSubscribedCount</th>
                        </tr>
                    </thead>
                    <tbody v-for="items in item" :key="items.id">
                        <tr>
                            <td>{{ items.id }}</td>
                            <td>{{ items.facultycognitoid }}</td>
                            <td>{{ items.completesubscribedcount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <apexchart class="pt-5 mb-5" width="500" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>
<script>
import AxiosInstance from '../config/axiosInstance';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VueApexCharts from "vue3-apexcharts";

export default {
    name: "ActstdBycourse",
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            item: [],
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [],
                    labels: {
                        show: true,
                        rotate: -40,
                    },
                    title: {
                        text: "Lecture VS Students"
                    }
                },
                yaxis: [
                    {
                        title: {
                            text: "Number Of Syudents Subscribed",
                        },
                    },
                ],
                // DataLabels configuration for the entire chart
                dataLabels: {
                    enabled: true,
                },
            },
            series: [
                {
                    name: 'Lecture VS Students',
                    type: 'bar',
                    data: [],
                },
            ],
        }
    },
    computed: {
        isuser() {
            console.log(this.$store.state.user);
            return this.$store.state.user.signInUserSession.idToken.payload;
        },
    },
    async created() {
        this.isLoading = true;
        try {
            const result = await AxiosInstance.get(`/CoursesFacultyJ/GetAllCourseview`);
            this.item = result.data;
            console.log(this.item);
            this.processChartData();
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
        finally {
            this.isLoading = false;
        }
    },
    methods: {
        processChartData() {
            if (this.item) {
                this.item.forEach(lecture => {
                    const dataPoint = {
                        x: lecture.facultycognitoid,
                        y: lecture.completesubscribedcount,
                    };
                    this.series[0].data.push(dataPoint);
                })
            }
        },
    },
}
</script>

<style scoped>
</style>
