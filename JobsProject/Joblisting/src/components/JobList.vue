<script setup>
import { ref,defineProps } from 'vue'
import jobsData from '@/jobs.json'
import JobCard from './JobCard.vue';
import { RouterLink } from 'vue-router';
defineProps({
    limit:Number,
    showButton:{
        type:Boolean,
        default:true
    },
})

// Access the jobs array from the imported data
const jobs = ref(jobsData.jobs)
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-4 text-center">Browse jobs</h2>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" v-if="jobs?.length">
          <JobCard v-for="job in jobs.slice(0,limit || jobs.length)" :key="job.id" :job="job" />
        </div>
        <div v-else>No jobs available at the moment</div>
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>
