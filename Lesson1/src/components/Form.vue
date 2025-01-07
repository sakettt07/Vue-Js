<!-- in this component we will be making a form and then importing it into the App.vue file -->
<script setup>
import { ref } from "vue";
const newTask=ref('');
const tasks=ref([]);
const addTask=()=>{
    if(newTask.value.trim()!==""){
        tasks.value.push(newTask.value);
        console.log(newTask);
        newTask.value='';
    }
    else{
        alert('Please enter a task');
    }

}
const deleteTask=(indx)=>{
    if(confirm('Are you sure you want to delete this task?')){
        tasks.value.splice(indx,1);
    }
    }
</script>

<template>
    <form class="p-4 text-center" @submit.prevent="addTask">
        <label class="mr-3" for="newTask">Add Task</label>
        <input placeholder="Write task" type="text" id="newTask" v-model="newTask" name="newTask">
    </form>
    <ul>
        <li v-for="(task,indx) in tasks" :key="indx">
            <span>{{ task }}</span>
            <button @click="deleteTask">X</button>
        </li>
    </ul>
</template>