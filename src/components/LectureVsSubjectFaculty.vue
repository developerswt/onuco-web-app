<!-- App.vue -->
<template>
    <div class="container">
    <p>Dashbord > Active Student By Course </p>
    <div class="container" style="margin-top: 72px;">
      <div class="table-responsive">
        <br>
        <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>CourseName</th>
              <th>TotalPrice</th>
              <th>TotalStudentsSubscribed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ this.item.courseName }}</td>
              <td>{{ this.item.totalPrice }}</td>
              <td>{{ this.item.totalStudentsSubscribed }}</td>
            </tr>
          </tbody>
        </table>
      </div>
        <div>
            <apexchart class="mb-5" width="500" :options="options" :series="series"></apexchart>
        </div>
    </div>
    </div>
</template>

<script>
import AxiosInstance from '../config/axiosInstance';
import VueApexCharts from "vue3-apexcharts";

export default {

    name: "LectureVsSubjectFaculty",
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
                            text: "Subscribed Student for the Course",
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
            series: [
                {
                    name: 'Lecture Subjects',
                    type: 'bar',
                    data: [],
                },
                {
                    name: 'Subjects Price',
                    type: 'bar',
                    data: [],
                },
            ],
        };
    },

    async created() {
        this.isLoading = true;
        try {
            const result = await AxiosInstance.get(`/CoursesFacultyJ/GetCourseDetails`);
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
            
                const dataPoint = {
                    x: this.item.courseName,
                    y: this.item.totalStudentsSubscribed,
                };

                const priceAmount = {
                    x: this.item.courseName,
                    y: this.item.totalPrice,
                };

                    this.series[0].data.push(dataPoint);
                    this.series[1].data.push(priceAmount);

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
