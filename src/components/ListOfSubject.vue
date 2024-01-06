<template>
  <div class="container">
    <p>Dashbord > Active Student By Course </p>
    <div class="container" style="margin-top: 72px;">
      <div class="table-responsive">
        <br>
        <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>Id</th>
              <th>FacultyCognitoId</th>
              <th>TotalCourseCount</th>
              <th>TotalPrice</th>
            </tr>
          </thead>
          <tbody v-for="items in item" :key="items.id">
            <tr>
              <td>{{ items.id }}</td>
              <td>{{ items.facultyCognitoId }}</td>
              <td>{{ items.totalCourseNameCount }}</td>
              <td>{{ items.totalPrice }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Loading v-model:active="isLoading"></Loading>
    <div>
      <apexchart class=" pt-5 mb-5" width="500" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>
  
<script>
import AxiosInstance from '../config/axiosInstance';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import VueApexCharts from "vue3-apexcharts";


export default {
  name: "ListOfSubject",
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

    }
  },
  computed: {
    isuser() {
      console.log(this.$store.state.user);
      return this.$store.state.user.signInUserSession.idToken.payload;
    }
  },
  async created() {
    try {
      const result = await AxiosInstance.get(`CoursesFacultyJ/GetAllCourseDetails`);
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
  
<style scoped></style>
  