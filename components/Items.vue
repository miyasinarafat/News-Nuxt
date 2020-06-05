<template>
  <div>
    <ul class="mt-10 mb-40 ml-20 mr-20 list-none">
      <li class="mb-10 broder-solid border-2 border-gray-300 p-10" v-for="item in items" :key="item.id">
        <div class="score">{{ item.score }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="details">by {{ item.by }} {{ item.time | timeSince }}</div>
        <div class="comments">{{ item.descendants }} comments</div>
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
