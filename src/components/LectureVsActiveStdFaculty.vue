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

    name: "LectureVsActiveStdFaculty",
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
                        text: "Lecture Active Students",
                    },
                },
                yaxis: [
                    {
                        title: {
                            text: "Active Student for the Lecture",
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
                    name: 'Lecture Subjects Active Students',
                    type: 'bar',
                    data: [],
                },
            ],
        };
    },

    async created() {
        this.isLoading = true;
        try {
            const result = await AxiosInstance.get(`/CoursesFacultyJ/GetActiveStudents`);
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
            if (this.item && this.item.length > 0) { // Check if the array is not empty
        const firstItem = this.item[0]; // Access the first element of the array

        const dataPoint = {
            x: this.getMonthYear(firstItem.startdate),
            y: firstItem.activeStudentsCount,
        };

        this.options.xaxis.categories = [this.getMonthYear(firstItem.startdate)]; // Assuming categories is an array
        this.series[0].data.push(dataPoint);
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
