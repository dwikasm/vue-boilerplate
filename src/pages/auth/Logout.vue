<template>
  <div id="logout">
    Logging out
  </div>
</template>

<script>
export default {
  name: 'logout',
  created() {
    localStorage.removeItem('access_token');
    this.$router.push({ name: 'login' });
  },
};
</script>
