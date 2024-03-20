<template print_progress_percent="{ progress }">
  <vue-pdf-app style="height: 1200px; overflow: scroll;z-index: 999;position: relative;" :pdf="url" :config="config"></vue-pdf-app>
</template>

<script>
import VuePdfApp from "vue3-pdf-app";
import "vue3-pdf-app/dist/icons/main.css";

export default {
  name: "PdfViewer",
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
  methods: {
    handleProgress(value) {
      this.progress = value;
    },
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


