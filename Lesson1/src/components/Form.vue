<!-- in this component we will be making a form and then importing it into the App.vue file -->
<script setup>
import { ref,onMounted } from "vue";
const newTask = ref("");
const tasks = ref([]);
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    console.log(newTask);
    newTask.value = "";
  } else {
    alert("Please enter a task");
  }
};
const deleteTask = (indx) => {
    tasks.value.splice(indx, 1);

};
onMounted(async()=>{
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/todos');
        const data=await response.json();
        tasks.value=data.map((task)=>
            task.title)
    } catch (error) {
        console.log("Error while fetching the todos")
    }
})

</script>

<template>
  <form class="p-4 text-center" @submit.prevent="addTask">
    <label class="mr-3" for="newTask">Add Task</label>
    <input class="p-2 py-4"
      placeholder="Write task"
      type="text"
      id="newTask"
      v-model="newTask"
      name="newTask"
    />
    <button class="bg-red-700 px-8 py-3" type="submit">Add Task</button>
  </form>
  <ul>
    <li class="gap-6 px-4" v-for="(task, indx) in tasks" :key="indx">

        <span class="px-5">{{ task }}</span>
      <button @click="deleteTask">X</button>

    </li>
  </ul>
</template>
