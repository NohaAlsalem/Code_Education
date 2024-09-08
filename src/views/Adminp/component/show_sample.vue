<!-- ModalComponent.vue -->
<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <p>{{ modalContent }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['isVisible', 'modalContent'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
    mounted(){
        console.log("mounted")
    }
  };
  </script>
  
  <style>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 60px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close-button:hover,
  .close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>