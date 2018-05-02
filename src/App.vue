<template>
  <v-app :dark="dark">
    <AppNavigation :mini-variant="miniVariant" :clipped="clipped" :drawer="drawer" v-on:changeDark="changeDark" v-on:changeDrawer="changeDrawer"></AppNavigation>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <!-- <v-toolbar-title v-text="$t('appTitle')"></v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- 多语言 -->
      <v-menu offset-y>
        <!-- <v-toolbar-title slot="activator"> -->
        <v-btn slot="activator" icon>
          <v-icon>language</v-icon>
        </v-btn>
        <!-- <span>{{$t('i18n')}}</span> -->
        <!-- </v-toolbar-title> -->
        <v-list>
          <v-list-tile v-for="(item,i) in i18nData" :key="i" @click="changeLocale(item.value)">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- 多语言end -->
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
/**
 * write a component's description
 */
import localeList from '@/i18n/localeList'
import AppNavigation from '@/components/layout/AppNavigation'
export default {
  components: {
    AppNavigation
  },
  /**
   * @description
   * @returns {any}
   */
  data() {
    return {
      dark: false,
      i18nData: localeList.language,
      clipped: false,
      drawer: true,
      fixed: false,
      right: true,
      rightDrawer: false,
      miniVariant: false
    }
  },
  name: 'App',
  methods: {
    /**
     * @description 更改多语言设置
     * @param {String} locale
     */
    changeLocale(locale) {
      this.$i18n.locale = locale
    },
    /**
     * @description
     * @param {Boolean} valDark
     */
    changeDark(valDark) {
      this.dark = valDark
    },
    /**
     * @description
     * @param {Boolean} valDrawer
     */
    changeDrawer(valDrawer) {
      this.drawer = valDrawer
    }
  }
}
</script>
