<template>
    <main>
      <div style="display: flex; margin-top: 10%; margin-bottom: 10%; justify-content: center; align-items: center; flex-direction: column; ">
        <div style="margin-bottom: 4rem;">
          <input multiple type="file" @change="addFiles"/>
  
        </div>
        <div>
          <h2>Added files:</h2>
          <div class="" v-for="file in state.files" :key="file.id">
            {{ file.name }}
          </div>
        </div>
        <div>
          <button @click="uploadFiles">Upload files</button>
        </div>
      </div>
    </main>
  </template>

<script setup>
import {reactive} from "vue";
import axios from 'axios'

let files = []
const state = reactive({files})

const addFiles = (event) => {
  state.files.push(event.target.files[0])
}

const uploadFiles = async () => {
  const formData = new FormData()
  for (const i in files) {
    formData.append('file', files[i])
  }
  await axios.post('', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
  )
}
</script>
