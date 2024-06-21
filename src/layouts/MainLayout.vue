<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <navigation />
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
  background-color: #000000
</style>
