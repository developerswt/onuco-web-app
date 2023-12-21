<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col-sm-6">
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </div>
      <div class="col-sm-6">
        <TotalCourse />
      </div>
    </div>
  </div>  
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import AxiosInstance from "../config/axiosInstance";
import TotalCourse from "./TotalCourse.vue";

export default {
  components: {
    apexchart: VueApexCharts,
    TotalCourse,
  },
  data() {
    return {
      activeStudents: [],
      inActiveStudents: [],
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          title: {
            text: "Number Of Active and Inactive Users",
          },
        }
      },
      series: [{
        name: 'ActiveUser',
        data: []
      },
      {
        name: 'InActiveUser',
        data: []
      }
    ]
    }
  },
  async created() {
    try {
      const activeRes = await AxiosInstance.get(`/UserCourseSubscription/GetActiveStudentsCount`);
      this.activeStudents = activeRes.data.activeStudents;
      console.log(this.activeStudents);
      const inactiveRes = await AxiosInstance.get(`/UserCourseSubscription/GetInactiveStudentsCount`);
      this.inActiveStudents = inactiveRes.data.inactiveStudents;

      this.processChartData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  methods: {
    processChartData() {
      const activeMonthMap = {};
      const inactiveMonthMap = {};

      const processStudents = (students, monthMap) => {
        students.forEach((student) => {
          const startDateMonth = this.getMonthYear(student.startdate);
          const endDateMonth = this.getMonthYear(student.enddate);

          const startMonthIndex = this.options.xaxis.categories.indexOf(startDateMonth);
          const endMonthIndex = this.options.xaxis.categories.indexOf(endDateMonth);

          for (let i = startMonthIndex; i <= endMonthIndex; i++) {
            const month = this.options.xaxis.categories[i];
            monthMap[month] = (monthMap[month] || 0) + 1;
          }
        });
      };

      processStudents(this.activeStudents, activeMonthMap);
      processStudents(this.inActiveStudents, inactiveMonthMap);

      this.series[0].data = this.options.xaxis.categories.map(month => activeMonthMap[month] || 0);
      this.series[1].data = this.options.xaxis.categories.map(month => inactiveMonthMap[month] || 0);
    },
    getMonthYear(date) {
      const d = new Date(date);
      const month = d.toLocaleString("en-US", { month: "short" });
      return month;
    },
  },

};
</script>
