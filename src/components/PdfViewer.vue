<template>
  <vue-pdf-app style="height: 120vh" :pdf="url" :config="config" :print_progress_percent="progress"></vue-pdf-app>
</template>

<script>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";

export default {
  name: "App",
  components: {
    VuePdfApp,
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      progress: 0,
      config: {
        toolbar: {
          toolbarViewerRight: {
            print: false,
            download: false,
          }
        }
      },
    };
  },
  watch: {
    url: {
      immediate: true,
      handler(newUrl) {
        console.log(newUrl);
        // Reset progress when the URL changes
        this.progress = 0;
      },
    },
  },
};
</script>
