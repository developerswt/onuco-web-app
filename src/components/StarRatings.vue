<!-- StarRating.vue -->
<template>
    <div class="star-rating">
      <span
        v-for="star in stars"
        :key="star"
        :class="{ filled: star <= rating }"
      >
        {{ starIcon(star) }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rating: {
        type: Number,
        required: true,
      },
      maxRating: {
        type: Number,
        default: 5,
      },
    },
    computed: {
      stars() {
        return Array.from({ length: this.maxRating }, (_, index) => index + 1);
      },
    },
    methods: {
      starIcon(star) {
        return star <= this.rating ? '\u2605' : '\u2606'; // Filled or empty star
      },
    },
  };
  </script>
  
  <style scoped>
  .star-rating {
    font-size: 20px;
  }
  
  .star-rating span {
    margin-right: 0px;
    color: gold;
  }
  
  .star-rating span.filled {
    color: gold; 
  }
  
  </style>