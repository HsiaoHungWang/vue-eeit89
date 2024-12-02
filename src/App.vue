<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import NavbarComponent from './components/NavbarComponent.vue';


</script>

<template> 
<div class="container">
  <NavbarComponent></NavbarComponent>

<hr />

    <RouterView></RouterView>


</div> 

 
</template>

<style scoped>
</style>
