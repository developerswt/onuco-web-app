<template>
  <div class="pt-5 mt-5">
    
   </div> 
   
   <!-- <span style="height: 700px; width: 1000px; color: black; background-image: url(http://127.0.0.1:5173/assets/images/1.png); @media (max-width:300px){background-image:url(http://127.0.0.1:5173/assets/images/2.png);}">Hi Welcome</span> -->
   <!-- <div style="height: 100%; width: 100%; color: black; 
	    background-image: url(http://127.0.0.1:5173/assets/images/1.png);@media (max-width:400px){background-image:url(http://127.0.0.1:5173/assets/images/2.png);}">
	background-image: url(Images/block.gif);
</div> -->
    <!-- <video-player :options="videoOptions" id="video_background" /> 
     -->
    <!-- <video v-if="imageFromS3" width="320" duration="" id="video" height="240" controls allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
      <source :src="imageFromS3" type="video/mp4">
    </video> -->
  <!-- <video id="video_1" class="video-js vjs-default-skin" controls preload="auto" width="640" height="268">
   <source src="../assets/videos/preview.mp4" type="video/mp4" label="Auto">
   <source src="../assets/videos/480.mp4" type="video/mp4" label="480P" selected="true">
   <source src="../assets/videos/360.mp4" type="video/mp4" label="360P">
   <source src="../assets/videos/720.mp4" type="video/mp4" label="720P">
   <source src="../assets/videos/preview1.mp4" type="video/mp4" label="1080P">
</video>  -->
  <video-player :options="videoOptions" data-setup='{}' />
  <!-- <img :src="imageFromS3" alt="logo" style="width: 50%; height: 30%;"> -->
</template>
<script>
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import VideoPlayer from '../components/VideoPlayer.vue';
// import videojs from 'video.js';
// import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
// import "@silvermine/videojs-quality-selector";

export default {
  name: "ReadingFile",
  components: {
    VideoPlayer
  },
  // let  cognitoAuth = new cognitoAuth;
  data() {
    return {
      option: '',
      player: '',
      whereYouAt: null,
      duration: 0,
      time: 0,
      eventFired: 'false',
      responseFromS3: '',
      imageFromS3: '',
      image: '../assets/images/1.png',
      client : new S3Client({
        region: "ap-south-1",
        credentials: {
          accessKeyId: "AKIAWTYHL72QB7Z2NM4X",
          secretAccessKey: "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",
        } 
        
      }),
      videoOptions: {
        defaultQuality :number,
        //playbackRates: [0.5, 1, 1.5, 2],
                // autoplay: false,
                controls: true,
                displayCurrentQuality: true,
                // width: 100,
                // fluid: true,
                // preload: "auto",
                poster: "http://127.0.0.1:5173/assets/images/1.png",
                sources: [
                    {  
                        src:
                            "../assets/videos/preview.mp4",
                            type: "video/mp4",       
                            label: "280p"
                    },
                    {  
                        src:
                            "../assets/videos/360.mp4",
                            type: "video/mp4",
                            label: '360p',
                            
                    },
                    {  
                        src:
                            "../assets/videos/480.mp4",
                            type: "video/mp4",
                            label: '480p',
                            
                    },
                    {  
                        src:
                            "../assets/videos/720.mp4",
                            type: "video/mp4",
                            label: '720p',
                            
                    },
                    {  
                        src:
                            "../assets/videos/preview1.mp4",
                            type: "video/mp4",
                            label: '1080p',
                            
                    },
                ],
       
                
              
  
               
                
            },
    };
  },
  computed: {
    timeupdate: function(){
      var vid = this.imageFromS3;
      if(t >= 5000) //Where t = CurrentTime
        {
          vid.stop();// Stop the Video
        }
    }
  },
  // methods: {
  //     videoQuality() {
  //       this.options = {
  //         controlBar: {
  //           children: [
  //             'playToggle',
  //             'progressControl',
  //             'volumePanel',
  //             'qualitySelector',
  //             'fullscreenToggle',
  //           ],
  //         },
  //       };
    
  //       this.player = videojs('video_1', this.options);
  //     }
  // },
  // mounted() {
  //     this.videoQuality();
  // },
  async created(){
    console.log("Hi");
    const command = new GetObjectCommand({
      Bucket: "onuco-s3",
      Key: "diabetes1.mp4"
    });
    try {
      console.log(this.client);
      const response = await this.client.send(command);
      console.log(response);
      this.responseFromS3 = await response.Body.transformToString("base64");
      //this.videoOptions.sources[0].src = "data:video/mp4;base64,"+this.responseFromS3;
      //console.log(this.videoOptions);
      this.imageFromS3 = "data:image/jpeg;base64,"+this.responseFromS3;
      console.log(this.responseFromS3);
    } catch (err) {
      console.error(err);
    }
  },
  // async updated() {
  //   var x = document.getElementById("myVid");
  //   this.currentTime = this.videoOptions.sources[0].src;
  //   if (this.currentTime > this.duration - 3) {
  //     x.pause();

  //   }
  // },
  // async mounted() {
  //   this.whereYouAt = this.videoOptions.currentTime();
  //   console.log(this.whereYouAt);
  // }

    
    
    };
</script>

<style scoped>

</style>

