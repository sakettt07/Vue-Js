<script setup>
// following the composition API method.
import { ref } from "vue";
import FormComp from "./components/Form.vue";

    const msg = ref("Badshaah");
    const count = ref(0);

    const incrementCnt = () => {
      count.value++;
    };
    const status = ref('pending');
    const tasks = ["task one", "task two", "task three"];
    const link = "http://google.com";
    const ytlink="http://youtube.com";

    const toggleStatus=()=>{
      if(status.value==='pending'){
        status.value='inactive';
      }
      else if(status.value==='inactive'){
        status.value='active';
      }
      else{
        status.value='pending';
      }
    }
</script>

<template>
  <div class="p-3 bg-zinc-500 w-full min-h-screen">
    <h1
      class="text-white text-[30px] text-center pt-5 p-3"
      style="font-family: 'CustomFont', sans-serif"
    >
      Minecraft Pale Garden
    </h1>
    <div class="object-cover">
      <img
        class="w-full h-full"
        src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/MC_HolidayPreRelease_BlogEditorial_ArticleImage_01_1280x720.jpg"
        alt="Minecraft Pale Garden"
      />
    </div>
    <p>Its your boy {{ msg }}</p>
    <button class="p-3 bg-red-400 text-white text-[20px]" @click="incrementCnt">
      Like
    </button>
    <div class="p-3">
      <p class="text-white text-[30px]">
        Increase the like for the badshah like Count :{{ count }}
      </p>
      <!-- The below is the use of the directive in the vue js for the conditional rendering -->
      <p class="text-white" v-if="status === 'active'">
        This new update is awesome
      </p>
      <p class="text-white" v-else-if="status === 'pending'">
        There are some updates which are coming and pending.
      </p>
      <p class="text-white" v-else>User is inactive</p>
      <li class="text-white mb-4" v-for="task in tasks" :key="task">
        {{ task }}
      </li>

      <!-- below is the use of bind directive which is use to bind or connect the links to the tags
     used target blank for the next page and noopener to avoid tabnabbing attack -->
      <div class="flex items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-4 bg-purple-600 text-white text-center"
          v-bind:href="link"
          >Click me for more information</a
        >

        <a
        target="_blank"
          rel="noopener noreferrer"
          class="text-white py-4 items-center ml-2 px-8 bg-yellow-600"
          :href="ytlink"
          >Hey how you Doin ?</a
        >
      </div>
      <h1 class="text-white mt-4">Your status is : {{ status }}</h1>
      <br>
      <button class="bg-white p-2" v-on:click="toggleStatus">Change Status</button>
    <FormComp />
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "CustomFont";
  src: url("./assets/Minecraftia-Regular.ttf") format("truetype");
}

body {
  font-family: "CustomFont", sans-serif;
}
</style>
