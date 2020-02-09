<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <nuxt-link class="navbar-item" :to="{ name: 'index' }">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </nuxt-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div class="navbar-end">

      <template v-if="!authenticated">
        <div class="navbar-item">
          <div class="buttons">
             <nuxt-link :to="{ name: 'auth-signup' }" class="button is-primary">
              Sign up
            </nuxt-link>
            <nuxt-link :to="{ name: 'auth-signin' }" class="button is-light">
              Sign in
            </nuxt-link>
          </div>
        </div>
      </template>

      <template v-if="authenticated">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            {{ user.name }}
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click.prevent="logout">
              Logout
            </a>
          </div>
          </div>
        </template>
    </div>
  </div>
</nav>
</template>

<script>
/*
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      loggedIn: 'auth/authenticated'
    })
  }
}
*/

/*
export default {
  computed: {
    loggedIn () {
      return this.$auth.state.loggedIn;
    }
  }
}
*/

export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>
