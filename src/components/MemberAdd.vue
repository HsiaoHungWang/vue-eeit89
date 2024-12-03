<script setup>
import { ref } from 'vue';
// 取得API的路徑
const BASE_URL = import.meta.env.VITE_APIURL
const API_URL = `${BASE_URL}/members`



   const member = ref({
    "name":"",
    "password":"",
    "passwordConfirm":"",
    "email":"",
    "age":""
   })

   const addHandler = async()=>{
    const response = await fetch(API_URL,{
        method:'POST',
        body:JSON.stringify(member.value),
        headers:{'Content-Type':'application/json'}
    })
    if(response.ok){
        member.value = {
            "name":"",
            "password":"",
            "passwordConfirm":"",
            "email":"",
            "age":""
        }
        alert('新增成功')
    }
    //console.log(member.value)
   }
</script>

<template>
    <div>
        <form>
    <div class="input-group">
        <label for="account" class="input-group-text">姓名</label>
        <input type="text" class="form-control" v-model.trim="member.name" id="account" >
    </div>
    <div class="input-group">
        <label for="pwd1" class="input-group-text">密碼</label>
        <input type="password" class="form-control" v-model.trim="member.password" id="pwd1">
    </div>
    <div class="input-group">
 <label for="pwd2" class="input-group-text">密碼確認</label>
<input type="password" class="form-control" v-model="member.passwordConfirm" id="pwd2">
</div>

    <div class="input-group">
         <label for="email" class="input-group-text">電子郵件</label>
         <input type="email" v-model.trim="member.email" class="form-control" id="email">
     </div>
     <div class="input-group mb-3">
<label for="age" class="input-group-text">年紀</label>
<input type="number" class="form-control" id="age" v-model="member.age">
 </div>

     <button type="submit" @click.prevent.stop="addHandler" class="btn btn-primary"> 送出 <I class="bi bi-person-fill-check"></i></button>
</form>

    </div>
</template>

<style lang="css" scoped>

</style>