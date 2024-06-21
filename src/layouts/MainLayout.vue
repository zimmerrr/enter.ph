<template>
  <q-layout view="lhh Lpr lFf">
    <navigation />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Navigation from 'src/components/Navigation.vue'

defineOptions({
  name: 'MainLayout',
})

</script>

<style lang="sass">
.q-layout
  background-color: black
  background-image: url('assets/home/bg-home.png') !important
  background-repeat: no-repeat !important
  background-position: 100% 0% !important

</style>
