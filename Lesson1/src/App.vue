<script>
  import { ref } from "vue";
export default {
  setup() {
    console.log("Hey gamers how are you doing");
    const msg = ref("Badshaah");
    const count = ref(0);

    const incrementCnt=()=>{
      count.value++;
    }
    const status='pending';
    const tasks=["task one", "task two", "task three"];


    return {
      msg,
      count,
      status,
      tasks,
      incrementCnt
    };
  },
};
</script>

<template>
  <div class="bg-black w-full min-h-screen">
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
    <button class="p-3 bg-red-400 text-white text-[20px]" @click="incrementCnt">Like</button>
    <p class="text-white text-[30px]">Increase the like for the badshah like Count :{{ count }}</p>
    <!-- The below is the use of the directive in the vue js for the conditional rendering -->
    <p class="text-white" v-if="status==='active'">This new update is awesome</p>
    <p class="text-white" v-else-if="status ==='pending'">There are some updates which are coming and pending.</p>
    <p class="text-white" v-else>User is inactive</p>
    <li class="text-white" v-for="task in tasks" :key="task">{{ task }}</li>
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
