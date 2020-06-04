<template>
  <div class="">
    <h1 class="text-6xl text-gray-800">Hello Nuxt.js</h1>

    <ul class="mt-20 mb-40 ml-20 list-disc">
      <li v-for="user in users" :key="user.id">
        {{ user.login }}
      </li>
    </ul>
  </div>
</template>


<script>
  import axios from "~/plugins/axios";

  export default {
    asyncData() {
      return axios.get('users')
        .then(response => ({
          users: response.data
        }));
    }
  }
</script>
