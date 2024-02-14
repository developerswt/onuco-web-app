<!-- <template>
  <div>
    <VuePdfjsWrapper :src="pdfUrl" />
  </div>
</template>

<script>
import { VuePdfjsWrapper } from 'vue-pdfjs-wrapper';

export default {
  name: 'PdfViewer.vue',
  components: {
    VuePdfjsWrapper,
  },
  data() {
    return {
      pdfUrl: 'test.pdf',
    };
  },
};
</script>

<style>
@import 'vue-pdfjs-wrapper/dist/vue-pdfjs-wrapper.css';

/* Your custom styles */
</style> -->


<template>
  <div>
    <iframe
      title="PDF Document"
      width="100%"
      ref="myIframe"
      height="1000px"
      :src="pdfUrl + '#toolbar=0'"
      aria-label="PDF Viewer"
      aria-describedby="pdfInstructions"
      @contextmenu.prevent
    ></iframe>
    <div id="pdfInstructions" class="sr-only">
      Use arrow keys to navigate through the document pages.
    </div>
  </div>
</template>

<script>
export default {
  name: "PdfViewer",
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pdfUrl: this.url,
    };
  },
  mounted() {
    this.setupIframe();
  },
  methods: {
    setupIframe() {
      const iframe = this.$refs.myIframe;

      iframe.onload = () => {
        iframe.contentWindow.print = () => {
          console.log('Printing is disabled');
        };

        iframe.contentWindow.saveAs = () => {
          console.log('Save As is disabled');
        };
      };
    },
  },
};
</script>

<style>
/* Add styles for responsive design if needed */
</style>

  <!-- <template>
  <div>
    <canvas ref="pdfCanvas"></canvas>
  </div>
</template>

<script>
import pdfjs from 'pdfjs-dist/build/pdf';

export default {
  data() {
    return {
      pdfUrl: 'test.pdf', // Replace with your PDF file path or URL
      pdfInstance: null,
      pageNum: 1,
      totalPages: 0,
    };
  },
  mounted() {
    pdfjs.getDocument(this.pdfUrl).then((pdf) => {
      this.pdfInstance = pdf;
      this.totalPages = pdf.numPages;
      this.renderPage();
    });
  },
  methods: {
    renderPage() {
      this.pdfInstance.getPage(this.pageNum).then((page) => {
        const canvas = this.$refs.pdfCanvas;
        const context = canvas.getContext('2d');

        const viewport = page.getViewport({ scale: 1.5 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext);
      });
    },
    nextPage() {
      if (this.pageNum < this.totalPages) {
        this.pageNum++;
        this.renderPage();
      }
    },
    prevPage() {
      if (this.pageNum > 1) {
        this.pageNum--;
        this.renderPage();
      }
    },
  },
};
</script>

   -->
<!-- 
   <template>
    <div>
      <h1>File</h1>
  
      <PDFViewer
        source="/test.pdf"
        style="height: 100vh; width: 100vw"
        @download="handleDownload"
      />
    </div>
  </template>
  
  <script>
  import PDFViewer from 'pdf-viewer-vue'
  
  export default {
    name: 'PdfViewer',
    components: {
      PDFViewer,
    },
  
    data() {
      return {
        url: '../assets/test.pdf',
      }
    },
  }
  </script> -->