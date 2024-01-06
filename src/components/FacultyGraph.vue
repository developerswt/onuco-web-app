<template>
    <div class="row">
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>Active Students Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="activeStudentOptions" :series="activeStudentSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>Subject Vs Students Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="subjectStudentOptions" :series="subjectStudentSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import VueApexCharts from "vue3-apexcharts";

export default {
    name: 'FacultyGraph',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            activeStudents: [],
            activeStudentOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                plotOptions: {
                    bar: {
                        columnWidth: "30%",
                        barWidth: "2%",
                        group: 'group',
                        barHeight: "80%" // Adjust the width of the bars as needed
                    },
                },
                xaxis: {
                    categories: [],
                    labels: {
                        show: true,
                        rotate: -40,
                    },
                    title: {
                        text: "Active Students",
                    },
                },
                yaxis: [
                    {
                        title: {
                            text: "No Of Active Student",
                        },
                    },
                ],
                // DataLabels configuration for the entire chart
                dataLabels: {
                    enabled: true,
                },
            },
            activeStudentSeries: [
                {
                    name: 'Lecture Vs Active Students',
                    type: 'bar',
                    data: [],
                },
            ],

            // Subject Vs Students

            subjectStudent: [],
            subjectStudentOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                plotOptions: {
                    bar: {
                        columnWidth: "30%",
                        barWidth: "2%",
                        group: 'group',
                        barHeight: "80%" // Adjust the width of the bars as needed
                    },
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
                            text: "No Of Subscribed Student",
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

                },
            },
            subjectStudentSeries: [
                {
                    name: 'Subjects',
                    type: 'bar',
                    data: [],
                },
                {
                    name: 'Total Price',
                    type: 'bar',
                    data: [],
                },
            ],

        }
    },
    async created() {
        try {
            const result = await AxiosInstance.get(`/CoursesFacultyJ/GetActiveStudents`);
            this.activeStudents = result.data;
            console.log(this.activeStudents);
            const resul = await AxiosInstance.get(`/CoursesFacultyJ/GetCourseDetails`);
            this.subjectStudent = resul.data;
            console.log(this.subjectStudent);
            this.processChartData();
            this.subjectStudentChartData();
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        processChartData() {
            if (this.activeStudents && this.activeStudents.length > 0) { // Check if the array is not empty
                const firstItem = this.activeStudents[0]; // Access the first element of the array

                const dataPoint = {
                    x: this.getMonthYear(firstItem.startdate),
                    y: firstItem.activeStudentsCount,
                };

                this.activeStudentOptions.xaxis.categories = [this.getMonthYear(firstItem.startdate)]; // Assuming categories is an array
                this.activeStudentSeries[0].data.push(dataPoint);
            }
        },
        subjectStudentChartData() {
            if (this.subjectStudent) {

                const dataPoint = {
                    x: this.subjectStudent.courseName,
                    y: this.subjectStudent.totalStudentsSubscribed,
                };

                const priceAmount = {
                    x: this.subjectStudent.courseName,
                    y: this.subjectStudent.totalPrice,
                };

                this.subjectStudentSeries[0].data.push(dataPoint);
                this.subjectStudentSeries[1].data.push(priceAmount);

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

<style scoped>
.card-box {
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    margin-bottom: 20px;
    border: 1px solid #deebfd;
    box-shadow: -8px 12px 18px 0 #dadee8;
}

.card-head {
    border-radius: 2px 2px 0 0;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
    padding: 2px;
    /* text-transform: uppercase; */
    color: #3a405b;
    font-size: 14px;
    font-weight: 600;
    line-height: 40px;
    min-height: 40px;
}

.card-head header {
    display: inline-block;
    padding: 11px 20px;
    vertical-align: middle;
    line-height: 17px;
    font-size: 17px;
    letter-spacing: 1px;
}

.card-body:last-child {
    border-radius: 0 0 2px 2px;
}

.card-body {
    padding: 10px 24px 14px 24px;
    position: relative;
}

.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}

@media (min-width: 576px) {
    .col-sm-6 {
        flex: 0 0 auto;
        width: 50%;
    }
}</style>
