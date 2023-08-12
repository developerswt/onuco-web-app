<template>
  <div class="customePlyr">
    <video ref="videoPlayer" class="video-js vjs-default-button vjs-big-play-centered"></video>
    <div class="overlaysWrap">
      <div class="overlay-item">
        <p class="vo-question">
          Please subscribe to watch full video
        </p>
      </div>
      <div class="btnStyle">
          <router-link to="/RazorPay"><button class="btn subscribeBtn" >SUBSCRIBE</button></router-link>
        </div>
    </div>
</div> 
</template>
  
<script>
import videojs from 'video.js';
import "videojs-overlay";
import qualityLevels  from "videojs-contrib-quality-levels";
import videojsqualityselector from 'videojs-hls-quality-selector';

export default {
  name: 'VideoPlayer',
  emits: ["playerReady"],
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    limit: null
  },
  data() {
    return {
      player: null,
      whereYouAt: null,
      duration: null,
      ready: false,
    }
  },
  
  mounted() {
    videojs.registerPlugin('qualityLevels',qualityLevels);
    videojs.registerPlugin('hlsQualitySelector',videojsqualityselector);
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      

    this.player.on('timeupdate', function() {
        console.log(this.currentTime())
        if(Math.round(this.currentTime())== 7) {
          this.pause();
            var parent = this.el().parentNode;
		        var closeBtn = parent.querySelector('.overlaysWrap');
            closeBtn.style.visibility='visible';
            this.player.controls= false; 
        }
      });
      this.player.qualityLevels();
        this.player.hlsQualitySelector({ displayCurrentQuality: true });
        console.log(this.player);
      
      // this.player.hlsQualitySelector = hlsQualitySelector;
      // this.player.hlsQualitySelector();      
      // this.player.hlsQualitySelector = videojsqualityselector;
      // this.player.hlsQualitySelector({
      //       displayCurrentQuality: true,
      // });
  
      this.player.log('onPlayerReady', this);
    });
    
  },

  methods: {
    getCurrentTime() {
      return this.player.getCurrentTime();
    },
    playerReady(status) {
      this.$emit("playerReady", status);
    },
    showOverlay() {
    },
    
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },


};
  </script>

  <style scoped>
.video-js {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    padding-top: 56.25%;
    

}
.vjs-text-track-display {
    position: absolute;
    bottom: 3em;
    left: 0;
    right: 0;
    top: 0;
    pointer-events: none;
}
.overlaysWrap{
    visibility: hidden;
    position: absolute;
    top: 0;
    color: #FFF;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.85);
    width: 100%;
    height: 100%;
    z-index: 100;
}

.subscribeBtn {
  color: #ffff;
  background-color: red;
}
.customePlyr{
  position: relative;
}
.overlay-item {
    position: relative;
    display: flex;
    justify-content: center;
    top: 50%;
    text-align: center;
}
.btnStyle{
  position: relative;
    display: flex;
    justify-content: center;
    top: 50%;
    text-align: center;
}

</style>