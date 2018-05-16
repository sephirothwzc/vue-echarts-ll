<template>
  <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="toDrawer" enable-resize-watcher fixed app>
    <div class="pa-3 text-xs-center">
      <div class="display-2 py-4">
        {{$t('appTitle')}}
      </div>
      <div style="padding-left:5em">
        <v-switch @change="changeDark" :label="(!dark ? $t('light'): $t('dark'))" v-model="dark" hide-details></v-switch>
      </div>
    </div>
    <hr class="divider">
    <v-list>
      <v-list-tile value="true" v-for="(item, i) in items" :key="i">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="" scoped>

</style>

<script>
  /**
   * 侧边栏导航
   */
  export default {
    props: {
      miniVariant: {
        type: Boolean,
        required: true
      },
      clipped: {
        type: Boolean,
        required: true
      },
      drawer: {
        type: Boolean,
        required: true
      }
    },
    //   props: ['miniVariant', 'clipped', 'drawer'],
    /**
     * @description
     * @returns {any}
     */
    data() {
      return {
        /**
         * 样式控制
         */
        dark: false,
        toDrawer: true,
        items: [{
          icon: 'bubble_chart',
          title: '系统设置'
        }]
      }
    },
    methods: {
      /**
       * @description 切换主题
       */
      changeDark() {
        this.$emit('changeDark', this.dark)
      },
      /**
       * @description 切换导航隐藏
       */
      changeDrawer() {
        this.$emit('changeDrawer', this.toDrawer)
      }
    },
    watch: {
      /**
       * @description
       * @param {any} val
       * @param {any} oldval
       */
      toDrawer(val, oldval) {
        this.changeDrawer()
      },
      /**
       * @description
       * @param {any} val
       * @param {any} oldval
       */
      drawer(val, oldval) {
        this.toDrawer = val
      }
    }
  }
</script>