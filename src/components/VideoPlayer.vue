<template>
  <div class="video-container">
    <video ref="videoPlayer" class="video-js vjs-big-play-centered"></video> 
    <div v-if="!isSubscribed && showPoster" class="poster-overlay">
      <div class="overlay-item">
        <p class="vo-question">
          Please subscribe to watch the full video
        </p>
        <div class="btnStyle" v-if="isLoggedIn">
          <router-link to="/Razorpay"><button class="btn subscribeBtn">SUBSCRIBE</button></router-link>
        </div>
        <div class="btnStyle" v-else>
          <router-link to="/Login"><button class="btn subscribeBtn">SUBSCRIBE</button></router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import videojs from 'video.js';
import "videojs-overlay";
import qualityLevels from "videojs-contrib-quality-levels";
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
    isSubscribed: Boolean,
  },
  data() {
    return {
      player: null,
      showPoster: false, // Initialize showPoster to false
      enablePoster: false
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.IsLoggedIn;
    },
  },
  
  mounted() {
    videojs.registerPlugin('qualityLevels', qualityLevels);
    videojs.registerPlugin('hlsQualitySelector', videojsqualityselector);
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
      this.player.qualityLevels();
      console.log(this.player);
      this.player.hlsQualitySelector({ displayCurrentQuality: true });
      this.player.on('pause', this.pauseVideo);
    });
    this.initVideoPlayer();

    // Delay showing the poster until 8 seconds have passed
    // setTimeout(() => {
    //   this.showPoster = true;
    //   this.player.pause();
    // }, 5890000); // 8 seconds (8000 milliseconds)
    
    // Listen for timeupdate event to track watch time
    this.player.on('timeupdate', () => {
      if (this.player.currentTime() >= 30 && !this.showPoster) {
        this.showPoster = true;
        this.enablePoster = true;
        this.player.pause();
      }
    });
    this.player.on('ended', () => {
      if (this.showPoster) {
        this.showPoster = false;
      }
    });
    // this.player.on('fullscreenchange', () => {
    //   if (this.player.isFullscreen()) {
    //     // When entering full-screen mode, show the poster overlay
    //     this.showPoster = false;
    //   } else {
    //     // When exiting full-screen mode, hide the poster overlay
    //     this.showPoster = true;
    //   }
    // });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    // sendWatchTimeToBackend() {
    //   try {
    //     const userId = '0d779166-7391-4042-9bf6-634046e7142a'; 
    //     const courseId = 1; 
    //     const videoId = 3; 
    //     const watchTime = 90; 

    //     const requestBody = {
    //       id: 1,
    //       userId: userId,
    //       courseId: courseId,
    //       watchTimeData: [
    //         {
    //           videoId: videoId,
    //           WatchTime: watchTime,
    //         },
    //       ],
    //     };

    //     const response = axios.post('https://localhost:7233/api/StateManagement', requestBody);
    //     console.log('Update successful:', response.data);
    //   } catch (error) {
    //     console.error('Update failed:', error);
    //   }
    // },
    // pauseVideo() {
    //   this.player.pause();
    //   this.sendWatchTimeToBackend();
    // },
    initVideoPlayer() {
      // Initialize the video player here
      // ...

      // Enable or disable the progress bar based on subscription status
      if (this.isSubscribed) {
        this.enableProgressBar();
      } else {
        this.disableProgressBar();
      }

      // Start or pause the video based on subscription status
      if (this.isSubscribed) {
        this.player.pause();
      } else {
        this.player.pause();
      }
    },

    enableProgressBar() {
      // Enable the progress bar
      this.player.controlBar.progressControl.enable();
    },

    disableProgressBar() {
      // Disable the progress bar
      this.player.controlBar.progressControl.disable();
    },
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (adjust as needed) */
}

.video-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
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
  /* z-index: 2147483647; */
  z-index: 100;
}

.poster-overlay.full-screen {
  position: fixed;
}

/* .video-container:fullscreen .poster-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2147483647;
} */

/* Add your other styles here */

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
  top: 40%;
  text-align: center;
  align-items: center;
}

.vo-question {
  font-size: 15px;
}

@media (min-width: 768px)  and (max-width: 1024px) {
  /* .video-js{
    height: 0 !important;
  } */
  
.gh {
  pointer-events: none;
}
}
/* Add your other styles here */
</style>