<script setup>
import { ref } from 'vue';

//取得API URL
const BASE_URL = import.meta.env.VITE_APIURL
const API_URL = `${BASE_URL}/members`

const members = ref([])

    const loadMembers = async()=>{      
      const response = await fetch(API_URL)
      const datas = await response.json()
      members.value = datas    
      console.log(members.value)
    }

    loadMembers()
</script>

<template>
    <div>
<h2>會員管理</h2>
<table class="table table-striped table-hover table-bordered">
    <thead class="table-dark">
        <tr>
            <th>編號</th>
            <th>姓名</th>
            <th>電子郵件</th>
            <th>年紀</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="member in members">
            <td>{{ member.memberId }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.email }}</td>            
            <td>{{ member.age }}</td>
            <td>
                <button title="編輯" class="btn btn-secondary mx-3">
            <I class="bi bi-pencil-square"></i></button>
        <button title="刪除" class="btn btn-danger">
            <i class="bi bi-trash-fill"></i></button>

            </td>
        </tr>
    </tbody>
</table>
    </div>
</template>

<style lang="css" scoped>

</style>