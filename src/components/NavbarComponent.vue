<script setup>
    import { useTodoStore } from '@/stores/todos';
    const todoStore = useTodoStore()

</script>

<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EEIT89</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink :to="{name:'home'}" class="nav-link" activeClass="active">首頁</RouterLink>
        </li>
        <li class="nav-item">
         
<RouterLink to="/about"  class="nav-link" activeClass="active">關於我們</RouterLink>
        </li>
        <li class="nav-item">
         
<RouterLink to="/contact"  class="nav-link" activeClass="active">聯絡我們</RouterLink>
        </li>
        <li class="nav-item">
         
<RouterLink to="/members"  class="nav-link" activeClass="active">會員管理</RouterLink>
        </li>
        <li class="nav-item">
         
<RouterLink to="/spots"  class="nav-link" activeClass="active">台北市景點</RouterLink>
        </li>
        <li class="nav-item">
         
<RouterLink to="/todos"  class="nav-link" activeClass="active">代辦事項<span class="badge text-bg-secondary">{{todoStore.numberOfTodos}}</span></RouterLink>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="css" scoped>
.active{
  background-color: lightgray;
}
</style>