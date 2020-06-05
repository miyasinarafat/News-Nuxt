<template>
  <div>
    <div class="mb-10 mt-10 broder-solid border-2 border-gray-300 p-10">
      <h1 class="text-xl text-blue-400">{{ item.id }}</h1>
      <nuxt-link
        :to="`/user/${item.by}`" class="hover:text-blue-500 text-blue-700">by
        {{ item.by }}
      </nuxt-link>
      <div class="text-sm mt-5 mb-5" v-html="item.text"></div>
      <div v-if="item.kids" class="bg-gray-200 p-10 border-b borer-solid border-gray-400">
        <strong>Kids:</strong> {{ item.kids }}
      </div>
    </div>

    <ul class="ml-20">
      <comment :id="id" :key="id" v-for="id in item.kids"></comment>
    </ul>
  </div>
</template>

<script>
  import axios from "@/plugins/axios";

  export default {
    name: "Comment",
    data() {
      return {
        item: {
        }
        ,
        kids: []
      }
    },
    props: [
      'id'
    ],

    async beforeMount() {
      const response = await axios.get(`item/${this.id}.json`);
      this.item = response.data;
    },

    async mounted() {
      if (this.item.kids) {
        const idToPromise = id => axios.get(`item/${id}.json`);
        const kidPromises = this.item.kids.map(idToPromise);
        const kidResponses = await Promise.all(kidPromises);
        this.kids = kidResponses.map(response => response.data)
      }
    }
  }
</script>

<style scoped>

</style>
