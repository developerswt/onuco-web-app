<template>
  <div v-if="isSubscribed">
    
    <video ref="videoPlayer" class="video-js vjs-big-play-centered "></video>
    
    
  </div>
  <div v-else>
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
    <video ref="videoPlayer" class="video-js vjs-big-play-centered  "  v-else></video>
    
    
  </div>

</template>


<script>
import axios from 'axios';
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
    isSubscribed: Boolean,
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
    console.log(this.options);
    videojs.registerPlugin('qualityLevels',qualityLevels);
    videojs.registerPlugin('hlsQualitySelector',videojsqualityselector);
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
      this.player.controlBar.progressControl.disable();
      this.player.qualityLevels();
        this.player.hlsQualitySelector({ displayCurrentQuality: true });
        console.log(this.player);
        this.player.on('pause', this.pauseVideo);
    });
    this.initVideoPlayer();
    this.player.on('timeupdate', () => {
      console.log(this.player.currentTime());
      if (this.player.currentTime() >= 8 && !this.showPoster) {
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
  methods: {
    // sendWatchTimeToBackend(watchTime) {
    //   const data = [{
    //     UserId: '0d779166-7391-4042-9bf6-634046e7142a',
    //     videoId: 1,
    //     CourseId: 1,
    //     WatchTime: watchTime,
    //   }];
    //   axios.post('http://localhost:5000/StateManagement', data, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    // },
    async sendWatchTimeToBackend() {
      try {
        // Data to send in the POST request
        const postData = {
          id: 1, // Replace with the appropriate ID
          UserId: "0d779166-7391-4042-9bf6-634046e7142a", // Replace with the User ID
          CourseId: 1, // Replace with the Course ID
          WatchTimeData: [
            {
              videoId: 4,
              WatchTime: 50,
            },
          ],
        };

        // Send a POST request to your server
        const response = await axios.post('http://localhost:5000/StateManagement', postData);

        console.log('Update successful:', response.data);
      } catch (error) {
        console.error('POST request error:', error);
      }
    },
//     async sendWatchTimeToBackend() {
//   try {
//     const userId = "0d779166-7391-4042-9bf6-634046e7142a";
//     const courseId = 1;
//     const videoIdToUpdate = 4; // Specify the videoId you want to update
//     const newWatchTime = 20; // Specify the new WatchTime value

//     // Find the index of the object in the WatchTimeData array with the matching videoId
//     const watchTimeDataIndex = yourJsonData.findIndex((item) => item.WatchTimeData.some((entry) => entry.videoId === videoIdToUpdate));

//     if (watchTimeDataIndex !== -1) {
//       // Update the WatchTime for the specified videoId
//       yourJsonData[watchTimeDataIndex].WatchTimeData.forEach((entry) => {
//         if (entry.videoId === videoIdToUpdate) {
//           entry.WatchTime = newWatchTime;
//         }
//       });

//       // Construct the updated data
//       const updatedData = {
//         UserId: userId,
//         CourseId: courseId,
//         WatchTimeData: yourJsonData[watchTimeDataIndex].WatchTimeData,
//       };

//       // Send a PUT request to update the data on the server
//       const response = await axios.put(`http://localhost:5000/StateManagement/${userId}/${courseId}`, updatedData);

//       console.log('Update successful:', response.data);
//     } else {
//       console.error('VideoId not found in WatchTimeData.');
//     }
//   } catch (error) {
//     console.error('Update failed:', error.response ? error.response.data : error.message);
//   }
// },

    pauseVideo() {
      this.player.pause();
      this.sendWatchTimeToBackend();
      localStorage.setItem("videoCurrentTime", JSON.stringify(this.player.currentTime()));

    },
    initVideoPlayer() {
      // Initialize the video player here
      // ...

      // Check the subscription status and enable/disable the progress bar accordingly
      if (this.isSubscribed) {
        // Enable the progress bar
        this.enableProgressBar();
      } else {
        // Disable the progress bar
        this.disableProgressBar();
      }

      // Start or pause the video based on subscription status
      if (this.isSubscribed) {
        this.player.play();
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
 
}
</script>

<style scoped>
.video-js {
    width: 100% !important;
    
  height: 300px;
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
    height:40vh !important;
  }
  
.gh {
  pointer-events: none;
}
}

</style>