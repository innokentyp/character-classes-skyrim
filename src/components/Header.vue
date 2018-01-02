<template lang="html">
  <header>
    <nav class="navbar is-light is-fixed-top has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbar-menu-id">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbar-menu-id" class="navbar-menu">
        <div class="navbar-start">
          <router-link :class="['navbar-item', { 'is-active': $route.name == 'home' }]" :to="{ name: 'home' }">Home</router-link>
          <router-link :class="['navbar-item', { 'is-active': $route.name == 'chat' }]" :to="{ name: 'chat' }">Chat</router-link>
          <router-link :class="['navbar-item', { 'is-active': $route.name == 'about' }]" :to="{ name: 'about' }">About</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app-header',
  computed: {
    ...mapGetters([ 'caption' ])
  },
  mounted () {
    console.log(this.$route)
    
    // Bulma navbar script

    document.addEventListener('DOMContentLoaded', function () {
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });

    //
  }
}
</script>

<style lang="scss" scoped>

</style>
