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

    name: "LectureVsSubjectAdmin",
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
                    }
                },
                yaxis: [
                    {
                        title: {
                            text: "Course He Handle",
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

                // DataLabels configuration for the entire chart
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]

                },
            },
            series: [
                {
                    name: 'Lecture Subjects',
                    type: 'bar',
                    data: [],
                },
                {
                    name: 'Lecture Subjects Price',
                    type: 'line',
                    data: [],
                },
            ],
        };
    },

    async created() {
        this.isLoading = true;
        try {
            const result = await AxiosInstance.get(`CoursesFacultyJ/GetAllCourseDetails`);
            this.item = result.data;
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
                        x: lecture.facultyCognitoId,
                        y: lecture.totalCourseNameCount,
                    };

                    const priceAmount = {
                        x: lecture.facultyCognitoId,
                        y: lecture.totalPrice,
                    };

                    // this.options.xaxis.categories = this.getMonthYear(this.item.startDate);
                    this.series[0].data.push(dataPoint);
                    this.series[1].data.push(priceAmount);
                })
            }
        },
        getMonthYear(date) {
            const d = new Date(date);
            const month = d.toLocaleString("en-US", { month: "short" });
            return month;
        },

    },
}


</script>

<style></style>
