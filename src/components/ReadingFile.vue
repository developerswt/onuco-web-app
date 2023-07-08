<template>
    <div class="pt-5 mt-5">

    </div>
   
    <!-- <video v-if="imageFromS3" width="320" duration="" id="video" height="240" controls allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
      <source :src="imageFromS3" type="video/mp4">
    </video> -->
   
    <video-player :options="videoOptions" id="myVid" />
    <img :src="imageFromS3" alt="logo" style="width: 50%; height: 30%;">
    </template>
  <script>
  import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
  import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  name: "ReadingFile",
  components: {
    VideoPlayer
  },
  // let  cognitoAuth = new cognitoAuth;
  data() {
    return {
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
        playbackRates: [0.5, 1, 1.5, 2],
                autoplay: false,
                controls: true,
                width: 100,
                preload: "auto",
                poster: "http://127.0.0.1:5173/assets/images/1.png",
                sources: [
                    {  
                        src:
                            "https://d1ezh61feed07z.cloudfront.net/CAD_PROJECTION_OF_LINES_PROBLEM_1_RR.mp4",
                            type: "video/mp4"
                    },
                ],
                
                controlBar: {
                    skipButtons: {
                        forward: 5,
                        backward: 10,
                        muteToggle: false
                    }
                },
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
<style>

</style>