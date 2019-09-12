<template>
  <div id="login">
    <div class="login-wrapper">
      <h1>Vue Boilerplate {{ environment }}</h1>
      <div class="login-box">
        <form action="#" @submit.prevent="login">
          <div class="login-box__error"
            v-if="isError">
            Username atau password anda salah.
          </div>
          <div class="login-box__username">
            <label for="username" class="login-box__label">Username</label>
            <input type="text"
              name="username"
              id="username"
              class="login-box__input"
              v-model="username"
              @input="isError = false">
          </div>
          <div class="login-box__password">
            <label for="password" class="login-box__label">Password</label>
            <input type="password"
              name="password"
              id="password"
              class="login-box__input"
              v-model="password"
              @input="isError = false">
          </div>
          <div class="login-box__submit">
            <button type="submit" class="login-box__button">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: null,
      password: null,
      isError: false,
      environment: process.env.NODE_ENV
    }
  },
  methods: {
    login() {
      if (this.username == 'admin' && this.password == 'admin123') {
        localStorage.setItem('access_token', 'token');
        this.$router.push({ name: 'home' });
      } else {
        this.isError = true;
      }
      // this.$store.dispatch('retrieveToken', {
      //     username: this.username,
      //     password: this.password
      //   })
      //   .then(response => {
      //     console.log(response)
      //     this.$router.push({ name: 'bookingList' })
      //   })
      //   .catch(() => {
      //     this.isError = true;
      //   })
    }
  }
}
</script>
