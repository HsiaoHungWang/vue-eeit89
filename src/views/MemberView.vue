<script setup>
import MemberAdd from '@/components/MemberAdd.vue';
import { ref } from 'vue';

//取得API URL
const BASE_URL = import.meta.env.VITE_APIURL
const API_URL = `${BASE_URL}/members`

const members = ref([])

//讀取資料
const loadMembers = async () => {
    const response = await fetch(API_URL)
    const datas = await response.json()
    members.value = datas
    console.log(members.value)
}

//刪除資料
const removeHandler = async(_member) =>{
  //  console.log(_member)
  if(window.confirm('真的要刪除嗎?')){
    const response = await fetch(`${API_URL}/${_member.memberId}`,{
        method:'DELETE'
    })
    if(response.ok){
        alert('刪除完成')
        loadMembers()
    }
  }
}

loadMembers()
</script>

<template>
    <div>
        <h2>會員管理</h2>
        <div class="row">
            <div class="col-9">
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
                        <button @click="removeHandler(member)" title="刪除" class="btn btn-danger">
                            <i class="bi bi-trash-fill"></i></button>

                    </td>
                </tr>
            </tbody>
        </table>
            </div>
            <div class="col-3">
                <MemberAdd></MemberAdd>
            </div>
        </div>
        
    </div>
</template>

<style lang="css" scoped></style>