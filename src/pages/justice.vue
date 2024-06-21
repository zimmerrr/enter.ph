<template>
  <q-page
    class="flex flex-center items-stretch"
  >
    <div>
      <generic-header
        :image="Image"
        red-text="justice"
        white-text="ad"
        flip
      />
    </div>

    <div class="bg-white full-width seperator q-my-xl" />
  </q-page>
</template>

<script lang="ts" setup>
import GenericHeader from 'src/components/GenericHeader.vue'
import Image from 'src/assets/home/justice.png'
</script>

<style scoped lang="sass">

</style>
