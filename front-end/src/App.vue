<template>
  <nav class="main__nav">
    <router-link to="/">Users</router-link>
    <router-link to="/adduser">AddUser</router-link>
  </nav>
  <router-view/>
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  width: 100vw
  margin: 0
  padding: 0

.main__nav
  padding: 24px
  display: flex
  gap: 16px
  a
    font-weight: bold
    color: #2c3e50
    text-decoration: none
    &.router-link-exact-active
      color: blue

.page__description
  color: blue
  margin: 0
</style>
