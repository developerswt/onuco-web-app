<template>
  <div v-if="show" class="popup">
    <div class="dialog" :style="dialogStyle">
      <p>{{ message }}</p>
      <div class="content">
        <slot></slot>
      </div>
      <div class="button-row">
        <button v-if="showOKButton" class="bn1" @click="confirm">OK</button>
        <button v-if="showCancelButton" class="bn2" @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConformationName',
  props: {
    dialogStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      show: false,
      resolve: null,
      reject: null,
      message: "Error",
      showOKButton: true,
      showCancelButton: true,
    };
  },
  methods: {
    open(message = "Error") {
      this.show = true;
      this.message = message;
      this.showOKButton = true; // Reset to default state
      this.showCancelButton = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    confirm() {
      this.show = false;
      this.resolve(true);
    },
    cancel() {
      this.show = false;
      this.reject(false);
    },
    showOKOnly(message = "Error") {
      this.showOKButton = true;
      this.showCancelButton = false;
      this.message = message;
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Ensure a high z-index value to appear above other elements */

}

.dialog {
  background-color: #fff;
  border: 1px solid black;
  padding: 40px;
  text-align: center;
  width: 375px; /* Adjust the width as needed */
  max-width: 100%; /* Ensure it doesn't exceed the viewport width */
  border-radius: 10px;
}

.button-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.button-row button {
  margin: 15px 25px 2px 25px;
}
.bn1 {
  padding: 10px 33px;
  position: relative;
  left: 86px;
  font-weight: 600;
  font-size: 15px;
}
.bn2{
position: relative;
  left: 34px;
  padding: 10px 20px; 
  font-weight: 600;
  font-size: 15px;
}
</style>
