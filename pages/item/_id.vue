<template>
  <div class="ml-20 mr-20">
    <div class="broder-solid border-2 border-gray-300 p-10">
      <h1 class="text-2xl text-blue-400"><a :href="item.url">{{ item.title }}</a></h1>

      <div>
        <nuxt-link
          :to="`/user/${item.by}`" class="hover:text-blue-500 text-blue-700">
          {{ item.by }},
        </nuxt-link>
        {{ item.time | timeSince }}
      </div>
    </div>

    <ul>
      <comment :id="id" :key="id" v-for="id in item.kids"></comment>
    </ul>
  </div>
</template>

<script>
  import axios from "@/plugins/axios";
  import Comment from "@/components/Comment";

  export default {
    components: {
      Comment
    },
    data() {
      return {
        item: {}
      }
    },
    async asyncData({route}) {
      const response = await axios.get(`/item/${route.params.id}.json`)
      return {item: response.data}
    }
  }
</script>

<style scoped>

</style>
