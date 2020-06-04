<template>
  <div>
    <ul class="mt-10 mb-40 ml-20 list-disc">
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
