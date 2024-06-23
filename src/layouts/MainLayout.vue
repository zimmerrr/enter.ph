<template>
  <q-layout
    v-if="$q.screen.width > $q.screen.height"
    view="lHh Lpr lff"
    :class="route.meta.bgHeader ? route.meta.bgHeader : `` "
  >
    <Navigation />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
  <q-layout v-else>
    <div class="text-center">
      <q-img
        src="~assets/logo.png"
        no-spinner
        class="logo"
        flat
      >
        <div class="text-h5 font-weight-bolder absolute-bottom">
          Webpage only available in landscape.
        </div>
      </q-img>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import Navigation from 'src/components/Navigation.vue'
import Footer from 'src/components/Footer.vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'MainLayout',
})

const route = useRoute()

</script>

<style lang="sass">
.q-layout
  background-color: black

.home
  background-image: url('assets/bg/home.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.apparel
  background-image: url('assets/bg/apparel.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.justice
  background-image: url('assets/bg/justice.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.entertainment
  background-image: url('assets/bg/entertainment.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.about
  background-image: url('assets/bg/about.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

</style>
