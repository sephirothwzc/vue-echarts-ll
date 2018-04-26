<template>
  <v-app :dark="dark">
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      
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
      <!-- 样式 -->
      <!-- <v-container>
        <v-switch :label="(!dark ? $t('light'): $t('dark'))" v-model="dark"></v-switch>
      </v-container> -->
      <!-- 样式end -->
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
import localeList from '@/i18n/localeList'

export default {
  data() {
    return {
      /**
       * 样式控制
       */
      dark: false,
      i18nData: localeList.language,
      clipped: false,
      drawer: true,
      fixed: false,
      right: true,
      rightDrawer: false,
      miniVariant: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Inspire'
        }
      ]
    }
  },
  name: 'App',
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
