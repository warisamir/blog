<template>
    <div>
      <h1 v-if="show">If Else Condition</h1>
      <h2 v-else>Else Condition</h2>
      <button v-on:click="toggleShow" class="btn">Click me</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConditionRendering",
    data() {
      return {
        show: false,
        filterApplied: false // Add a data property to track if filter is applied
      };
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
        this.filterApplied = !this.filterApplied; // Toggle filter
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: yellowgreen;
  }
  
  .btn {
    border: 2px solid transparent;
    width: 70%;
    height: 580px;
    border-radius: 50%;
    background-image: url(https://plus.unsplash.com/premium_photo-1709059961525-b9d83a3e476b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D);
  }
  
  /* Apply filter when filterApplied is true */
  .btn:active {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  </style>