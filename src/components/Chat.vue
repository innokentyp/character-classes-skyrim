<template lang="html">
  <div class="content">
    <h1 class="title">{{ caption }}</h1>
    <article>
      <h2>Chat</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet lobortis auctor. Quisque ex ante, maximus luctus felis eu, lacinia suscipit neque. Praesent a tellus pellentesque, posuere est at, facilisis libero. Donec tempor mauris arcu, eget ultrices risus semper ut. Pellentesque ut turpis vel augue convallis ultricies vel fringilla sem. Duis scelerisque varius mattis. Nulla quis magna eget odio volutpat ultricies. Etiam mauris nulla, blandit vitae blandit eget, maximus in  ipsum. Quisque congue condimentum est interdum laoreet. Vestibulum gravida congue accumsan. Mauris magna velit, sodales id justo at, ullamcorper venenatis tellus. Pellentesque imperdiet sit amet tortor ac porta. Morbi sit amet velit at mi vestibulum varius quis tempor massa. Vestibulum cursus dapibus sapien, ac tincidunt lacus vestibulum vitae. Maecenas accumsan faucibus ex condimentum scelerisque. Mauris efficitur commodo ultrices.
      </p>
    </article>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'chat',
  computed: {
    test () {
      return 'Test'
    },
    ...mapGetters([ 'caption' ])
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>

</style>
