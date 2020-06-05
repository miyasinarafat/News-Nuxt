<template>
    <div class="ml-20 mr-20">
      <h1 class="text-3xl">{{user.id}} has been a user {{ user.created | timeSince}}</h1>
    </div>
</template>

<script>
  import axios from "@/plugins/axios";
    export default {
      async asyncData({route}) {
        const response = await axios.get(`/user/${route.params.id}.json`)
        return {user: response.data}
      }
    }
</script>

<style scoped>

</style>
