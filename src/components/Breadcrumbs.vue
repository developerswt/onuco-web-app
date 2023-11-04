<!-- <template>
  <div class="mb-4 pt-2">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Academia/engineering' }">Academia</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Universities/computer-science' }">University</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/CollegeDetails/vtu' }">CollegeDetails</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '' }">CourseDetails</el-breadcrumb-item> -->
      <!-- <el-breadcrumb-item v-for="item in items" :key="item.path">{{ item.name }}</el-breadcrumb-item> -->
    <!-- </el-breadcrumb>
    <router-view />
  </div>  
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue' -->
<!-- 
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
</script> -->















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


<!-- <template>
  <div class="breadcrumbs">
    <router-link v-for="(breadcrumb, index) in breadcrumbs" :key="index" :to="breadcrumb.to">
      {{ breadcrumb.text }}
    </router-link>
  </div> -->
  <!-- <AmBreadcrumbs>
    <template #crumb="{ crumb }">
        <router-link
            class="my-custom-crumb"
            :to="crumb.link"
        >
            {{ crumb.label }}
        </router-link>
    </template>
</AmBreadcrumbs> -->
<!-- </template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    breadcrumbs() {
      return this.$breadcrumbs.crumbs;
    }
  }
};
</script>

<style scoped>

</style>
 -->


 // Breadcrumbs.vue

<!-- Breadcrumbs.vue -->

<!-- Breadcrumbs.vue -->

<!-- <template>
  <div>
    <Vue3Breadcrumbs />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useBreadcrumbs } from "vue-3-breadcrumbs";

export default defineComponent({
  setup() {
    const { breadcrumbs } = useBreadcrumbs();
    return {
      breadcrumbs,
    };
  },
});
</script> -->


<!-- Breadcrumb.vue -->
<!-- <template>
  <nav class="breadcrumb">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.path">{{ crumb.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const matched = this.$route.matched;

      return matched.map((route) => ({
        name: route.name,
        path: route.path,
      }));
    },
  },
};
</script>

<style>
/* Add your breadcrumb styling here */
</style> -->


<!-- <template>
  <div>
    {{ crumbs }}
    <br><br>
    <div class="container">
       <b-breadcrumb :items="crumbs"/>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
  }
};
</script>
<style scoped>
.container{
  margin: auto;
  width: 50%
}
</style> -->

<!-- <template>
  <nav class="breadcrumbs">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.to">{{ crumb.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [],
    };
  },
  watch: {
    $route() {
      this.updateBreadcrumbs();
    },
  },
  created() {
    this.updateBreadcrumbs();
  },
  methods: {
    updateBreadcrumbs() {
      const matchedRoutes = this.$route.matched;

      this.breadcrumbs = matchedRoutes.map((route) => ({
        to: route.path,
        label: route.meta.title || route.name,
      }));
    },
  },
};
</script>

<style>

</style> -->


<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" >
      <li>
        <router-link :to="previousPath">{{ previousPathName }} > </router-link>
      </li> &nbsp;
      <li class="breadcrumb-item" v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link to="">{{ crumb.label }}</router-link>
      </li>
    </ol>
  </nav>
  <!-- <nav class="breadcrumbs">
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.to">{{ crumb.label }}</router-link>
      </li>
    </ul>
  </nav> -->
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [],
      previousPath: sessionStorage.getItem('previousRoute'),
      previousPathName: sessionStorage.getItem('previousRouteName')
      // fullPath: '',
      // name: ''
    };
  },
  // watch: {
  //   $route() {
  //     this.updateBreadcrumbs();
  //   },
  // },
  // mounted() {
  //   // Retrieve the stored value from sessionStorage
  //   const storedValue = sessionStorage.getItem('previousRoute');

  //   if (storedValue) {
  //     // Split the stored value into fullPath and name
  //     const [fullPath, name] = storedValue.split(':');

  //     // Assign the split values to data properties
  //     this.fullPath = fullPath;
  //     this.name = name;
  //   }
  // },

  created() {
    this.updateBreadcrumbs();
  },
  // methods: {
  //   updateBreadcrumbs() {
  //     const matchedRoutes = this.$route.matched;

  //     this.breadcrumbs = matchedRoutes.map((route) => ({
  //       to: route.path,
  //       label: route.name,
  //     }));
  //   },
  // },
  methods: {
    updateBreadcrumbs() {
      const routeHistory = this.$route.matched.map((route) => ({
        to: route.path,
        label: route.name,
      }));

      // Ensure unique breadcrumb paths, only adding them once
      const breadcrumbPaths = new Set();
      this.breadcrumbs = routeHistory.filter((route) => {
        if (!breadcrumbPaths.has(route.to)) {
          breadcrumbPaths.add(route.to);
          return true;
        }
        return false;
      });
    },
  },  
};
</script>

<style scoped>
.breadcrumb {
    background: transparent;
    margin-left: -22px;
}

.breadcrumb-item a {
    color: #888888;
    font-size: 16px;
}
a {
  color: #888888;
  text-decoration: none;
}
.breadcrumb-item+.breadcrumb-item::before {
    content: ">";
    color: #888888;
}
ol {
    margin-top: 0;

}
@media screen and (max-width: 1000px) {
  .breadcrumb {
    display: none;
  }
}
</style>
