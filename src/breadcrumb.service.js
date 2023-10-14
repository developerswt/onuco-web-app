// breadcrumb.service.js
import { ref } from "vue";

const breadcrumbState = ref([]);

function updateBreadcrumbs(to, from) {
  // Determine whether the user is navigating forward or backward
  const isNavigatingForward = from && to.meta.index > from.meta.index;

  // If navigating forward, add the current route to breadcrumbs
  if (isNavigatingForward) {
    breadcrumbState.value.push({
      to: to.fullPath,
      label: to.meta.title || to.name,
    });
  } else {
    // If navigating backward, find and remove the last breadcrumb
    const foundIndex = breadcrumbState.value.findIndex((breadcrumb) => breadcrumb.to === to.fullPath);
    if (foundIndex !== -1) {
      breadcrumbState.value.splice(foundIndex);
    }
  }

  // Assign an index to each route to help in tracking navigation direction
  to.meta.index = breadcrumbState.value.length;
}

export { breadcrumbState, updateBreadcrumbs };
