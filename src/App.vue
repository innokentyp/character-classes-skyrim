<template>
  <div>
    <app-header></app-header>
    <main class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  }
}
</script>

<style lang="scss" scoped>

</style>
