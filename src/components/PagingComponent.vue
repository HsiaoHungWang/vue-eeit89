<script setup>
    //接收父傳進來的資料
    const props = defineProps({
        total:Number,
        thePage:Number
    })

    const emits = defineEmits(['goPaging'])

    
    const clickHandler=page=>{
        //從子組件引發父組件的事件，並且傳了資料給父
        emits('goPaging',page)
    }
</script>

<template>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
   
    <li @click="clickHandler(page)" class="page-item" v-for="page in total"><a class="page-link" href="#">{{ page }}</a></li>
  
   
  </ul>
</nav>
</template>

<style lang="css" scoped>

</style>