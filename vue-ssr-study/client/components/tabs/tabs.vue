<script>
  import tabContent from './tab-content'
    export default {
      name: "Tabs",
      components: { tabContent },
      props: {
        value: {
          type: [String, Number],
          required: true
        }
      },
      data() {
        return {
          panes: []
        }
      },
      render() {
        return (
          <div class='tabs'>
            <ul class='tabs-header' >
              {this.$slots.default}
            </ul>
            <tab-content panes={this.panes}></tab-content>
          </div>
        )
      },
      methods: {
        onChange(index) {
          this.$emit('change', index)
        }
      }

    }
</script>

<style lang="stylus" scoped>
.tabs-header
  display flex
  list-style none
  margin 0
  padding 0
  border-bottom 2px solid #ededed
</style>
