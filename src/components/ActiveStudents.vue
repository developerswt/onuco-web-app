<template>
    <div class="row">
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>Active Students Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart width="500" class="pt-5" :options="activeStudentOptions" :series="activeStudentSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>        
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>Course Vs Students Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart width="500" class="pt-5" :options="subjectOptions" :series="subjectSeries"></apexchart>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>Faculty Vs Students Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart width="500" class="pt-5" :options="lectureStudentsOptions" :series="lectureStudentsSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>        
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>Faculty Vs Subjects Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart width="500" class="pt-5" :options="lectureSubjectOptions" :series="lectureSubjectSeries"></apexchart>
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
    name: 'ActiveStudents',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            activeStudentOptions: {
                chart: {
                    id: 'vuechart-example',
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
                    title: {
                        text: "No Of Active Students and Total Price",
                    },
                },
                yaxis: [
                    {
                        title: {
                            text: "No Of Active Students",
                        },
                    },
                    {
                        opposite: true,
                        title: {
                            text: "Total Price",
                        },
                    },
                ],
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
        
            },
            activeStudentSeries: [{
                    name: 'ActiveUser',
                    data: [],
                    type: 'bar',
                },
                {
                    name: 'Price',
                    data: [],
                    type: 'line',
                },
            ],
            // Course Vs Subject
            course: [],
            subjectOptions: {
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
            subjectSeries: [
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

            // Lecture Vs Students
            lectureStudent: [],
            lectureStudentsOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                        barWidth: "2%",
                        group: 'group',
                        // Adjust the width of the bars as needed
                    },
                },
                xaxis: {
                    categories: [],
                    labels: {
                        show: true,
                        rotate: -20,
                    },
                    title: {
                        text: "Lecture VS Students"
                    }
                },
                yaxis: [
                    {
                        title: {
                            text: "No Of Students Subscribed",
                        },
                    },
                ],
                dataLabels: {
                    enabled: true,
                },
            },
            lectureStudentsSeries: [
                {
                    name: 'Lecture VS Students',
                    type: 'bar',
                    data: [],
                },
            ],

            // Lecture vs Subject
            lectureSubject: [],
            lectureSubjectOptions: {
                chart: {
                    id: 'vuechart-example'
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                        barWidth: "2%",
                        group: 'group',
                        barHeight: "80%" // Adjust the width of the bars as needed
                    },
                },
                xaxis: {
                    categories: [],
                    labels: {
                        show: true,
                        rotate: -20,
                    },
                    title: {
                        text: "Lecture Vs Course",
                    }
                },
                yaxis: [
                    {
                        title: {
                            text: "No Of Course",
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
            lectureSubjectSeries: [
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
        }
    },
    async created() {
        try {
            const res = await AxiosInstance.get(`/UserCourseSubscription/GetActiveStudentsCount`);
            this.Orders = res.data;
            const result = await AxiosInstance.get(`/UserCourseSubscription/TotalAmountCollectedPerSubject`);
            this.course = result.data;
            const resu = await AxiosInstance.get(`/CoursesFacultyJ/GetAllCourseview`);
            this.lectureStudent = resu.data;
            const resul = await AxiosInstance.get(`CoursesFacultyJ/GetAllCourseDetails`);
            this.lectureSubject = resul.data;
            this.activeChartData();
            this.subjectChartData();
            this.lectureStudentChartData();
            this.lectureSubjectChartData();
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        activeChartData() {
            if (this.Orders) {
                this.Orders.activeStudents.forEach(order => {
                    const dataPoint = {
                        x: this.getMonthYear(order.startdate),
                        y: 1,
                    };
                    const Price = {
                        x: this.getMonthYear(order.startdate),
                        y: order.price,
                    };
                    this.activeStudentOptions.xaxis.categories.push(this.getMonthYear(order.startdate));
                    this.activeStudentSeries[0].data.push(dataPoint);
                    this.activeStudentSeries[1].data.push(Price);
                });
            }
        },
        subjectChartData() {
            if (this.course) {
                this.course.forEach(course => {
                    const dataPoint = {
                        x: course.subjectName,
                        y: course.totalSubscribedStudents,
                    };
    
                    const priceAmount = {
                        x: course.subjectName,
                        y: course.totalAmountCollected,
                    };
    
                    this.subjectOptions.xaxis.categories.push(course.subjectName);
                    this.subjectSeries[0].data.push(dataPoint);
                    this.subjectSeries[1].data.push(priceAmount);
                });
            }
        },
        lectureStudentChartData() {
            if (this.lectureStudent) {
                this.lectureStudent.forEach(lecture => {
                    const dataPoint = {
                        x: lecture.facultycognitoid,
                        y: lecture.completesubscribedcount,
                    };
                    this.lectureStudentsSeries[0].data.push(dataPoint);
                })
            }
        },
        lectureSubjectChartData() {
            if (this.lectureSubject) {
                this.lectureSubject.forEach(lecture => {
                    const dataPoint = {
                        x: lecture.facultyCognitoId,
                        y: lecture.totalCourseNameCount,
                    };

                    const priceAmount = {
                        x: lecture.facultyCognitoId,   
                        y: lecture.totalPrice,
                    };

                    this.lectureSubjectSeries[0].data.push(dataPoint);
                    this.lectureSubjectSeries[1].data.push(priceAmount);
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

/* .card-body:last-child {
    border-radius: 0 0 2px 2px;
} */
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
}
</style>
