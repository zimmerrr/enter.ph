<template>
  <q-page
    class="flex flex-center items-stretch"
  >
    <generic-header
      :image="Image"
      red-text="tain"
      white-text="ment"
      :description="description"
    />

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-video
      :title="VIDEO[0].title"
      :description="VIDEO[0].description"
      :video-src="VIDEO[0].video"
    />

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-infographics
      :description="INFOGRAPHICS[0].description"
      :imageSrc="INFOGRAPHICS[0].image"
    />
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GenericHeader from 'src/components/GenericHeader.vue'
import GenericVideo from 'src/components/GenericVideo.vue'
import GenericInfographics from 'src/components/GenericInfographics.vue'
import { INFOGRAPHICS, VIDEO } from 'src/components/constants'
import Image from 'src/assets/home/computer.png'

const description = ref('deducated to showcasing the stories and talents of local apparel workers in the Philippines. Discover their craft, learn about their impact, and support the heart of the Philippine fasion industry.')

</script>

<style scoped lang="sass">

</style>
