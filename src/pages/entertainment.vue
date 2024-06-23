<template>
  <q-page
    class="flex flex-center items-stretch"
  >
    <generic-header
      :image-src="HEADER[0].image"
      red-text="tain"
      white-text="ment"
      :description="description"
    />

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-article
      :image-src="ARTICLE[0].image"
      :title="ARTICLE[0].title"
      :description1="ARTICLE[0].description1"
      :description2="ARTICLE[0].description2"
      :description3="ARTICLE[0].description3"
      :description4="ARTICLE[0].description4"
    />

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-video
      :title="VIDEO[0].title"
      :description="VIDEO[0].description"
      :video-src="VIDEO[0].video"
      volume="0.2"
    />

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-infographics
      :description="INFOGRAPHICS[0].description"
      :image-src="INFOGRAPHICS[0].image"
    />
    <div class="bg-white full-width seperator q-my-xl" />
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GenericHeader from 'src/components/GenericHeader.vue'
import GenericArticle from 'src/components/GenericArticle.vue'
import GenericVideo from 'src/components/GenericVideo.vue'
import GenericInfographics from 'src/components/GenericInfographics.vue'
import { HEADER, ARTICLE, INFOGRAPHICS, VIDEO } from 'src/components/constants'

const description = ref('deducated to showcasing the stories and talents of local apparel workers in the Philippines. Discover their craft, learn about their impact, and support the heart of the Philippine fasion industry.')

</script>

<style scoped lang="sass">

</style>
