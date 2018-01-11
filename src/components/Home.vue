<template lang="html">
  <div class="content">
    <h1 class="title">{{ caption }}</h1>
    <img src="../assets/logo.png">
    <article>
      <h2>Races</h2>
      <ol>
        <li v-for="(race, index) in races" :key="index">{{ race.name }} <span v-if="race.description">({{ race.description }})</span> - {{ race.origin }}</li>
      </ol>
      <footer>
        <button type="button" name="load-webpack" @click="loadWebpack">Load (Webpack)</button>
        <button type="button" name="load-axios" @click="loadAxios">Load (Axios)</button>
      </footer>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

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
    loadWebpack (e) {
      var start = new Date()

      // установить babel-plugin-dynamic-import-webpack для import()
      import(/* webpackMode: "lazy", webpackChunkName: "races" */ '@/json/races.json')
        .then(races => {
          console.log(new Date() - start)

          this.races = [...races]
        })
        .catch(error => {
          console.dir(error)
        })
    },
    loadAxios (e) {
      var start = new Date()

      axios.get('public/json/races.json')
        .then(response => {
          console.log(new Date() - start)

          this.races = [...response.data]
        })
        .catch(error => {
          console.dir(error);
        });
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
li {
  color: orange;
}
</style>
