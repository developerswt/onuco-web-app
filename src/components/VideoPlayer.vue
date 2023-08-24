<template>

  <div class="customePlyr">
    <video ref="videoPlayer" class="video-js vjs-layout-small "></video>
    <div class="overlaysWrap">
      <div class="overlay-item">
        <p class="vo-question">
          Please subscribe to watch full video
        </p>
        <div class="btnStyle">
          <router-link to="/RazorPay"><button class="btn subscribeBtn" >SUBSCRIBE</button></router-link>
        </div>
      </div>
      
    </div>
</div> 
</template>
  
<script>
import videojs from 'video.js';
// import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
// import "@silvermine/videojs-quality-selector";
import "videojs-max-quality-selector";
import "videojs-contrib-quality-levels";

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
      player: null,
      whereYouAt: null,
      ready: false,
    }
  },
  
  mounted() {
    // if (!videojs.getPlugin('qualityLevels')) {
    //   videojs.registerPlugin('qualityLevels', qualityLevels);
    // }
    // if (!videojs.getPlugin('videojsqualityselector')) {
    //   videojs.registerPlugin('videojsqualityselector', videojsqualityselector);
    // }
    
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      // this.player.controlBar.addChild('QualitySelector');

    this.player.on('timeupdate', function() {
        console.log(this.currentTime())
        if(Math.round(this.currentTime())== 5) {
          this.pause();
            var parent = this.el().parentNode;
		        var closeBtn = parent.querySelector('.overlaysWrap');
            closeBtn.style.visibility='visible';
            this.player.controls= false; 
        }
      })
      
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
    display: block;
    /* justify-content: center; */
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    align-items: center;
    /* justify-content: space-between; */
}
.vo-question{
  font-size: 15px;
}

@media (min-width: 768px)  and (max-width: 1024px) {
  .video-js{
    height:80vh !important;
  }
  
}
</style>