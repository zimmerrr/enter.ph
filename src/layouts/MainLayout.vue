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
const bgHeader = route.meta.bgHeader
console.log(bgHeader)
</script>

<style lang="sass">
.q-layout
  background-color: black

.home
  background-image: url('assets/home/bg.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.apparel
  background-image: url('assets/apparel/bg.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.justice
  background-image: url('assets/justice/bg.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.entertainment
  background-image: url('assets/entertainment/bg.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

.about
  background-image: url('assets/about/bg.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

</style>
