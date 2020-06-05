<template>
  <div>
    <ul class="mt-10 mb-40 ml-20 mr-20 list-none">
      <li class="mb-10 broder-solid border-2 border-gray-300 p-10" v-for="item in items" :key="item.id">
        <div class="score">Score: {{ item.score }}</div>
        <div class="title">Title: <a target="_blank" class="hover:text-blue-500" :href="item.url">{{ item.title }}</a></div>
        <div class="details">Details: by {{ item.by }} {{ item.time | timeSince }}</div>
        <div class="comments" v-if="item.descendants">Comments: {{ item.descendants }}</div>
        <div class="link" v-if="item.url">Link: <a target="_blank" class="hover:text-blue-500 text-blue-700" :href="item.url">{{ item.url | hostname }}</a></div>
      </li>
    </ul>
  </div>
</template>


<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        ids: state => state.ids,
        items: state => state.items
      })
    }
  }
</script>
