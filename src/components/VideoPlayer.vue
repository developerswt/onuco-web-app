<template>
    <div>
      <video ref="videoPlayer" class="video-js 	"></video>
    </div>
  </template>
  
  <script>
  import videojs from 'video.js';
  
  export default {
    name: 'VideoPlayer',
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
        whereYouAt: null
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
      this.whereYouAt = this.player.currentTime();
      console.log(this.whereYouAt);
      this.player.fluid(true);
      
      });

    },
    // created() {
    //     if(this.whereYouAt <= 5)
    //     {
    //       this.player = videojs(this.$refs.videoPlayer).pause();
    //     }
    // },
    beforeUnmount() {
      if (this.player) {
        this.player.dispose();
      }
    }
  }
  </script>

  <style scoped>

.video-js {
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    padding-top: 56.25%;
}



  </style>