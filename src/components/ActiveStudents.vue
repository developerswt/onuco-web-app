<template>
    <h2 class="page_title">For Students</h2>
    <div class="row">
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Register User Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="registerUserOptions" :series="registerUserSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Subscribed Students Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="subScribedStdOptions" :series="subScribedStdSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of ActiveSubscription Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="activeSubscriptionOptions" :series="activeSubscriptionSeries">
                        </apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 class="page_title">For Faculty</h2>
    <div class="row">    
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of faculties entrolled Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="facultiesEntrolledOptions" :series="facultiesEntrolledSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Active Faculties Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="activeFacultiesOptions" :series="activeFacultiesSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h2 class="page_title">For Courses</h2>
    <div class="row">    
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Courses Available In System Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="coursesAvailableOptions" :series="coursesAvailableSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Active Courses Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="activeCoursesOptions" :series="activeCoursesSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">    
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Courses Subscribed Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="coursesSubscribedOptions" :series="coursesSubscribedSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <h2 class="page_title">Course Details</h2>
    <div class="row">    
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Courses Subscribed Every Year Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="couSubEveryYearOptions" :series="couSubEveryYearSeries"></apexchart>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card card-box">
                <div class="card-head">
                    <header>No Of Active/In Active Courses Survey</header>
                </div>
                <div class="card-body">
                    <div class="recent-report__chart">
                        <apexchart class="pt-5" :options="actInactCouOptions" :series="actInactCouSeries"></apexchart>
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
            // For Students :
            registerUserOptions: {
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
                    labels: {
                        rotate: 0
                    },
                    title: {
                        text: "No Of Register User",
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
            registerUserSeries: [{
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
            // No Of Subscribed Students Survey
            subscribedStd: [],
            subScribedStdOptions: {
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
                        text: "No Of Subscribed Students",
                    },
                },
                yaxis: [
                    {
                        title: {
                            text: "Subscribed Students",
                        },
                    },
                ],
            },
            subScribedStdSeries: [
                {
                    name: 'Subscribed Students',
                    type: 'bar',
                    data: [],
                },
            ],
            // No Of ActiveSubscription Survey
            course: [],
            activeSubscriptionOptions: {
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
                        text: "No Of ActiveSubscription",
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
            activeSubscriptionSeries: [
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
            // For Faculty :
            // No Of faculties entrolled
            lectureStudent: [],
            facultiesEntrolledOptions: {
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
                        rotate: 0,
                    },
                    title: {
                        text: "No Of Faculties Entrolled"
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
            facultiesEntrolledSeries: [
                {
                    name: 'Lecture VS Students',
                    type: 'bar',
                    data: [],
                },
            ],
            // No Of Active Faculties
            lectureSubject: [],
            activeFacultiesOptions: {
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
                        rotate: 0,
                    },
                    title: {
                        text: "No Of Active Faculties",
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
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]

                },
            },
            activeFacultiesSeries: [
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
            // For Courses
            // No Of Courses Available In System
            coursesAvailable: [],
            coursesAvailableOptions: {
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
                        rotate: 0,
                    },
                    title: {
                        text: "No Of Courses Available In System",
                    }
                },
                yaxis: [
                    {
                        title: {
                            text: "No Of Course",
                        },
                    },
                ],
            },
            coursesAvailableSeries: [
                {
                    name: 'Course available',
                    type: 'bar',
                    data: [],
                },
            ],
            // No Of Active Courses
            lectureSubject: [],
            activeCoursesOptions: {
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
                        rotate: 0,
                    },
                    title: {
                        text: "No Of Active Courses",
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
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]

                },
            },
            activeCoursesSeries: [
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
            // No Of Courses Subscribed
            lectureSubject: [],
            coursesSubscribedOptions: {
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
                        rotate: 0,
                    },
                    title: {
                        text: "No Of Courses Subscribed",
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
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]

                },
            },
            coursesSubscribedSeries: [
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
            //  Course Details :
            // No Of Courses Subscribed Every Year
            lectureSubject: [],
            couSubEveryYearOptions: {
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
                        rotate: 0,
                    },
                    title: {
                        text: "No Of Courses Subscribed Every Year",
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
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]

                },
            },
            couSubEveryYearSeries: [
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
            // No Of Active In Active Courses
            lectureSubject: [],
            actInactCouOptions: {
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
                        rotate: 0,
                    },
                    title: {
                        text: "No Of Active In Active Courses",
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
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]

                },
            },
            actInactCouSeries: [
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
            const res = await AxiosInstance.get(`/UserCourseSubscription/GetCompletedStudentsCount`);
            this.subscribedStd = res.data;
            const result = await AxiosInstance.get(`/Course`);
            this.coursesAvailable = result.data;
            const resu = await AxiosInstance.get(`/CoursesFacultyJ/GetAllCourseview`);
            this.lectureStudent = resu.data;
            const resul = await AxiosInstance.get(`CoursesFacultyJ/GetAllCourseDetails`);
            this.lectureSubject = resul.data;
            this.subscribedStdChartData();
            this.subjectChartData();
            this.lectureStudentChartData();
            this.lectureSubjectChartData();
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        subscribedStdChartData() {
  if (this.subscribedStd) {
    const yearCounts = {};

    this.subscribedStd.completedStudents.forEach((order, index) => {
      const year = new Date(order.startdate).getFullYear();
      const monthYear = this.getMonthYear(order.startdate);

      if (index > 0) {
        const prevOrder = this.subscribedStd.completedStudents[index - 1];
        const prevYear = new Date(prevOrder.startdate).getFullYear();

        if (prevYear === year) {
          // If the current year is the same as the previous, increment the count
          const dataIndex = yearCounts[prevYear].index;
          yearCounts[prevYear].count++;
          this.subScribedStdSeries[0].data[dataIndex].y = yearCounts[prevYear].count;
          return; // Skip adding a new data point for the current order
        }
      }

      if (!yearCounts[year]) {
        yearCounts[year] = {
          count: 1,
          index: this.subScribedStdOptions.xaxis.categories.length,
        };
        this.subScribedStdOptions.xaxis.categories.push(monthYear);
      } else {
        // If the year already exists, increment the count and update the corresponding y-axis value
        yearCounts[year].count++;
        const dataIndex = yearCounts[year].index;
        this.subScribedStdSeries[0].data[dataIndex].y = yearCounts[year].count;
      }

      const dataPoint = {
        x: monthYear,
        y: yearCounts[year].count,
      };

      this.subScribedStdSeries[0].data.push(dataPoint);
    });
  }
},


        subjectChartData() {
            if (this.course) {
                this.course.forEach(course => {
                    const subjectNameArray = course.subjectName.split(' ');
                    const dataPoint = {
                        x: subjectNameArray,
                        y: course.totalSubscribedStudents,
                    };
                    const priceAmount = {
                        x: subjectNameArray,
                        y: course.totalAmountCollected,
                    };
                    this.subjectOptions.xaxis.categories.push(subjectNameArray);
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
            const year = d.getFullYear();
            return `${month} ${year}`;
        }
    },
}
</script>


<style scoped>
.page_title {
    color: #666;
    font-size: 24px;
    font-weight: bold;
}
.col-12 {
    flex: 0 0 auto;
    width: 100%;
}
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
.card-body {
    padding: 10px 24px 14px 24px;
    position: relative;
}

.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}

@media screen and (max-width: 600px) {
    .apexcharts-canvas {
        overflow-x: auto;
    }
}

@media (min-width: 576px) {
    .col-sm-6 {
        flex: 0 0 auto;
        width: 50%;
    }
}
</style>
