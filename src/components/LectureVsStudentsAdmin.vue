<!-- App.vue -->
<template>
    <div class="container mb-5">
        <div>
            <apexchart class="mb-5" width="500" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import VueApexCharts from "vue3-apexcharts";

export default {

    name: "LectureVsStudentsAdmin",
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
                    // {
                    //     opposite: true,
                    //     title: {
                    //         text: "Total Amount Collected",
                    //     },
                    // },
                ],
                // DataLabels configuration for the entire chart

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
                // {
                //     name: 'Lecture Subjects Price',
                //     type: 'line',
                //     data: [],
                // },
            ],
        };
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


                    // this.options.xaxis.categories = this.getMonthYear(this.item.startDate);
                    this.series[0].data.push(dataPoint);
                })
            }
        },

    },
}


</script>

<style></style>
