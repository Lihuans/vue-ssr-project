<template>
  <div>
    <h1>我是 Bar</h1>
    <ul class="city-list">
      <li v-for="item in cities">{{item.label}}
        <div>
          <span v-for="it in item.children"> {{it.label}} </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: "bar",
    asyncData ({ store, router }) {
      // return store.dispatch('getCities')
      // return Promise.resolve()

    },
    computed: {
      cities () {
        return this.$store.state.cities
      }
    },
    created () {
      // if (this.cities && this.cities.length < 1) {
      //   this.getCities()
      // }
      // this.getCities()
    },
    methods: {
      ...mapActions(['getCities'])
    }
  }
</script>

<style scoped>
.city-list {
  text-align: left;
}
</style>
