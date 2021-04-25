<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
</template>

<style scoped lang="scss">

nav {
  display: flex;
  background: #42b983;
  padding: 10px 30px;

  a {
    font-weight: bold;
    color: white;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
