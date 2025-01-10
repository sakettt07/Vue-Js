<script setup>
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import HomeCards from './components/HomeCards.vue';
import JobList from './components/JobList.vue';
</script>
<template>
  <Navbar />
  <Hero title="Find the job that fits you" subtitle="we brings the best for you" />
  <HomeCards />
  <JobList :limit="3" :showButton="true" />
</template>
