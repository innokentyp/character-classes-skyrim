<template lang="html">
  <h1 class="title">{{ caption }}</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app-caption',
  computed: {
    ...mapGetters([ 'caption' ])
  }
}
</script>

<style lang="scss" scoped>

</style>
