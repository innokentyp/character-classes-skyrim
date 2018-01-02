<template lang="html">
  <div class="content">
    <h1 class="title">{{ caption }}</h1>
    <article>
      <h2>Races</h2>
      <ol>
        <li v-for="(race, index) in this['races/all']" :key="index">{{ race.name }} <span v-if="race.description">({{ race.description }})</span> - {{ race.origin }}</li>
      </ol>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    test () {
      return 'Test'
    },
    ...mapGetters([ 'caption', 'races/all' ])
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
