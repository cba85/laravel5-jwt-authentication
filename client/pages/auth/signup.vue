<template>
  <section>
  <div class="container">
    {{ errors }}
    <br>
    <h1  class="title is-1 has-text-centered">Signup</h1>
  <div class="columns">
  <div class="column is-half is-offset-one-quarter ">
    <form action="#" @submit.prevent="submit">
      <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" :class="{ 'is-danger': errors.name }" type="text" value="" v-model="form.name">
      <p class="help is-danger" v-if="errors.name">{{ errors.name[0] }}</p>
    </div>
  </div>
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
      <button class="button is-link">Signup</button>
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

  data () {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    async submit () {
      await this.$axios.post ('register', this.form)

      await this.$auth.login({
        //data: this.form
        data: {
          email: this.form.email,
          password: this.form.password
        }
      })

      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>
