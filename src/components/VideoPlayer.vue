<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
    {{ showVisible }}
    <div id="overlays-wrap" v-if="showVisible">

<div class="overlay-item" data-overlayid="59" data-time="41">
  <p class="vo-question">
    Welche Zahl ist die Summe bei 3 + 50 = 53?
  </p>
  </div>
  </div>

</div>

  
</template>
  
<script>
import videojs from 'video.js';               
import "videojs-overlay";

export default {
  name: 'VideoPlayer',
  emits: ["playerReady"],
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      showVisible: false,
      player: null,
      whereYouAt: null,
      ready: false,
      overlay_content : '<div id="overlaycss" class="z"><p style=z-index: 1; font-size: 40px;>Subscribe bellow button To Continue The Course Video</p><button class="btn btn-success buttonb vtask-btn-continue">Subscribe</button></div>'

      // image: document.getElementById('image_background'),
      // video: document.getElementById('video_background')
    }
  },
  
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
      // this.duration = this.player.on('timeupdate', function() {
      //   console.log(this.currentTime())
      //   if(Math.round(this.currentTime())== 5) {
      //     this.pause();
          
      //     this.player.controls= false; 
      //   }
      // })
    });
    this.showOverlay(this.player);
    this.player.overlay({
      class: 'customOverlay',
        overlays: [
          {
            content: this.overlay_content,
            class: 'customOverlay',
            start: 4,
            end: 100,
            showBackground: false,
            align: "bottom-left"
          }
          //{
            // This overlay will appear when the "custom1" event is triggered and
            // disappear when the "custom2" event is triggered.
            // start: 5,
            // end: 100,
            // content: "Click The Image To Subscribe The Video",
            // align: "bottom",
            // class: "over"
          //}
        ]
      });
      
  },
  watch: {
    ready(newVal) {
      console.log("newVal",newVal)
    },
  },
  updated() {
    console.log(this.player)
    this.player.on('play', function() {
      console.log('PLAY');
    });
  },
  methods: {
    getCurrentTime() {
      return this.player.getCurrentTime();
    },
    playerReady(status) {
      this.$emit("playerReady", status);
    },
    showOverlay(args) {
      // this.showVisible = true;
      console.log(args);
      this.duration = this.player.on('timeupdate', function() {
        console.log(this.currentTime())
        if(Math.round(this.currentTime())== 5) {
          this.pause();
          this.showVisible = true;
          this.player.controls= false; 
        }
      })
      console.log(this.duration);
    }
    
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },

  // beforeUnmount() {
  //   if (this.player) {
  //     this.player.dispose();
  //   }
  // }
};
  </script>

  <style scoped>
.video-js {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    padding-top: 56.25%;
    

}
#overlays-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height:460px;
    left: 0;
    top: 0;
    z-index: 2147483647;
}

.overlay-item {
    position: absolute;
    top: 0;
    color: #FFF;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.85);
    width: 100%;
    height: 100%;
    padding: 0;
    z-index: 2147483647;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
}


</style>