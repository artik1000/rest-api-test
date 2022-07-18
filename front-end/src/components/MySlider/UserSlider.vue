<template>
    <div v-if="this.users.length > 0">
    <section class="users__wrapper">
        <user-item
                v-for="user in users.slice(pageFirst,pageLast)"
                :key="user.id"
                :user="user"
                :buttonEnable="buttonEnable"
        />
    </section>
    <div class="pagination__wrapper">
        <user-pagination
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                :class="{'pagination__active': page === pageNumber}"
                @click="changePage(pageNumber)"
        >
            {{pageNumber}}
        </user-pagination>
    </div>
    </div>
    <div style="text-align: center" v-else>
        <h1>Пользователей нет</h1>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import UserItem from '@/components/MySlider/UserItem'
import UserPagination from '@/components/MySlider/UserPagination'
export default {
  name: 'user-slider',
  components: {
    UserPagination,
    UserItem
  },
  props: {
    users: {
      type: Array,
      required: {
        type: Boolean,
        default: true
      }
    },
    buttonEnable: Boolean,
    usersOnPage: Number
  },
  data () {
    return {
      page: 1,
      pageFirst: 0,
      pageLast: 5
    }
  },
  methods: {
    ...mapMutations({
      setUsers: 'TestModule/setUsers',
      setSlidesPerPage: 'TestModule/setSlidesPerPage'
    }),
    ...mapActions({
      fetchUsers: 'TestModule/fetchUsers'
    }),
    changePage (pageNumber) {
      this.page = pageNumber
      this.pageFirst = this.slidesPerPage * this.page - this.slidesPerPage
      this.pageLast = this.slidesPerPage * this.page
    }
  },
  computed: {
    ...mapState({
      selectedSort: state => state.TestModule.selectedSort,
      totalPages: state => state.TestModule.totalPages,
      slidesPerPage: state => state.TestModule.slidesPerPage
    }),
    ...mapGetters({
    })
  },
  mounted () {
    this.fetchUsers()
  },
  beforeMount () {
    const slidesOnPage = this.usersOnPage
    this.setSlidesPerPage(slidesOnPage)
  }
}
</script>
<style lang="sass" scoped>
.users__wrapper
   display: flex
   flex-direction: row
   gap: 1vw
   width: 100%
.pagination__wrapper
    display: flex
    flex-direction: row
    justify-content: center
    margin-top: 16px
    gap: 5px
.pagination__active
    color: blue !important
    background: white !important
    border: 2px solid blue !important
@media screen and (max-width: 1024px)
 .users__wrapper
    display: flex
    flex-direction: column
</style>
