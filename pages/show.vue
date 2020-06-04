<template>
  <div>
    <h1 class="text-2xl ml-20">Show</h1>
    <items></items>
  </div>
</template>

<script>
  import Items from "@/components/Items";
  export default {
    components: {
      Items
    },
    async fetch({ store }) {
      await store.dispatch('loadItems', 'showstories.json')
    }
  }
</script>
