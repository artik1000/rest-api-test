<template>
  <main class="home">
   <h1 class="page__description">Users Page</h1>
      <my-sort-group/>
      <user-slider
              :users="sortByCity"
              :buttonEnable="false"
              :usersOnPage="5"
      />
  </main>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import UserSlider from '@/components/MySlider/UserSlider'
import MySortGroup from '@/components/MySortGroup'
export default {
  name: 'HomeView',
  components: {
    UserSlider,
    MySortGroup
  },
  computed: {
    ...mapState({
      users: state => state.TestModule.users
    }),
    ...mapGetters({
      sortByCity: 'TestModule/sortByCity'
    })
  }
}
</script>
<style lang="sass" scoped>
.home
    padding: 24px 24px 24px 10px
    display: flex
    flex-direction: column
</style>
