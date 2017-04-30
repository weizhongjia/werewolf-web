<template>
  <div class="hello">
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'foo',
    computed: {
      count () {
        return this.$store.state.count
      }
    }
  }
</script>
