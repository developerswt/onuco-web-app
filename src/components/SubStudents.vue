<!-- App.vue -->
<template>
    <div class="container mb-5">
        <p>Dashbord > Subscription Students </p>
        <div class="container" style="margin-top: 72px;padding-bottom: 80px;">
            <div class="table-responsive">
                <div class="row">
                    <div class="col-sm-12">
                        <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <!-- <th>ID</th> -->

                                    <th>Subject Name</th>
                                    <th>Total Amount collected</th>
                                    <th>Subscription Students</th>
                                    <!-- <th>Fee</th>
                           <th>Fee Due</th> -->
                                </tr>
                            </thead>
                            <tbody v-for="items in item" :key="items.subjectName">
                                <tr>
                                    <td>{{ items.subjectName }}</td>
                                    <td> {{ items.totalAmountCollected }}</td>
                                    <td>{{ items.totalSubscribedStudents }}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <apexchart class="mb-5" width="500" :options="options" :series="series"></apexchart>
            <Loading v-model:active="isLoading" loader="dots" :color="'#0066CC'" :width="100" :height="100"></Loading>
        </div>
    </div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VueApexCharts from "vue3-apexcharts";

export default {

    name: "SubStudent",
    components: {
        Loading,
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
                    }
                },
                yaxis: [
                    {
                        title: {
                            text: "Subscribed Students",
                        },
                    },
                    {
                        opposite: true,
                        title: {
                            text: "Total Amount Collected",
                        },
                    },
                ],
                // DataLabels configuration for the entire chart
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]

                },
            },
            series: [
                {
                    name: 'Subscribed Students',
                    type: 'bar',
                    data: [],
                },
                {
                    name: 'Total Amount Collected',
                    type: 'line',
                    data: [],
                },
            ],
        };
    },

    async created() {
        this.isLoading = true;
        try {
            const result = await AxiosInstance.get(`/UserCourseSubscription/TotalAmountCollectedPerSubject`);
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
                this.item.forEach(course => {
                    const dataPoint = {
                        x: course.subjectName,
                        y: course.totalSubscribedStudents,
                    };

                    const priceAmount = {
                        x: course.subjectName,
                        y: course.totalAmountCollected,
                    };

                    this.series[0].data.push(dataPoint);
                    this.series[1].data.push(priceAmount)
                });
            }
        }
    },
}


</script>

<style></style>
