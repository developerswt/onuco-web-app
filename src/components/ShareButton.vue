<template>
    <div class="share-popup">
      <div class="card card-box">
        <div class="card-head">
            <header>
                <div class="share-text">Share</div>
                <i class="fa fa-close" @click="closeShareButton"></i>
            </header>
        </div>
        <div class="card-body">
          <div class="network-icons">
            <ShareNetwork
              v-for="network in networks"
              :key="network.network"
              :network="network.network"
              :url="url"
              :title="network.title"
              :description="network.description"
              :quote="network.quote"
              :hashtags="network.hashtags"
              :title-class="network.titleClass"  
              :description-class="network.descriptionClass" 
              style="text-decoration: none; display: inline-block; margin-right: 5px;"
            >
              <i :class="network.icon" class="share-icon"></i>&nbsp;&nbsp;
            </ShareNetwork>
          </div>
          <div class="url-container">
            <input ref="urlInput" type="text" readonly :value="url" class="url-input">
            <button class="copy-button" @click="copyUrl">Copy Url</button>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShareButton',
    props: {
      url: {
        type: String,
        required: true,
      },
    },
    emits: ['close'],
    data() {
      return {
        networks: [
          { network: 'email', name: 'Email', icon: 'far fa-envelope', color: '#333333', title: "Course Details Url", description: "Use above url to continue the learning", titleClass: 'custom-title-class', descriptionClass: 'custom-description-class' },
        ],
      };
    },
    methods: {
      closeShareButton() {
        this.$emit('close');
      },
      copyUrl() {
        const inputElement = this.$refs.urlInput;
        inputElement.select();
        document.execCommand('copy');
        // You might want to provide some feedback to the user that the text has been copied
        // For example: this.$emit('urlCopied');
        },
    },
  };
  </script>
  
  <style scoped>
  .share-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  
  .card-box {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px; /* Adjust the maximum width as needed */
    width: 100%;
  }
  .url-container {
    display: flex;
    margin-top: 5%;
  }
  /* Your existing styles go here */
  .url-input {
  height: 28px;
  width: 250px;
  border: 1px solid blue;
  border-radius: 5px;
  margin-right: 10px;
  padding: 5px;
}

.copy-button {
  background-color: blue;
  cursor: pointer;
  color: white;
  padding: 2px 10px;
  border: none;
  border-radius: 5px;
}

.share-icon {
  font-size: 26px;
  justify-content: space-between; /* Adjust icon size as needed */
}
header {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
}
header .fa {
    margin-top: 2%;
    font-size: 26px;
    cursor: pointer;
}
.share-text {
    font-size: 26px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.custom-title-class {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  /* Add more styles as needed */
}

.custom-description-class {
  font-size: 16px;
  color: #666;
  /* Add more styles as needed */
}
  </style>
  