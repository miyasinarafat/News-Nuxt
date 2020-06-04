<template>
  <div>
    <navbar></navbar>
    <hr class="mt-10 mb-10">
    <nuxt/>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
    export default {
      components: {
        Navbar
      }
    }
</script>

<style scoped>

</style>
