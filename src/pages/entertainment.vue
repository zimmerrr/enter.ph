<template>
  <q-page
    class="flex flex-center items-stretch"
  >
    <div>
      <generic-header
        :image="Image"
        red-text="tain"
        white-text="ment"
        :description="description"
      />
    </div>

    <div class="bg-white full-width seperator q-my-xl" />
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GenericHeader from 'src/components/GenericHeader.vue'
import Image from 'src/assets/home/computer.png'

const description = ref('deducated to showcasing the stories and talents of local apparel workers in the Philippines. Discover their craft, learn about their impact, and support the heart of the Philippine fasion industry.')
</script>

<style scoped lang="sass">

</style>
