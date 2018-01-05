<template lang="html">
  <div class="content">
    <h1 class="title">{{ caption }}</h1>
    <article>
      <h2>Races</h2>
      <ol>
        <li v-for="(race, index) in races" :key="index">{{ race.name }} <span v-if="race.description">({{ race.description }})</span> - {{ race.origin }}</li>
      </ol>
      <footer>
        <button type="button" name="button" @click="buttonClick">Load</button>
      </footer>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
//import races from '@/data/races.json'

export default {
  name: 'home',
  data () {
    return {
      races: []
    }
  },
  computed: {
    test () {
      return 'Test'
    },
    ...mapGetters([ 'caption' ])
  },
  methods: {
    buttonClick (e) {
      // установить babel-plugin-dynamic-import-webpack для import()
      import(/* webpackMode: "lazy", webpackChunkName: "races" */ '@/data/races.json')
        .then(races => {
          this.races = [...races]
        })
        .catch(error => {
          console.dir(error)
        })
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
