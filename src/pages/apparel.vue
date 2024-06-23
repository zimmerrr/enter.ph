<template>
  <q-page
    class="flex flex-center items-stretch"
  >
    <div>
      <generic-header
        :image-src="HEADER[1].image"
        red-text="apparel"
        white-text="work"
        :description="HEADER[1].description"
      />
    </div>

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-article
      :image-src="ARTICLE[1].image"
      :title="ARTICLE[1].title"
      :description1="ARTICLE[1].description1"
      :description2="ARTICLE[1].description2"
      :description3="ARTICLE[1].description3"
      :description4="ARTICLE[1].description4"
    />

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-video
      :title="VIDEO[1].title"
      :description="VIDEO[1].description"
      :video-src="VIDEO[1].video"
      volume="0.2"
    />

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-infographics
      :description="INFOGRAPHICS[1].description"
      :image-src="INFOGRAPHICS[1].image"
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
import { HEADER, ARTICLE, VIDEO, INFOGRAPHICS } from 'src/components/constants'

const description = ref('Dedicated to showcasing the stories and talents of local apparel workers in the Philippines. Discover their craft, learn about their impact, and support the heart of the Philippine fashion industry.')

</script>

<style scoped lang="sass">

</style>
