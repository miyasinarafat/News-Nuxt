<template>
  <div class="">
    <h1 class="text-6xl text-gray-800">Hello Nuxt.js</h1>
    <ul class="mt-20 mb-40 ml-20 list-disc">
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
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
