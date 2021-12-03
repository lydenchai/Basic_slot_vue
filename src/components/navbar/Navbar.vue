<template>
  <nav>
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background: #000;
    padding: 1rem 0.8rem;
}
nav a {
    color: #fff;
    margin-left: 10px;
    text-decoration: none;
    padding: 1rem;
    text-transform: uppercase;
}
.router-link-active {
    background: red;
}
</style>