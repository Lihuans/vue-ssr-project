<template>
    <div>
      <!--<el-container>-->
        <!--<el-header style="background-color: #b3c0d1;text-align: left;line-height: 60px;">-->
          <!--<h2>欢欢的系统-->
            <!--&lt;!&ndash;{{$store.state.data.info}}&ndash;&gt;-->
          <!--</h2>-->
        <!--</el-header>-->
        <!--<el-container>-->
          <!--<el-aside width="250px">-->
              <!--<el-menu-->
                <!--default-active="2"-->
                <!--class="el-menu-vertical-demo"-->
                <!--@open="handleOpen"-->
                <!--@close="handleClose"-->
                <!--background-color="#545c64"-->
                <!--text-color="#fff"-->
                <!--active-text-color="#ffd04b">-->
                <!--<el-submenu index="1">-->
                  <!--<template slot="title">-->
                    <!--<i class="el-icon-location"></i>-->
                    <!--<span>导航一</span>-->
                  <!--</template>-->
                  <!--<el-menu-item-group>-->
                    <!--<template slot="title">分组一</template>-->
                    <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                    <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                  <!--</el-menu-item-group>-->
                  <!--<el-menu-item-group title="分组2">-->
                    <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                  <!--</el-menu-item-group>-->
                  <!--<el-submenu index="1-4">-->
                    <!--<template slot="title">选项4</template>-->
                    <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                  <!--</el-submenu>-->
                <!--</el-submenu>-->
                <!--<el-menu-item index="2">-->
                  <!--<i class="el-icon-menu"></i>-->
                  <!--<span slot="title">导航二</span>-->
                <!--</el-menu-item>-->
                <!--<el-menu-item index="3" disabled>-->
                  <!--<i class="el-icon-document"></i>-->
                  <!--<span slot="title">导航三</span>-->
                <!--</el-menu-item>-->
                <!--<el-menu-item index="4">-->
                  <!--<i class="el-icon-setting"></i>-->
                  <!--<span slot="title">导航四</span>-->
                <!--</el-menu-item>-->
              <!--</el-menu>-->
          <!--</el-aside>-->
          <!--<el-main>-->
            <!--<el-table-->
              <!--:data="$store.state.data.info || []"-->
              <!--stripe-->
              <!--style="width: 100%">-->
              <!--<el-table-column-->
                <!--prop="pos_id"-->
                <!--label="广告id"-->
                <!--width="180">-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--prop="pos_name"-->
                <!--label="广告名"-->
                <!--width="180">-->
              <!--</el-table-column>-->
              <!--<el-table-column-->
                <!--prop="ad_port"-->
                <!--label="端口">-->
              <!--</el-table-column>-->
            <!--</el-table>-->
          <!--</el-main>-->
        <!--</el-container>-->
        <!--<el-footer></el-footer>-->
      <!--</el-container>-->
      <table>
        <thead>
          <tr>
            <th>11</th>
            <th>22</th>
            <th>33</th>
          </tr>
        </thead>
        <tbody>
          <!--<tr v-for="item in $store.state.data.info || []">-->
            <!--<td>{{item.pos_id}}</td>-->
            <!--<td>{{item.pos_name}}</td>-->
            <!--<td>{{item.ad_port}}</td>-->
          <!--</tr>-->
        </tbody>
      </table>
      <!--<div>-->
        <!--{{$store.state}}-->
      <!--</div>-->
    </div>
</template>

<script>
    // import api from '../client/model/client-model'
    import { mapState, mapActions } from 'vuex'
    import api from 'model'
    export default {
      name: "index",
      asyncData({ store, context }) {
        // return api.getAdPos({
        //   p: 1
        // }).then(res => {
        //   console.log('resresres============',res);
        //   return res.msg
        // })
        // return store.dispatch('getPos', {p: 1, ad_session: context.ad_session})
      },
      data() {
        return {
          tableData: []
        }
      },
      computed: {
        ...mapState(['data']),
        // tableDatas () {
        //
        //   return this.data[0].info
        // }
      },
      mounted () {
        // api.getAdPos({
        //   p: 1
        // }).then(res => {
        //   console.log('resresres============',res);
        //   // return res.msg
        //   this.tableData = res.msg
        // })

        console.log(this.$store.state);
        // this.tableData = this.data.info
        // console.log(this.$store.state.data);
        // this.tableData = this.$store.state.data[0].info
      },
      methods: {
        // ...mapState('[data]'),
        // ...mapActions(['getPos']),
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
       }
    }
</script>

<style scoped>

</style>
