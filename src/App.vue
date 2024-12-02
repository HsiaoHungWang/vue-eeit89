<script setup>
import FirstComponent from './components/FirstComponent.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import HomeView from './views/HomeView.vue';


</script>

<template>  
<h2>Hello Vue!! Tab</h2>
<FirstComponent></FirstComponent>
<!-- <first-component></first-component>
 <HomeView></HomeView>
 <AboutView></AboutView>
 <ContactView></ContactView> -->
 <hr />
 <RouterView></RouterView>
 
</template>

<style scoped>
</style>
