<template>
  <nav class="ml-20 mt-10 pl-10 pr-10 pt-5 pb-5 border-solid border-2 border-gray-400 inline-block">
    <nuxt-link :to="{name: 'index'}" class="mr-10">Top</nuxt-link>
    <nuxt-link :to="{name: 'new'}" class="mr-10">New</nuxt-link>
    <nuxt-link :to="{name: 'show'}" class="mr-10">Show</nuxt-link>
    <nuxt-link :to="{name: 'ask'}" class="mr-10">Ask</nuxt-link>
    <nuxt-link :to="{name: 'jobs'}">Jobs</nuxt-link>
  </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
