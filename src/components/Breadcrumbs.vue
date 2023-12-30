<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li>
        <router-link :to="previousPath">{{ previousPathName }} > </router-link>
      </li> &nbsp;
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <router-link to="">{{ crumb.label }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbsView',
  data() {
    return {
      breadcrumbs: [],
      previousPath: sessionStorage.getItem('previousRoute'),
      previousPathName: sessionStorage.getItem('previousRouteName')
    };
  },
  created() {
    this.updateBreadcrumbs();
  },
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
