<template>
  <div>
    <div  v-if="showPoster" class="poster-overlay">
      <div class="overlay-item">
        <p class="vo-question">
          Please subscribe to watch full video
        </p>
        <div class="btnStyle" v-if="isLoggedIn">
          <router-link to="/Razorpay"><button class="btn subscribeBtn" >SUBSCRIBE</button></router-link>
        </div>
        <div class="btnStyle" v-else>
          <router-link to="/Login"><button class="btn subscribeBtn" >SUBSCRIBE</button></router-link>
        </div>
      </div>
      
    </div>
    <video ref="videoPlayer" class="video-js  vjs-big-play-centered vjs-layout-small" v-else></video>
    
    
  </div>
</template>

<script>
import videojs from 'video.js';
import "videojs-overlay";
import qualityLevels  from "videojs-contrib-quality-levels";
import videojsqualityselector from 'videojs-hls-quality-selector';


export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    limitTime: Number,
  },
  data() {
    return {
      showPoster: false,
      player: null,
     

    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.IsLoggedIn;
    },
  },
  mounted() {
    videojs.registerPlugin('qualityLevels',qualityLevels);
    videojs.registerPlugin('hlsQualitySelector',videojsqualityselector);
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
      this.player.controlBar.progressControl.disable();
      this.player.qualityLevels();
        this.player.hlsQualitySelector({ displayCurrentQuality: true });
        console.log(this.player);
    });

    this.player.on('timeupdate', () => {
      console.log(this.player.currentTime());
      if (this.player.currentTime() >= 18 && !this.showPoster) {
          this.showPoster = true;
          this.player.pause();
      }
    });
    this.player.on('ended', () => {
      if (this.showPoster) {
        this.showPoster = false;
      }
    });
  
    // Listen for timeupdate event to track watch time
  
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
      
    }
  },
  
 
}
</script>


<style scoped>
/* Add your custom styles here */

.video-js {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    padding-top: 56.25%;
    

}

.poster-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.overlaysWrap {
    /* visibility: hidden; */
    /* pointer-events: none; */
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
  font-size: 15px;
}
.customePlyr {
  position: relative;
}
.overlay-item {
  position: absolute;
    display: block;
    /* justify-content: center; */
    top: 40%;
    text-align: center;
    /* transform: translate(-50%, -50%); */
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
  
.gh {
  pointer-events: none;
}
}
</style>