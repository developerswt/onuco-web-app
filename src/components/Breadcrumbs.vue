<!-- BreadcrumbsView.vue -->
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <router-link v-if="shouldRenderLink(crumb)" :to="crumb.to" class="breadcrumb-link">
          {{ crumb.label }}
        </router-link>
        <span v-else class="breadcrumb-label">{{ crumb.label }}</span>
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
      breadcrumbKey: 0,
      dynamicValue: '',
    };
  },
  watch: {
    $route(to, from) {
      this.updateBreadcrumbs(to, from);
    },
  },
  created() {
    if (this.$route.matched.some(route => route.path.includes('/:'))) {
      this.updateDynamicBreadcrumbs(this.$route);
    } else {
      this.updateNonDynamicBreadcrumbs(this.$route);
    }
  },
  methods: {
    updateBreadcrumbs(toRoute, fromRoute) {
      if (this.$route.name !== 'Home') {
        if (toRoute.matched.some(route => route.path.includes('/:'))) {
          const isPageRefresh = !fromRoute || !fromRoute.name;

          if (isPageRefresh) {
            // Reset breadcrumbs when refreshing the page
            this.breadcrumbs = [];
          }

          this.updateDynamicBreadcrumbs(toRoute, isPageRefresh);
        } else {
          this.updateNonDynamicBreadcrumbs(toRoute, fromRoute);
        }
      }
    },

    updateDynamicBreadcrumbs(toRoute, isPageRefresh) {
      const dynamicValue = this.updateDynamicValue();

      // Create dynamic breadcrumbs
      const dynamicBreadcrumbs = toRoute.matched.map((route) => ({
        to: route.path.includes('/:') ? `${dynamicValue}` : route.path,
        label: this.getBreadcrumbLabel(route),
      }));

      // Check if navigating back within dynamic route
      // const navigatingBackDynamic = this.breadcrumbs.some(
      //   (crumb) => dynamicBreadcrumbs.findIndex((db) => db.to === crumb.to) === -1
      // );

      // if (navigatingBackDynamic) {
      //   // Remove breadcrumbs after the current dynamic breadcrumb
      //   const indexOfCurrentBreadcrumb = this.breadcrumbs.findIndex(
      //     (crumb) => crumb.to === dynamicBreadcrumbs[dynamicBreadcrumbs.length - 1].to
      //   );
      //   if (indexOfCurrentBreadcrumb !== -1) {
      //     this.breadcrumbs.splice(indexOfCurrentBreadcrumb + 1);
      //   }
      // }

      // Check if navigating to a non-dynamic page from a dynamic page
      if (toRoute.matched.every(route => !route.path.includes('/:'))) {
        // Check if the first breadcrumb is "Home" and remove it
        if (this.breadcrumbs.length > 0 && this.breadcrumbs[0].label === 'Home') {
          this.breadcrumbs.shift();
        }

        this.breadcrumbs = [
          ...this.breadcrumbs,
          {
            to: toRoute.path,
            label: this.getBreadcrumbLabel(toRoute),
          },
        ];
      } else {
        // Avoid duplicate "Home" entries in dynamic breadcrumbs
        const hasHomeBreadcrumb = this.breadcrumbs.some((crumb) => crumb.label === 'Home');
        if (!hasHomeBreadcrumb || isPageRefresh) {
          this.breadcrumbs = [
            {
              to: '/',
              label: 'Home',
            },
            ...this.breadcrumbs,
          ];
        }

        // Set dynamic breadcrumbs
        this.breadcrumbs = [
          ...this.breadcrumbs,
          ...dynamicBreadcrumbs,
        ];
      }

      // Navigating back logic
      const navigatingBack = this.breadcrumbs.length > toRoute.matched.length;

      if (navigatingBack) {
        // Find the index of the current breadcrumb
        const indexOfCurrentBreadcrumb = this.breadcrumbs.findIndex(crumb => crumb.to === toRoute.path);
        if (indexOfCurrentBreadcrumb !== -1) {
          // Remove the breadcrumb after the current breadcrumb
          this.breadcrumbs.splice(indexOfCurrentBreadcrumb + 1);
        }
      }

      this.breadcrumbKey += 1;
    },


    // navigateBack() {
    //   if (this.breadcrumbs.length > 1) {
    //     this.breadcrumbs.pop(); // Remove the current breadcrumb
    //     const lastBreadcrumb = this.breadcrumbs[this.breadcrumbs.length - 1];
    //     this.$router.push(lastBreadcrumb.to);
    //   }
    // },



    updateNonDynamicBreadcrumbs(toRoute, fromRoute) {
      const nonDynamicBreadcrumbs = [
        {
          to: '/',
          label: 'Home',
        },
        {
          to: toRoute.path,
          label: this.getBreadcrumbLabel(toRoute),
        },
      ];

      if (fromRoute && fromRoute.matched.some(route => route.path.includes('/:'))) {
        // Reset breadcrumbs when navigating from dynamic to non-dynamic
        this.breadcrumbs = nonDynamicBreadcrumbs;
      } else if (toRoute.matched.some(route => route.path.includes('/:') && route.path.includes('/:pathMatch(.*)*'))) {
        // Reset breadcrumbs when navigating from non-dynamic to dynamic
        this.breadcrumbs = [
          {
            to: '/',
            label: 'Home',
          },
          {
            to: toRoute.path,
            label: this.getBreadcrumbLabel(toRoute),
          },
        ];
      } else {
        // Update breadcrumbs for non-dynamic routes
        this.breadcrumbs = nonDynamicBreadcrumbs;
      }

      this.breadcrumbKey += 1;
    },




    getBreadcrumbLabel(route) {
      if (route.path.includes('/:')) {
        const urlPath = window.location.pathname;
        const pathAfterPort = urlPath.replace(/.*:\d+/, '');
        const dynamicParam = pathAfterPort.split('/').pop(); // Extract the last segment after the last '/'
        const segments = dynamicParam.split('-');
        const firstIndex = segments[0];
        return this.processLabel(firstIndex.replace(/_/g, ' ')); 
      } else {
        return route.name;
      }
    },

    processLabel(label) {
      const formattedLabel = label.replace(/\b\w/g, c => c.toUpperCase());
      return formattedLabel;
    },

    updateDynamicValue() {
      const urlPath = window.location.pathname; // Get the path part of the URL

      // Extract the part of the path after the port number
      const pathAfterPort = urlPath.replace(/.*:\d+/, '');

      // Update the dynamicValue property
      this.dynamicValue = pathAfterPort;

      // Return the value if needed
      return pathAfterPort;
    },

    isHomeRoute() {
      return this.$route.name === 'Home';
    },
    shouldRenderLink(crumb) {
      // Check if the crumb corresponds to the current route
      const currentRoutePath = this.$route.path;
      const crumbRoute = crumb.to;

      // Function to remove dynamic parameters and wildcards from the route path
      const removeDynamicParamsAndWildcards = (path) => path.replace(/\/:\w+/g, '').replace(/\*$/, '');

      return removeDynamicParamsAndWildcards(crumbRoute) !== removeDynamicParamsAndWildcards(currentRoutePath);
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  margin-top: 7%;
  margin-left: -1.5%;
  background-color: transparent;
}

.breadcrumb-item {
  text-decoration: none;
}

.breadcrumb-link {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font: normal normal normal 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: #888888;
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
}

.breadcrumb-label {
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-600) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-21) var(--unnamed-font-family-segoe-ui);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: left;
  font-weight: 600;
  color: #888888;
  opacity: 1;
}
</style>
