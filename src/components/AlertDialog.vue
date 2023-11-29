<template>
    <!-- <buttton @click="showModal()"> button</buttton> -->
    <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
    </button> -->
      <!-- <div class="modal"  tabindex="-1" role="dialog" > -->
          <!-- <div class="modal-dialog " role="document" v-if="centerDialogVisible" tabindex="-1">
              <div class="modal-content">
                  <div class="text-center pt-5">
                      <img
                          src="../assets/40.webp" v-if="title == 'Success'"
                          class="image"
                      />
                      <img
                          src="../assets/41.webp" v-if="title == 'Error'"
                          class="image"
                      />
                  </div>
                  <div class="modal-body text-center">
                      <span class="sdf">{{ title }}</span>
                      <p class="ty">{{ message }}</p>
                      <div class="bottom">
                          <button type="button" class="btn btn-primary"  @click="close">Ok</button>
                      </div>
                  </div>
              </div>
          </div> -->
      <!-- </div> -->
      <!-- <div class="modal fade"  id="centerDialogVisible" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> -->
  <!-- width="dialogwidth" -->
      <div class="tr">
        <el-dialog
          v-model="centerDialogVisible"
          :show-close="false"
          :width="dialogWidth"
          >
          <el-row>
              <el-col :sm="24">
        <div class="my-header">
            <img
              src="../assets/41.webp" v-if="title == 'Success'"
              class="image"  />
         
             <img
              src="../assets/40.webp" v-if="title == 'Error'"
              class="image"  />
          </div>
          </el-col>
          <el-col :sm="24">
          <div class="my-header" style="padding: 14px;">
              <span class="sdf">{{ title }}</span>
              <p class="time">{{ message }}</p>
              <div class="bottom">
                  <el-button text-class="button" type="primary" @click="close">Ok</el-button>
              </div>
          </div>
          </el-col>
          </el-row>    
          
      </el-dialog>
      </div>
  </template>
      
  <script>
      export default {
          name: 'AlertDialog',
          props: {
              title: String,
              message: String
          },
          data() {
              return {
                  screenWidth: 0,
                  centerDialogVisible: false,
                  dialogWidth: '40%'
              }
          },
          mounted() {
              this.showModal();
              this.updateScreenwidth();
              this.onScreenResize();
          },
      
          methods: {
              showModal() {
                  this.centerDialogVisible=true;
              },
              close() {
                  this.centerDialogVisible = false;
              },
              updateScreenwidth() {
                  this.screenWidth = window.innerWidth;
                  console.log(window.innerWidth);
                  if(this.screenWidth < 600) {
                      this.dialogWidth="80%"
                  }   
                  console.log(this.dialogWidth);  
              },
              onScreenResize(){ 
                  window.addEventListener("resize", ()=> { 
                      this.updateScreenWidth();
                  })
              }
          }        
      }        
          
  </script>
      
  <style scoped>
  .button {
    padding: 0;
    min-height: auto;
    
  }
  
  .my-header {
      text-align: center;
  }
  .tr {
      font-size: 18px;
      color: #999;
      
  } 
  .sdf {
      font-size: 22px;
      text-align: center;
  }
  
  .bottom {
      margin-top: 13px;
      line-height: 12px;
  }
  .image {
      width: 70px;
      height: 70px;
  }
  .tr {
      width: 80% !important;
  }
  @media screen and (max-width: 600px) {
      .tr {
          width: 80% !important;
      }
  }
  
  </style>
      
      