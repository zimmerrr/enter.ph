<template>
  <q-layout
    view="lhh Lpr lff"
    :class="route.meta.bgHeader ? route.meta.bgHeader : `` "
  >
    <Navigation />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
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
