<template>
  <div class="video-container">
    <video ref="videoPlayer" preload="none" class="video-js vjs-big-play-centered"></video>
  </div>
  
</template>


<script>
import sha256 from "crypto-js/sha256";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import AxiosInstance from '../config/axiosInstance'
import videojs from 'video.js';
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
    courseDisPrice: Number,
    watchTime: String,
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
      this.player.currentTime(this.watchTime || 0);
      this.player.qualityLevels();
      this.player.hlsQualitySelector({ displayCurrentQuality: true });

      this.player.on('pause', this.pauseVideo);
    });
    this.initVideoPlayer();

    this.player.on('timeupdate', () => {
      if (this.player.currentTime() >= 5 && !this.showPoster && !this.isSubscribed) {
        this.showPoster = true;
        this.player.controlBar.playToggle.disable();
        this.showPosterOverlay();
        this.player.pause();
        this.setMediaSessionHandlers();
      }
    });
    this.player.on('ended', () => {
      if (this.showPoster) {
        this.showPoster = false;
      }
    });
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    setMediaSessionHandlers() {
      if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', () => {
          // Do nothing or handle as needed
        });

        navigator.mediaSession.setActionHandler('pause', () => {
          // Do nothing or handle as needed
        });

        navigator.mediaSession.setActionHandler('stop', () => {
          // Do nothing or handle as needed
        });
      }
    },

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
        customElement.style.zIndex = '1000';

        const innerHTML = this.isLoggedIn
          ? `
            <div class="overlay-content">
              <p style="font-size: 16px;color: white;">Please subscribe to watch the full video</p>
              <div style="margin-left: 70px;">
                <button id="subscribeButton" style="color: #ffff;background-color: red;font-size: 15px;">SUBSCRIBE</button>
              </div>
            </div>
          `
          : `
            <div class="overlay-content">
              <p style="font-size: 16px;color: white;">Please subscribe to watch the full video</p>
              <div style="margin-left: 70px;">
                <a href="/login"><button id="subscribeButton" style="color: #ffff;background-color: red;font-size: 15px;">SUBSCRIBE</button></a>
              </div>
            </div>
          `;

        customElement.innerHTML = innerHTML;

        // Append the custom element to the video container
        this.$refs.videoPlayer.parentNode.appendChild(customElement);

        // Add click event to the dynamically created button
        const subscribeButton = document.getElementById('subscribeButton');
        if (subscribeButton) {
          subscribeButton.addEventListener('click', () => {
            this.makePayment(this.courseDisPrice);
          });
        }
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
      if (this.isSubscribed) {

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

          this.prevCourseId = courseId;
          this.prevVideoId = videoId;
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
    generateUUID() {
            return uuidv4().toString(36).slice(-6);
        },
        async makePayment(amount) {
            const transactionId = "Tr-" + this.generateUUID();
            const merchantId = "PGTESTPAYUAT";

            const payload = {
                merchantId: merchantId,
                merchantTransactionId: transactionId,
                merchantUserId: 'MUID-' + this.generateUUID(),
                amount: amount * 100,
                redirectUrl: `https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api/PhonePayRespons`,
                redirectMode: "POST",
                callbackUrl: `https://bbjh9acpfc.ap-southeast-1.awsapprunner.com/api/PhonePayRespons`,
                mobileNumber: '9999999999',
                paymentInstrument: {
                    type: "PAY_PAGE"
                },
                message: "Introduction Computer Sciensce",
                shortName: "Vijay",
                instrumentType: 'web'
            };

            const dataPayload = JSON.stringify(payload);
            const dataBase64 = btoa(dataPayload);
    
            const fullURL = "/pg/v1/pay" + "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
            const dataSha256 = sha256(dataBase64 + fullURL);
            const checksum = dataSha256 + "###" + "1";
            const UAT_PAY_API_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

            try {
                const response = await axios.post(UAT_PAY_API_URL, { request: dataBase64 }, {
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                        "X-VERIFY": checksum,
                    },
                });

                const redirectURL = response.data.data.instrumentResponse.redirectInfo.url;
                window.location.href = redirectURL;

            } catch (error) {
                console.error("Error making payment:", error);
                // Handle payment processing errors here
            }
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
  z-index: 200;
  /* Set a higher z-index for the customElement to be on top */
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio (adjust as needed) */
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
  z-index: 100;
  /* Adjust the z-index to make it higher than the video player */
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
  z-index: 999;
  /* Adjust the z-index to make it higher than the video player */
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
  top: 40%;
  text-align: center;
  align-items: center;
}

.vo-question {
  font-size: 15px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* .video-js{
    height: 0 !important;
  } */

  .gh {
    pointer-events: none;
  }
}

/* Add your other styles here */
</style>
