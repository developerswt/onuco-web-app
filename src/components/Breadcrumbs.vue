<template>
  <div class="mb-4 pt-2">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Academia/engineering' }">Academia</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Universities/computer-science' }">University</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/CollegeDetails/vtu' }">CollegeDetails</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '' }">CourseDetails</el-breadcrumb-item>
      <!-- <el-breadcrumb-item v-for="item in items" :key="item.path">{{ item.name }}</el-breadcrumb-item> -->
    </el-breadcrumb>
    <router-view />
  </div>  
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'

// export default {
//   data() {
//     return {
//       items:[],
//     }
//   },
//   watch: {
//     $route() {
//       this.getRoute();
//     }
//   },
//   methods: {
//     getRoute() {
//       this.items = this.$route.matched;
//       console.log(this.$route);
//     }
//   },
//   created() {
//     this.getRoute();
//   }
// }
</script>















<!-- <template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in crumbs" :key="index" :class="{ 'active': index === crumbs.length - 1 }">
        <router-link :to="crumb.to">{{ crumb.label }}</router-link>
        <span v-if="index === crumbs.length - 1">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      crumbs: [],
    };
  },
  watch: {
    $route(to, from) {
      this.generateBreadcrumbTrail(to, from);
    },
  },
  created() {
    this.generateBreadcrumbTrail(this.$route);
  },
  methods: {
    generateBreadcrumbTrail(to, from) {
      const breadcrumbs = [];

      // Function to recursively build breadcrumb trail
      const buildBreadcrumbTrail = (route) => {
        if (route.name) {
          breadcrumbs.unshift({ label: route.name, to: route.path });
        }
        if (route.matched.length > 1) {
          buildBreadcrumbTrail(route.matched[route.matched.length - 2]);
        }
      };

      // Add homepage label and route
      breadcrumbs.push({ label: 'Home', to: '/' });

      // Build the breadcrumb trail
      buildBreadcrumbTrail(to);

      this.crumbs = breadcrumbs;
    },
  },
};
</script> -->
