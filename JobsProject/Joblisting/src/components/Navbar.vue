<script setup>
import logo from '../assets/img/logo.png'
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const isActiveLink=(routepath)=>{
  const route=useRoute();
  return route.path===routepath;
}
</script>
<template>
  <nav class="bg-black border-b border-white">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Jobzy</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[ isActiveLink('/') ?'bg-green-700':'hover:bg-gray-700 text-white','text-white','hover:text-white', 'rounded-md', 'px-3' ,'py-2']"
                >Home</RouterLink>
                <RouterLink
                to="/jobs"
                :class="[ isActiveLink('/jobs') ?'bg-green-700':'hover:bg-gray-700 text-white','text-white','hover:text-white', 'rounded-md', 'px-3' ,'py-2']"
                >Jobs</RouterLink>
                <RouterLink
                to="/jobs/add"
                :class="[ isActiveLink('/jobs/add') ?'bg-green-700':'hover:bg-gray-700 text-white','text-white','hover:text-white', 'rounded-md', 'px-3' ,'py-2']"
                >Add job</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
