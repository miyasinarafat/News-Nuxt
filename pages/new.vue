<template>
  <div>
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
      await store.dispatch('loadItems', 'newstories.json')
    }
  }
</script>
