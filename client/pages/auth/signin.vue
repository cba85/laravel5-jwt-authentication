<template>
<section>
  <div class="container">
    {{ errors }}
    <br>
    <h1  class="title is-1 has-text-centered">Signin</h1>
  <div class="columns">
  <div class="column is-half is-offset-one-quarter ">
    <form action="#" @submit.prevent="submit">
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" :class="{ 'is-danger': errors.email }" type="email" value="" v-model="form.email">
      <p class="help is-danger" v-if="errors.email">{{ errors.email[0] }}</p>
    </div>
  </div>
  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input class="input" type="password" :class="{ 'is-danger': errors.password }" value="" v-model="form.password">
      <p class="help is-danger" v-if="errors.password">{{ errors.password[0] }}</p>
    </div>
  </div>

  <div class="field">
    <div class="control">
      <button class="button is-link">Signin</button>
    </div>
  </div>
  </form>
    </div>
    </div>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: [
      'guest'
    ],
    data() {
      return {
        form: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      async submit() {
        console.log('ok');

        await this.$auth.login({
          data: this.form
        });

        this.$router.push({
          path: this.$route.query.redirect || '/'
        });
      }
    }
  }
</script>
