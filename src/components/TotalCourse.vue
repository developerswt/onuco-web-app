<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
  
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import AxiosInstance from "../config/axiosInstance";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      courseData: [],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [],
          title: {
            text: "Number Of Subscribed User For The Course",
          },
        }
      },
      series: [{
        name: 'Course Value',
        data: []
      },
    ]
    }
  },
  async created() {
    try {
      const res = await AxiosInstance.get(`/UserCourseSubscription/TotalAmountCollectedPerSubject`);
      this.courseData = res.data;
      console.log(this.courseData);
      this.processChartData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    processChartData() {
      if (this.courseData) { // Check if courseData is defined
        this.courseData.forEach(course => {
          this.options.xaxis.categories.push(course.subjectName);
          // this.chartSeries[0].data.push(course.totalAmountCollected);
          this.series[0].data.push(course.totalSubscribedStudents);
        });
      }
    },
  },

};
</script>

<!-- <template>
  <div class="container">
    <div class="pt-5">
      <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import AxiosInstance from "../config/axiosInstance";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      courseData: [],
      chartOptions: {
        chart: {
          id: 'vuechart-example1'
        },
        xaxis: {
          categories: [], // Course names
          title: {
            text: 'Courses',
          },
        },
        yaxis: {
          title: {
            text: 'Values',
          },
        },
      },
      chartSeries: [
        {
          name: 'Total Subscribed Students',
          data: [], // Total Subscribed Students values
        },
      ],
    };
  },
  async created() {
    try {
      const res = await AxiosInstance.get(`/UserCourseSubscription/TotalAmountCollectedPerSubject`);
      this.courseData = res.data;
      console.log(this.courseData);
      this.processChartData();
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  },
  methods: {
    processChartData() {
      if (this.courseData) { // Check if courseData is defined
        this.courseData.forEach(course => {
          this.chartOptions.xaxis.categories.push(course.name);
          // this.chartSeries[0].data.push(course.totalAmountCollected);
          this.chartSeries[0].data.push(course.totalSubscribedStudents);
        });
      }
    },
  },
};
</script> -->
