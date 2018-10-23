<template>
  <div>
    <v-head></v-head>
    <h1>我是 Foo</h1>
    <button @click="notifyTip">click me</button>
    <!--<div>-->
      <!--<span>page1</span>-->
      <!--<span>page2</span>-->
      <!--<span>page3</span>-->
    <!--</div>-->
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
    <!--<div class="tabs-wrap">-->
      <!--<tabs :value="index" @change="changeActive">-->
        <!--<tab label="tab1" index="0">-->
          <!--<span>tab content1</span>-->
        <!--</tab>-->
        <!--<tab index="1">-->
          <!--<span slot="label">tab2</span>-->
          <!--<span>tab content2</span>-->
        <!--</tab>-->
        <!--<tab label="tab3" index="2">-->
          <!--<span>tab content3</span>-->
        <!--</tab>-->
      <!--</tabs>-->
    <!--</div>-->
    <!--<div class="tab-content"></div>-->

    <!--<notification content="test notification"></notification>-->
  </div>
</template>

<script>
  import VHead from './header'
    export default {
      name: "foo",
      metaInfo: {
        title: 'Foo'
      },
      components: {
        VHead
      },
      // asyncData ({ store, router }) {
      //   if(store.state.user) {
      //     return store.dispatch('')
      //   }
      // },
      data() {
        return {
          index: "0",
          paramData: {
          p: 1,
          act: '',
          kd: '',
          sub: '',
          zw: '',
          cs: '',
          ts: '',
          ys: '',
          rt: '',
          xl: '',
          by: '',
          xb: '',
          xx: '',
          px: '',
          ms: '',
          yq: '',
          tag: '',
        }
        }
      },
      created () {
        // this.$axios.getList(this.paramData).then(res => {
        //   console.log(res);
        // })
      },
      methods: {
        notifyTip() {
          this.$notify({
            content: 'tip show',
            btn: 'close'
          })
        },
        changeActive(index) {
          this.index = index
        }
      }
    }
</script>

<style lang="stylus" scoped>
.tabs-wrap
  width 300px
  margin 30px auto 0
  background-color #fff
  padding 0 15px
.tab-content
  width 300px
  height 250px
  margin auto
  padding 0 15px
  background-color #fff
</style>
