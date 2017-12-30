<template>
  <main class="section">
    <div class="container">
      <router-view name="header"></router-view>
      <router-view name="main"></router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
