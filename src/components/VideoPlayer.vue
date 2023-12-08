<template>
  <div class="video-container">
    <video ref="videoPlayer" preload="none" class="video-js vjs-big-play-centered"></video>
  </div>
</template>


<script>
import AxiosInstance from '../config/axiosInstance'
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
    videoId: Number,
    courseId: Number,
  },
  data() {
    return {
      player: null,
      showPoster: false, // Initialize showPoster to false
      enablePoster: false,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.IsLoggedIn;
    },
    isuser() {
        return this.$store.state.user.signInUserSession.idToken.payload.sub;
    },
  },
  
  mounted() {
    
    if (!videojs.getPlugin('qualityLevels')) {
      videojs.registerPlugin('qualityLevels', qualityLevels);
    }

      // Check if the 'hlsQualitySelector' plugin is not already registered
    if (!videojs.getPlugin('hlsQualitySelector')) {
      videojs.registerPlugin('hlsQualitySelector', videojsqualityselector);
    }

   this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
      this.player.qualityLevels();
      console.log(this.player);
      this.player.hlsQualitySelector({ displayCurrentQuality: true });      

      this.player.on('pause', this.pauseVideo);
    });
    this.initVideoPlayer();

    this.player.on('timeupdate', () => {
      console.log(this.player.currentTime());
      if (this.player.currentTime() >= 30 && !this.showPoster && !this.isSubscribed) {
        this.showPoster = true;
        this.showPosterOverlay();
        this.player.pause();
      }
    });
    this.player.on('ended', () => {
      if (this.showPoster) {
        this.showPoster = false;
      }
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    showPosterOverlay() {
      if (!this.isSubscribed && this.showPoster) {
        const customElement = document.createElement('div');
        customElement.setAttribute("id", "testid");
        customElement.style.position = 'absolute';
        customElement.style.top = '0';
        customElement.style.left = '0';
        customElement.style.width = '100%';
        customElement.style.height = '100%';
        customElement.style.color = 'white';
        customElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        customElement.style.display = 'flex';
        customElement.style.justifyContent = 'center';
        customElement.style.alignItems = 'center';
        customElement.style.zIndex = '1000'; // Set a higher z-index to ensure it's above the video
  
        if (this.isLoggedIn) {
          customElement.innerHTML = `
            <div class="overlay-content">
              <p style="font-size: 16px;color: white;">Please subscribe to watch the full video</p>
              <div style="margin-left: 70px;">
                <a href="/Razorpay"><button style="color: #ffff;background-color: red;font-size: 15px;">SUBSCRIBE</button></a>
              </div>
            </div>
          `;
        } else {
          customElement.innerHTML = `
            <div class="overlay-content">
              <p style="font-size: 16px;color: white;">Please subscribe to watch the full video</p>
              <div style="margin-left: 70px;">
                <a href="/login"><button style="color: #ffff;background-color: red;font-size: 15px;">SUBSCRIBE</button></a>
              </div>
            </div>
          `;
        }
  
          // Append the custom element to the video container
        this.$refs.videoPlayer.parentNode.appendChild(customElement);
      }
    },
    initVideoPlayer() {
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
    async sendWatchTimeToBackend() {
     if(this.isSubscribed) {
       try {
        
       const userId = this.isuser; 
       const courseId = this.courseId; 
       const videoId = this.videoId;
       const watchTime = this.player.currentTime(); 

       const requestBody = {
         userId: userId,
         courseId: courseId,
         watchTimeData: [
           {
             videoId: videoId,
             watchTime: watchTime,
           },
         ],
       };

       const response = await AxiosInstance.put('/StateManagement', requestBody);

       console.log('Update successful:', response.data);
     } catch (error) {
       console.error('Update failed:', error);
     }
    }
    },
    pauseVideo() {
      this.player.pause();
      this.sendWatchTimeToBackend();
      // localStorage.setItem("videoCurrentTime", JSON.stringify(this.player.currentTime()));

    },
  }
};
</script>

<style scoped>
.customElement {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200; /* Set a higher z-index for the customElement to be on top */
}
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
  z-index: 100; /* Adjust the z-index to make it higher than the video player */
}
.overlay-content {
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
  z-index: 999; /* Adjust the z-index to make it higher than the video player */
}
/* Add your other styles here */


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
