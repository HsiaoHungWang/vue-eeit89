<script setup>
    
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
          <RouterLink to="/" class="nav-link" activeClass="active">首頁</RouterLink>
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